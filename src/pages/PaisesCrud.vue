<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
           <h1> PaísesCrud </h1>
           <v-data-table
              :headers="headers"
              :items="paises"
              :search="search"
              sort-by="id"
              class="elavation-1">
           </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios"

export default {
  name: "PaisesCrud",
  data: () => ({
    search:"",
    headers: [
      { text: "Id", value: "id"},
      { text: "Nome", value: "nome"},
      { text: "Capital", value: "capital"}
    ],
    paises: []
  }),
  methods: {
    inicializa() {
      axios.get('http://localhost:3000/paises')
        .then((response) => {
          this.paises = response.data
        })
        .catch((error)=> console.log(error))
    }
  },
  created() {
    this.inicializa()
  }
};
</script>