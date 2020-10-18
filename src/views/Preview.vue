<template>
  <v-row class="mb-6" justify="center" no-gutters>
    <v-col cols="8">
      評価者：{{ name }}
      <radar-chart :chart-data="data" :options="options" />
    </v-col>
  </v-row>
</template>
<script>
import RadarChart from "./RadarChart.js";
export default {
  components: {
    RadarChart,
  },
  name: "Preview",
  props: ["name"],
  data() {
    return {
      loaded: false,
      data: null,
      options: {
        scale: {
          angleLines: {
            display: false,
          },
          ticks: {
            suggestedMin: 0,
          },
        },
      },
    };
  },
  methods: {
    preview() {
      console.log("preview");

      let httpClient = this.axios.create({
        baseURL: "https://wvywcbiya8.execute-api.ap-northeast-1.amazonaws.com",
        xsrfHeaderName: "X-CSRF-Token",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
      });
      httpClient
        .get("/Prod/viewer", {
          params: {
            name: this.name,
          },
        })
        .then((response) => {
          let dataset = [0, 0, 0, 0, 0, 0, 0];
          if (Object.keys(response.data).length > 0) {
            dataset = [
              response.data.infra_skill,
              response.data.pg_skill,
              response.data.op_skill,
              response.data.comm_skill,
              response.data.strength,
              response.data.management,
              response.data.kindness,
            ];
            console.log(dataset);
          }
          this.data = {
            labels: [
              "インフラスキル",
              "プログラミングスキル",
              "運用スキル",
              "コミュニケーションスキル",
              "体力",
              "マネジメント力",
              "やさしさ",
            ],
            datasets: [{ label: "評価", data: dataset }],
          };
          console.log(this.data);
        })
        .catch((e) => {
          alert(e);
        });
    },
  },
  async mounted() {
    console.log(`mounted=${this.name}`);
    this.preview();
  },
};
</script>