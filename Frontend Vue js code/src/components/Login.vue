<template>
  <div class="container" style="margin-top: 5%;">
    <form class="text-center p-5" action="#!" style="border: 2px solid grey;
    border-radius: 5px;">
    <h2 class="font-weight-light text-center" style="margin-top:5%;margin-bottom: 5%;">Login</h2>
      <div class="col-8 offset-2" id="input">
        <!-- email -->
        <input v-model="email" type="email" class="form-control" placeholder="Email">
      </div>
      <div class="col-8 offset-2" id="input">
        <!-- Password -->
        <input  v-model="password" type="password" class="form-control" placeholder="Password">
      </div>
      <button class="btn btn-primary col-2" v-on:click="login">Login</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'Login',
  props: {
  },
  data: function() {
      return {
      	email:'',
      	password:'',
      	token:'',
      	loggedIn:false,

      }
  },
  methods: {
    login: function () {
      let body={
        "email":this.email,
        "pass":this.password
			}			
		this.$http.post('http://localhost:3000/users/login',body).then(
      response => {
        console.log(response);
        localStorage.setItem('token', response.data.token);
        this.$notify({
          group: 'foo',
          title: 'Success',
          text: 'You Logged in !'
        });
        this.$router.replace({ name: 'home' });
        location.reload();
      }
    )}
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#input{
  margin-bottom: 5%;
  text-align: center;
}

.btn{
  font-size: 120%;
  padding-left:2%;
  padding-right:2%;
}
</style>
