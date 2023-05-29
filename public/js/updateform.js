function updatevalidation() {
  let firstname = document.getElementById("firstName");
  let lastname = document.getElementById("lastName");
  let contact = document.getElementById("contact");
  let age = document.getElementById("age");
  let firsterror = document.getElementById("firsterror");
  let lasterror = document.getElementById("lasterror");
  let contacterror = document.getElementById("contacterror");
  let ageerror = document.getElementById("ageerror");
  const namepattern = /^[a-zA-Z ]{2,30}$/gm;
  const agepattern = /^[0-9]{2,2}$/gm;
  const contactpattern = /^\(?([0-9]{3})\)?([0-9]{3})([0-9]{4})$/;
  let c = 0;
  try {
    if (firstname.value != "") {
      if (firstname.value.match(namepattern)) {
        firstname.classList.remove("error");
        firsterror.innerHTML = "";
        firsterror.classList.remove("error");
        c++;
      } else {
        firstname.classList.add("error");
        firsterror.classList.add("error");
        firsterror.innerHTML = "Please enter a valid first name";
      }
    }
    if (lastname.value != "") {
      if (lastname.value.match(namepattern)) {
        lastname.classList.remove("error");
        lasterror.innerHTML = "";
        lasterror.classList.remove("error");
        c++;
      } else {
        lastname.classList.add("error");
        lasterror.classList.add("error");
        lasterror.innerHTML = "Please enter a valid last name";
      }
    }
    if (contact.value != "") {
      if (contact.value.match(contactpattern)) {
        contact.classList.remove("error");
        contacterror.innerHTML = "";
        contacterror.classList.remove("error");
        c++;
      } else {
        contact.classList.add("error");
        contacterror.classList.add("error");
        contacterror.innerHTML = "Please enter a valid contact";
      }
    }
    if (age.value != "") {
      if (age.value.match(agepattern)) {
        age.classList.remove("error");
        ageerror.innerHTML = "";
        ageerror.classList.remove("error");
        c++;
      } else {
        age.classList.add("error");
        ageerror.classList.add("error");
        ageerror.innerHTML = "Please enter a valid age";
      }
    }
    if (c == 4) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
}

function toupper() {
  try {
    let firstname = document.getElementById("firstName");
    let lastname = document.getElementById("lastName");
    if (firstname.value != "") {
      let firstName = firstname.value;
      let firstChar = firstName.charAt(0);
      let firstUpper = firstChar.toUpperCase();
      let removeChar = firstName.slice(1);
      let lower = removeChar.toLowerCase();
      firstUpper += lower;
      firstname.value = firstUpper;
    }
    if (lastname.value != "") {
      let lastName = lastname.value;
      let firstChar = lastName.charAt(0);
      let firstUpper = firstChar.toUpperCase();
      let removeChar = lastName.slice(1);
      let lower = removeChar.toLowerCase();
      firstUpper += lower;
      lastname.value = firstUpper;
    }
  } catch (err) {
    console.log(err);
  }
}

function submitform() {
  let CommonError = document.getElementById("fullError");
  try {
    let n = 1;
    let currentTab = 1;
    var x = document.getElementsByClassName("tab");
    if (!updatevalidation()) {
      CommonError.classList.add("error");
      CommonError.innerHTML = "Please fill the Basic details";
      return false;
    } else {
      CommonError.classList.remove("error");
      CommonError.innerHTML = "";
      currentTab = currentTab + n;
      if (currentTab >= x.length) {
        document.getElementById("regForm").submit();
        return false;
      }
      return true;
    }
  } catch (err) {
    console.log(err);
  }
}
