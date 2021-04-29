<template>
  <div class="hello">
    <ul style="margin: 100px">
      <li v-for="value in robots " :key="value.id">
<!--                <router-link :to="{name: 'resting', params: {id: value.id}}" @click="chooseRobot(value.id)">-->
<!--                  <img src="@/assets/robot.png" alt="" class="robot-img">-->
<!--                  <p class="color-light">{{ value.name }}</p>-->
<!--                </router-link>-->
        <div class="li-robot" @click="chooseRobot(value.id)">
                  <img src="@/assets/robot.png" alt="" class="robot-img">
                  <p class="color-light">{{ value.name }}</p>
                </div>
      </li>
    </ul>
    <h1 class="">Choose your robot to connect!</h1>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'home',
  data() {
    return {
      robots: [
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
  created() {
    axios.get(`${axios.defaults.baseURL}/robots`)
        .then(response => {
          console.log(response)
          this.robots = response.data
          this.$store.commit('setRobot', response.robot)
        })
        .catch(e => {
          console.log(e)
        })
  },
  methods: {
    chooseRobot(id) {
      console.log(id)
      axios.get(`${axios.defaults.baseURL}/robots`,  { params: { id: this.id }})
          .then(response => {
            console.log(response)
            // this.patterns = response.data
            this.$store.commit('setRobot', response.robot)
            this.$router.push({name: 'resting'});
          })
          .catch(e => {
            console.log(e)
          })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

.li-robot{
  font-size: 28px;
  font-weight: bold;
}

.li-robot:hover{
  cursor: pointer;
}

/*a {*/
/*  color: #42b983;*/
/*}*/
</style>
