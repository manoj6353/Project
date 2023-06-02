async function addProduct() {
  try {
    const main = document.getElementById("main");
    let products = "";
    const result = await fetch("/subcategory/add");
    const { data } = await result.json();
    products += `<section class="bg-image mt-5">
    <div class="d-flex align-items-center">
      <div class="container">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card" style="border-radius: 15px">
              <div class="card-body p-5">
              <form action="/product" method="post" enctype="multipart/form-data" id="regfrm">
              <hr />
              <div class="tab">
                <div class="form-outline mb-4">
                  <label class="form-label" for="categoryName">Category Name</label>
                  <select
                    class="form-select"
                    id="categoryName"
                    name="categoryId"
                    required
                    onchange="subCategory()"
                  > <option>Select Category</option>`;
    data.forEach((d) => {
      products += `<option id="${d.id}" value="${d.id}">
                      ${d.categoryName}
                    </option>`;
    });
    products += `</select>
                    </div>
                  <div class="form-outline mb-4">
                  <label class="form-label" for="subCategoryName"
                    >Sub-Category Name</label
                  >
                  <select
                    class="form-select"
                    id="subCategoryName"
                    name="subCategoryId"
                    required
                    oninput="productvalidate()"
                  ></select>
                  <span id="subcategoryerror"></span>
                </div>
                <div class="form-outline mb-4">
                  <label class="form-label" for="ProductsName">Product Name</label
                  ><input
                    type="text"
                    id="productName"
                    name="productName"
                    class="form-control form-control"
                    required
                    oninput="productvalidate()"
                  />
                  <span id="productNameError"></span>
                </div>
                <div class="form-outline mb-4">
                  <label class="form-label" for="quantity">Quantity</label
                  ><input
                    type="number"
                    id="quantity"
                    name="quantity"
                    class="form-control form-control"
                    required
                    oninput="productvalidate()"
                  />
                  <span id="quantityError"></span>
                </div>
                <div class="form-outline mb-4">
                  <label class="form-label" for="image">Image</label
                  ><input
                    type="file"
                    id="image"
                    name="image"
                    class="form-control form-control"
                    required
                    oninput="productvalidate()"
                  />
                  <span id="ImageError"></span>
                </div>
                <div class="form-outline mb-4">
                  <label class="form-label" for="price">Price(Per Quantity)</label
                  ><input
                    type="number"
                    id="price"
                    name="price"
                    class="form-control form-control"
                    required
                    oninput="productvalidate()"
                  />
                  <span id="priceError"></span>
                </div>
                <div class="form-outline mb-4">
                  <label class="form-label" for="productdetails"
                    >Product Details</label
                  >
                  <textarea
                    rows="3"
                    id="productdetails"
                    name="productdetails"
                    class="form-control form-control"
                    required
                    oninput="productvalidate()"
                  ></textarea>
                  <span id="productDetailsError"></span>
                </div>
                <div class="commonerror">
                    <span id="fullError"></span>
                  </div>
                  <div
                    style="overflow: auto"
                    class="d-flex justify-content-center gap"
                  >
                    <div
                      style="float: right"
                      class="d-flex justify-content-center gap"
                    >
                      <div id="submit">
                        <a
                          class="btn btn-success btn-block btn-lg w-100 gradient-custom-4 text-body"
                          id="prevBtn"
                          onclick="nextPrev()"
                        >
                          Submit
                        </a>
                      </div>
                      <div id="back">
                        <a
                          class="btn btn-success btn-block btn-lg w-100 gradient-custom-4 text-body"
                          href="/product"
                          class="button"
                        >
                          Back
                        </a>
                      </div>
                    </div>
                  </div>
              </div>
            </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
    main.innerHTML = products;
  } catch (err) {
    console.log(err);
  }
}

async function deleteProduct(productId) {
  if (confirm("Are you sure you want to delete")) {
    const id = productId;
    const result = await fetch(`/product/` + id, {
      method: "DELETE",
    });
    const data = await result.json();
    window.location.reload();
  }
}

async function editProduct(id) {
  try {
    const result = await fetch(`/product/${id}`);
    const ans = await result.json();
    if (ans) {
      const main = document.getElementById("main");
      let editproducts = "";
      const result = await fetch("/subcategory/add");
      const { data } = await result.json();
      editproducts += `<section class="bg-image mt-5">
    <div class="d-flex align-items-center">
      <div class="container">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card" style="border-radius: 15px">
              <div class="card-body p-5">
              <form action="/product/update" method="POST" enctype="multipart/form-data" id="regfrm">
          <input
            class="text"
            id="productid"
            type="hidden"
            name="productId"
            value="${ans.id}"
          />
          <input
            class="text"
            id="categoryid"
            type="hidden"
            name="oldCategoryId"
            value="${ans.productCategory[0].categoryId}"
          />
          <hr />
              <div class="tab">
                <div class="form-outline mb-4">
                  <label class="form-label" for="categoryName">Category Name</label>
                  <select
                    class="form-select"
                    id="categoryName"
                    name="categoryId"
                    required
                    onchange="subCategory()"
                  > <option>Select Category</option>`;
      data.forEach((d) => {
        if (d.id == ans.productCategory[0].categoryId) {
          editproducts += `<option id="${d.id}" value="${d.id}" selected>
                      ${d.categoryName}
                    </option>`;
        }
        editproducts += `<option id="${d.id}" value="${d.id}">
                      ${d.categoryName}
                    </option>`;
      });
      editproducts += `</select>
                    </div>
                  <div class="form-outline mb-4">
                  <label class="form-label" for="subCategoryName"
                    >Sub-Category Name</label
                  >
                  <select
                    class="form-select"
                    id="subCategoryName"
                    name="subCategoryId"
                    required
                    oninput="productvalidate()"
                  ></select>
                  <span id="subcategoryerror"></span>
                </div>
                <div class="form-outline mb-4">
                  <label class="form-label" for="ProductsName">Product Name</label
                  ><input
                    type="text"
                    id="productName"
                    name="productName"
                    class="form-control form-control"
                    required
                    value="${ans.productName}"
                    oninput="productvalidate()"
                  />
                  <span id="productNameError"></span>
                </div>
                <div class="form-outline mb-4">
                  <label class="form-label" for="quantity">Quantity</label
                  ><input
                    type="number"
                    id="quantity"
                    name="quantity"
                    class="form-control form-control"
                    required
                    value="${ans.quantity}"
                    oninput="productvalidate()"
                  />
                  <span id="quantityError"></span>
                </div>
                <div class="form-outline mb-4">
                  <label class="form-label" for="image">Image</label
                  ><input
                    type="file"
                    id="image"
                    name="image"
                    class="form-control form-control hidden"
                    required
                    oninput="productvalidate()"
                  />
                  <p id="productImage"><img
                  src="/images/${ans.image}"
                  width="100px"
                  height="100px" onclick="editImage()"/></p>
                  <span id="ImageError"></span>
                </div>
                <div class="form-outline mb-4">
                  <label class="form-label" for="price">Price(Per Quantity)</label
                  ><input
                    type="number"
                    id="price"
                    name="price"
                    class="form-control form-control"
                    required
                    value="${ans.price}"
                    oninput="productvalidate()"
                  />
                  <span id="priceError"></span>
                </div>
                <div class="form-outline mb-4">
                  <label class="form-label" for="productdetails"
                    >Product Details</label
                  >
                  <textarea
                    rows="3"
                    id="productdetails"
                    name="productdetails"
                    class="form-control form-control"
                    required
                    oninput="productvalidate()"
                  >${ans.productdetails}</textarea>
                  <span id="productDetailsError"></span>
                </div>
                <div class="commonerror">
                    <span id="fullError"></span>
                  </div>
                  <div
                    style="overflow: auto"
                    class="d-flex justify-content-center gap"
                  >
                    <div
                      style="float: right"
                      class="d-flex justify-content-center gap"
                    >
                      <div id="submit">
                        <a
                          class="btn btn-success btn-block btn-lg w-100 gradient-custom-4 text-body"
                          id="prevBtn"
                          onclick="nextPrev()"
                        >
                          Submit
                        </a>
                      </div>
                      <div id="back">
                        <a
                          class="btn btn-success btn-block btn-lg w-100 gradient-custom-4 text-body"
                          href="/product"
                          class="button"
                        >
                          Back
                        </a>
                      </div>
                    </div>
                  </div>
              </div>
            </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
      main.innerHTML = editproducts;
    }
  } catch (err) {
    console.log(err);
  }
}
function editImage() {
  const image = document.getElementById("image");
  image.click();
}

