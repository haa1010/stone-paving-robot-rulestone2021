<template>
  <div class="hello">
    <ul style="margin: 100px">
      <li v-for="value in robots " :key="value.id">
        <!--                <router-link :to="{name: 'resting', params: {id: value.id}}" @click="chooseRobot(value.id)">-->
        <!--                  <img src="@/assets/robot.png" alt="" class="robot-img">-->
        <!--                  <p class="color-light">{{ value.name }}</p>-->
        <!--                </router-link>-->
        <div class="li-robot" @click="chooseRobot(value)">
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
          name: '',
          id: 0,
          status: 0
        }
      ]
    }
  },
  created() {
    axios.get(`${axios.defaults.baseURL}/robots`)
        .then(response => {
          this.robots = response.data.robots
          this.$store.commit('setRobot', response.data.robots)
        })
        .catch(e => {
          console.log(e)
        })
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    chooseRobot(value) {
      axios.get(`${axios.defaults.baseURL}/robots/${value.id}`)
          // eslint-disable-next-line no-unused-vars
          .then(response => {
            // this.patterns = response.data
            this.$store.commit('setRobot', value)
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

.li-robot {
  font-size: 28px;
  font-weight: bold;
}

.li-robot:hover {
  cursor: pointer;
}

/*a {*/
/*  color: #42b983;*/
/*}*/
</style>
