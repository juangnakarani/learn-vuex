<template>
  <div class="component">
    <h3>This is EditMessage Component</h3>
    <input type="text" v-model="msg" @keyup='changeMsg'>
  </div>
</template>
<script>
export default {
  name: 'show',
  computed: {
    msg: function (){
      return this.$store.getters.getMessage
    }
  },
  methods:{
    changeMsg: function (event) {
      this.$store.commit('changePesan', event.target.value)
    }
  }
}
</script>