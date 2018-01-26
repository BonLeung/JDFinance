<template>
  <div class="slider">
    <panel class="panel">
      <section class="content">
        <swiper :options="options">
          <swiper-slide>签到领流量，1元500M！<em>></em></swiper-slide>
          <swiper-slide>百万白条券免费送，速来领取！！<em>></em></swiper-slide>
        </swiper>
      </section>
    </panel>
  </div>
</template>

<script>
import Panel from '../core/panel'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data() {
    return {
      options: {
        direction: 'vertical',
        autoplay: true,
        loop: true
      }
    }
  },
  components: {
    Panel,
    swiper,
    swiperSlide
  }
}
</script>

<style lang="scss" scoped>
@import '~css/element.scss';

.slider {
  margin-top: 120px;
  .panel {
    @include panel;
    .content {
      padding-left: 166px;
      height: 72px;
      line-height: 72px;
      overflow: hidden;
      background: url(//m.jr.jd.com/spe/qyy/main/images/scroll_title_img.png) left top no-repeat;
      background-size: 146px 100%;
      .swiper-container-vertical {
        height: 72px;
        .swiper-slide {
          position: relative;
          padding-right: 40px;
          height: 72px;
          font-size: 24px;
          color: #333;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          em {
            display: inline-block;
            width: 20px;
            height: 100%;
            position: absolute;
            right: 10px;
            top: 0;
            color: #ddd;
          }
        }
      }
    }
  }
}
</style>
