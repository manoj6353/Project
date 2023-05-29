async function editCategory(id) {
  try {
    const result = await fetch(`/category/${id}`);
    const { data } = await result.json();
    console.log(data);
    const main = document.getElementById("main");

    main.innerHTML = `<section class="bg-image mt-5">
    <div class="d-flex align-items-center">
      <div class="container">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card" style="border-radius: 15px">
              <div class="card-body p-5">
                <form action="/category/add" method="POST" id="regForm">
                  <div class="tab">
                    <div class="form-outline mb-4">
                    <input
                        type="text"
                        id="categoryId"
                        name="id"
                        class="form-control form-control"
                        value="${data.id}"
                        required
                      />
                      <label class="form-label" for="Category"
                        >Category Name</label
                      ><input
                        type="text"
                        id="categoryName"
                        name="categoryName"
                        class="form-control form-control"
                        required
                        value="${data.categoryName}"
                        oninput="verifycategory()"
                      />
                      <span id="categoryerror"></span>
                    </div>
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
                          href="/category"
                          class="button"
                        >
                          Back
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="login btn btn-link btn-light">
                    <a style="color: blue" href="/login">Sign in</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
  } catch (err) {
    console.log(err);
  }
}

async function deleteCategory(id) {
  if (confirm("Are you sure you want to delete this category")) {
    const result = await fetch(`/category/${id}`, {
      method: "DELETE",
    });
    const data = await result.json();
    window.location.reload();
  }
}

async function trashdata() {
  const result = await fetch(`/category/trash`);
  const data = await result.json();
  let tab = document.getElementById("data");
  tab.innerHTML = "";
  let trash = "";
  data.forEach((d) => {
    trash += `<tr>
    <td>${d.id}</td>
    <td>${d.categoryName}</td>
    <td>${new Date(d.createdAt).toLocaleDateString()}</td>
    <td>${new Date(d.updatedAt).toLocaleDateString()}</td>
    <td>
      <a class="btn fas fa-edit btn-primary" onclick="editCategory('${d.id}')">
        EDIT</a
      >
      <a
        class="btn fas fa-delete btn-danger"
        onclick="deletetrashCategory('${d.id}')"
      >
        Delete</a
      >
    </td>
  </tr>`;
  });
  tab.innerHTML = trash;
}

async function deletetrashCategory(id) {
  if (confirm("Are you sure you want to Revoke this category")) {
    const result = await fetch(`/category/trash/${id}`, {
      method: "DELETE",
    });
    const data = await result.json();
    window.location.reload();
  }
}

async function verifycategory() {
  const category = document.getElementById("categoryName");
  const categories = category.value;
  const verifycategory = await fetch(`/category/fetchcategory/${categories}`);
  const { data } = await verifycategory.json();
  let categoryerror = document.getElementById("categoryerror");
  let c = 0;
  if (categories != "") {
    if (data == null) {
      category.classList.remove("error");
      categoryerror.innerHTML = "";
      categoryerror.classList.remove("error");
      c++;
    } else {
      category.classList.add("error");
      categoryerror.innerHTML = "Category already exists";
      categoryerror.classList.add("error");
    }
  }
  if (c == 1) {
    return true;
  } else {
    return false;
  }
}

async function nextPrev() {
  let CommonError = document.getElementById("fullError");
  try {
    if (!(await verifycategory())) {
      CommonError.classList.add("error");
      CommonError.innerHTML = "Please fill the category";
      return false;
    } else {
      CommonError.classList.remove("error");
      CommonError.innerHTML = "";
      document.getElementById("regForm").submit();
    }
  } catch (err) {
    console.log(err);
  }
}

async function addCategory() {
  try {
    const main = document.getElementById("main");

    main.innerHTML = `<section class="bg-image mt-5">
    <div class="d-flex align-items-center">
      <div class="container">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card" style="border-radius: 15px">
              <div class="card-body p-5">
                <form action="/category" method="POST" id="regForm">
                  <div class="tab">
                    <div class="form-outline mb-4">
                      <label class="form-label" for="Category"
                        >Category Name</label
                      ><input
                        type="text"
                        id="categoryName"
                        name="categoryName"
                        class="form-control form-control"
                        required
                        oninput="verifycategory()"
                      />
                      <span id="categoryerror"></span>
                    </div>
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
                          href="/admin"
                          class="button"
                        >
                          Back
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="login btn btn-link btn-light">
                    <a style="color: blue" href="/login">Sign in</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
  } catch (err) {
    console.log("error");
  }
}
