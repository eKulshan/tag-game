<template>
  <div>
    <h1>Tag Game</h1>
    <h3>Move tags untill them sorted in order</h3>
  </div>
  <hr>
  <Field/>
</template>

<script>
import Field from '@/components/Field.vue';

export default {
  name: 'App',
  components: {
    Field,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: start;
  color: black;
  width: 1020px;
  margin: 0 auto;
}
</style>
