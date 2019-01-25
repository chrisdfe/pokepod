<template>
  <div class="AnimatedCounter">
    {{ displayValue }}
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: true
    },
    incrementAmount: {
      type: Number,
      default: 5
    },
    incrementTimeout: {
      type: Number,
      default: 10
    }
  },

  data() {
    return {
      displayValue: 0
    };
  },

  created() {},

  methods: {
    beginIncrementTimeout() {
      console.log("beginning");
      if (this.value > 0) {
        this.displayValue = 0;
        setTimeout(this.incrementDisplayValue, this.incrementTimeout);
      }
    },

    incrementDisplayValue() {
      console.log("displayValue", this.displayValue);
      if (this.displayValue > this.value - this.incrementAmount) {
        this.displayValue = this.value;
      } else {
        this.displayValue += this.incrementAmount;
        setTimeout(this.incrementDisplayValue, this.incrementTimeout);
      }
    }
  },

  watch: {
    value() {
      this.beginIncrementTimeout();
    }
  }
};
</script>

<style>
.AnimatedCounter {
  display: inline-block;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid #fff;
}
</style>
