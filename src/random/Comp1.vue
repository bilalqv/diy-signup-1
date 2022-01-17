<template>
  <v-app >
    <v-app-bar
      app
      color="white"
      dark
      depressed
      elevation="0"
    >
      <div class="d-flex align-center">
        <v-img
          alt="SuperBeings Logo"
          class="shrink mr-2"
          contain
          src="https://uploads-ssl.webflow.com/5ea18d0bbd4a5ad52498ae3e/6188fb23ce2d01f4d5417b32_Superbeings%20Logo%20Blue-01-01-01.png"
          
          width="120px"
          height="40px"
          href="#"
        ></v-img>

      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <div>
        <v-card
          class="d-flex justify-start mb-6"
          :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
          flat
          tile
          height="90vh"
        >
          <v-card  color="#d3e0f0" width="50%" >
              <p class="pa-12 font-weight-black" >Employee success platform that converts <br> feedback into actionable insights.</p>
              <v-img  src="./assets/logo.png" width="250px" class="pa-6 ml-12" alt=""></v-img>
          </v-card>
          <v-card width="50%" class="pl-16"  color="#f0f0f0">
              <p class="text-right mr-14 mt-10" >Have an account with us? <a href="" class="text-decoration-none" >Sign In</a> </p>
              <h2>Sign up with SuperBeings</h2>
              <p class="text-lowercase mb-10" >a free personality for you and your team awaits</p>
              <div d-flex justify-space-between>
                <v-btn depressed x-large class="pa-5 mr-2 white rounded-lg text-capitalize  "> 
                  <v-img
                  src="./assets/img1.png"
                  contain
                  width="30px"
                  height="30px"
                  ></v-img>Continue with Google</v-btn>
                <v-btn depressed x-large class="pa-5 white rounded-lg text-capitalize font-size-small " >
                  <v-img
                  src="./assets/img2.jpg"
                  contain
                  width="30px"
                  height="30px"
                  ></v-img>
                  Continue with Slack</v-btn>
              </div>
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
                          v-on="on"
                          class="text-decoration-none"
                        >
                          terms & conditions
                        </a>
                        and
                        <a
                          href="#"
                          @click.stop
                          v-on="on"
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
              <br>
              <br>
              
              <v-btn fab depressed large absolute right class="primary" >
                <v-icon>mdi-message-text</v-icon>
              </v-btn>
            </v-card>
        </v-card>
      </div>
      
    </v-main>
  </v-app>
</template>

<script>
export default {
    name: 'Comp1'
}
</script>