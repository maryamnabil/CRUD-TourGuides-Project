<template>
  <div class="container" style="margin-top: 5%;">
    <div class="row">
      <h2 class="font-weight-light text-center text-lg-left" style="margin-top:5%;">Welcome to Royal Manta's Tour Guides </h2>
    </div>
    <br>
    <!-- Filter search Boxes -->
    <div v-if="loggedIn" class="row">
      <!-- filter city -->
      <input  class="form-control col-4" type="text" v-model="searchCity" placeholder="Filter by city">
      <!-- filter language -->
      <input  class="form-control col-4" type="text" v-model="searchLanguage" placeholder="Filter by Language">
    </div>
    <br>
    <br>
    <div class="row" >
      <div class="card" style="width: 14rem;" v-for="tour in filteredtours" v-bind:key="tour">
        <img src="https://www.ibts.org/wp-content/uploads/2017/08/iStock-476085198.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text"><span class="inCard">Name :</span><b>{{tour['name']}}</b></p>
          <p class="card-text"><span class="inCard">Phone :</span><b>{{tour['phone']}}</b></p>
          <p class="card-text"><span class="inCard">fees :</span><b>{{tour['fees']}}</b></p>
          <p class="card-text"><span class="inCard">City :</span><b>{{tour['city']}}</b></p>
          <p class="card-text"><span class="inCard">Language :</span><b>{{tour['language']}}</b></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  

export default {
  name: 'Home',
    data: function() {
      return {tours:[],
        searchCity:'',
        searchLanguage:'',
        loggedIn:false
      }
    },
    methods: {
      ifLoggedIn: function(){
        if(localStorage.getItem('token')){
          this.loggedIn=true;
        }
      }
    },
    mounted () {
      this.ifLoggedIn();
      this.$http.get('http://localhost:3000/tours/getall')
      .then(
        response => {console.log(response); this.tours=response.data.rows})
    },
    //Filter 
    computed: {
      filteredtours: function () {
        var self = this;
        if(this.searchCity && !this.searchLanguage ){
          return this.tours.filter(function (tour) {
            return tour.city.toLowerCase().indexOf(self.searchCity.toLowerCase()) >= 0;
          });
        }
        else if(this.searchLanguage && !this.searchCity){
          return this.tours.filter(function (tour) {
              return tour.language.toLowerCase().indexOf(self.searchLanguage.toLowerCase()) >= 0;
              });
        }
        else if(this.searchLanguage && this.searchCity){
          return this.tours.filter(function (tour) {
            return (tour.language.toLowerCase().indexOf(self.searchCity.toLowerCase()) && tour.city.toLowerCase().indexOf(self.searchCity.toLowerCase()) >= 0);
            });            
        }
        else
          return this.tours
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.form-control{
  margin-right: 5%;
}

.card{
margin-right: 2%;
margin-bottom: 2%;
}
</style>
