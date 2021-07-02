<template>
  <div class="aboutPage">
    <h2>AboutPage</h2>
    <CounterButton label="Aboutページのカウント" :value="count" @countup="addCount" />
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
    const count = computed(() => store.state.countAbout)
    const addCount = () => store.dispatch('addCountAbout')
    return {
      count,
      addCount
    }
  }
})
</script>
