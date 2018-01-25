<template>
  <div class="home">
    <m-header></m-header>
    <h-slider></h-slider>
    <novice></novice>
  </div>
</template>

<script>
import MHeader from '../public/header'
import HSlider from './hslider'
import Novice from './novice'

export default {
  components: {
    MHeader,
    HSlider,
    Novice
  }
}
</script>

<style lang="scss">

</style>

