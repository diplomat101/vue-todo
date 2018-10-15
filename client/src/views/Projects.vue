<template>
  <v-container>
    <v-layout row wrap>
      <v-flex md4 xs12>
        <Projects></Projects>
      </v-flex>
      <v-flex md8 xs12 v-if="currentProject">
        <Tasks></Tasks>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src

import { mapGetters, mapState } from 'vuex';
import Projects from '@/components/Projects.vue';
import Tasks from '@/components/Tasks.vue';
import router from '../router';

export default {
  components: {
    Projects,
    Tasks,
  },
  mounted() {
    if (!this.isLoggedIn) {
      return router.push('/login');
    }
  },
  computed: {
    ...mapState('projects', [
      'currentProject',
    ]),
    ...mapGetters('authentication', [
      'isLoggedIn',
    ]),
  },
};
</script>

<style scoped>
.panel {
  margin-left: 3%;
}
@media (max-width: 960px) {
  .panel {
    margin-top: 3%;
    margin-left: 0;
  }
}
</style>

