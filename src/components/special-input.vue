
<template>
  <div class="special-input">
    <input v-bind="$attrs" v-on="$listeners">
  </div>
</template>

<script>
export default {
  name: 'special-input'
}
</script>

<style scoped>
.special-input {
  background-color: purple;
  padding: 1em;
}
</style>