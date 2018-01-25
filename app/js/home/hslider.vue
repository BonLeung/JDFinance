<template>
  <div>
    <slider cname="slider" :items="items"></slider>
    <div class="list">
      <div class="item" v-for="(item, index) in enters" :key="index">
        <router-link :to="{name: item.href}">
          <img :src="item.src" :alt="item.title">
          <h4>{{item.title}}</h4>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from '../core/slider'
export default {
  data() {
    return {
      items: [{
        href: 'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t17602/243/285758549/36322/eb3b9b39/5a6895acN2bfa17de.jpg?width=750&height=320'
      }, {
        href: 'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t16129/64/1815893390/33070/11240d17/5a68958bNdc813adf.jpg?width=750&height=320'
      }, {
        href: 'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t14215/234/2031097130/36423/e0419331/5a689534N5ebcfe4c.jpg?width=750&height=320'
      }],
      enters: [{
        href: 'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
        title: '优惠券'
      }, {
        href: 'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132',
        title: '领红包'
      }, {
        href: 'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132',
        title: '抢钢镚'
      }, {
        href: 'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t4618/115/2179710654/11347/bf520df/58ec9d84Nfd169001.png?width=132&height=132',
        title: '领京豆'
      }, {
        href: 'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
        title: '白条提额'
      }]
    }
  },
  components: {
    Slider
  }
}
</script>

<style lang="scss" scope>
@import '~css/element.scss';

.slider {
  margin-top: 120px;
  img {
    width: 100%;
  }
}
.list {
  @include list(row);
  background: #fff;
  padding: 40px 0 20px 0;
  justify-content: space-around;
  a {
    text-decoration: none;
  }
  .item {
    text-align: center;
    img {
      display: inline-block;
      width: 90px;
      height: 90px;
    }
    h4 {
      margin-top: 12px;
      font-size: 26px;
      color: #666;
    }
  }
}
</style>
