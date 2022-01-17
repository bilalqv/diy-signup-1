<template>
  <v-app >
    <v-app-bar
      app
      color="white"
      dark
      depressed
      elevation="1"
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
          <v-card width="50%" class="pl-16"  color="white">
              <p class="text-right mr-14 mt-10" >Not a member? <a href="" class="text-decoration-none" >Sign Up Now</a> </p>
              <h2 class="mb-10" >Sign Into Superbeings</h2>
              <div d-flex justify-space-between>
                <v-btn depressed x-large 
                class="pa-5 mr-8 #e9eff7 rounded-lg text-capitalize  "
                height="70px"
                > 
                  <v-img
                  src="./assets/img1.png"
                  contain
                  width="30px"
                  height="30px"
                  ></v-img>Continue with Google</v-btn>
                <v-btn depressed x-large 
                class="pa-5 #e9eff7 rounded-lg text-capitalize font-size-small " 
                height="70px"
                >
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
    name: 'Comp2'
}
</script>