<template>
  <h2>Counter</h2>
  <p>{{ counter }}<sup>2</sup>= {{ squareCounter }}</p>
</template>

<script>
export default {
  name: 'CounterComponent',
  data() {
    return {
      counter: 5,
    };
  },
  methods: {
    getSquareValue() {
      return this.counter * this.counter;
    },
  },
  computed: {
    squareCounter() {
      return this.counter * this.counter;
    },
  },
};
</script>

<style></style>
