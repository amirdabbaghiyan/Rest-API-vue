<template>
  <Hero title="user" icon="icon-user"/>

  <Loading v-if="loading" />
  
  <div class="container container-sm">
    <Card
    v-if="!loading"
    pageTarget="edit-user"
    :cardId="user.id"
    :cardTitle="user.name"
    btnText="edit">
      <template v-slot:cardBody>
        <ul class="card-list">
          <li class="card-list-item">
            <span>Username:</span>
            {{user.username}}
          </li>
          <li class="card-list-item">
            <span>Email:</span>
            {{user.email}}
          </li>
          <li class="card-list-item">
            <span>Phone:</span>
            {{user.phone}}
          </li>
          <li class="card-list-item">
            <span>Website:</span>
            {{user.website}}
          </li>
        </ul>
      </template>

      <template v-slot:btnDelete>
        <button class="btn btn-delete" @click="clear">delete</button>
      </template>
    </Card>
  </div>
</template>

<script setup>
// components
import Hero from '@/parts/Hero.vue';
import Card from '@/components/Card.vue';
import Loading from '@/components/Loading.vue';

import axios from 'axios';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { urlUsers } from '@/server/api.js';
import Swal from 'sweetalert2';

const user = ref({});
const route = useRoute();
const loading = ref(true);

const fetchAPI = async () => {
  const response = await axios.get(`${urlUsers}/${route.params.id}`);
  user.value = response.data;
  loading.value = false;
};

fetchAPI();

const clear = () => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });
  swalWithBootstrapButtons.fire({
    title: "Are you sure to delete?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, cancel!",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });

      deleteUser();
    } else if (
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire({
        title: "Cancelled",
        text: "Your imaginary file is safe :)",
        icon: "error"
      });
    }
  });
}

const deleteUser= async () => {
  await axios.delete(`${urlUsers}/${user.value.id}`);
}
</script>