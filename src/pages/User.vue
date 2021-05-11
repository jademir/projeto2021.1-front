<template>
  <q-page padding>
    <q-btn icon="arrow_left" flat @click="voltar"/>
   <q-card class="q-mb-md">
      <q-card-section>
        <div class="text-subtitle2">{{user.name}}</div>
      </q-card-section>
      <q-card-section>
        <div>
          <span class="text-weight-medium">Username: </span>
          {{user.username}}
        </div>
        <div>
          <span class="text-weight-medium">E-mail: </span>
          {{user.email}}
        </div>
        <div>
          <span class="text-weight-medium">Phone: </span>
          {{user.telephone}}
        </div>
        <div>
          <span class="text-weight-medium">Website: </span>
          {{user.website}}
        </div>
        <div>
          <span class="text-weight-medium">Company: </span>
          {{user.company.name}}
        </div>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <div class="text-subtitle1 q-mb-md">Address</div>
        <div>
          <span class="text-weight-medium">Street: </span>
          {{user.address.street}}
        </div>
        <div>
          <span class="text-weight-medium">Suite: </span>
          {{user.address.suite}}
        </div>
        <div>
          <span class="text-weight-medium">Zipcode: </span>
          {{user.address.zipcode}}
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'UserView',
  data () {
    return {
      user: {}
    }
  },
  methods: {
    loadUser () {
      this.$axios.get(`http://jsonplaceholder.typicode.com/users/${this.$route.params.id}`).then(response => {
        this.user = response.data
      })
    },
    voltar () {
      this.$router.go(-1)
    }
  },
  beforeMount () {
    this.loadUser()
  }
}
</script>
