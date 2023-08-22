<template>
  <h2>Counter</h2>
  <p>{{ counter }}<sup>2</sup>= {{ squareCounter }}</p>

  <div>
    <button>+1</button>
    <button>-1</button>
  </div>
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

<style scope>
button {
  background-color: #64bb87;
  border-radius: 5px;
  margin: 0 5px;
  color: white;
}
</style>
