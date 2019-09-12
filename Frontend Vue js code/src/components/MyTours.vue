<template>
  <div class="container" style="margin-top: 5%;">
    <div class="row">
      <h2 class="font-weight-light text-center text-lg-left" style="margin-top:5%;">Welcome to Your Created Tour Guides
      </h2>
    </div>
    <br>
    <div class="row">
      <div v-for="tour in tours" v-bind:key="tour" class="card" style="width: 14rem;">
          <img src="https://www.ibts.org/wp-content/uploads/2017/08/iStock-476085198.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text"><span class="inCard">Name :</span><b>{{tour['name']}}</b></p>
            <p class="card-text"><span class="inCard">Phone :</span><b>{{tour['phone']}}</b></p>
            <p class="card-text"><span class="inCard">Fees :</span><b>{{tour['fees']}}</b></p>
            <p class="card-text"><span class="inCard">City :</span><b>{{tour['city']}}</b></p>
            <p class="card-text"><span class="inCard">Language :</span><b>{{tour['language']}}</b></p>
            <button class="btn btn-primary" v-on:click="Delete(tour['tour_id'])">Delete</button>
            <button  class="btn btn-primary" v-on:click="Edit(tour['tour_id'])">Edit</button>
        </div>
      </div>
      <br>
      <br>
      </div>
  </div>
</template>

<script>
import VueJwtDecode from 'vue-jwt-decode'

export default {
  name: 'MyTours',
  props: {
  },
  data: function() {
    return {
      tours:[]
    }
  },
  mounted () {
    this.$http.get('http://localhost:3000/tours/getmytours/'+VueJwtDecode.decode(localStorage.getItem('token')).userId)
      .then(response => this.tours=response.data.rows)
  },
  methods: {
    
    Delete: function (id) {
      // console.log(id)
      this.$http.delete('http://localhost:3000/tours/delete/'+id).then(response =>{
          this.$notify({
            group: 'foo',
            title: 'Success',
            text: 'You Deleted The tour !'
          });
          this.$router.push({ name: 'home'});
        })
    },

    Edit: function (id) {
      // console.log(id)
      this.$router.push({ name: 'add-tour', params: {id}});
    },
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn{
  margin-right: 7%;
}

.card{
margin-right: 2%;

}
</style>
