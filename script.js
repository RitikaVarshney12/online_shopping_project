let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
let orders = JSON.parse(localStorage.getItem("orders")) || [];

function updateCartCount() {
  let c = document.getElementById("cartCount");
  if(c) c.innerText = cart.length;
}
updateCartCount();

/* CART */
function addToCart(name, price) {
  cart.push({name, price});
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function loadCart() {
  let list = document.getElementById("cartList");
  let total = 0;
  if(!list) return;

  list.innerHTML = "";
  cart.forEach(p => {
    list.innerHTML += `<li>${p.name} - ₹${p.price}</li>`;
    total += p.price;
  });
  document.getElementById("total").innerText = total;
}
loadCart();

/* PLACE ORDER */
function placeOrder() {
  orders.push(...cart);
  localStorage.setItem("orders", JSON.stringify(orders));
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.href = "orders.html";
}

/* WISHLIST */
function addToWishlist(name) {
  wishlist.push(name);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

function loadWishlist() {
  let w = document.getElementById("wishlist");
  if(!w) return;
  w.innerHTML = wishlist.map(i => `<li>${i}</li>`).join("");
}
loadWishlist();

/* ORDERS */
function loadOrders() {
  let o = document.getElementById("orders");
  if(!o) return;
  o.innerHTML = orders.map(i => `<li>${i.name} - ₹${i.price}</li>`).join("");
}
loadOrders();
