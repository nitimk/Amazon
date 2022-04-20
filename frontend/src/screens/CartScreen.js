import React from 'react';
import {   useParams, useLocation } from "react-router-dom";

export default function CartScreen() {
    //const { productId } = useParams();
    //const location = useLocation();
    //const qty = location.pathname ? Number(location.search.split("=")[1]) : 1;
    const params = useParams();
const productId = params.id;
const {search} =useLocation();
const qtyInUrl = new URLSearchParams(search).get('qty');
const qty = qtyInUrl?Number(qtyInUrl):1;
    return (
        <div>
          <h1>Cart Screen</h1>
          <p>
            ADD TO CART : ProductID: {productId} Qty: {qty}
          </p>
        </div>
      );
    }