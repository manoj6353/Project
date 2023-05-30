let addressradio;
let isAddressOpened = false;
async function addtocart(id) {
  const productId = id;
  const userId = localStorage.getItem("id");
  const fetchCart = await fetch(`/addtocart/getcart?productId=${productId}`);
  const { data } = await fetchCart.json();
  if (data.length > 0) {
    alert("product already exists");
  } else {
    const result = await fetch(`/addtocart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId }),
    });
    const data = await result.json();
    if (data) {
      alert("product added successfully");
    }
  }
}

async function search(search) {
  const productName = search;
  let rows = document.getElementById("rows");
  let searchrow = document.getElementById("search");
  searchrow.innerHTML = "";
  const result = await fetch(`/product/search/` + productName);
  const data = await result.json();

  if (data.length > 0) {
    rows.classList.add("active");
    searchrow.classList.remove("active");
    for (let d of data) {
      searchrow.innerHTML += `<div class="col-6 h-100">
        <div class="card h-100">
          <div class="h-100 d-flex align-items-center">
            <!-- <img
              src="../images/iphone14"
              class="card-img mx-auto"
              alt="..."
            /> -->
          </div>
          <div class="card-body">
            <h5 class="card-title">${d.productName}</h5>
            <a
              onclick="addtocart('${d.id}')"
              class="btn btn-primary btn-md btn-block"
            >
              Add to Cart
            </a>
          </div>
        </div>
      </div>`;
    }
  } else {
    rows.classList.remove("active");
    searchrow.classList.add("active");
  }
}

async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const form = document.getElementById("loginForm");
  let error = document.getElementById("fullError");

  if (email == "" && password == "") {
    error.innerHTML = "Please fill the Form";
  } else {
    const results = await fetch(`/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await results.json();
    console.log(data);
    if (data.status != 200) {
      error.innerHTML = "Please check your email and password";
    } else if (data.data.token && data.status == 200) {
      window.location.href = "/home";
    }
  }
}

// async function token() {
//   let accessToken = localStorage.getItem('id');
//   console.log(accessToken);
//   const path = window.location.href;
//   let urls = document.createElement('a');
//   urls.href = path;
//   const url = urls.pathname;

//   console.log(url);
//   if (accessToken) {
//     const results = await fetch(`/auth/authenticate`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ accessToken, url }),
//     });
//     const data = await results.json();
//     console.log('in fetch accessToken', data);
//     return accessToken;
//   } else {
//     window.location.replace('/login');
//   }
// }

async function remove(id) {
  if (confirm("Are you sure you want to delete")) {
    const results = await fetch(`/addtocart/` + id, {
      method: "DELETE",
    });
    const data = await results.json();
    window.location.reload();
  } else {
    return false;
  }
}

async function total(tot, id) {
  if (tot.value <= 0) {
    const data = await remove(id);
    if (data == false) {
      alert("Quantity must be 1 or more");
      tot.value = 1;
    }
  } else {
    const Quantity = document.querySelectorAll(".quantity");
    const Price = document.querySelectorAll(".price");
    const checkout = document.getElementById("checkout");
    checkout.innerHTML = "";
    let s = 0;
    for (let i = 0; i < Quantity.length; i++) {
      let total = Quantity[i].value * Price[i].innerHTML;
      s += total;
    }
    checkout.innerHTML += s;
    const quantity = tot.value;
    const result = await fetch(`/addtocart/` + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity }),
    });
    const data = await result.json();
  }
}

function tap() {
  const Quantity = document.querySelectorAll(".quantity");
  const Price = document.querySelectorAll(".price");
  const checkout = document.getElementById("checkout");
  checkout.innerHTML = "";
  let s = 0;
  for (let i = 0; i < Quantity.length; i++) {
    let total = Quantity[i].value * Price[i].innerHTML;
    s += total;
  }
  checkout.innerHTML += s;
  token();
}

async function token() {
  let token = localStorage.getItem("id");
  if (token) {
    return true;
  } else {
    window.location.replace("/login");
  }
}

async function order() {
  const results = await fetch(`/addresses`);
  const data = await results.json();
  if (data.length != 0) {
    let address = document.getElementById("address");
    let addresses = "";
    addresses += `<br><span>
    Delivered on which address<br><hr>`;
    data.forEach((d, i) => {
      console.log({ i });
      addresses += `<div id="${
        d.id
      }"><input type="radio" name="address" value="${d.id}" ${
        i === 0 ? "checked" : ""
      } onclick="eventCatch(this)">
      ${d.address1} ${d.address2},${d.cities.name},${d.states.name},${
        d.countries.name
      },${d.pinCode} <a class="btn btn-info" href="/addresses/address/${
        d.id
      }">Edit</a>&nbsp
      <a class="btn btn-danger" onclick="addressdelete(${d.id})">Delete</a>
      <a class="btn btn-secondary " onclick="add()">Add new address</a>
      </span><br><br></div>`;
    });
    addresses += `<hr>`;
    address.innerHTML = addresses;
    addressradio = document.querySelector('input[name = "address"]:checked');
    document
      .getElementById("payment")
      .setAttribute("onclick", `placeorder(${addressradio.value})`);
    document.getElementById("payment").innerHTML = "Place the Order";
  } else {
    window.location.href = "/addresses/add";
  }
}

async function placeorder(id) {
  let productId = document.getElementById('')
  const results = await fetch(`/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({  }),
  });
  const data = await results.json();
  console.log("in order", id);
}
function eventCatch(e) {
  console.log(e.value);
  document
    .getElementById("payment")
    .setAttribute("onclick", `placeorder(${e.value})`);
}

async function addressdelete(id) {
  const result = await fetch(`/addresses/${id}`, {
    method: "DELETE",
  });
  const data = await result.json();
  window.location.reload();
}

async function add() {
  window.location.href = "/addresses/add";
}

async function forgotpassword() {
  const email = document.getElementById("email").value;
  const emailerror = document.getElementById("emailerror");
  const result = await fetch(`/user/email/${email}`);
  const { verifymail } = await result.json();
  if (verifymail == null) {
    emailerror.innerHTML = "Please check your email";
  } else {
    emailerror.classList.remove("emailerror");
    emailerror.innerHTML = "";
  }
}
