async function addsubCategory() {
  try {
    const result = await fetch("/subcategory/add");
    const { data } = await result.json();
    const main = document.getElementById("main");
    let categoryadd = "";
    categoryadd += `<section class="bg-image mt-5">
    <div class="d-flex align-items-center">
      <div class="container">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card" style="border-radius: 15px">
              <div class="card-body p-5">
                <form action="/subcategory" method="POST" id="regForm">
                  <div class="tab">
                    <div class="form-outline mb-4">
                    <div class="form-outline mb-4">
                    <div class="form-outline mb-4">
                    <label class="form-label" for="categoryId"
                      >Category Name</label
                    >
                    <select
                      class="form-select"
                      id="categoryId"
                      name="categoryId"
                      required
                    >`;
    data.forEach((d) => {
      categoryadd += `<option value="${d.id}">${d.categoryName}</option>`;
    });
    categoryadd += `</select>
                  </div>
                      <label class="form-label" for="SubCategory"
                        >Category Name</label
                      ><input
                        type="text"
                        id="subCategoryName"
                        name="subCategoryName"
                        class="form-control form-control"
                        required
                      />
                      <span id="subcategoryerror"></span>
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
                      <div id="back">
                        <a
                          class="btn btn-success btn-block btn-lg w-100 gradient-custom-4 text-body"
                          href="/subcategory"
                          class="button"
                        >
                          Back
                        </a>
                      </div>
                      <div id="submit">
                        <a
                          class="btn btn-success btn-block btn-lg w-100 gradient-custom-4 text-body"
                          id="prevBtn"
                          onclick="nextPrev()"
                        >
                          Submit
                        </a>
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
    main.innerHTML = categoryadd;
  } catch (err) {
    console.log(err);
  }
}

async function deletesubCategory(categoryId) {
  if (confirm("Are you sure you want to delete")) {
    const id = categoryId;
    const result = await fetch(`/subcategory/` + id, {
      method: "DELETE",
    });
    const data = await result.json();
    window.location.reload();
  }
}

async function editsubCategory(id) {
  try {
    const result = await fetch(`/subcategory/${id}`);
    const ans = await result.json();
    if (ans) {
      const result = await fetch("/subcategory/add");
      const { data } = await result.json();
      const main = document.getElementById("main");
      let editcategory = "";
      editcategory += `<section class="bg-image mt-5">
    <div class="d-flex align-items-center">
      <div class="container">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card" style="border-radius: 15px">
              <div class="card-body p-5">
                <form action="/subcategory/update" method="POST" id="regForm">
                  <div class="tab">
                    <div class="form-outline mb-4">
                    <input
                        type="hidden"
                        id="categoryId"
                        name="id"
                        class="form-control form-control"
                        value="${ans.id}"
                        required
                      />
                      <label class="form-label" for="categoryId"
                      >Category Name</label
                    >
                    <select
                      class="form-select"
                      id="categoryId"
                      name="categoryId"
                      required
                    >`;
      data.forEach((d) => {
        if (d.id == ans.categoryId) {
          editcategory += `<option value="${d.id}" selected>
                    ${d.categoryName}</option>`;
        } else {
          editcategory += `<option value="${d.id}">
                    ${d.categoryName}</option>`;
        }
      });
      editcategory += `</select>
                  </div>
                      <label class="form-label" for="SubCategory"
                        >Category Name</label
                      ><input
                        type="text"
                        id="subCategoryName"
                        name="subCategoryName"
                        class="form-control form-control"
                        value = "${ans.subCategoryName}"
                        required
                      />
                      <span id="subcategoryerror"></span>
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
                      <div id="back">
                        <a
                          class="btn btn-success btn-block btn-lg w-100 gradient-custom-4 text-body"
                          href="/subcategory"
                          class="button"
                        >
                          Back
                        </a>
                      </div>
                      <div id="submit">
                        <a
                          class="btn btn-success btn-block btn-lg w-100 gradient-custom-4 text-body"
                          id="prevBtn"
                          onclick="nextPrev()"
                        >
                          Submit
                        </a>
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
      main.innerHTML = editcategory;
    }
  } catch (err) {
    console.log(err);
  }
}

async function subcategory() {
  const subcategory = document.getElementById("subCategoryName");
  const subcategories = subcategory.value;
  let subcategoryerror = document.getElementById("subcategoryerror");
  let c = 0;
  if (subcategories != "") {
    subcategory.classList.remove("error");
    subcategoryerror.innerHTML = "";
    subcategoryerror.classList.remove("error");
    c++;
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
    if (!(await subcategory())) {
      CommonError.classList.add("error");
      CommonError.innerHTML = "Please fill the subCategory";
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
