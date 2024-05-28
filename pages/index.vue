<template>
  <div>
    <h1>Login Page</h1>
    <button @click="login">Login</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'nuxt-composition-api'
import axios from 'axios'

export default defineComponent({
  name: 'IndexPage',

  setup(_, { store }) {
    const login = async () => {
      try {
        const response = await axios.post('https://dummyjson.com/auth/login', {
          username: 'emilys',
          password: 'emilyspass',
          expireInMins: 30,
        })
        console.log(response)
        const user = { jwt: response.data.token }
        store.dispatch('login', user)
        console.log(store.state.auth.jwt)
      } catch (error) {
        console.error('Login failed:', error)
      }
    }

    return {
      login,
    }
  },
})
</script>

<style>
/* Ajoutez votre style ici */
</style>
