import MyTours from '../components/MyTours.vue'
import Home from '../components/Home.vue'
import AddTour from '../components/AddTour.vue'
import Login from '../components/Login.vue'
import Signup from '../components/Signup.vue'

export default[
{
	path:'/',
	name:'home',
	component:Home
},
{
	path:'/home',
	name:'home',
	component:Home
},
{
	path:'/my-tours',
	name:'my-tours',
	component:MyTours
},
{
	path:'/add-tour',
	name:'add-tour',
	component:AddTour
},
{
	path:'/login',
	name:'login',
	component:Login
},
{
	path:'/Signup',
	name:'signup',
	component:Signup
}

]