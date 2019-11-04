<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm-3>
        <h1 class="text--secondary mb-3">create new add</h1>
        <v-form
          ref="form"
          v-model="valid"
          validation>
           <v-text-field
             label="title"
             name="title"
             type="tex"
             required
             :rules="[v => !!v || 'title is required']"
             v-model='title'
           ></v-text-field>

           <v-text-field
             id="password"
             label="description"
             name="description"
             :rules="[v => !!v || 'description is required']"
             type="text"
             multi-line
             v-model="description"
           ></v-text-field>
         </v-form>
         <v-layout row>
           <v-flex xs12>
             <v-btn
                @click="triggerUpload"
                color="blue-grey"
                class="ma-2 white--text"
             >
                Upload
                <v-icon right dark>mdi-cloud-upload</v-icon>
             </v-btn>
             <input
             @change="onFileChange"
             type="file"
             ref="fileInput"
             style="display: none;"
             accept="image/*">
           </v-flex>
         </v-layout>
         <v-layout row>
           <v-flex xs12>
             <img :src="imageSrc" height="150px" v-if="imageSrc">
           </v-flex>
         </v-layout>
         <v-layout row>
           <v-flex xs12>
             <v-switch
                v-model="promo"
                label="add promo"
             ></v-switch>
           </v-flex>
         </v-layout>
         <v-layout row>
           <v-flex xs12>
             <v-spacer></v-spacer>
             <v-btn
             :loading="loading"
             :disabled="!valid || loading"
              class="success"
              @click="createAd"
              >
              creaate ad</v-btn>
           </v-flex>
         </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      description: '',
      promo: false,
      valid: false,
      image: null,
      imageSrc: ''
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    createAd () {
      if (this.$refs.form.validate() && this.image) {
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo,
          image: this.image
        }
        this.$store.dispatch('createAd', ad).then(() => {
          this.$router.push('/list').catch(() => {})
        })
      }
    },
    triggerUpload () {
      this.$refs.fileInput.click()
    },
    onFileChange (event) {
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.onload = e => {
        this.imageSrc = reader.result
      }
      reader.readAsDataURL(file)
      this.image = file
    }
  }
}
</script>

<style lang="stylus">

</style>
