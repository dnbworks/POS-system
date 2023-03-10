import { InArray, PriceHelper } from "../utils/utilHelpers";

export function reducer(state, action) {

  switch (action.type) {
    case 'OPEN_MODAL':
      if (action.payload.type === "add_customer") {
        return { ...state, isAddPersonModalOpen: true }
      }
      if (action.payload.type === "customer_search") {
        return { ...state, isSearchModalOpen: true }
      }
      if (typeof action.payload.type === "number") {
        const item = state.storeProducts.find((item) => item.id === action.payload.type)
        return { ...state, isOpenSelectedModal: true, selectedItem: item }
      }
      if (action.payload.type === "qty") {
        const item = state.cart.find((item) => item.id === action.payload.type)
        return { ...state, isOpenSelectedModal: true, selectedItem: item, edit: true }
      }
      if (action.payload.type === "discount") {
        const item = state.cart.find(item => item.id === action.payload.type)
        return { ...state, discountModal: true, selectedItem: item, edit: true }
      }
      return { ...state }

    case 'CLOSE_MODAL':
      if (action.payload === "customer") {
        return { ...state, isSearchModalOpen: false }
      }
      if (typeof action.payload === "number") {
        return { ...state, isOpenSelectedModal: false, selectedItem: undefined }
      }
      if (action.payload == "discount") {
        return { ...state, discountModal: false, selectedItem: undefined }
      }
      return { ...state, isAddPersonModalOpen: false }

    case 'REMOVE':
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
      }
    case 'CHANGE_DISPLAY':
      if (action.payload == "grid") {
        return { ...state, grid: true, list: false }
      }
      if (action.payload == "list") {
        return { ...state, list: true, grid: false }
      }
      return {...state}

    case 'EDIT_DISCOUNT':
      let tempCart1 = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.product.id) {
          var discount, TotalDiscount, percent;
          if (state.cashOptionEntity === "amount") {
            discount = parseFloat(String(action.payload.discount));
            TotalDiscount = (discount * cartItem.qty).toFixed(2);
          } else {
            discount = parseFloat(String(action.payload.discount));
            percent = (discount / 100) * cartItem.price;
            TotalDiscount = (percent * cartItem.qty).toFixed(2);
          }

          const itemTotal = (cartItem.qty * cartItem.price);
          const total = (itemTotal - parseFloat(TotalDiscount)).toFixed(2);

          return { ...cartItem, discount: PriceHelper(String(discount)), total, totalDisc: PriceHelper(String(TotalDiscount)) }
        }
        return cartItem
      })
      return { ...state, cart: tempCart1, discountModal: false, edit: false }

    case 'EDIT_QTY':
      let tempCart2 = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.product.id) {
          let qty = action.payload.quantity;
          const TotalDiscount = (parseFloat(String(cartItem.discount)) * qty).toFixed(2);
          console.log(PriceHelper(String(TotalDiscount)));
          const itemTotal = (qty * cartItem.price);
          const total = (itemTotal - parseFloat(TotalDiscount)).toFixed(2);
          return { ...cartItem, qty, total, totalDisc: PriceHelper(String(TotalDiscount)) }
        }
        return cartItem
      })
      return { ...state, cart: tempCart2, discountModal: false, edit: false, isOpenSelectedModal: false }

    case 'CASH_ENTITY':
      return { ...state, cashOptionEntity: action.payload }

    case 'LOADING':
      return { ...state, loading: true }

    case 'DISPLAY_ITEMS':
      return { ...state, storeProducts: action.payload, loading: false }

    case 'DISPLAY_DISPLAY_CATEGORY':
      return { ...state, category: action.payload, loading: false }

    case 'ADD_TO_CART':
      const tempProducts = [...state.storeProducts];
      const index = state.storeProducts.indexOf(action.payload.product);
      const product = tempProducts[index];

      if (!InArray(action.payload.product.id, state.cart)) {
        const item = { id: product.id, name: product.name, price: product.price, qty: action.payload.quantity, discount: "0.00", totalDisc: "0.00", total: 0 }
        const price = item.price * item.qty;
        item.total = price;
        return { ...state, cart: [...state.cart, item], isOpenSelectedModal: false }
      }

      // TODO update discount according to cash entity
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.product.id) {
          const qty = cartItem.qty + action.payload.quantity;
          const itemTotal = (qty * cartItem.price).toFixed(2);
          const TotalDiscount = (parseFloat(String(cartItem.discount)) * qty).toFixed(2);
          const total = (parseFloat(itemTotal) - parseFloat(TotalDiscount)).toFixed(2);
          return { ...cartItem, qty, total, totalDisc: TotalDiscount }
        }
        return cartItem
      })
      return { ...state, cart: tempCart, isOpenSelectedModal: false }

    case 'GET_TOTALS':
      let { cartSubTotal, amount } = state.cart.reduce((cartTotal, cartItem) => {
        const { total, count } = cartItem
        cartTotal.cartSubTotal += parseFloat(total)
        cartTotal.amount += count
        return cartTotal
      },
        {
          cartSubTotal: 0,
          amount: 0,
        }
      )
      cartSubTotal = parseFloat(cartSubTotal).toFixed(2);
      const cartTax = parseFloat(cartSubTotal * 0.1).toFixed(2);
      const cartTotal = (parseFloat(cartSubTotal) + parseFloat(cartTax)).toFixed(2);
      console.log(typeof (cartSubTotal));
      return { ...state, cartSubTotal, cartTax, cartTotal }

    default:
      return state;

  }

  // if (action.type === 'GET_TOTALS') {
  //   let { cartSubTotal, amount } = state.cart.reduce(
  //     (cartTotal, cartItem) => {
  //       const { total, count } = cartItem
  //       cartTotal.cartSubTotal += parseFloat(total)
  //       cartTotal.amount += count
  //       return cartTotal
  //     },
  //     {
  //       cartSubTotal: 0,
  //       amount: 0,
  //     }
  //   )
  //   cartSubTotal = parseFloat(cartSubTotal).toFixed(2);
  //   const cartTax = parseFloat(cartSubTotal * 0.1).toFixed(2);
  //   const cartTotal = (parseFloat(cartSubTotal) + parseFloat(cartTax)).toFixed(2);


  //   return { ...state, cartSubTotal, cartTax, cartTotal, amount }
  // }

}

