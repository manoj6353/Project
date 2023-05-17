var currentTab = 0;
showTab(currentTab);

let firstname = document.getElementById('firstName');
let lastname = document.getElementById('lastName');
let contact = document.getElementById('contact');
let email = document.getElementById('email');
let age = document.getElementById('age');
let password = document.getElementById('password');
let confirmpassword = document.getElementById('confirmpassword');
let firsterror = document.getElementById('firsterror');
let lasterror = document.getElementById('lasterror');
let contacterror = document.getElementById('contacterror');
let emailerror = document.getElementById('emailerror');
let ageerror = document.getElementById('ageerror');
let passworderror = document.getElementById('confirmpassworderror');
const namepattern = /^[a-zA-Z ]{2,30}$/gm;
const agepattern = /^[0-9]{2,2}$/gm;
const contactpattern = /^\(?([0-9]{3})\)?([0-9]{3})([0-9]{4})$/;
const emailPattern = /\S+@\S+\.\S+/;
function basicvalidation() {
  let c = 0;
  try {
    if (firstname.value != '') {
      if (firstname.value.match(namepattern)) {
        firstname.classList.remove('error');
        firsterror.innerHTML = '';
        firsterror.classList.remove('error');
        c++;
      } else {
        firstname.classList.add('error');
        firsterror.classList.add('error');
        firsterror.innerHTML = 'Please enter a valid first name';
      }
    }
    if (lastname.value != '') {
      if (lastname.value.match(namepattern)) {
        lastname.classList.remove('error');
        lasterror.innerHTML = '';
        lasterror.classList.remove('error');
        c++;
      } else {
        lastname.classList.add('error');
        lasterror.classList.add('error');
        lasterror.innerHTML = 'Please enter a valid last name';
      }
    }
    if (email.value != '') {
      if (email.value.match(emailPattern)) {
        email.classList.remove('error');
        emailerror.innerHTML = '';
        emailerror.classList.remove('error');
        c++;
      } else {
        email.classList.add('error');
        emailerror.classList.add('error');
        emailerror.innerHTML = 'Please enter a valid email';
      }
    }
    if (contact.value != '') {
      if (contact.value.match(contactpattern)) {
        contact.classList.remove('error');
        contacterror.innerHTML = '';
        contacterror.classList.remove('error');
        c++;
      } else {
        contact.classList.add('error');
        contacterror.classList.add('error');
        contacterror.innerHTML = 'Please enter a valid contact';
      }
    }
    if (password.value != '' || confirmpassword.value != '') {
      if (password.value == confirmpassword.value) {
        confirmpassword.classList.remove('error');
        passworderror.innerHTML = '';
        passworderror.classList.remove('error');
        c++;
      } else {
        confirmpassword.classList.add('error');
        passworderror.innerHTML =
          'confirm password and password does not match';
        passworderror.classList.add('error');
      }
    }
    if (age.value != '') {
      if (age.value.match(agepattern)) {
        age.classList.remove('error');
        ageerror.innerHTML = '';
        ageerror.classList.remove('error');
        c++;
      } else {
        age.classList.add('error');
        ageerror.classList.add('error');
        ageerror.innerHTML = 'Please enter a valid age';
      }
    }
    if (c == 6) {
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
    if (firstname.value != '') {
      let firstName = firstname.value;
      let firstChar = firstName.charAt(0);
      let firstUpper = firstChar.toUpperCase();
      let removeChar = firstName.slice(1);
      let lower = removeChar.toLowerCase();
      firstUpper += lower;
      firstname.value = firstUpper;
    }
    if (lastname.value != '') {
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

function showTab(n) {
  try {
    var x = document.getElementsByClassName('tab');
    // console.log('--------------', x);
    x[n].style.display = 'block';
    if (n == 0) {
      document.getElementById('prevBtn').style.display = 'none';
    } else {
      document.getElementById('prevBtn').style.display = 'block';
    }
    if (n == x.length - 1) {
      document.getElementById('nextBtn').innerHTML = 'Submit';
    } else {
      document.getElementById('nextBtn').innerHTML = 'Next';
    }
  } catch (err) {
    console.log(err);
  }
}

let CommonError = document.getElementById('fullError');

function nextPrev(n) {
  try {
    var x = document.getElementsByClassName('tab');
    if (n == 1 && !basicvalidation()) {
      CommonError.classList.add('error');
      CommonError.innerHTML = 'Please fill the Basic details';
      return false;
    } else {
      CommonError.classList.remove('error');
      CommonError.innerHTML = '';
      x[currentTab].style.display = 'none';
      currentTab = currentTab + n;
      if (currentTab >= x.length) {
        document.getElementById('regForm').submit();
        return false;
      }
      showTab(currentTab);
      return true;
    }
  } catch (err) {
    console.log(err);
  }
}
