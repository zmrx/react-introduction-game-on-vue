<template>
  <button class="square" @click="$emit('onClick', index)">{{ value }}</button>
</template>

<script>
export default {
  props: {
    index: {
      type: Number
    },
    value: {
      type: String,
      default: null
    }
  }
};
</script>
