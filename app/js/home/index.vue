<template>
  <div class="home">
    <m-header></m-header>
    <h-slider></h-slider>
    <novice></novice>
    <borrow></borrow>
    <money></money>
    <product></product>
    <life></life>
    <m-footer></m-footer>
    <navbar></navbar>
  </div>
</template>

<script>
import MHeader from '../public/header'
import HSlider from './hslider'
import Novice from './novice'
import Borrow from './borrow'
import Money from './money'
import Product from './product'
import Life from './life'
import MFooter from '../public/footer'
import Navbar from '../public/navbar'

export default {
  components: {
    MHeader,
    HSlider,
    Novice,
    Borrow,
    Money,
    Product,
    Life,
    MFooter,
    Navbar
  }
}
</script>

<style lang="scss">

</style>

