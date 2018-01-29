<template>
  <panel title="更多福利" class="panel">
    <div class="content">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t7456/56/1425209238/21928/f1fe492d/599cee57Naea99020.jpg?width=250&height=330" alt="">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t7894/126/1440046618/24763/5ce6a129/599cee04Ne77b3641.jpg?width=250&height=330" alt="">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t6385/103/1675552688/24265/91be4150/59549aedNa30670f7.jpg?width=250&height=330" alt="">
      <span>专项福利 ></span>
    </div>
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
    img {
      width: 33.33%;
    }
    span {
      position: absolute;
      right: 10px;
      top: -112px;
      height: 112px;
      line-height: 112px;
      font-size: 28px;
      color: #999;
    }
  }
}
</style>
