<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="8"
        md="4"
      >
        <v-card class="elevation-12">
          <v-toolbar
            color="primary"
            dark
            flat
          >
            <v-toolbar-title>Registr form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-text-field
                label="Email"
                name="email"
                type="email"
                :rules="emailRules"
                v-model='email'
              ></v-text-field>

              <v-text-field
                id="password"
                label="Password"
                name="password"
                :rules="passwordRules"
                :counter="6"
                type="password"
                v-model="password"
              ></v-text-field>
              <v-text-field
                id="password"
                label="Confrim-Password"
                name="confirm"
                :rules="confirmPasswordRules"
                :counter="6"
                type="password"
                v-model="confirmPassword"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              @click='onSubmit'
              :loading="loading"
              :disabled="!valid || loading"
            >
              Create account</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      valid: false,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'pass is required',
        v => (v && v.length >= 6) || 'pass must be less than 10 characters'
      ],
      confirmPasswordRules: [
        v => !!v || 'pass is required',
        v => v === this.password || 'password incorrect'
      ]
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    onSubmit () {
      if (this.$refs.form.validate()) {
        const user = {
          email: this.email,
          password: this.password
        }
        // console.log(user)
        this.$store.dispatch('registrUser', user).then(() => {
          this.$router.push('/')
        }).catch(err => console.log(err)
        )
      }
    }
  }
}
</script>

<style lang="stylus"></style>
