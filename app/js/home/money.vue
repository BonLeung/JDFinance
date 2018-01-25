<template>
  <panel title="理财精选" class="panel">
    <section class="content">
      <dl class="item" v-for="(item, index) in items" :key="index">
        <dt class="title">{{item.title}}<span class="red">{{item.subtitle}}</span></dt>
        <dd>{{item.rate}}</dd>
        <dd>{{item.text}}</dd>
      </dl>
    </section>
  </panel>
</template>

<script>
import Panel from '../core/panel'

export default {
  data() {
    return {
      items: [{
        title: '定期理财',
        subtitle: '理财首选',
        rate: '5.60%',
        text: '历史年回报率'
      }, {
        title: '小白理财',
        subtitle: '理财首选',
        rate: '4.22%',
        text: '七日年化收益率'
      }, {
        title: '月月盈',
        subtitle: '养老保障',
        rate: '5%',
        text: '七日年化收益率'
      }, {
        title: '小白基金',
        subtitle: '天天赚钱',
        rate: '4.27%',
        text: '七日年化收益率'
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
    @include flex(row);
    justify-content: space-around;
    box-sizing: border-box;
    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 0;
      box-sizing: border-box;
      border-bottom: 1px solid #ddd;
      position: relative;
      top: -203px;
    }
    .item {
      position: relative;
      width: 50%;
      padding: 34px 32px;
      box-sizing: border-box;
      &:after {
        position: absolute;
        top: 50%;
        right: 0;
        margin-top: -68px;
        display: block;
        content: '';
        width: 1px;
        height: 136px;
        border-right: 1px solid #ddd;
      }
      &:nth-child(2n) {
        &:after {
          display: none;
        }
      }
      dt {
        line-height: 42px;
        font-size: 30px;
        color: #333;
        span {
          padding: 0 8px;
          margin-left: 2px;
          vertical-align: 2px;
          font-size: 22px;
          color: #ff5155;
          border: 1px solid #ff5155;
        }
      }
      dd {
        &:nth-child(2) {
          height: 58px;
          line-height: 58px;
          font-size: 44px;
          font-weight: 700;
          color: #ff5155;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        &:nth-child(3) {
          height: 34px;
          line-height: 34px;
          font-size: 24px;
          color: #999;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }
}

</style>
