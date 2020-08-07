# vue-time-ago
[![Build Status](https://travis-ci.com/abakermi/vue-time-ago.svg?branch=master)](https://travis-ci.com/abakermi/vue-time-ago) [![npm version](https://badge.fury.io/js/vue-time-ago.svg)](https://badge.fury.io/js/vue-time-ago)


A simple time-ago component for vuejs

<img src="media/screenshot.png" width="">
<br>
## Installation

### Install via CDN
```html
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-time-ago@0.0.1"></script>

<script>
  Vue.use(VueTimeAgo.default)
</script>
```

### Install via NPM
```sh
$ npm install vue-time-ago --save
```

#### Register as Component
```js
import Vue from 'vue'
import VueTimeAgo from 'vue-time-ago'
export default {
  name: 'App',
  components: {
    VueTimeAgo
  }
}
```

#### Register as Plugin
```js
import Vue from 'vue'
import VueTimeAgo from 'vue-time-ago'
Vue.use(VueTimeAgo)
```

## Usage

```js
<template>
 <vue-time-ago date="2020-08-07T11:32:01.592Z" format="DD-MM-YYYY" iso="true" > 
   <slot >
     ago
     </slot>
 </vue-time-ago>
</template>
<script>
import VFeedYoutube from 'vue-feeds-youtube'
export default {
  name: 'App',
  components: {
    VFeedYoutube
  }
}
</script>
```

## Props
|Props|Description|Type|Required|
|-----|-----------|----|--------|
|date|date string to calculate time from |String|true
|format|optional date format  |String|true
|iso|set format to iso |String|false


## License

vue-time-ago is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)