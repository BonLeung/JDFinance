<template>
  <panel class="panel">
    <section class="content">
      <p>about me</p>
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
  margin-top: 120px;
  .content {
    padding: 40px;
    p {
      font-size: 28px;
      color: #333;
      height: 60px;
      line-height: 60px;
    }
  }
}
</style>
