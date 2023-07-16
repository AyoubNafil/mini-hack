<template>


<router-view v-if="show"></router-view>
<basic v-else></basic>
 
</template>

<script>
import { ToolingPackage } from "./api/utile.js";
import basic from "./views/auth/errors/basic.vue";

export default {
  name: 'App',
  components: {
    basic
  },
  methods: {

    async fetchData() {
    try {
      const cc = await ToolingPackage();
      console.log(cc);
      this.show = cc
    } catch (error) {
      console.log("Error occurred while executing query:", error);

    }
  }
  },
  mounted() {
       
        this.fetchData();

  },
  data() {
    return {
      show: true,
    }
  },
}
</script>
