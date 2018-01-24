<template>
  <div class="header">
    <span class="left">
      <em>注册</em>&nbsp;|&nbsp;<em>登陆</em>
    </span>
    <btn class="btnDownload">App下载</btn>
  </div>
</template>

<script>
import Btn from '../core/btn'

export default {
  components: {
    Btn
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  line-height: 100px;
  background: #fff url('//m.jr.jd.com/spe/qyy/main/images/jr-logo.png') center center no-repeat;
  background-size: auto 50%;
  z-index: 100;
  font-size: 32px;
  color: #666;
  .left {
    margin: 17px 0 0 18px;
    height: 30px;
    line-height: 30px;
    font-size: 28px;
  }
  .btnDownload {
    float: right;
    margin: 28px 24px 0 0;
    padding: 0;
    height: 56px;
    line-height: 56px;
    min-width: 120px;
    border-width: 0;
    border-radius: 4px;
    font-size: 24px;
  }
}
</style>
