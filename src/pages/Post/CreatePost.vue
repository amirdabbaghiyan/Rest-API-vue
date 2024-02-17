<template>
  <Hero title="create post" icon="icon-create-post"/>

  <div class="container container-sm">
    <form class="card" @submit.prevent="Card">
      <div class="form-filed">
        <label for="title">title:</label>
        <input id="title" type="text" v-model="post.title" required>
      </div>

      <div class="form-filed">
        <label for="body">body:</label>
        <textarea rows="6" id="body" v-model="post.body" required></textarea>
      </div>
      
      <input type="submit" class="btn btn-primary">
    </form>
  </div>
</template>

<script setup>
// components
import Hero from '@/parts/Hero.vue';

import axios from 'axios';
import { reactive } from 'vue';
import { urlPosts } from '@/server/api.js';
import Swal from 'sweetalert2';

const post = reactive({
  title: '',
  body: ''
});

const postAPI = async () => {
  const response = await axios.post(urlPosts,{
    title: post.title ,
    body: post.body
  });

  console.log(response);
};

function clearForm() {
  post.title = '';
  post.body = '';
}

function Card(){
  if (post.title !== '' && post.body  !== '') {
    clearForm();

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure to create?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, create it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire({
          title: "created!",
          text: "Your file has been created.",
          icon: "success"
        });

        postAPI();
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
}
</script>