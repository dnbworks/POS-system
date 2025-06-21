

import { BsPersonCircle } from "react-icons/bs";
import { BiHelpCircle } from "react-icons/bi";
import { AiOutlineTable } from "react-icons/ai";
import Search from "./components/Search";

export default function DashboardPage() {
  return (
    <div className="container">
      <div className="header d-flex border">
        <div className="header__selected--items v-600">
          <ul className="d-flex justify-content-between py">
            <li
              // onClick={() => dispatch(openModal({ type: "customer_search" }))}
            >
              <BsPersonCircle />
            </li>
            <li>products(cart length)</li>
            <li>
              <BiHelpCircle />
            </li>
          </ul>
        </div>
        <div className="header__products v-600">
          <ul className="d-flex justify-content-between py">
            <li>
              <AiOutlineTable />
              All(number of products)
            </li>
            <li>
              <Search />
            </li>
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

            {/* <SelectedItems /> */}

            <div className="totals">
              <div className="d-flex justify-content-between">
                <span>SubTotal:</span>
                {/* <span>{cartSubTotal}</span> */}
              </div>
              <div className="d-flex justify-content-between">
                <span>Tax:</span>
                {/* <span>{cartTax}</span> */}
              </div>
              <div className="d-flex justify-content-between">
                <span>Order Discount:</span>
                <span>0</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Total:</span>
                {/* <span>{cartTotal}</span> */}
              </div>
            </div>

            <div className="controls">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <button>Undo</button>
                    </td>
                    <td>
                      {/* <button
                        type="button"
                        onClick={() => dispatch(clearCart())}
                        disabled={!cart.length}
                      >
                        Clear All
                      </button> */}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {/* <button
                        type="button"
                        onClick={() =>
                          dispatch(openModal({ type: "discount" }))
                        }
                        disabled={!cart.length}
                      >
                        Discount
                      </button> */}
                    </td>
                    <td>
                      {/* <button
                        type="button"
                        onClick={() => dispatch(openModal({ type: "pay" }))}
                        disabled={!cart.length}
                      >
                        Pay
                      </button> */}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="products_list v-600">
          <div className="options d-flex">
            <div className="view__type d-flex align-items">
              <span>View</span>
              {/* <OrderByView changeDisplay={changeDisplay} /> */}
            </div>
            <div className="sortby d-flex align-items">
              <span>sort by:</span>
              {/* <Dropdown placeHolder="select..." options={options} /> */}
            </div>
            <div className="sortby d-flex justify-content-between">
              {/* <OrderByAscDec /> */}
            </div>
          </div>
          {/* <ItemsList grid={grid} list={list} />
          <CategoryList categories={categories} /> */}
        </div>
      </div>
      {/* <AddPersonModal />
      <AddPersonDetails /> */}
      {/* {isOpenSelectedModal && <SelectedItemModal />}
      {discountModal && <DiscountModal selectedItem={selectedItem} />}
      <PayModal /> */}
      {/* <div
        className="invoice-wrapper-fixed"
        style={isInvoiceOpen ? { display: "block" } : { display: "none" }}
      >
        <InvoicePage close_btn_invoice={close_btn_invoice} />
      </div> */}
    </div>
  );
}
