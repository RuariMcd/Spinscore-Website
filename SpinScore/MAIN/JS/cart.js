let cart = [];

function getCart() {
    let data = localStorage.getItem("cart");

    if (data) {
        return JSON.parse(data);
    } else {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(name, price) {
    let currentCart = getCart();

    let item = {
        name: name,
        price: Number(price)
    };

    currentCart.push(item);

    saveCart(currentCart);

    alert(name + " added to cart");
}

function displayCart() {
    let currentCart = getCart();

    let container = document.getElementById("cart-items");
    let totalText = document.getElementById("cart-total");

    if (!container) return;

    container.innerHTML = "";

    let total = 0;

    if (currentCart.length === 0) {
        container.innerHTML = "<p>Your cart is empty</p>";
        totalText.textContent = "Total: £0.00";
        return;
    }

    for (let i = 0; i < currentCart.length; i++) {
        let item = currentCart[i];

        total += item.price;

        container.innerHTML += `
            <div class="cd-card">
                <div class="cd-info">
                    <h3>${item.name}</h3>
                    <p class="price">£${item.price.toFixed(2)}</p>
                    <button class="buy-btn" onclick="removeItem(${i})">Remove</button>
                </div>
            </div>
        `;
    }

    totalText.textContent = "Total: £" + total.toFixed(2);
}

function removeItem(index) {
    let currentCart = getCart();

    currentCart.splice(index, 1);

    saveCart(currentCart);

    displayCart();
}

function clearCart() {
    localStorage.removeItem("cart");

    displayCart();
}
function checkout() {
    let cart = getCart();

    let nameField = document.getElementById("customer-name");
    let emailField = document.getElementById("customer-email");
    let addressField = document.getElementById("customer-address");
    let cardField = document.getElementById("card-number");

    let nameError = document.getElementById("name-error");
    let emailError = document.getElementById("email-error");
    let addressError = document.getElementById("address-error");
    let cardError = document.getElementById("card-error");

    let successMsg = document.getElementById("checkout-success");

    if (!nameField || !emailField || !addressField || !cardField) return;

    let valid = true;

    nameError.classList.remove("visible");
    emailError.classList.remove("visible");
    addressError.classList.remove("visible");
    cardError.classList.remove("visible");

    nameField.classList.remove("error");
    emailField.classList.remove("error");
    addressField.classList.remove("error");
    cardField.classList.remove("error");

    successMsg.style.display = "none";

    if (cart.length === 0) {
        alert("Your cart is empty");
        return;
    }

    if (nameField.value.trim() === "") {
        nameField.classList.add("error");
        nameError.classList.add("visible");
        valid = false;
    }

    if (emailField.value.trim() === "" || !emailField.value.includes("@")) {
        emailField.classList.add("error");
        emailError.classList.add("visible");
        valid = false;
    }

    if (addressField.value.trim() === "") {
        addressField.classList.add("error");
        addressError.classList.add("visible");
        valid = false;
    }

    if (cardField.value.trim() === "") {
        cardField.classList.add("error");
        cardError.classList.add("visible");
        valid = false;
    }

    if (!valid) {
        return;
    }

    localStorage.removeItem("cart");
    displayCart();

    nameField.value = "";
    emailField.value = "";
    addressField.value = "";
    cardField.value = "";

    let orderID = Math.floor(Math.random() * 10000);

    successMsg.textContent = "Order #" + orderID + " placed successfully";

    successMsg.style.display = "block";
}
document.addEventListener("DOMContentLoaded", function () {

    let buttons = document.querySelectorAll(".buy-btn");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {

            let name = this.getAttribute("data-name");
            let price = this.getAttribute("data-price");

            if (name && price) {
                addToCart(name, price);
            }
        });
    }

    displayCart();
});
