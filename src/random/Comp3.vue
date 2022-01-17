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
      
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'Comp3',

  data: () => ({
    //
  }),
};
</script>
