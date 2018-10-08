<template>
  <transition name="slide-fade">
    <v-container>
        <v-layout row wrap>
            <v-flex sm6 offset-sm3>
                <div>
                    <h1>Register</h1>
                    <v-text-field
                        label="Email"
                        placeholder="Email"
                        :value="registerEmail"
                        @input="setRegisterEmail"
                    >
                    </v-text-field>
                    <v-text-field
                        label="Password"
                        placeholder="Password"
                        type="password"
                        autocomplete="new-password"
                        :value="registerPassword"
                        @input="setRegisterPassword"
                    >
                    </v-text-field>
                    <v-alert
                      type="error"
                      :value="registerError"
                    >
                    {{registerError}}
                    </v-alert>
                    <v-btn color="blue" dark class="mt-4" @click="register">
                        <v-icon class="mr-2">account_circle</v-icon>
                        Register
                    </v-btn>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
  </transition>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('authentication', [
      'registerEmail',
      'registerPassword',
      'registerError',
    ]),
  },
  methods: {
    ...mapMutations('authentication', [
      'setRegisterEmail',
      'setRegisterPassword',
    ]),
    ...mapActions('authentication', [
      'register',
    ]),
  },
};
</script>

<style>
.slide-fade-enter-active {
  transition: all .4s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
