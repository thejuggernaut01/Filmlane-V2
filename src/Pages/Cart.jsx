import React, { useContext, useRef } from "react";
import { useState, useEffect } from "react";
import {
  collection,
  updateDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import { Link } from "react-router-dom";
import { db } from "../firebase";
import classes from "./Cart.module.css";
import { AuthContext } from "../store/AuthContext";

const CartPage = () => {
  const { currentUser } = useContext(AuthContext);
  const [carts, setCart] = useState([]);
  const inputRef = useRef();

  // create event cart
  const cartRef = collection(db, "cart");

  // Update Cart Document
  const updateDocument = async (collectionName, docId, newData) => {
    try {
      const docRef = doc(db, collectionName, docId);
      await updateDoc(docRef, newData);
      console.log("Document updated successfully!");
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  // Update Cart
  const updateCart = async () => {
    try {
      // Getting the document
      const querySnapshot = await getDocs(cartRef);
      querySnapshot.forEach(async (doc) => {
        const documentData = doc.data();
        const documentId = doc.id;

        // Update the document
        const newData = { ...documentData, movieQty: inputRef.current.value };
        await updateDocument("cart", documentId, newData);
      });
    } catch (error) {
      console.error("Error getting documents:", error);
    }
  };

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movieQuery = query(
          cartRef,
          where("user", "==", currentUser.email)
        );
        const querySnapshot = await getDocs(movieQuery);

        if (!querySnapshot.empty) {
          const cartData = querySnapshot.docs[0].data();

          setCart([cartData]);
        } else {
          console.log("No matching documents found");
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchMovie();
  }, [cartRef, currentUser.email]);

  return (
    <div className="container mx-auto py-10 text-white">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>

      <div className="text-white mb-5">
        {carts.length > 0 ? (
          <div>
            <table className="w-[95%] mx-auto">
              <thead>
                <tr className="flex justify-between border-b-white border-b-2">
                  <th className="py-2 pr-2 text-xl font-semibold">Product</th>
                  <th className="py-2 pr-2 text-xl font-semibold">Price</th>
                  <th className="py-2 pr-2 text-xl font-semibold">Quantity</th>
                  <th className="py-2 text-xl font-semibold">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {carts.map((cartItem) => (
                  <tr
                    key={cartItem.movieTitle}
                    className="flex justify-between border-b-white border-b-2"
                  >
                    <td className="py-2 text-lg w-[25%]">
                      {cartItem.movieTitle}
                    </td>

                    <td className="py-2 text-lg font-semibold w-[25%]">
                      {"₦" + cartItem.movieCost}
                    </td>
                    <td className="py-2 text-lg font-semibold ">
                      <input
                        className="outline-white rounded-lg w-12 text-black pl-2"
                        type="number"
                        name="qty"
                        defaultValue={cartItem.movieQty}
                        ref={inputRef}
                        min="1"
                        step="1"
                      />
                    </td>
                    <td className="py-2 text-lg font-semibold w-[25%] xs:pl-4 sm:pl-20 md:pl-32 lg:pl-40 xl:pl-56">
                      {"₦" + cartItem.movieCost * cartItem.movieQty}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button className={`${classes.btn} mt-4`} onClick={updateCart}>
              Update Cart
            </button>
          </div>
        ) : (
          <p className="text-2xl font-semibold">No Cart Found!</p>
        )}
      </div>

      <hr />

      <div>
        <h3 className="py-4 text-2xl font-semibold">Cart Totals</h3>
        <table>
          <thead className="text-white">
            <tr>
              <th className="pr-10 text-xl font-normal">SUBTOTAL</th>
              <th className="text-xl font-normal">
                {carts.map((cart) => `₦${cart.movieCost * cart.movieQty}`)}
              </th>
            </tr>
          </thead>
          <tbody className="text-white">
            <tr>
              <td className="pr-10 text-xl font-normal">TOTAL</td>
              <td className="text-xl font-normal">
                {carts.map((cart) => `₦${cart.movieCost * cart.movieQty}`)}
              </td>
            </tr>
          </tbody>
        </table>

        <Link className={`${classes.btn} mt-4`} to={"/checkout"}>
          Proceed To Checkout
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
