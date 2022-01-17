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
        <v-card width="50%" class="pl-16"  color="white">
              <p class="text-right mr-14 mt-10" >Not a member? <a href="" class="text-decoration-none" >Sign Up Now</a> </p>
              <h2 class="mb-10" >Sign Into Superbeings</h2>
              <Buttons2 />
              <br>
                <div d-flex flex-column align-center >
                  <v-divider ></v-divider>
                  
                  <!-- <v-divider></v-divider> -->
                </div>
              
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
                  
                  ></v-text-field>
                  
                </v-col>
                  
                  <v-col 
                  cols="8"
                  left
                  >
                  <p class="font-weight-medium" >*Password</p>
                  <v-text-field
                  label="abc@gmail.com"
                  solo
                  class="rounded-lg"
                  elevation="0"
                  flat
                  background-color="#e9eff7"
                  ></v-text-field>
                  <p class="red--text"   >Forgot Passwrord?</p>
                </v-col>
                
              </v-form>
              
              <v-btn class="primary ma-4 pa-5" >
                Log In
              </v-btn>
              
              <v-btn fab depressed large absolute right class="primary" >
                <v-icon>mdi-message-text</v-icon>
              </v-btn>
            </v-card>
        </v-card>
    </div>
</template>

<script>
import Buttons2 from '../components/Buttons2.vue'
import Left from '../components/Left.vue'
export default {
    
    components: {Left, Buttons2  }
}
</script>