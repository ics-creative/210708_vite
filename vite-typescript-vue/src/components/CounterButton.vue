<template>
  <div class="counterButton">
    <span class="label">{{ label }}</span>
    <span class="value">{{ value }}</span>
    <button @click="countup">カウントアップ</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    label: {
      type: String,
      default: 'カウント：'
    },
    value: {
      type: Number,
      default: 0
    }
  },
  emits: ['countup'],
  setup(props, ctx) {
    const countup = () => {
      ctx.emit('countup')
    }

    return { countup }
  }
})
</script>

<style lang="scss" scoped>
.label {
  font-size: 16px;
  padding: 4px;
}
.value {
  font-size: 32px;
  padding: 0 16px 0 8px;
}
</style>
