<template>
  <div class="homePage">
    <h2>HomePage</h2>
    <CounterButton label="Homeページのカウント" :value="count" @countup="addCount" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import CounterButton from '../components/CounterButton.vue'
import { useRootStore } from '../store'

export default defineComponent({
  components: {
    CounterButton
  },
  setup() {
    const store = useRootStore()
    const count = computed(() => store.state.countHome)
    const addCount = () => store.dispatch('addCountHome')
    return {
      count,
      addCount
    }
  }
})
</script>
