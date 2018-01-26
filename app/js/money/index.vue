<template>
  <div>
    <m-header></m-header>
    <slider></slider>
    <ada></ada>
    <money></money>
    <adb></adb>
    <finance></finance>
    <adc></adc>
    <m-footer cname="mfooter"></m-footer>
    <navbar></navbar>
  </div>
</template>

<script>
import MHeader from '../public/header.vue'
import MFooter from '../public/footer'
import Navbar from '../public/navbar'
import Slider from './mslider'
import Ada from './ada'
import Adb from './adb'
import Money from './money'
import Finance from './finance'
import Adc from './adc'

export default {
  components: {
    MHeader,
    MFooter,
    Navbar,
    Slider,
    Ada,
    Adb,
    Adc,
    Money,
    Finance
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
