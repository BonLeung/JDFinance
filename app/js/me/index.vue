<template>
  <div class="me">
    <me></me>
    <m-header></m-header>
    <m-footer></m-footer>
    <navbar></navbar>
  </div>
</template>

<script>
import MHeader from '../public/header'
import MFooter from '../public/footer'
import Navbar from '../public/navbar'
import Panel from '../core/panel'
import Me from './me'

export default {
  components: {
    MHeader,
    MFooter,
    Panel,
    Navbar,
    Me
  }
}
</script>

<style lang="scss" scoped>

</style>
