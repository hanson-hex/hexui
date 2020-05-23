.<template>
  <div class="col" :class="[`col-${span}`]">
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
  },
}
</script>

<style lang="scss" scoped>
.col {
  width: 50%;
  height: 100px;
  background: gray;
  border: 1px solid red;
  $class: col-;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      width: ($n/24) * 100%;
    }
  }
}
</style>
