

<template>
  <div :class="$style.wrapper" class="vue-time-ago">
    <span>{{timeAgo}}</span>
    <slot></slot>
  </div>
</template>

<script>
import moment from "moment-mini";
export default {
  name: "VueTimeAgo",
  props: {
    date: {
      type: String,
      required: true,

      validator: function(value) {
        return !isNaN(new Date(value).getDate());
      }
    },
     format: {
      type: String,
      required:true
      },
      iso: {
      type: Boolean,
      required:false
      }
  },
  computed:{
      timeAgo(){
          const format=this.iso?moment.ISO_8601:this.format
   return moment(this.date,format).fromNow(true)
      }
  },

  mounted() {
    console.log(moment().format());
  }
};
</script>
<style module>
.wrapper{
    position: relative;
}
</style>