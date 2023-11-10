
import { DELETE_MULTYPAL, PRODUCT_ADD, PRODUCT_DATA ,PRODUCT_ONE} from '../actiontype'

const intialValue = {
    ProductData : [],
    ProductOne : {}
}
function Productreducer(state = intialValue, {type, payload}) {
    switch(type){
        case PRODUCT_DATA:
            return{
            ...state,
            ProductData : payload
        }
      
        case PRODUCT_ADD:
    return {
        ...state,
        ProductData: [...state.ProductData, payload], 
    }

    case PRODUCT_ONE:
        return{
            ...state,
            ProductOne : payload
        }

        case DELETE_MULTYPAL:
            return {
              ...state,
              ProductData: payload,
            }

    default:
        return state;
    }
    
}

export default Productreducer;

// case DELETE_MULTYPAL:
//     const productIdsToDelete = payload;
//     const updatedProductData = state.ProductData.filter(
//       (product) => !productIdsToDelete.includes(product.id)
//     );
//     return {
//       ...state,
//       ProductData: updatedProductData,
//     }