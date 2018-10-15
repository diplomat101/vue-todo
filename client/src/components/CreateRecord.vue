<template>
  <v-layout row wrap class="mt-4">
    <v-flex xs12 lg8 xl9 class="pr-3">
      <v-text-field
          :placeholder="placeholder"
          :value="value"
          @input="$emit('onInput', $event)"
          @keyup.enter.native="$emit('create')"
      ></v-text-field>
    </v-flex>
    <v-flex xs12 lg4 xl3 class="mb-2">
      <v-btn
          @click="$emit('create')"
          dark
          class="blue create-btn">
          <v-icon class="mr-2">add_circle</v-icon>
          Create
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  props: [
    'placeholder',
    'value',
  ],
};
</script>

<style>
.create-btn {
  margin-top: 13px;
}
</style>
