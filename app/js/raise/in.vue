<template>
  <panel title="In货推荐" class="panel">
    <section class="content">
      <div class="item" v-for="(item, index) in items" :key="index">
        <img :src="item.category" alt="">
        <section class="list">
          <div class="product-wrapper" v-for="(product, index) in item.products" :key="index">
            <div class="product">
              <img :src="product.img" alt="">
              <p class="name">{{product.name}}</p>
              <p class="price">
                <span class="type">¥</span>
                <span class="count">{{product.price}}</span>
                <span class="desc">起</span>
              </p>
              <div class="progress">
                <div class="wrapper">
                  <div class="inner" :style="{width: product.progress + '%'}"></div>
                </div>
                <p class="num">{{product.progress}}%</p>
              </div>
              <label>精选</label>
            </div>
          </div>
        </section>
      </div>
    </section>
  </panel>
</template>

<script>
  import Panel from '../core/panel.vue'

  export default {
    data() {
      return {
        items: [{
          category: '//img12.360buyimg.com/jrpmobile/jfs/t3406/210/2247820735/50952/86016eea/5846d8e7N20446dbd.png?width=750&height=200',
          products: [{
            img: '//img30.360buyimg.com/cf/s250x250_jfs/t16150/165/674827881/130789/7de1f069/5a3a04b0N4e3d246c.jpg',
            name: '骨传导耳机',
            price: 19.00,
            progress: 50
          }, {
            img: '//img30.360buyimg.com/cf/s250x250_jfs/t15514/150/953212838/145464/850c2d0f/5a448bc7Nade1a7c5.jpg',
            name: '未来游戏装备',
            price: 159.00,
            progress: 999
          }]
        }, {
          category: '//img12.360buyimg.com/jrpmobile/jfs/t3739/82/2244582797/54399/746c7d79/5846a953N66b67d05.png?width=750&height=200',
          products: [{
            img: '//img30.360buyimg.com/cf/s250x250_jfs/t14881/283/656508232/143980/9b606acf/5a33a171N18c9c80a.jpg',
            name: '蓝牙音箱',
            price: 29.00,
            progress: 221
          }, {
            img: '//img30.360buyimg.com/cf/s250x250_jfs/t14767/339/1285461444/50279/8ee27acb/5a4c3a82N3cff563e.jpg',
            name: '全球漫游WiFi卡',
            price: 65,
            progress: 338
          }]
        }, {
          category: '//img12.360buyimg.com/jrpmobile/jfs/t3214/113/4408032436/61548/ce316eef/5846d310Ne93f00c9.png?width=750&height=200',
          products: [{
            img: '//img30.360buyimg.com/cf/s250x250_jfs/t8245/192/196081959/46158/74227a9a/59a26d4bNddd40149.jpg',
            name: '遵义虾子土豆片',
            price: 1.00,
            progress: 0
          }, {
            img: '//img30.360buyimg.com/cf/s250x250_jfs/t10993/26/1955036662/116896/13538743/59ec19ecN5efa5c7d.jpg',
            name: '新疆黄杏干',
            price: '35.00',
            progress: 0
          }]
        }]
      }
    },
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
    @include flex;
    .item {
      > img {
        display: block;
        width: 100%;
        height: 170px;
      }
      .list {
        @include flex(row);
        .product-wrapper {
          position: relative;
          margin-bottom: 40px;
          padding: 0 5px 0 10px;
          width: 50%;
          height: 396px;
          box-sizing: border-box;
          text-align: center;
          .product {
            position: relative;
            background: rgba(0, 0, 0, 0.02);
            img {
              margin: 40px auto 20px;
              width: 180px;
              height: 180px;
            }
            .name {
              height: 40px;
              line-height: 40px;
              margin: 0 20px;
              font-family: PingFangSC-Medium;
              font-size: 28px;
              font-weight: 700;
              color: #444;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .price {
              height: 48px;
              line-height: 48px;
              margin-bottom: 12px;
              font-size: 0;
              .type {
                font-size: 28px;
                color: #FF3232;
              }
              .count {
                font-size: 36px;
                color: #ff3232;
              }
              .desc {
                margin-left: 4px;
                font-size: 20px;
                color: #999;
              }
            }
            .progress {
              @include flex(row);
              justify-content: space-around;
              align-items: center;
              padding: 0 20px;
              margin-top: 16px;
              height: 30px;
              line-height: 30px;
              .wrapper {
                width: 60%;
                height: 10px;
                background: #f6e6e6;
                border-radius: 22px;
                .inner {
                  width: 40%;
                  max-width: 100%;
                  height: 10px;
                  background: linear-gradient(270deg, #f55 1%, #ff9c31 100%);
                  border-radius: 22px;
                }
              }
              .num {
                font-size: 24px;
                color: #999;
              }
            }
            label {
              position: absolute;
              left: 0;
              top: 0;
              padding: 4px 8px;
              background-image: linear-gradient(-35deg, #c1c1c1 0, #acacac 100%);
              font-size: 20px;
              color: #ff0000;
            }
          }
        }
      }
    }
  }
}
</style>
