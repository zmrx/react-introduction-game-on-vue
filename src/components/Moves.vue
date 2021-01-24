<template>
  <ol>
    <li v-for="(move, index) in history" :key="index">
      <button @click="$emit('jumpTo', index)">
        {{ index ? `Перейти к ходу ${index}` : `К началу игры` }}
      </button>
    </li>
  </ol>
</template>

<script>
export default {
  props: {
    history: {
      type: Array,
      default: () => [],
    }
  }
}
</script>
