import axios from 'axios'
import { LOG_IN, PRODUCT_DATA, PRODUCT_EDIT, SING_UP, USER_DATA ,PRODUCT_ONE, DELETE_MULTYPAL, RANGE_HIGH_TO_LOW, RANGE_LOW_TO_HIGH} from './actiontype';


export const SingupPost = (payload)=> async(dispatch)=>{
       try{
        const res = await axios.post(`http://localhost:3000/mandeep`,payload)
        dispatch({
            type : SING_UP,
            payload : res.data
        })
       }catch(err){
        console.log(err);
       }
}

export const userdataget = ()=> async(dispatch)=>{
    try{
     const res = await axios.get(`http://localhost:3000/mandeep`)
     dispatch({
         type : USER_DATA,
         payload : res.data
     })
    }catch(err){
     console.log(err);
    }
}

export const Currentuser = (payload)=>(dispatch)=>{
     dispatch({
        type: LOG_IN,
        payload : payload
     })
}

///////////////////////////////////////////////////////////////////////////////////////////////////////


export const ProductGetRequest = (minPrice, maxPrice,red,white,black,blue,green) => async (dispatch) => {
  try {

    console.log(minPrice);
    console.log(minPrice);
    const lowToHighRange = minPrice ? `&price_gte=${minPrice}` : "";
    const highToLowRange = maxPrice ? `&price_lte=${maxPrice}` : "";
    const filerbycolorred = red ? `&colorred=${red}` : "";
    const filerbycolorwhite = white ? `&colorwhite=${white}` : "";
    const filerbycolorblack = black ? `&colorblack=${black}` : "";
    const filerbycolorblue = blue ? `&colorblue=${blue}` : "";
    const filerbycolorgreen = green ? `&colorgreen=${green}` : "";

    const res = await axios.get(
      `http://localhost:3000/product?${highToLowRange}${lowToHighRange}${filerbycolorred}${filerbycolorwhite}${filerbycolorblack}${filerbycolorgreen}${filerbycolorblue}`
    );
    dispatch({
      type: PRODUCT_DATA,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};




export const Productadd = (payload) =>async(dispatch)=>{
    try{
     const res = await axios.post(`http://localhost:3000/product`,payload)
     dispatch({
         type : PRODUCT_EDIT,
         payload : res.data
    })
    }catch(err){
        console.log(err);
    }
 }

 export const Productonedetail = (id) =>async(dispatch)=>{
    try{
     const res = await axios.get(`http://localhost:3000/product/${id}`)
     dispatch({
         type : PRODUCT_ONE,
         payload : res.data
    })
    console.log(res.data)
    }catch(err){
        console.log(err);
    }
 }


 export const Productput = (id,payload) =>async(dispatch)=>{
    try{
     const res = await axios.put(`http://localhost:3000/product/${id}`,payload)
     dispatch({
         type : PRODUCT_ONE,
         payload : res.data
    })
    console.log(res.data)
    }catch(err){
        console.log(err);
    }
 }



 export const Productdelete  = (productIds) => async (dispatch) => {
   try {
     const res = await axios.delete(`http://localhost:3000/product`, {
       data: { productIds }
     });
     dispatch({
       type: DELETE_MULTYPAL, // Make sure you have the correct action type defined
       payload: res.data
     });
     console.log(res.data);
   } catch (err) {
     console.log(err);
   }
 };
 

