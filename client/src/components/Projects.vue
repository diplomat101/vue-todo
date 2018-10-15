<template>
    <Panel title="Projects">
      <div
        class="mt-2 project"
        v-for="project in projects"
        :key="project.id"
      >
        <v-layout row wrap class="mt-4">
          <v-flex md8  class="text-xs-left pr-4">
            <span
              v-if="!project.isEditMode"
            >
              {{project.title}}
            </span>
            <v-text-field
              v-if="project.isEditMode"
              :value="project.title"
              @input="setProjectTitle({
                project,
                title: $event,
              })"
              @keyup.enter.native="saveProject(project)"
              autofocus
            >
            </v-text-field>
          </v-flex>
          <v-flex md4 class="text-xs-right">
            <v-icon
              v-if="!project.isEditMode"
              @click="setEditMode(project)">
              edit
            </v-icon>
            <v-icon
              v-if="project.isEditMode"
              @click="saveProject(project)">
              check
            </v-icon>
            <v-icon
              @click="deleteProject(project)"
              class="ml-4">
              delete
            </v-icon>
          </v-flex>
        </v-layout>
      </div>
        <v-layout row wrap class="mt-4">
            <v-flex xs12 lg8>
                <v-text-field
                    placeholder="My project name..."
                    @input="setNewProjectName"
                    @keyup.enter.native="createProject"
                    :value="newProjectName"
                ></v-text-field>
            </v-flex>
            <v-flex xs12 lg4 class="mb-2">
                <v-btn
                  @click="createProject"
                  dark
                  class="mt-2 blue">
                    <v-icon class="mr-2">add_circle</v-icon>
                    Create
                </v-btn>
            </v-flex>
        </v-layout>
    </Panel>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';

export default {
  mounted() {
    this.fetchProjects();
  },
  computed: {
    ...mapState('projects', [
      'newProjectName',
      'projects',
    ]),
  },
  methods: {
    ...mapMutations('projects', [
      'setNewProjectName',
      'setEditMode',
      'setProjectTitle',
    ]),
    ...mapActions('projects', [
      'createProject',
      'fetchProjects',
      'saveProject',
      'deleteProject',
    ]),
  },
};
</script>

<style>
.project {
  font-size: 24px;
}
.project .v-text-field {
  margin-top: 0;
  padding-top: 0;
}
.project .v-input__slot {
  margin-bottom: 0;
}
.project input {
  font-size: 20px;
  padding: 0;
}
.v-icon:hover {
  color: #333;
}
@media (max-width: 1264px) {
  .project {
    font-size: 20px;
  }
}
@media (max-width: 960px) {
  .project {
    font-size: 18px;
  }
}
</style>
