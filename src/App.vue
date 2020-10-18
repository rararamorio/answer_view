<template>
  <v-app>
    <v-app-bar app color="primary" class="white--text">
      <v-toolbar-title>匿名アンケート</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text to="/">投票</v-btn>
        <v-btn text to="/view">結果確認</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
    <v-footer app color="primary" class="white--text">
      <v-spacer></v-spacer>
      © morio
      <v-spacer></v-spacer>
    </v-footer>
  </v-app>
</template>

