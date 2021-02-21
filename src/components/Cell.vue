<template>
  <div class="cell"
    v-bind:style="{top: `${cell.pos.top * 150}px`, left: `${cell.pos.left * 150}px`}"
    @click="$emit('clicked', cell)"
  >
    {{ cell.val }}
  </div>
</template>

<script>
export default {
  name: 'Cell',
  props: ['cell'],
};
</script>

<style>
.cell {
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 10px;
  border: 3px solid black;
  box-sizing: border-box;
  font-size: 50px;
  margin: 1px;
  background-color: mediumaquamarine;

  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;

  transition-duration: 0.5s;
}
.cell:hover,
.cell:active {
    background-color: white;
}
</style>
