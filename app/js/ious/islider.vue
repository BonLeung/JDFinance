<template>
  <div class="slider">
    <panel class="panel">
      <section class="content">
        <slider :items="items"></slider>
      </section>
    </panel>
  </div>
</template>

<script>
import Slider from '../core/slider'
import Panel from '../core/panel'

export default {
  data() {
    return {
      items: [{
        src: '//img12.360buyimg.com/jrpmobile/jfs/t8491/303/504628479/60643/100648de/59a94358N92475fca.jpg?width=750&height=320',
        href: 'ious'
      }, {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t8437/321/1758527686/40952/f66d552f/59bf1f41N50d846f9.jpg?width=750&height=320',
        href: 'ious'
      }]
    }
  },
  components: {
    Slider,
    Panel
  }
}
</script>

<style lang="scss" scoped>
@import '~css/element.scss';

.slider {
  margin-top: 120px;
  .panel {
  @include panel;
  > h4 {
    display: none;
  }
  .content {
    img {
      width: 100%;
    }
  }
}
}
</style>
