<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
    <div class="counter-section">
      <p>Button Clicks: {{ counter }} </p>
      <h4>(🤖Notice: Button Clicks would track you button you click on the website.)</h4>
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
import { ref, onMounted } from 'vue';
import eventBus from './event-track';
import './assets/styles.css';

export default {
  name: 'App',
  setup() {
    const counter = ref(0);
    const showMessage = ref(false);
    function toggleMessage() {
      showMessage.value = !showMessage.value;
      eventBus.incrementCounter();
    }

    onMounted(() => {
      counter.value = eventBus.counter.value;
    });

    return {
      counter: eventBus.counter,
      showMessage,
      toggleMessage,
    };
  },
};
</script>