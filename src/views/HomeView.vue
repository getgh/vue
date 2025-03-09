<template>
  <div class="home">
    <h1>Welcome to My Personal Website</h1>
    <p v-if="showWelcomeMessage">Hello! I'm Abdul Kader. A web developer🤺.</p>
    <button @click="toggleWelcomeMessage">Toggle Welcome Message 📩</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'HomeView',
  setup() {
    const showWelcomeMessage = ref(true);

    const toggleWelcomeMessage = () => {
      showWelcomeMessage.value = !showWelcomeMessage.value;
    };

    return {
      showWelcomeMessage,
      toggleWelcomeMessage,
    };
  },
};
</script>

<style scoped>
.home {
  padding: 20px;
}
</style>