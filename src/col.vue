<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot />
  </div>
</template>

<script>
export default {
  name: "HCol",
  props: {
    span: {
      type: [Number, String],
    },
    offset: {
      type: [Number, String],
    },
  },
  data() {
    return {
      gutter: 0,
    }
  },
  computed: {
    colClass() {
      let { offset, span } = this
      return [span && `col-${span}`, offset && `offset-${offset}`]
    },
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRight: this.gutter / 2 + "px",
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.col {
  // width: 50%;
  height: 100px;
  // background: gray;
  // border: 1px solid red;
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24) * 100%;
    }
  }
  @for $n from 1 through 24 {
    &.offset-#{$n} {
      margin-left: ($n/24) * 100%;
    }
  }
}
</style>
