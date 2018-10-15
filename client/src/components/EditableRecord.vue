<template>
  <v-layout row wrap class="mt-4">
    <v-flex md8  class="text-xs-left pr-4">
      <span
        v-if="!isEditMode"
      >
        {{title}}
      </span>
      <v-text-field
        v-if="isEditMode"
        :value="title"
        @input="$emit('onInput', $event)"
        @keyup.enter.native="$emit('onSave')"
        autofocus
      >
      </v-text-field>
    </v-flex>
    <v-flex md4 class="text-xs-right">
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
        class="ml-4">
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
    'record',
  ],
};
</script>

<style>
</style>
