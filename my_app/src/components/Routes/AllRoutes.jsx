import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from '../Login/Login'
import SignupD from '../Signup/Signup'
import About from '../About/About'
import AddProducts from '../Products/AddProducts'
import EditProduct from '../Products/EditProduct'
function AllRoutes() {
  return (
    <div>
     <Routes>
        <Route path="/" element={<About/>}>About</Route>
        <Route path="/login" element={<Login/>}>Log kr le </Route>
        <Route path="/signup" element={<SignupD/>}>Signup kr le </Route>
        <Route path = '/addproduct' element = {<AddProducts/>}></Route>
        <Route path="/product/:id" element={<EditProduct />}/>
     </Routes>
    </div>
  )
}

export default AllRoutes