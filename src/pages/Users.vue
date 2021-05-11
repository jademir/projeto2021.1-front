<template>
  <q-page padding>
    <q-card v-for="user in users" :key="user.id" class="q-mb-md">
      <q-card-section>
        <div class="text-subtitle2">{{user.name}}</div>
      </q-card-section>
      <q-card-section>
        <div>
          <span>username</span>
          {{user.username}}
        </div>
        <div>
          <span>e-mail</span>
          {{user.email}}
        </div>
      </q-card-section>
      <q-card-actions class="col-12 row text-right">
        <div class="col-12">
          <q-btn label="Ver mais" @click="showUser(user.id)" color="primary"/>
        </div>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'ListaDeUsuarios',
  data () {
    return {
      users: []
    }
  },
  methods: {
    loadUsers () {
      this.$axios.get('http://jsonplaceholder.typicode.com/users').then(response => {
        this.users = response.data
      })
    },
    showUser (id) {
      this.$router.push(`user/${id}`)
    }
  },
  beforeMount () {
    this.loadUsers()
  }
}
</script>
