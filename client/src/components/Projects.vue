<template>
    <Panel title="Projects">
      <div
        class="mt-2 project"
        v-for="project in projects"
        :key="project.id"
      >
        <EditableRecord
          :isEditMode="project.isEditMode"
          :title="project.title"
          @onInput=" setProjectTitle({
            project,
            title: $event,
          })"
          @onEdit="setEditMode(project)"
          @onSave="saveProject(project)"
          @onDelete="deleteProject(project)"
        />
      </div>
      <CreateRecord
        placeholder="My project name..."
        @onInput="setNewProjectName"
        @create="createProject"
        :value="newProjectName"
      ></CreateRecord>
    </Panel>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';
import CreateRecord from '@/components/CreateRecord.vue';
import EditableRecord from '@/components/EditableRecord.vue';

export default {
  components: {
    CreateRecord,
    EditableRecord,
  },
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
      'setEditMode',
      'setProjectTitle',
      'setNewProjectName',
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
