<template>
  <div class="">
    <h1>Which pattern do you like to pave?</h1>
    <ul style="margin: 100px" class="ul-pattern">
      <li v-for="value in patterns " :key="value.id" class="el-col-6">
        <router-link :to="{name: 'active', params: {id: value.id}}" @click="choosePattern(value.id)">
          <!--          <el-image :src="value.img" alt="" class="pattern-img" :fit="scale-down"/>-->
          <img src="@/assets/pattern.png" alt="" class="pattern-img"/>
          <p class="color-light pattern-id">{{ value.id }}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'choose-pattern',
  data() {
    return {
      patterns: [
        {
          img: require('@/assets/pattern.png'),
          id: 1
        }, {
          img: require('@/assets/pattern.png'),
          id: 2
        }, {
          img: require('@/assets/pattern.png'),
          id: 3
        }, {
          img: require('@/assets/pattern.png'),
          id: 4
        }, {
          img: require('@/assets/pattern.png'),
          id: 5
        }
      ]
    }
  },
  created() {
    axios.get(`${axios.defaults.baseURL}/patterns`)
        .then(response => {
          console.log(response)
          this.patterns = response.data
        })
        .catch(e => {
          console.log(e)
        })
  },
  methods: {
    choosePattern(id) {
      console.log(id)
      axios.get(`${axios.defaults.baseURL}/patterns`, { params: { id: this.id }})
          .then(response => {
            console.log(response)
            // this.patterns = response.data
            this.$router.push({name: 'active' });
          })
          .catch(e => {
            console.log(e)
          })
    }
  }
}
</script>
<style>
.ul-pattern {
  display: flex;
  flex-wrap: wrap;
}

.pattern-id {
  border: solid;
  border-radius: 100%;
  width: fit-content;
  padding: 2px 12px;
  text-align: center;
  margin: 0 auto 55px;
}
.pattern-img{
  max-width: 250px;
}
</style>