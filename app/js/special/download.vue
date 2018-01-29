<template>
  <panel class="panel">
    <section class="content">
      <div></div>
      <p>立即下载</p>
      <span>copyright</span>
    </section>
  </panel>
</template>

<script>
import Panel from "../core/panel.vue";

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
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #fff;
  margin: 0;
  .content {
    @include flex;
    justify-content: center;
    align-items: center;
    height: 1136px;
    width: 100%;
    > div {
      background: url(//img12.360buyimg.com/jrpmobile/jfs/t8956/285/1249806938/50853/8cd3c8f0/59b65f36N05367075.png?) no-repeat center;
      width: 600px;
      height: 800px;
      background-size: 100% auto;
      margin-top: -400px;
    }
    > p {
      @include btn;
      position: fixed;
      bottom: 130px;
      width: 470px;
      height: 100px;
      line-height: 100px;
      border-radius: 10px;
      background-image: linear-gradient(270deg,#F55C33 0,#EE2D1B 75%);
      box-shadow: 1px 6px 16px 0px rgba(255,159,135,.6);
      font-size: 32px;
    }
    > span {
      position: fixed;
      bottom: 16px;
      font-size: 20px;
      color: #333;
    }
  }
}
</style>
