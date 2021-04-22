<template>
  <div class="">
    <el-row style="margin: 0 40px;">
      <el-col :span="12" style="text-align: left">
        <!--        Start working progress-->
        <div class="working-progress">
          <h1 class="color-light">Working progress</h1>
          <div v-for="(value, key) in contents" :key="key">
            <el-row>
              <el-col :span="8">
                <div style="font-weight: bold">{{ key }}</div>
              </el-col>
              <el-col :span="16">
                <div>{{ value }}</div>
              </el-col>
            </el-row>
          </div>
        </div>
        <!--        End  working progress-->

        <!--        Start pattern-->
        <div class="pattern" style="margin-top: 20px">
          <el-row style="align-items: center;display: flex;">
            <el-col :span="11">
              <h1 class="color-light">Current pattern</h1>
              <img src="@/assets/current-pattern.png" alt="current-pattern" style="width: 100%">
            </el-col>
            <el-col :span="2"><i class="el-icon-right" style="font-size: 50px"></i></el-col>
            <el-col :span="11">
              <h1 class="color-light">Final pattern</h1>
              <img src="@/assets/pattern.png" alt="final-pattern" style="width: 100%">
            </el-col>
          </el-row>

        </div>
        <!--      End pattern-->
      </el-col>
      <el-col :span="12">
        <img src="@/assets/robot-controller.png" alt="" style="height: 400px">
        <!--        Start remote control-->
        <div class="remote-control">
          <el-row>
            <i class="el-icon-video-pause"></i>
            <i class="el-icon-video-play"></i>
          </el-row>
          <i class="el-icon-upload2"></i>
          <i class="el-icon-download"></i>
        </div>
        <!--      End remote control-->
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  name: 'active',
  data() {
    return {
      contents: {
        "Start at": "10:00 Saturday 12th April, 2021",
        "Remaining time:": "1 hour",
        "Number of paved stones": "10",
        "Total of stones have to pave:": "100",
        "Work completed": "10%"
      }
    }
  }
}
</script>

<style>
.working-progress {
  line-height: 35px;
}

.pattern .color-light {
  margin-bottom: 0;
}

.remote-control i {
  font-size: 50px;
  margin: 20px;
}
</style>