<template>
  <div>
    <m-header></m-header>
    <slider></slider>
    <welfare></welfare>
    <service></service>
    <m-footer></m-footer>
    <navbar></navbar>
  </div>
</template>

<script>
import MHeader from '../public/header.vue'
import MFooter from '../public/footer'
import Navbar from '../public/navbar'
import Slider from './islider'
import Welfare from './welfare'
import Service from './service'

export default {
  components: {
    MHeader,
    MFooter,
    Navbar,
    Slider,
    Welfare,
    Service
  }
}
</script>

<style lang="scss">
</style>
