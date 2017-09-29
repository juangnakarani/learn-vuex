<template>
  <div class="component">
    <h3>This is ShowMessage Component</h3>
    <h1>{{ msg }}</h1>
  </div>
</template>
<script>
export default {
  name: 'edit',
  computed: {
    msg: function () {
      return this.$store.getters.getMessage
    }
  }
}
</script>
