<template>
  <div>
    <m-header></m-header>
    <slider></slider>
    <m-footer cname="mfooter"></m-footer>
    <navbar></navbar>
  </div>
</template>

<script>
import MHeader from '../public/header.vue'
import MFooter from '../public/footer'
import Navbar from '../public/navbar'
import Slider from './rslider'

export default {
  components: {
    MHeader,
    MFooter,
    Navbar,
    Slider
  }
}
</script>

<style lang="scss">
.mfooter {
  margin-top: 0!important;
  ul {
    li:first-child {
      display: none;
    }
  }
}
</style>
