<template>
  <panel title="每日签到" class="panel">
    <section class="content">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t3184/283/6032981290/37056/fa30c674/589bd5a2Nabdbbbd9.jpg?width=376&height=160" alt="">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t3298/196/6130416421/33755/a0536d3e/589bd5d4Nf32e7adc.jpg?width=374&height=160" alt="">
      <span>不抢白不抢</span>
    </section>
  </panel>
</template>

<script>
import Panel from '../core/panel'

export default {
  components: {
    Panel
  }
}
</script>


<style lang="scss" scoped>
@import '~css/element.scss';

.panel {
  @include panel;
  .content {
    @include flex(row);
    position: relative;
    padding-bottom: 40px;
    img {
      flex: 1;;
      height: 132px;
    }
    span {
      position: absolute;
      top: -112px;
      right: 20px;
      height: 112px;
      line-height: 112px;
      font-size: 28px;
      color: #999;
    }
  }
}
</style>
