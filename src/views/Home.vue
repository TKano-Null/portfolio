<template>
  <v-app id="inspire">
    <!-- <v-main class="bg-grey-lighten-3"> -->
    <v-main class="bg-white">
      <div id="home">
        <HomeContent v-model:height="height"></HomeContent>
      </div>
      <div id="about">
        <About></About>
      </div>
      <div id="contact">
        <Contact></Contact>
      </div>
    </v-main>
    <v-footer class="bg-teal-lighten-4">
      <v-row justify="center" no-gutters>
        <v-layout style="height: 56px">
          <v-bottom-navigation class="bg-teal-lighten-4 text-white">
            <v-btn
              :active="false"
              class="bg-teal-lighten-4 text-white rounded-pill"
              href="#"
              v-scroll-to="'#inspire'"
            >
              <v-icon icon="mdi-arrow-up-bold-box" size="x-large"></v-icon>
            </v-btn>
          </v-bottom-navigation>
        </v-layout>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import HomeContent from "./contents/HomeContent.vue";
import About from "./contents/About.vue";
import Contact from "./contents/Contact.vue";

export default {
  name: "my-component",
  components: {
    HomeContent,
    About,
    Contact,
  },
  data() {
    return {
      height: window.innerHeight,
    };
  },
  methods: {
    handleResize: function () {
      this.height = window.innerHeight;
    },
  },
  mounted: function () {
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy: function () {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style>
.header_logo {
  height: 38px;
  margin-top: 7px;
}
.wrapper {
  padding: auto;
  max-width: 1200px;
}
li {
  list-style: none;
}
p {
  margin: 3px 0;
}
</style>
