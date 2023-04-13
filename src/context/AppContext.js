import React, { useContext, useReducer, useEffect, createContext } from 'react'
import { getLocalStorage } from '../utils/utilHelpers'
import { reducer } from './reducer'
import axios from 'axios'

let endpoints = [
  'http://localhost:3004/products',
  'http://localhost:3004/category'
];

const url = 'http://localhost:3004/products';
const url_categories = 'http://localhost:3004/category';

export const initialStates = {
  loading: false,
  cart: getLocalStorage(),
  amount: 0,
  grid: true,
  list: false,
  storeProducts: [{ id: 1, name: "Moen Home Care Brushed Nickel 9\" Designer Hand Grip", img: "/img/7UP09Y.jpg", price: 26.40, weight: 2, category: "Grabs" }],
  category:  [
    {
      "id": 1,
      "name": "Carbonated Drink"
    },
    {
      "id": 2,
      "name": "Milk Based Rtd"
    },
    {
      "id": 3,
      "name": "Energy Drink-rtd"
    }
  ],
  cashOptionEntity: "amount",
  isModalOpen: false,
  isSearchModalOpen:false,
  edit: false,
  discountModal: false,
  isAddPersonModalOpen: false,
  isOpenSelectedModal: false,
  selectedItem: null,
  cartSubTotal: 0,
  cartTax: 0,
  cartTotal: 0,
  openModal: (obj) => { },
  closeModal: (id) => { },
  clearCart: () => { },
  remove: (id) => { },
  editDiscount: (product, discount) => { },
  editQty: (product, quantity) => { },
  changeCashEntity: (entity) => { },
  add_to_cart: (product, quantity) => { },
}


const AppContext = createContext({
  state: initialStates,
  dispatch: () => undefined,
});

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialStates)

  const openModal = (obj) => {
    dispatch({ type: 'OPEN_MODAL', payload: { type: obj.type, id: obj.id } })
  };

  const changeDisplay = (id) => {
    dispatch({ type: 'CHANGE_DISPLAY', payload: id})
  }

  const closeModal = (id) => {
    dispatch({ type: 'CLOSE_MODAL', payload: id })
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id })
  }

  const editDiscount = (product, discount) => {
    dispatch({ type: 'EDIT_DISCOUNT', payload: { product, discount } })
  }

  const editQty = (product, quantity) => {
    dispatch({ type: 'EDIT_QTY', payload: { product, quantity } })
  }

  const fetchData = async () => {
    dispatch({ type: 'LOADING' })
    try {
      const response = await axios(url);
      const data = response.data;
      dispatch({ type: 'DISPLAY_ITEMS', payload: data });
    } catch (e) {
      console.log(e.response);
    }

  }

  const fetch = async () => {
    Promise.all([
      axios.get(url),
      axios.get(url_categories)
    ])
      .then(response => {
        const user = response[0].data
        const comments = response[1].data
        console.log(user, comments);
      })
      .catch(error => {
        console.log(error);
      });

  }




  const changeCashEntity = (entity) => {
    dispatch({ type: 'CASH_ENTITY', payload: entity });
  }

  const add_to_cart = (product, quantity) => {
    dispatch({ type: 'ADD_TO_CART', payload: { product, quantity } });
  }

  useEffect(() => {
    fetchData();
    fetch();
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
    dispatch({ type: 'GET_TOTALS' });
  }, [state.cart])

  return (
    <AppContext.Provider
      value={{ state: { ...state, openModal, closeModal, clearCart, remove, editDiscount, editQty, changeCashEntity, add_to_cart, changeDisplay }, dispatch }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }