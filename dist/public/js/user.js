async function deleteUser(id) {
  if (confirm("Are you sure you want to delete")) {
    const result = await fetch(`/user/${id}`, {
      method: "DELETE",
    });
    const data = await result.json();
    window.location.reload();
  }
}

async function addUser() {
  try {
    let adduser = document.getElementById("main");
    adduser.innerHTML = "";
    adduser.innerHTML += `<section class="bg-image mt-5">
    <div class="d-flex align-items-center">
      <div class="container">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card" style="border-radius: 15px">
              <div class="card-body p-5">
                <h2 class="text-center mb-2">Register Your self</h2>
                <form action="/admin" method="POST" id="regForm">
                  <hr />
                  <div class="tab">
                    <div class="form-outline mb-4">
                      <label class="form-label" for="firstName"
                        >First Name</label
                      ><input
                        type="text"
                        id="firstName"
                        name="firstName"
                        class="form-control form-control"
                        required
                        oninput="updatevalidation()"
                        onchange="toupper()"
                      />
                      <span id="firsterror"></span>
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="lastName"
                        >Last Name</label
                      ><input
                        type="text"
                        id="lastName"
                        name="lastName"
                        class="form-control form-control"
                        required
                        oninput="basicvalidation()"
                        onchange="toupper()"
                      />
                      <span id="lasterror"></span>
                    </div>
                    <div class="form-outline mb-4">
                      <label class="form-label" for="age">Age</label
                      ><input
                        type="text"
                        id="age"
                        name="age"
                        class="form-control form-control"
                        required
                        oninput="basicvalidation()"
                      />
                      <span id="ageerror"></span>
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="contact">Contact</label
                      ><input
                        type="text"
                        id="contact"
                        name="contact"
                        class="form-control form-control"
                        required
                        oninput="basicvalidation()"
                      />
                      <span id="contacterror"></span>
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="gender">Gender</label
                      ><br />
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="gender"
                          id="male"
                          value="Male"
                          required
                          checked
                        />
                        <label class="form-check-label" for="male">
                          Male
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="gender"
                          id="female"
                          value="Female"
                          required
                        />
                        <label class="form-check-label" for="female">
                          Female
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="gender"
                          id="other"
                          value="Others"
                          required
                        />
                        <label class="form-check-label" for="other">
                          Other
                        </label>
                      </div>
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="email">E - Mail</label
                      ><input
                        type="email"
                        id="email"
                        name="email"
                        class="form-control form-control"
                        required
                        oninput="basicvalidation()"
                      />
                      <span id="emailerror"></span>
                      <span id="emailverifyerror"></span>
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="password">Password</label
                      ><input
                        type="password"
                        id="password"
                        name="password"
                        class="form-control form-control"
                        required
                        oninput="basicvalidation()"
                      />
                      <span id="passworderror"></span>
                    </div>
                    <div class="form-outline mb-4">
                      <label class="form-label" for="confirmpassword"
                        >Confirm Password</label
                      ><input
                        type="password"
                        id="confirmpassword"
                        class="form-control form-control"
                        required
                        oninput="basicvalidation()"
                      />
                      <span id="confirmpassworderror"></span>
                    </div>
                    <div class="commonerror">
                      <span id="fullError"></span>
                    </div>
                    <div
                      style="overflow: auto"
                      class="d-flex justify-content-center gap"
                    >
                      <div style="float: right" class="d-flex justify-content-center gap">
                        <div id="submit">
                          <a
                            class="btn btn-success btn-block btn-lg w-100 gradient-custom-4 text-body"
                            id="prevBtn"
                            onclick="nextPrev()"
                          >
                            Sign Up
                          </a>
                        </div>
                        <div id="back">
                          <a class="btn btn-success btn-block btn-lg w-100 gradient-custom-4 text-body" href="/admin" class="button"> Back </a> 
                        </div>
                        </div>
                        </div>
                        <div class="login btn btn-link btn-light">
                          <a style="color: blue" href="/login">Sign in</a>
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
  } catch (err) {
    console.log(err);
  }
}

async function editUser(id) {
  try {
    const result = await fetch(`/user/${id}`);
    const { users } = await result.json();
    let adduser = document.getElementById("main");
    adduser.innerHTML = "";
    adduser.innerHTML += `<section class="bg-image mt-5">
    <div class="d-flex align-items-center">
      <div class="container">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card" style="border-radius: 15px">
              <div class="card-body p-5">
                <form action="/user/update" method="POST" id="regForm">
                  <div class="tab">
                  <input
                        type="hidden"
                        id="id"
                        name="userId"
                        class="form-control form-control"
                        required
                        value="${id}"
                      />
                    <div class="form-outline mb-4">
                      <label class="form-label" for="firstName"
                        >First Name</label
                      ><input
                        type="text"
                        id="firstName"
                        name="firstName"
                        class="form-control form-control"
                        value="${users.firstName}"
                        required
                        oninput="updatevalidation()"
                        onchange="toupper()"
                      />
                      <span id="firsterror"></span>
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="lastName"
                        >Last Name</label
                      ><input
                        type="text"
                        id="lastName"
                        name="lastName"
                        class="form-control form-control"
                        value="${users.lastName}"
                        required
                        oninput="updatevalidation()"
                        onchange="toupper()"
                      />
                      <span id="lasterror"></span>
                    </div>
                    <div class="form-outline mb-4">
                      <label class="form-label" for="age">Age</label
                      ><input
                        type="text"
                        id="age"
                        name="age"
                        class="form-control form-control"
                        value="${users.age}"
                        required
                        oninput="updatevalidation()"
                      />
                      <span id="ageerror"></span>
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="contact">Contact</label
                      ><input
                        type="text"
                        id="contact"
                        name="contact"
                        class="form-control form-control"
                        value="${users.contact}"
                        required
                        oninput="updatevalidation()"
                      />
                      <span id="contacterror"></span>
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="gender">Gender</label
                      ><br />
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="gender"
                          id="male"
                          value="Male"
                          required
                          checked
                        />
                        <label class="form-check-label" for="male">
                          Male
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="gender"
                          id="female"
                          value="Female"
                          required
                        />
                        <label class="form-check-label" for="female">
                          Female
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="gender"
                          id="other"
                          value="Others"
                          required
                        />
                        <label class="form-check-label" for="other">
                          Other
                        </label>
                      </div>
                    </div>
                    <div class="commonerror">
                      <span id="fullError"></span>
                    </div>
                    <div
                      style="overflow: auto"
                      class="d-flex justify-content-center gap"
                    >
                      <div style="float: right" class="d-flex justify-content-center gap">
                        <div id="submit">
                          <a
                            class="btn btn-success btn-block btn-lg w-100 gradient-custom-4 text-body"
                            id="prevBtn"
                            onclick="submitform()"
                          >
                            Update
                          </a>
                        </div>
                        <div id="back">
                          <a class="btn btn-success btn-block btn-lg w-100 gradient-custom-4 text-body" href="/admin" class="button"> Back </a> 
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
  } catch (err) {
    console.log(err);
  }
}
