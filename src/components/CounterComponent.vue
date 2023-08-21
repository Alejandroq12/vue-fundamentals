<template>
  <h2>Counter</h2>
  <p>{{ counter }}<sup>2</sup>= {{ counter * counter }}</p>
</template>

<script>
export default {
  name: 'CounterComponent',
  data() {
    return {
      counter: 5,
    };
  },
};
</script>

<style></style>