async function subCategory() {
  const id = document.querySelector("#categoryName").value;
  const result = await fetch("/product/subcategory/" + id);
  const { categories } = await result.json();
  let opt = "";
  let subcategory = document.getElementById("subCategoryName");
  categories.forEach((d) => {
    opt += `<option value='${d.id}'>${d.subCategoryName}</option>`;
    subcategory.innerHTML = opt;
  });
}

async function productvalidate() {
  const productName = document.getElementById("productName");
  const quantity = document.getElementById("quantity");
  const image = document.getElementById("image");
  const price = document.getElementById("price");
  const productdetails = document.getElementById("productdetails");
  const subCategoryName = document.getElementById("subCategoryName");
  const productNameError = document.getElementById("productNameError");
  const quantityError = document.getElementById("quantityError");
  const ImageError = document.getElementById("ImageError");
  const priceError = document.getElementById("priceError");
  const productDetailsError = document.getElementById("productDetailsError");
  const subcategoryerror = document.getElementById("subcategoryerror");
  const imagepattern = /\.(jpg|jpeg|png|img)$/i;
  let c = 0;
  if (subCategoryName.innerHTML != "") {
    subCategoryName.classList.remove("error");
    subcategoryerror.innerHTML = "";
    subcategoryerror.classList.remove("error");
    c++;
  } else {
    subCategoryName.classList.add("error");
    subcategoryerror.innerHTML = "Enter Category";
    subcategoryerror.classList.add("error");
  }

  if (productName.value != "") {
    productName.classList.remove("error");
    subcategoryerror.innerHTML = "";
    productNameError.classList.remove("error");
    c++;
  } else {
    productName.classList.add("error");
    productNameError.innerHTML = "Enter Product Name";
    productNameError.classList.add("error");
  }
  if (quantity.value != "") {
    quantity.classList.remove("error");
    quantityError.innerHTML = "";
    quantityError.classList.remove("error");
    c++;
  } else {
    quantity.classList.add("error");
    quantityError.innerHTML = "Enter proper Quantity";
    quantityError.classList.add("error");
  }
  if (price.value != "") {
    price.classList.remove("error");
    priceError.innerHTML = "";
    priceError.classList.remove("error");
    c++;
  } else {
    price.classList.add("error");
    priceError.innerHTML = "Enter proper Price";
    priceError.classList.add("error");
  }
  if (productdetails.value != "") {
    productdetails.classList.remove("error");
    productDetailsError.innerHTML = "";
    productDetailsError.classList.remove("error");
    c++;
  } else {
    productdetails.classList.add("error");
    productDetailsError.innerHTML = "Enter proper Product Details";
    productDetailsError.classList.add("error");
  }
  if (image.value != "") {
    if (image.value.match(imagepattern)) {
      image.classList.remove("error");
      ImageError.innerHTML = "";
      ImageError.classList.remove("error");
      c++;
    } else {
      image.classList.add("error");
      ImageError.classList.add("error");
      ImageError.innerHTML =
        "Please enter a valid image format(jpg/jpeg/png/img";
    }
  } else {
    c++;
  }
  if (c == 6) {
    return true;
  } else {
    return false;
  }
}

async function nextPrev() {
  let CommonError = document.getElementById("fullError");
  try {
    if (!(await productvalidate())) {
      CommonError.classList.add("error");
      CommonError.innerHTML = "Please fill the Product Details";
      return false;
    } else {
      CommonError.classList.remove("error");
      CommonError.innerHTML = "";
      document.getElementById("regfrm").submit();
    }
  } catch (err) {
    console.log(err);
  }
}
