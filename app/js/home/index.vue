<template>
  <div class="home">
    <m-header></m-header>
    <h-slider></h-slider>
    <novice></novice>
    <borrow></borrow>
    <money></money>
    <product></product>
  </div>
</template>

<script>
import MHeader from '../public/header'
import HSlider from './hslider'
import Novice from './novice'
import Borrow from './borrow'
import Money from './money'
import Product from './product'

export default {
  components: {
    MHeader,
    HSlider,
    Novice,
    Borrow,
    Money,
    Product
  }
}
</script>

<style lang="scss">

</style>

