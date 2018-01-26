<template>
  <panel title="轮播图" :class="$style.panel">
    <section :class="$style.content">
      <slider :items="items" :cname="$style.slider"></slider>
    </section>
  </panel>
</template>

<script>
import Panel from '../core/panel'
import Slider from '../core/slider'

export default {
  data() {
    return {
      items: [{
        src: '//img12.360buyimg.com/jrpmobile/jfs/t11149/181/856008463/68797/dc303e9/59f97baeN3cdae084.jpg?width=750&height=400',
        href: 'home'
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t10405/120/2592801005/36022/d8f57852/59f97c14Nfb960073.png?width=750&height=400',
        href: 'home'
      }]
    }
  },
  components: {
    Panel,
    Slider
  }
}
</script>

<style lang="scss" module>
@import '~css/element.scss';

.panel {
  @include panel;
  > h4 {
    display: none;
  }
  .content {
    .slider {
      margin-top: 120px;
      img {
        width: 100%;
      }
    }
  }
}
</style>
