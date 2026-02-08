import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function ItemList() {
  const [items, setItems] = useState([]);

  const token = localStorage.getItem("token");

  // Fetch all items
  useEffect(() => {
    axios.get("http://localhost:5000/items")
      .then(res => setItems(res.data))
      .catch(err => console.error(err));
  }, []);

  // Add item to cart
  const addToCart = async (itemId) => {
    try {
      await axios.post(
        "http://localhost:5000/carts",
        { itemId },
        { headers: { Authorization: token } }
      );
      alert("Item added to cart");
    } catch (err) {
      alert("Error adding item");
    }
  };

  // View cart
  const showCart = async () => {
    const res = await axios.get(
      "http://localhost:5000/carts",
      { headers: { Authorization: token } }
    );
    alert(JSON.stringify(res.data, null, 2));
  };

  // View orders
  const showOrders = async () => {
    const res = await axios.get(
      "http://localhost:5000/orders",
      { headers: { Authorization: token } }
    );
    alert(JSON.stringify(res.data, null, 2));
  };

  // Checkout
  const checkout = async () => {
    await axios.post(
      "http://localhost:5000/orders",
      {},
      { headers: { Authorization: token } }
    );
    alert("Order successful");
  };

  return (
    <div>
      <Navbar
        onCartClick={showCart}
        onOrdersClick={showOrders}
        onCheckout={checkout}
      />

      <h2>Items</h2>

      {items.map(item => (
        <div
          key={item._id}
          style={{
            border: "1px solid black",
            padding: "10px",
            marginBottom: "10px",
            cursor: "pointer"
          }}
          onClick={() => addToCart(item._id)}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}

export default ItemList;
