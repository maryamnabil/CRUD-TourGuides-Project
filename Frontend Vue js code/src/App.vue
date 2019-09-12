<template>
  <div id="app">
    <!-- Navbar section -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#"><router-link to="/home">Royal Manta</router-link></a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link">
              <router-link to="/home">Home</router-link><span class="sr-only">(current)</span>
            </a>
          </li>
          <li v-if="loggedIn" class="nav-item">
            <a class="nav-link">
              <router-link to="/add-tour">Add Tour guide</router-link>
            </a>
          </li>
          <li v-if="loggedIn" class="nav-item">
            <a class="nav-link" >
              <router-link to="/my-tours">My Tours</router-link>
            </a>
          </li>
          <li v-if="!loggedIn" class="nav-item">
            <a class="nav-link" >
              <router-link to="/login">Login</router-link>
            </a>
          </li>
          <li v-if="!loggedIn" class="nav-item">
            <a class="nav-link" >
              <router-link to="/Signup">Sign Up</router-link>
            </a>
          </li>
          <li v-if="loggedIn" class="nav-item">
            <a class="nav-link" @click.prevent="logout" >
              <router-link to="/home">Log Out</router-link>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <!--   router outlet -->  
    <router-view></router-view>
    <!-- simple notifier for error handling -->
    <notifications group="foo" />
  </div>
</template>


<script>

export default {
  name: 'app',
  components: {

  },
  data: function() {
      return {
        loggedIn:false
        
    }},
  methods: {
    ifLoggedIn: function(){
      if(localStorage.getItem('token')){
        this.loggedIn=true;
      }
    },
    logout: function(){
      localStorage.removeItem('token');
      // this.$router.go('/home')
      this.$router.replace({ name: 'home' });
      location.reload();
    }
  },
  mounted(){
    this.ifLoggedIn();
  }

}
</script>

<style>
a{
  color: grey;
}
</style>
