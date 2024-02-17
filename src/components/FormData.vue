<template>  
  <div class="container container-sm">
    <form class="card" @submit.prevent="sendEvent">
      <slot name="formFiles"></slot>

      <input type="submit" class="btn btn-primary">
    </form>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['update']);
function sendEvent() {
  emit('update');
}
</script>

<style>
input,
textarea {
  width: 100%;
  padding: 15px;
  background-color: #e6e6e6;
  border: unset;
  border-radius: 5px;
  outline: none;
  font: 15px / 1.5 'maven-medium';
}
input[type=submit] {
  margin-top: 30px;
}
.form-filed {
  display: flex;
  column-gap: 15px;
}
.form-filed label {
  min-width: 65px;
  padding-top: 12px;
  text-transform: capitalize;
}

/* Responsive */
@media (max-width:600px) {
  .form-filed {
    flex-direction: column;
    row-gap: 8px;
  }
  .form-filed label {
    padding-top: 8px;
  }
}
</style>