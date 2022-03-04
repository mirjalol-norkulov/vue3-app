<script>
import dayjs from "dayjs";
import IntersectionObserver from "~/components/IntersectionObserver.vue";

export default {
  name: "HomePage",
  components: { IntersectionObserver },
  inject: ["api"],
  data() {
    return {
      news: [],
      page: 1,
    };
  },
  created() {
    this.fetchNews();
  },
  methods: {
    async fetchNews() {
      const { data } = await this.$api.get("/top-headlines", {
        params: {
          country: "us",
          pageSize: 5,
          page: this.page,
        },
      });

      this.news = [...this.news, ...data.articles];
    },
    formatDate(date) {
      return dayjs(date).format("DD.MM.YYYY");
    },
    handleIntersection() {
      this.page++;
      this.fetchNews();
    },
  },
};
</script>

<template>
  <ElRow justify="center">
    <ElCol :span="12">
      <ElSpace direction="vertical" alignment="center">
        <el-card
          v-for="(item, index) in news"
          :key="index"
          :body-style="{ padding: '0px' }"
        >
          <ElImage :src="item.urlToImage" />
          <div style="padding: 14px">
            <h3>{{ item.title }}</h3>
            <p>
              {{ item.description }}
            </p>
            <div class="bottom">
              <time class="time">{{ formatDate(item.publishedAt) }}</time>
            </div>
          </div>
        </el-card>
        <IntersectionObserver
          v-if="news.length > 0"
          @enter="handleIntersection"
        />
      </ElSpace>
    </ElCol>
  </ElRow>
</template>
