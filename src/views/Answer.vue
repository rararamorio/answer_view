<template>
  <v-form ref="answer_form" v-model="valid" lazy-validation>
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

      <v-col cols="12">
        <v-subheader class="pl-0">インフラスキル</v-subheader>
        <v-slider
          v-model="infra_skill"
          :thumb-size="24"
          max="5"
          min="0"
          thumb-label="always"
        ></v-slider>
      </v-col>

      <v-col cols="12">
        <v-subheader class="pl-0">プログラミングスキル</v-subheader>
        <v-slider
          v-model="pg_skill"
          :thumb-size="24"
          max="5"
          min="0"
          thumb-label="always"
        ></v-slider>
      </v-col>

      <v-col cols="12">
        <v-subheader class="pl-0">運用スキル</v-subheader>
        <v-slider
          v-model="op_skill"
          :thumb-size="24"
          max="5"
          min="0"
          thumb-label="always"
        ></v-slider>
      </v-col>

      <v-col cols="12">
        <v-subheader class="pl-0">コミュニケーションスキル</v-subheader>
        <v-slider
          v-model="comm_skill"
          :thumb-size="24"
          max="5"
          min="0"
          thumb-label="always"
        ></v-slider>
      </v-col>

      <v-col cols="12">
        <v-subheader class="pl-0">体力</v-subheader>
        <v-slider
          v-model="strength"
          :thumb-size="24"
          max="5"
          min="0"
          thumb-label="always"
        ></v-slider>
      </v-col>

      <v-col cols="12">
        <v-subheader class="pl-0">マネジメント力</v-subheader>
        <v-slider
          v-model="management"
          :thumb-size="24"
          max="5"
          min="0"
          thumb-label="always"
        ></v-slider>
      </v-col>

      <v-col cols="12">
        <v-subheader class="pl-0">やさしさ</v-subheader>
        <v-slider
          v-model="kindness"
          :thumb-size="24"
          max="5"
          min="0"
          thumb-label="always"
        ></v-slider>
      </v-col>
      <v-col cols="1">
        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click.prevent="submit"
        >
          登録
        </v-btn>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span>完了</span>
          <v-spacer></v-spacer>
        </v-card-title>
        <v-card-text> 登録が完了しました </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="dialog = false">
            続けて登録
          </v-btn>
          <v-btn color="primary" text to="/view"> 投票結果を見る </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-form>
</template>

<script>
export default {
  name: "Answer",
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
      infra_skill: 3,
      pg_skill: 3,
      op_skill: 3,
      comm_skill: 3,
      strength: 3,
      management: 3,
      kindness: 3,
      dialog: false,
    };
  },
  methods: {
    submit() {
      if (!this.$refs.answer_form.validate()) {
        this.valid = false;
        console.log("not send");
        return;
      }
      console.log("send");
      this.axios
        .get(
          "https://a8lwzkhlo8.execute-api.ap-northeast-1.amazonaws.com/Prod/answer",
          {
            params: {
              name: this.name,
              infra_skill: this.infra_skill,
              pg_skill: this.pg_skill,
              op_skill: this.op_skill,
              comm_skill: this.comm_skill,
              strength: this.strength,
              management: this.management,
              kindness: this.kindness,
            },
          }
        )
        .then((response) => {
          console.log(response);
          this.dialog = true;
        })
        .catch((e) => {
          alert(e);
        });
    },
  },
};
</script>
