import { ref } from 'vue';

const eventBus = {
  counter: ref(0),
  incrementCounter() {
    this.counter.value++;
  },
};

export default eventBus;