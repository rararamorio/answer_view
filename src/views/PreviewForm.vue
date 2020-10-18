<template>
  <v-form ref="preview_form" v-model="valid" lazy-validation>
    <v-row class="mb-6" justify="center" no-gutters>
      <v-col cols="12">
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="名前（半角英数）"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="1">
        <v-btn :disabled="!valid" color="success" class="mr-4" @click="preview">
          閲覧
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>
<script>
export default {
  name: "PreviewForm",
  data() {
    return {
      valid: false,
      name: null,
      nameRules: [
        (v) => !!v || "名前 の入力は必須です",
        (v) => (v && v.length <= 10) || "10 文字以内で入力してください",
        (v) =>
          (v && v.match(/^[A-Za-z0-9]*$/) != null) ||
          "半角英数で入力してください",
      ],
    };
  },
  methods: {
    preview() {
      console.log("preview");
      if (!this.$refs.preview_form.validate()) {
        this.valid = false;
        console.log("not send");
        return;
      }
      this.$router.push({ path: `preview/${this.name}` });
    },
  },
};
</script>