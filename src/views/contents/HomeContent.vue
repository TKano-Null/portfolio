<template>
  <v-container fluid class="bg-teal-darken-3">
    <v-row :style="style" justify="center" align-content="center">
      <v-col>
        <v-sheet class="overflow-y-auto">
          <!--           <v-card flat>
            <v-card-text style="text-align: center">
              <h1>HomeContent</h1>
              <img src="@/assets/img/icon_g.png" />
            </v-card-text>
          </v-card> -->
          <v-card flat class="bg-teal-darken-3">
            <v-card-text style="text-align: center">
              <!-- <img src="@/assets/img/ada5.png" /> -->
              <h1 class="text-white" style="margin-top: 20px">PORTFOLIO</h1>
              <p class="text-white" style="margin-top: 20px">
                システム設計・開発
              </p>
              <p class="text-white">アプリケーション、業務システム、他</p>
            </v-card-text>
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    height: { type: Number, default: 500 },
  },
  computed: {
    style() {
      return "height: " + this.height * 0.8 + "px;";
    },
  },
};
</script>

<style scoped>
.main-wrapper {
  width: 100%;
}
</style>
