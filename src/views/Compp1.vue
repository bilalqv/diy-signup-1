<template>
      <div>
        <v-card
          class="d-flex justify-start mb-6"
          flat
          tile
          height="90vh"
        >
        <Left />
        
        <v-card width="50%" class="px-16"  color="#f0f0f0">
              <p class="text-right mr-14 mt-10" >Have an account with us? <a href="" class="text-decoration-none" >Sign In</a> </p>
              <h2>Sign up with SuperBeings</h2>
              <p class="text-lowercase mb-10" >a free personality for you and your team awaits</p>
              
              <Buttons1 />
              <br>
              <v-row>
                <v-col cols="5" ><v-divider ></v-divider></v-col>
                <v-col cols="1" class="mt-0 pt-0"  > or </v-col>
                <v-col cols="5" ><v-divider ></v-divider></v-col>
              </v-row>
                  
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
                  :rules="[rules.email]"
                  
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
                          Terms & Conditions
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
    data () {
      return {
        email: '',
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
