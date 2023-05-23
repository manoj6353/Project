async function addtocart(id) {
  const productId = id;
  const userId = 1;
  const fetchCart = await fetch(
    `/addtocart/getcart?userId=${userId}&productId=${productId}`,
  );
  const { data } = await fetchCart.json();
  if (data.length > 0) {
    alert('product already exists');
  } else {
    const result = await fetch(`/addtocart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productId, userId }),
    });
    const data = await result.json();
    if (data) {
      alert('product added successfully');
    }
  }
}

async function search(search) {
  const productName = search;
  let rows = document.getElementById('rows');
  let searchrow = document.getElementById('search');
  searchrow.innerHTML = '';
  const result = await fetch(`/product/search/` + productName);
  const data = await result.json();

  if (data.length > 0) {
    rows.classList.add('active');
    searchrow.classList.remove('active');
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
    rows.classList.remove('active');
    searchrow.classList.add('active');
  }
}

async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const form = document.getElementById('loginForm');
  let error = document.getElementById('fullError');

  if (email == '' && password == '') {
    error.innerHTML = 'Please fill the Form';
  } else {
    const results = await fetch(`/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await results.json();
    if (data.message && data.statusCode == 404) {
      error.innerHTML = data.message;
    } else if (data.accessToken) {
      localStorage.setItem('id', data.accessToken);
    }
  }
}

async function remove(id) {
  if (confirm('Are you sure you want to delete')) {
    const results = await fetch(`/addtocart/` + id, {
      method: 'DELETE',
    });
    const data = await results.json();
    window.location.reload();
  }
}

function total(tot) {
  if (tot.value <= 0) {
    alert('Quantity must be 1 or more');
    tot.value = 1;
  } else {
    const Quantity = document.querySelectorAll('.quantity');
    const Price = document.querySelectorAll('.price');
    const checkout = document.getElementById('checkout');
    checkout.innerHTML = '';
    let s = 0;
    for (let i = 0; i < Quantity.length; i++) {
      let total = Quantity[i].value * Price[i].innerHTML;
      s += total;
    }
    checkout.innerHTML += s;
  }
}
