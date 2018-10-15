<template>
    <Panel title="Tasks" class="panel">
      <div
        class="mt-2 task"
        v-for="task in tasks"
        :key="task.id"
      >
        <EditableRecord
          class="project__inner"
          :isEditMode="task.isEditMode"
          :title="task.description"
          @onInput=" setTaskDescription({
            task,
            description: $event,
          })"
          @onEdit="setEditMode(task)"
          @onSave="saveTask(task)"
          @onDelete="deleteTask(task)"
        />
      </div>
      <CreateRecord
        placeholder="I need to..."
        :value="newTaskName"
        @onInput="setNewTaskName"
        @create="createTask"
      ></CreateRecord>
    </Panel>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import CreateRecord from '@/components/CreateRecord.vue';
import EditableRecord from '@/components/EditableRecord.vue';

export default {
  components: {
    CreateRecord,
    EditableRecord,
  },
  computed: {
    ...mapState('tasks', [
      'tasks',
      'newTaskName',
    ]),
  },
  methods: {
    ...mapActions('tasks', [
      'createTask',
      'deleteTask',
      'saveTask',
    ]),
    ...mapMutations('tasks', [
      'setNewTaskName',
      'setEditMode',
      'setTaskDescription',
    ]),
  },
};
</script>

<style>
.task {
  font-size: 18px;
}
.task .v-text-field {
  margin-top: 0;
  padding-top: 0;
}
.task .v-input__slot {
  margin-bottom: 0;
}
.task input {
  font-size: 20px;
  padding: 0;
}
.v-icon:hover {
  color: #333;
}

@media (max-width: 960px) {
  .task {
    font-size: 16px;
  }
}
@media (max-width: 600px) {
  .task {
    font-size: 14px;
  }
}
</style>
