<template>
	<div class="container" style="margin-top: 5%;">
		<!-- Sign Up Form -->
		<form class="text-center p-5" action="#!" style="border: 2px solid grey;border-radius: 5px;">
      <h2 class="font-weight-light text-center" style="margin-top:5%;margin-bottom: 5%;">Sign Up</h2>
        	<div class="col-8 offset-2" id="input">
            	<!-- email -->
            	<input v-model="email" type="email" class="form-control" placeholder="Email">
        	</div>
        	<div class="col-8 offset-2" id="input">
            	<!-- Password -->
            	<input  v-model="password" type="password" class="form-control" placeholder="Password">
       		</div>
        	<div class="col-8 offset-2" id="input">
        		<!-- confirm password -->
            	<input v-model="confirmPassword" type="password" class="form-control mb-4" placeholder="confirm password">
        	</div>
        	<button class="btn btn-primary col-2"  v-on:click="signup">Sign Up</button>
		</form>
  	</div>
</template>

<script>

export default {
  name: 'Signup',
  props: {
  },
  data: function() {
    return{
    	email:'',
      	password:'',
      	confirmPassword:''
	}
  },
  methods: {
    signup: function () {
    	if(this.password==this.confirmPassword)
    	{
      		let body={
        		"email":this.email,
        		"pass":this.password
			}			
			this.$http.post('http://localhost:3000/users/register',body).then( (response) =>{  
      				console.log(response)         
      				this.$notify({
      					group: 'foo',
      					title: 'Success',
      					text: 'You Signed Up !'
      				});
    				this.$router.push({ name: 'login'});
    				}, 
    			(err)=>{
      				console.log("err",err)   
            		this.$notify({
            			group: 'foo',
            			title: 'error',
            			text: err
      				});
    			})
    	}
    	else
    	{
    		this.$notify({
            	group: 'foo',
            	title: 'error',
            	text: 'make sure 2 passwords are equal'
      		});
    	}
    }
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
