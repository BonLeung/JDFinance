<template>
  <div>
    <m-header></m-header>
    <slider></slider>
    <daily></daily>
    <in></in>
    <more></more>
    <m-footer cname="mfooter"></m-footer>
    <navbar></navbar>
  </div>
</template>

<script>
import MHeader from '../public/header.vue'
import MFooter from '../public/footer'
import Navbar from '../public/navbar'
import Slider from './rslider'
import Daily from './daily'
import In from './in'
import More from './more'

export default {
  components: {
    MHeader,
    MFooter,
    Navbar,
    Slider,
    Daily,
    In,
    More
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
