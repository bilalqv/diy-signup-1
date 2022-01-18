<template>
    <div>
        <v-card
        class="d-flex justify-start mb-6"
        flat
        tile
        height="90vh"
        >
        <Left />
        <v-card width="50%" class="px-16"  color="white">
              <p class="text-right mr-8 mt-10" >Not a member? <a href="#" class="text-decoration-none" >Sign Up Now</a> </p>
              <h2 class="mb-10" >Forgot Password?</h2>
              <p class="font-weight-medium"> Type the address linked to your account and we'll send you <br> password reset instructions. They might end up in your spam <br> folder, so please check there as well. </p>
              <br>
              <v-form>
                <v-col 
                cols="8"
                left
                >
                  <p class="font-weight-medium mt-6" >*Company email address</p>
                  <v-text-field
                  label="abc@gmail.com"
                  solo
                  class="rounded-lg "
                  elevation="0"
                  flat
                  background-color="#e9eff7"
                  v-model="email"
                  :rules="[rules.email]"
                  ></v-text-field>
                  <p >Already a member?
                    <a href="" class="text-decoration-none" >Sign In</a>
                  </p>
                </v-col>
              </v-form>
              
              <v-btn class="primary ma-4 pa-5" >
                Send Instructions
              </v-btn>
              <br>
              <br>
              
              <v-btn fab depressed large absolute right class="primary" >
                <v-icon>mdi-message-text</v-icon>
              </v-btn>
            </v-card>
        </v-card>
    </div>
</template>

<script>
import Left from '../components/Left.vue'
export default {
    components: { Left  },
    data () {
      return {
        email: "",
        rules: {
          
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
        },
      }
    },
}
</script>