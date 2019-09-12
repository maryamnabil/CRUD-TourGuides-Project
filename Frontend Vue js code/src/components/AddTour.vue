<template>
  <div class="container" style="margin-top: 5%;">
  <form class="text-center p-5" action="#!" style="border: 2px solid grey;border-radius: 5px;">
    <h2 class="font-weight-light text-center" style="margin-top:5%;margin-bottom: 5%;">Add Tour Guide</h2>
    <div class="col-8 offset-2" id="input">
      <!-- name -->
      <input v-model="tour.name" type="text" class="form-control" placeholder="Name">
    </div>
    <div class="col-8 offset-2" id="input">
      <!-- Phone -->
      <input  v-model="tour.phone" type="text" class="form-control" placeholder="Contact number">
    </div>
      <div class="col-8 offset-2" id="input">
        <!-- Fees -->
        <input v-model="tour.fees" type="number" class="form-control mb-4" placeholder="Fees in $">
      </div>
      <div class="col-8 offset-2" id="input">
        <!-- city -->
        <input v-model="tour.city" type="text" class="form-control mb-4" placeholder="City">
      </div>
      <div class="col-8 offset-2" id="input">
        <!-- language -->
        <input v-model="tour.language" type="text" class="form-control mb-4" placeholder="Languages Comma seperated">
      </div>
      <button class="btn btn-primary col-2" v-on:click="add">{{buttonText}}</button>
    </form>
  </div>
</template>

<script>
import VueJwtDecode from 'vue-jwt-decode'

export default {
  name: 'AddTours',
    data: function() {
      return {
        name:'',
        phone:'',
        fees:'',
        city:'',
        language:'',
        tour:{},
        buttonText:''
      }
    },
    methods: {
      add: function () {
        let body={
          "name":this.tour.name,
          "phone":this.tour.phone,
          "fees":this.tour.fees,
          "user_id":VueJwtDecode.decode(localStorage.getItem('token')).userId,
          "city":this.tour.city,
          "language":this.tour.language
        }
      // console.log(body)
      if(this.buttonText=="Add Tour Guide"){
        this.$http.post('http://localhost:3000/tours/addtour',body).then(response => {
            this.$notify({
              group: 'foo',
              title: 'Success',
              text: 'You Added a tour guide successfully'
            });
            this.$router.push({ name: 'my-tours'});
          },
          (err)=>{
            console.log(err)
            this.$notify({
              group: 'foo',
              title: 'Error',
              text: 'An error occured'
            });        
          })
      }
      else
        this.$http.put('http://localhost:3000/tours/edit/'+this.tour.tour_id,body).then(
            response => {
              this.$notify({
                group: 'foo',
                title: 'Success',
                text: 'You Updated a tour guide successfully'
            });
              this.$router.push({ name: 'my-tours'});
            })
      }
    },
    mounted () {
      if(this.$route.params.id){
        this.$http.get('http://localhost:3000/tours/getById/'+this.$route.params.id).then(response => {this.tour=response.data.rows[0]})
        this.buttonText='Update Tour Guide'
      }
      else{
        this.tour={
          name:'',
          phone:'',
          fees:'',
          city:'',
          language:''
        }
        this.buttonText='Add Tour Guide'
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
