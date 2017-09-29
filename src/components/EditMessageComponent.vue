<template>
  <div class="component">
    <h3>This is EditMessage Component</h3>
    <input type="text" v-model="msg">
  </div>
</template>
<script>
export default {
  name: 'show',
  props: ['msg']
}
</script>