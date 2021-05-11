<template>
  <q-page padding class="row flex-center">
    <q-card class="col-6">
      <q-card-section>
        <div class="text-h6 text-center">Login</div>
      </q-card-section>
      <q-card-section>
        <q-input filled class="q-mb-sm" v-model="user.username" label="User:" name="username" />
        <q-input filled type="password" class="q-mb-sm" v-model="user.password" label="Pass:" name="password" />
      </q-card-section>
      <q-card-actions class="col-12 row text-right">
        <div class="col-12">
          <q-btn label="esqueci a senha" class="q-mr-sm" color="secondary" />
          <q-btn label="logar" @click="logar" color="primary"/>
        </div>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      user: {
        username: null,
        password: null
      }
    }
  },
  methods: {
    logar () {
      const userBd = {
        username: 'desmennyellysson',
        password: 'desmeny123'
      }
      if (this.user.username === userBd.username && this.user.password === userBd.password) {
        this.$q.notify({
          message: 'Funfou!',
          color: 'positive'
        })
        this.$router.push('/')
      } else {
        this.$q.notify({
          message: 'Deu ruim...',
          color: 'negative'
        })
      }
    }
  }
}
</script>
