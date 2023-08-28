<template>
  <IndecisionComponent />
  <CounterComponent title="Entraron" />
  <CounterComponent title="Salieron" />
</template>

<script>
import CounterComponent from './components/CounterComponent.vue';
import IndecisionComponent from './components/IndecisionComponent.vue';

export default {
  name: 'App',
  components: {
    CounterComponent,
    IndecisionComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
