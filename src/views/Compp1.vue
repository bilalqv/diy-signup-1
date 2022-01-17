<template>
      <div>
        <v-card
          class="d-flex justify-start mb-6"
          :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
          flat
          tile
          height="90vh"
        >
        <Left />
        
        <v-card width="50%" class="pl-16"  color="#f0f0f0">
              <p class="text-right mr-14 mt-10" >Have an account with us? <a href="" class="text-decoration-none" >Sign In</a> </p>
              <h2>Sign up with SuperBeings</h2>
              <p class="text-lowercase mb-10" >a free personality for you and your team awaits</p>
              
              <Buttons1 />
              <br>
                <div d-flex flex-column align-center >
                  <v-divider ></v-divider>
                  
                  <!-- <v-divider></v-divider> -->
                </div>
              
              <v-form>
                <p class="font-weight-medium mt-10" >Use work email</p>
                <v-col 
                cols="8"
                left
                >
                  <v-text-field
                  label="abc@gmail.com"
                  solo
                  class="rounded-lg"
                  elevation="0"
                  flat
                  
                  ></v-text-field>
                </v-col>
                
              </v-form>
              <v-checkbox :v-model="false">
                <template v-slot:label>
                  <div>
                    I agree to platform
                      <template>
                        <a
                          href="#"
                          @click.stop
                          
                          class="text-decoration-none"
                        >
                          terms & conditions
                        </a>
                        and
                        <a
                          href="#"
                          @click.stop
                          
                          class="text-decoration-none"
                        >
                          Privacy Policy
                        </a>
                      </template>
                  </div>
                </template>
              </v-checkbox>
              <p class="red--text"   >Please agree to terms and conditions</p>
              <v-btn class="primary ma-4 pa-5" >
                Sign Up
              </v-btn>
            
              <v-btn fab depressed large absolute right class="primary" >
                <v-icon>mdi-message-text</v-icon>
              </v-btn>
            </v-card>
        </v-card>
      </div>
</template>

<script>
import AppBar from '../components/AppBar.vue'
import Buttons1 from '../components/Buttons1.vue'
import Left from '../components/Left.vue'

  

  export default {
    name: 'Home',

    components: {
        AppBar,
        Left,
        Buttons1,
    },
  }
</script>
