<template>
  <v-container class="wrapper">
    <!-- justify contentsを中央揃えに -->
    <v-row>
      <v-col>
        <v-sheet>
          <h2 style="text-align: center">経歴</h2>
          <v-divider thickness="5"></v-divider>
          <v-card flat class="mx-auto mt-5" style="display: flex">
            <v-card-text
              class="py-0"
              style="
                height: 100%;
                flex-flow: wrap;
                justify-content: space-around;
                align-items: center;
              "
            >
              <v-row align-content="center" no-gutters>
                <v-col class="text-h2" cols="3">
                  <v-row
                    align-content="center"
                    style="min-height: 500px; margin: 0 20px"
                  >
                    <v-img
                      src="@/assets/img/books.jpg"
                      class="card-img"
                      style="max-width: 100%; height: auto"
                    ></v-img>
                  </v-row>
                </v-col>
                <v-col cols="6" class="text-reft">
                  <v-row
                    align-content="center"
                    style="
                      min-height: 500px;
                      padding: 20px 20px;
                      word-break: break-word;
                    "
                  >
                    <h3>aaaaaaaaaaaa</h3>
                    <p>aaaaaaaaaaaa</p>
                    <p>aaaaaaaaaaaa</p>
                    <p>aaaaaaaaaaaa</p>
                    <p>aaaaaaaaaaaa</p>
                    <p>aaaaaaaaaaaa</p>
                    <p>aaaaaaaaaaaa</p>
                    <p>aaaaaaaaaaaa</p>
                    <p>aaaaaaaaaaaa</p>
                    <p>aaaaaaaaaaaa</p>
                    <p>aaaaaaaaaaaa</p>
                    <p>aaaaaaaaaaaa</p>
                    <p>aaaaaaaaaaaa</p>
                  </v-row>
                </v-col>
                <v-col cols="3" class="text-reft">
                  <v-row
                    align-content="center"
                    style="
                      min-height: 500px;
                      padding: 0 20px;
                      word-break: break-word;
                    "
                  >
                    <ul>
                      <li>【OS】</li>
                      <li>・Windows</li>
                      <li>・macOS</li>
                      <li>・iOS</li>
                      <li>【言語】</li>
                      <li>・Javascript</li>
                      <li>・HTML5/SASS</li>
                      <li>【FW】</li>
                      <li>・Vue.js</li>
                      <li>・Vuetify</li>
                    </ul>
                  </v-row>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-divider thickness="5"></v-divider>
          <v-card flat class="mx-auto mt-5" style="display: flex">
            <v-card-text
              class="py-0"
              style="
                height: 100%;
                flex-flow: wrap;
                justify-content: space-around;
                align-items: center;
              "
            >
              <v-row align-content="center" no-gutters>
                <v-col class="text-h2" cols="3">
                  <v-row
                    align-content="center"
                    style="min-height: 500px; margin: 0 20px"
                  >
                    <v-img
                      src="@/assets/img/books.jpg"
                      class="card-img"
                      style="max-width: 100%; height: auto"
                    ></v-img>
                  </v-row>
                </v-col>
                <v-col cols="6" class="text-reft">
                  <v-row
                    align-content="center"
                    style="
                      min-height: 500px;
                      padding: 20px 20px;
                      word-break: break-word;
                    "
                  >
                    <h3>aaaaaaaaaaaa</h3>
                    <p>aaaaaaaaaaaa</p>
                    <p>aaaaaaaaaaaa</p>
                    <p>aaaaaaaaaaaa</p>
                    <p>aaaaaaaaaaaa</p>
                    <p>aaaaaaaaaaaa</p>
                    <p>aaaaaaaaaaaa</p>
                    <p>aaaaaaaaaaaa</p>
                    <p>aaaaaaaaaaaa</p>
                    <p>aaaaaaaaaaaa</p>
                    <p>aaaaaaaaaaaa</p>
                    <p>aaaaaaaaaaaa</p>
                    <p>aaaaaaaaaaaa</p>
                  </v-row>
                </v-col>
                <v-col cols="3" class="text-reft">
                  <v-row
                    align-content="center"
                    style="
                      min-height: 500px;
                      padding: 0 20px;
                      word-break: break-word;
                    "
                  >
                    <ul>
                      <li>【OS】</li>
                      <li>・Windows</li>
                      <li>・macOS</li>
                      <li>・iOS</li>
                      <li>【言語】</li>
                      <li>・Javascript</li>
                      <li>・HTML5/SASS</li>
                      <li>【FW】</li>
                      <li>・Vue.js</li>
                      <li>・Vuetify</li>
                    </ul>
                  </v-row>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-divider thickness="5"></v-divider>

          <v-divider thickness="5"></v-divider>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.card-img {
  width: 200px;
}
p {
  width: 100%;
}
</style>
