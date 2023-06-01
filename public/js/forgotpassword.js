async function validate() {
  const otp = document.getElementById("otp").value;
  const password = document.getElementById("password").value;
  const confirmpassword = document.getElementById("confirmpassword").value;
  const error = document.getElementById("error");
  if (password == confirmpassword) {
    const result = await fetch(window.location.href, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ otp, password, confirmpassword }),
    });
    const { data } = await result.json();
    if (data.error) {
      error.classList.add("error");
      error.innerHTML = data.error;
    } else if (data.success) {
      alert("Password Changed Successfully");
      window.location.href = "/";
    }
  }
}
