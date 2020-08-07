<template>
  <div id="app" :class="$style.container">
    <article v-for="(item,i) in comments" :key="i" :class="$style.comment">
      <figure :class="$style.leftside">
        <p :class="$style.image">
          <img :src="item.img" />
        </p>
      </figure>
      <div :class="$style.content">
        <div>
          <h3>{{item.user}}</h3>
          <span>{{item.text}}</span>
          <ul>
            <li>
              <VueTimeAgo :date="item.date" format="DD-MM-YYYY" :iso="true">
                <slot>&nbsp;ago</slot>
              </VueTimeAgo>
            </li>
          </ul>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import VueTimeAgo from "./components/VueTimeAgo.vue";

export default {
  name: "App",
  components: {
    VueTimeAgo
  },
  data: function() {
    return {
      comments: [
        {
          img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
          user: "Guest",
          text: "Lorem ipsum dolor sit amet.",
          date: "2020-08-07T11:32:01.592Z"
        },
        {
          img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
          user: "Guest",
          text: "Lorem ipsum dolor sit amet.",
          date: "2020-07-30T22:55:57+03:00"
        }
      ]
    };
  }
};
</script>
<style module>
h3,
figure,
ul {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
.container {
    margin: 15px 30%;
}
.comment {
  align-items: flex-start;
  display: flex;
  text-align: inherit;
  margin-bottom: 1.5em;
}
.leftside,
.rightside {
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
}
.image {
  width: 64px;
  height: 64px;
  display: block;
  position: relative;
  margin: 0;
}
.content {
  flex-basis: auto;
  flex-grow: 1;
  flex-shrink: 1;
  text-align: inherit;
}
.content ul {
  margin-top: 10px;
}
.content ul li {
  color: rgb(92, 90, 90);
}
.vue-time-ago span {
  color: red !important;
}
.image img {
  display: block;
  height: 100%;
  border-radius: 290486px;
  width: 100%;
  max-width: 100%;
}
.leftside {
  margin-right: 1rem;
}
</style>


