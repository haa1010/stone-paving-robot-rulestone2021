<template>
  <div class="hello">
    <ul style="margin: 100px">
      <li v-for="value in robotList " :key="value.id">
        <router-link :to="{name: 'resting', params: {id: value.id}}">
          <img :src="value.img" alt="" class="robot-img">
          <p class="color-light">{{ value.name }}</p>
        </router-link>
      </li>
    </ul>
    <h1 class="">Choose your robot to connect!</h1>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      robotList: [
        {
          img: require('@/assets/robot.png'),
          name: 'Robot 1',
          id: 1
        }, {
          img: require('@/assets/robot.png'),
          name: 'Robot 2',
          id: 2
        }, {
          img: require('@/assets/robot.png'),
          name: 'Robot 3',
          id: 3
        }, {
          img: require('@/assets/robot.png'),
          name: 'Robot 4',
          id: 4
        },
      ]
    }
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}



/*a {*/
/*  color: #42b983;*/
/*}*/
</style>
