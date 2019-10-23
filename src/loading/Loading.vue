<template>
  <div>
    <el-table v-loading="loading" :data="tableData" style="width: 100%">
    </el-table>
  </div>
</template>

<script>
export default {
  name: "loading",
  components: {},
  props: {},
  data() {
    return {
      tableData: [],
      loading: true
    };
  },
  methods: {},
  mounted() {},
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss"></style>
