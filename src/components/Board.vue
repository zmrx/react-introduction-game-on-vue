<template>
  <div>
    <div class="board-row">
      <Square @onClick="onClick" :index="0" :value="squares[0]" />
      <Square @onClick="onClick" :index="1" :value="squares[1]" />
      <Square @onClick="onClick" :index="2" :value="squares[2]" />
    </div>
    <div class="board-row">
      <Square @onClick="onClick" :index="3" :value="squares[3]" />
      <Square @onClick="onClick" :index="4" :value="squares[4]" />
      <Square @onClick="onClick" :index="5" :value="squares[5]" />
    </div>
    <div class="board-row">
      <Square @onClick="onClick" :index="6" :value="squares[6]" />
      <Square @onClick="onClick" :index="7" :value="squares[7]" />
      <Square @onClick="onClick" :index="8" :value="squares[8]" />
    </div>
  </div>
</template>

<script>
import Square from "./Square.vue";

export default {
  components: {
    Square
  },
  props: {
    squares: {
      type: Array
    }
  },
  methods: {
    onClick(i) {
      this.$emit("handle-click", i);
    }
  }
};
</script>
