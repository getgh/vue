<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
    <div class="counter-section">
      <p>Button Clicks: {{ counter }}</p>
      <button @click="incrementCounter">Click Me</button>
    </div>
    <div class="toggle-section">
      <button @click="toggleMessage">Toggle Message</button>
      <p v-show="showMessage">This is Toggle Message.</p>
    </div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { ref } from 'vue';
import './assets/styles.css';

export default {
  name: 'App',
  setup() {
    const counter = ref(0);
    const showMessage = ref(false);

    const incrementCounter = () => {
      counter.value++;
    };

    const toggleMessage = () => {
      showMessage.value = !showMessage.value;
    };

    return {
      counter,
      showMessage,
      incrementCounter,
      toggleMessage,
    };
  },
};
</script>