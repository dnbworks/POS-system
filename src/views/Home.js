import { useState } from 'react';

import { BsPersonCircle } from "react-icons/bs";
import { BiHelpCircle } from "react-icons/bi";
import { AiOutlineTable } from "react-icons/ai";

import OrderByView from '../features/home/products/OrderByView';
import OrderByAscDec from '../features/home/products/OrderByAscDec';
import Search from '../features/home/products/Search';
import ItemsList from '../features/home/products/ItemsList';
import SelectedItems from '../features/home/cart/SelectedItems';
import AddPersonModal from '../features/home/cart/AddPersonModal';
import AddPersonDetails from '../features/home/cart/AddPersonDetails';
import SelectedItemModal from '../features/home/cart/SelectedItemModal';
import DiscountModal from '../features/home/cart/DiscountModal';
import Dropdown from '../features/home/products/Dropdown';
import CategoryList from '../features/home/products/CategoryList';

import { useSelector, useDispatch } from 'react-redux';
import { selectAllCategories, selectAllProducts } from '../features/home/products/productSlice';
import { selectCartItems, selectCartSubTotal, selectCartTax, selectCartTotal } from '../features/home/cart/cartSlice';



// AiOutlineSortAscending
// AiOutlineSortDescending

const Home = () => {

  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [discountModal, setDiscountModal] = useState(false);
  const [isAddPersonModalOpen, setIsAddPersonModalOpen] = useState(false);
  const [selectedItem, SetselectedItem] = useState({});
  const [edit, setEdit] = useState(false);
  const [list, setList] = useState(false);
  const [grid, setGrid] = useState(true);
  const [amount, setAmount] = useState(0);

  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const categories = useSelector(selectAllCategories);
  const isOpenSelectedModal = useSelector((state) => state.system.isOpenSelectedModal);

  console.log(isOpenSelectedModal);

  const cart = useSelector(selectCartItems);
  const cartSubTotal = useSelector(selectCartSubTotal);
  const cartTax = useSelector(selectCartTax);
  const cartTotal = useSelector(selectCartTotal);

  const options = [
    { value: "product_name", label: "Product Name" },
    { value: "date_inserted", label: "Date inserted" },
    { value: "no_items_sold", label: "No. items sold" },
    { value: "price", label: "Price" },
  ]

  const openModal = () => {
    setIsSearchModalOpen(true);
  }

  const changeDisplay = (id) => {
    if (id == "grid") {
      setGrid(true);
      setList(false);
    }
    if (id == "list") {
      setGrid(false);
      setList(true);
    }
  }

  return (
    <div className="container">
      <div className="header d-flex border">
        <div className="header__selected--items v-600">
          <ul className="d-flex justify-content-between py">
            <li onClick={openModal}><BsPersonCircle /></li>
            <li>products({cart.length})</li>
            <li><BiHelpCircle /></li>
          </ul>
        </div>
        <div className="header__products v-600">
          <ul className="d-flex justify-content-between py">
            <li><AiOutlineTable />All({products ? products.length : 0})</li>
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
                  <td><button>Discount</button></td>
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
              <OrderByView changeDisplay={changeDisplay}/>
            </div>
            <div className="sortby d-flex">
              <span>sort by:</span>
              <Dropdown placeHolder="select..." options={options} />
            </div>
            <div className="sortby d-flex justify-content-between">
              <OrderByAscDec />
            </div>
          </div>
          <ItemsList grid={grid} list={list} />
          <CategoryList categories={categories}/>
        </div>
      </div>
      <AddPersonModal isSearchModalOpen={isSearchModalOpen}/>
      <AddPersonDetails />
      {isOpenSelectedModal && <SelectedItemModal />}
      {discountModal && <DiscountModal selectedItem={selectedItem}/>}
    </div>
  )
}

export default Home