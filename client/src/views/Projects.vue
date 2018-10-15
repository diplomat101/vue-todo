<template>
  <v-container>
    <v-layout row wrap>
      <v-flex md4 xs12>
        <Projects></Projects>
      </v-flex>
      <v-flex md8 xs12>
        <Panel title="Tasks" class="panel">
          <h1>Testing</h1>
        </Panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src

import { mapGetters } from 'vuex';
import Projects from '@/components/Projects.vue';
import router from '../router';

export default {
  components: {
    Projects,
  },
  mounted() {
    if (!this.isLoggedIn) {
      return router.push('/login');
    }
  },
  computed: {
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

