<template>
  <v-app-bar color="teal-darken-3" flat density="comfortable">
    <v-toolbar-title>
      <a v-scroll-to="'#inspire'">
        <img
          src="@/assets/img/title_logo_2.png"
          alt="Logo"
          class="header_logo"
        />
      </a>
    </v-toolbar-title>

    <v-btn href="#" v-scroll-to="'#about'" :active="false">経歴</v-btn>
    <v-btn href="#" v-scroll-to="'#contact'" :active="false"
      >お問い合わせ</v-btn
    >
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script setup>
//
</script>
