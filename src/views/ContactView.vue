<template>
    <div class="contact">
      <h1>Contact Me</h1>
      <form @submit.prevent="submitForm">
        <div>
          <label for="name">Name:</label>
          <input v-model="name" id="name" type="text" required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input v-model="email" id="email" type="email" required />
        </div>
        <div>
          <label for="message">Message:</label>
          <textarea v-model="message" id="message" required></textarea>
        </div>
        <p>Once you submit it, the information will saved in your localstorage. And you sould see the information there even after you refresh the page. </p>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref, watch, onMounted } from 'vue';
  
  export default {
    name: 'ContactView',
    setup() {
      const name = ref('');
      const email = ref('');
      const message = ref('');
  
      const loadFormData = () => {
        const savedName = localStorage.getItem('name');
        const savedEmail = localStorage.getItem('email');
        const savedMessage = localStorage.getItem('message');
  
        if (savedName) name.value = savedName;
        if (savedEmail) email.value = savedEmail;
        if (savedMessage) message.value = savedMessage;
      };
  
      const submitForm = () => {
        alert(`Name: ${name.value}\nEmail: ${email.value}\nMessage: ${message.value}`);
        localStorage.setItem('name', name.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('message', message.value);
      };
  
      watch(name, (newValue) => {
        console.log(`Name changed to: ${newValue}`);
      });
  
      watch(email, (newValue) => {
        console.log(`Email changed to: ${newValue}`);
      });
  
      watch(message, (newValue) => {
        console.log(`Message changed to: ${newValue}`);
      });
  
      onMounted(() => {
        loadFormData();
      });
  
      return {
        name,
        email,
        message,
        submitForm,
      };
    },
  };
  </script>
  
  <style scoped>
  .contact {
    padding: 20px;
  }
  </style>