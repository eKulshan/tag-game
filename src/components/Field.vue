<template>
  <div class="game">
    <div class="field">
      <Cell
        v-for="cell of field"
        :key="cell"
        v-bind:cell="cell"
        v-on:clicked="move"
      />
    </div>
    <div class="panel">
      <div class="win-info" v-if="isWin">
        Congrats! You won by {{ stepsCount }} steps! One more time?
      </div>
      <div class="control">
        <div class="counter">Steps: {{ stepsCount }}</div>
        <div class="restart" v-on:click="restart">Restart</div>
      </div>
      <div class="info">
          Tags is a mechanical puzzle. It ranks third in the world in popularity
          after puzzles and Rubik's cube. The classic version of the tags is a 4 x 4
          square board with 15 chips and one free cell. The goal of the game is to collect
          a row of numbers from 1 to 15 by moving the pieces along the field in a horizontal
          or vertical direction.
      </div>
    </div>
  </div>
</template>

<script>
import Cell from '@/components/Cell.vue';
import { createField, isAllowedMove, isWin } from '@/lib';

export default {
  name: 'Field',
  components: {
    Cell,
  },
  data: () => ({
    field: createField(),
    isWin: false,
    stepsCount: 0,
  }),
  methods: {
    move(cell) {
      const [emptyCell] = this.field.filter((item) => item.val === '');

      if (!isAllowedMove(cell, emptyCell)) {
        return;
      }

      const emptyCellIndex = this.field.findIndex((item) => item.val === emptyCell.val);
      const cellIndex = this.field.findIndex((item) => item.val === cell.val);
      const pos = { ...cell.pos };

      this.field[cellIndex].pos = { ...emptyCell.pos };
      this.field[emptyCellIndex].pos = { ...pos };
      this.incrementSteps();

      if (isWin(this.field)) {
        this.isWin = true;
      }
    },
    incrementSteps() {
      this.stepsCount += 1;
    },
    restart() {
      this.field = createField();
      this.stepsCount = 0;
      this.isWin = false;
    },
  },
};
</script>

<style scoped>
.win-info {
  width: 400px;

  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  text-align: center;
}
.control {
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-content: space-between;
}
.counter {
  width: 180px;
  height: 50px;
  border: 3px solid black;
  box-sizing: border-box;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
}
.restart {
  width: 180px;
  height: 50px;
  border: 3px solid black;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: mediumaquamarine;

  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
}
.restart:hover,
.restart:active {
    background-color: white;
}
.game {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: space-between;
}

.panel {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: space-around;
  width: 400px;
  font-size: 25px;
}

.field {
  position: relative;
  height: 600px;
  width: 600px;

  border: 3px solid black;
  border-radius: 10px;
  padding: 1px;
}
</style>
