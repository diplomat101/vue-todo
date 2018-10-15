<template>
    <Panel title="Tasks" class="panel">
      <div
        class="task"
        v-for="task in tasks"
        :key="task.id"
      >
        <EditableRecord
          class="task__inner"
          :class="task.completed ? 'completed' : '' "
          :isEditMode="task.isEditMode"
          :title="task.description"
          @onInput=" setTaskDescription({
            task,
            description: $event,
          })"
          @onClick="checkClicked(task)"
          @onEdit="setEditMode(task)"
          @onSave="saveTask(task)"
          @onDelete="deleteTask(task)"
        >
          <v-icon class="mr-2"
            @click="checkClicked(task)">
            {{ task.completed ? 'check_box' : 'check_box_outline_blank'}}
          </v-icon>
        </EditableRecord>
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
      'toggleCompleted',
    ]),
    checkClicked(task) {
      this.toggleCompleted(task);
      this.saveTask(task);
    },
  },
};
</script>

<style>
.task {
  font-size: 18px;
}
.task .title {
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}
.task__inner {
  padding: 5px 10px;
  padding-left: 0;
}
.task__inner.completed .title {
  text-decoration: line-through;
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
@media (max-width: 600px) {
  .task .title {
    max-width: 70%;
  }
}
</style>
