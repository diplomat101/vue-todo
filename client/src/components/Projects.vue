<template>
    <Panel title="Projects">
      <div
        class="mt-2 project"
        v-for="(project, index) in projects"
        :key="project.id"
        :class="{ 'active': activeIndex === index }"
        @click="setActive(index)"
      >
        <EditableRecord
          class="project__inner"
          :isEditMode="project.isEditMode"
          :title="project.title"
          @onInput=" setProjectTitle({
            project,
            title: $event,
          })"
          @onClick="projectClicked(project)"
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
  data: () => {
    return {
      isActive: false,
      activeIndex: undefined,
    };
  },
  computed: {
    ...mapState('projects', [
      'newProjectName',
      'projects',
    ]),
  },
  methods: {
    projectClicked(project) {
      this.setCurrentProject(project);
      this.fetchTasksForProject(project);
    },
    setActive(index) {
      this.activeIndex = index;
    },
    ...mapMutations('projects', [
      'setEditMode',
      'setProjectTitle',
      'setNewProjectName',
      'setCurrentProject',
    ]),
    ...mapActions('projects', [
      'createProject',
      'fetchProjects',
      'saveProject',
      'deleteProject',
    ]),
    ...mapActions('tasks', [
      'fetchTasksForProject',
    ]),
  },
};
</script>

<style>
.project {
  font-size: 24px;
}
.project.active .project__inner {
  background-color: #dedede;
  position: relative;
}
.project.active .project__inner::before {
  position: absolute;
  content: '';
  width: 16px;
  height: 16px;
  right: -8px;
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
  background-color: inherit;
}
.project .flex {
  align-items: center;
}
.project__inner {
  padding: 5px 10px;
  border-radius: 2px;
}
.project .v-text-field {
  margin-top: 5px;
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
