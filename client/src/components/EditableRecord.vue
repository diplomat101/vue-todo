<template>
  <v-layout row wrap class="mt-3">
    <v-flex md9 class="text-xs-left pr-4">
      <div
        v-if="!isEditMode"
        @click="$emit('onClick')"
        class="title">
        {{title}}
      </div>
      <v-text-field
        v-if="isEditMode"
        :value="title"
        @input="$emit('onInput', $event)"
        @keyup.enter.native="$emit('onSave')"
        autofocus
      >
      </v-text-field>
    </v-flex>
    <v-flex md3 class="text-xs-right">
      <v-icon
        v-if="!isEditMode"
        @click="$emit('onEdit')">
        edit
      </v-icon>
      <v-icon
        v-if="isEditMode"
        @click="$emit('onSave')">
        check
      </v-icon>
      <v-icon
        @click="$emit('onDelete')"
        class="ml-3">
        delete
      </v-icon>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: [
    'isEditMode',
    'title',
    'active',
    'record',
  ],
};
</script>

<style>
.title {
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 100%;
}
</style>
