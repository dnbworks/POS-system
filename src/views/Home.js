import React from 'react';
import { BsPersonCircle } from "react-icons/bs";
import { BiHelpCircle } from "react-icons/bi";
import { AiOutlineTable } from "react-icons/ai";
import OrderByView from '../components/Home/OrderByView';
import OrderByAscDec from '../components/Home/OrderByAscDec';
import Search from '../components/Home/Search';
import { useGlobalContext } from '../context/AppContext';
import ItemsList from '../components/Home/ItemsList';
import SelectedItems from '../components/Home/SelectedItems';
import AddPersonModal from '../components/Home/AddPersonModal';
import AddPersonDetails from '../components/Home/AddPersonDetails';
import SelectedItemModal from '../components/Home/SelectedItemModal';
import DiscountModal from '../components/Home/DiscountModal';
import Dropdown from '../components/Home/Dropdown';
import CategoryList from '../components/Home/CategoryList';


// AiOutlineSortAscending
// AiOutlineSortDescending

const Home = () => {
  const { state: { openModal, storeProducts, cart, isOpenSelectedModal, discountModal, cartSubTotal, cartTax, cartTotal } } = useGlobalContext();
  const options = [
    { value: "product_name", label: "Product Name" },
    { value: "date_inserted", label: "Date inserted" },
    { value: "no_items_sold", label: "No. items sold" },
    { value: "price", label: "Price" },
  ]
  return (
    <div className="container">
      <div className="header d-flex border">
        <div className="header__selected--items v-600">
          <ul className="d-flex justify-content-between py">
            <li onClick={() => openModal("customer")}><BsPersonCircle /></li>
            <li>products({cart.length})</li>
            <li><BiHelpCircle /></li>
          </ul>
        </div>
        <div className="header__products v-600">
          <ul className="d-flex justify-content-between py">
            <li><AiOutlineTable />All({storeProducts.length})</li>
            <li><Search /></li>
          </ul>
        </div>
      </div>
      <div className="register__bashboard d-flex">
        <div className="selected__items v-600">
          <div className="product__columns">
            <ul className="header__title d-flex justify-content-between">
              <li style={{ width: "160px !important" }}>items</li>
              <li>price</li>
              <li>Qty</li>
              <li>Discount</li>
              <li>Total Disc</li>
              <li>Total</li>
              <li>Del</li>
            </ul>

            <SelectedItems />

            <div className="totals">
              <div className="block d-flex justify-content-between">
                <span>SubTotal:</span>
                <span>{cartSubTotal}</span>
              </div>
              <div className="block d-flex justify-content-between">
                <span>Tax:</span>
                <span>{cartTax}</span>
              </div>
              <div className="block d-flex justify-content-between">
                <span>Order Discount:</span>
                <span>0</span>
              </div>
              <div className="block d-flex justify-content-between">
                <span>Total:</span>
                <span>{cartTotal}</span>
              </div>
            </div>

            <div className="controls">
              <table>
                <tr>
                  <td><button>Undo</button></td>
                  <td><button>Clear All</button></td>
                </tr>
                <tr>
                  <td><button>Print or Send Email</button></td>
                  <td><button>Pay</button></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="products_list v-600">
          <div className="options d-flex">
            <div className="view__type d-flex">
              <span>View</span>
              <OrderByView />
            </div>
            <div className="sortby d-flex">
              <span>sort by:</span>
              <Dropdown placeHolder="select..." options={options} />
            </div>
            <div className="sortby d-flex justify-content-between">
              <OrderByAscDec />
            </div>
          </div>
          <ItemsList />
          <CategoryList />
        </div>
      </div>
      <AddPersonModal />
      <AddPersonDetails />
      {isOpenSelectedModal && <SelectedItemModal />}
      {discountModal && <DiscountModal />}
    </div>
  )
}

export default Home