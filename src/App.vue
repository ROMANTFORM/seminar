<template>
  <div id="app">
    <header-page></header-page>
    <router-view/>
  </div>
</template>

<script>
import HeaderPage from './components/HeaderPage.vue'

export default{
  components: {
    HeaderPage,
  },
}
</script>

<style lang="scss">

</style>

