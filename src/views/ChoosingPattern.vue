<template>
  <div class="">
    <h1>Which pattern do you like to pave?</h1>
    <ul style="margin: 100px" class="ul-pattern">
      <li v-for="value in patterns " :key="value.id" class="el-col-6">
        <router-link :to="{name: 'active', params: {id: value.id}}">
          <el-image :src="value.img" alt="" class="pattern-img" :fit="scale-down"/>
          <p class="color-light pattern-id">{{ value.id }}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
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
}
</script>
<style>
.ul-pattern{
  display: flex;
  flex-wrap: wrap;
}

.pattern-id{
  border: solid;
  border-radius: 100%;
  width: fit-content;
  padding: 2px 12px;
  text-align: center;
  margin: 0 auto 55px;
}
</style>