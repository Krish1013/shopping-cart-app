import axios from "axios";

function Navbar({ onCartClick, onOrdersClick, onCheckout }) {
  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      <button onClick={onCheckout}>Checkout</button>
      <button onClick={onCartClick}>Cart</button>
      <button onClick={onOrdersClick}>Order History</button>
    </div>
  );
}

export default Navbar;
