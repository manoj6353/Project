let dialogues = document.querySelector(".dialogues");
dialogues.style.display = "none";

async function addProduct() {
  try {
    document.getElementById("overlay").style.display = "block";
    let dialogues = document.querySelector(".dialogues");
    let text = document.getElementById("text");
    let id = document.getElementById("id");
    const result = await fetch("/subcategory/add");
    const { data } = await result.json();
    let yesButton = dialogues.querySelector(".yes");
    let noButton = dialogues.querySelector(".no");

    yesButton.addEventListener("click", async function () {
      dialogues.style.display = "none";
      document.getElementById("overlay").style.display = "none";
    });
    noButton.addEventListener("click", function () {
      dialogues.style.display = "none";
      document.getElementById("overlay").style.display = "none";
    });
    dialogues.style.display = "block";
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

let dialogue = document.querySelector(".dialogue");
dialogue.style.display = "none";

async function editProduct(id) {
  try {
    document.getElementById("overlay").style.display = "block";
    const result = await fetch(`/product/${id}`);
    const ans = await result.json();
    if (ans) {
      let dialogue = document.querySelector(".dialogue");
      let ProductName = document.getElementById("productNames");
      let quantities = document.getElementById("quantities");
      let images = document.getElementById("productImage");
      let prices = document.getElementById("prices");
      let productdetail = document.getElementById("productdetail");
      let id = document.getElementById("productid");
      let categoryId = document.getElementById("categoryid");
      id.value = ans.id;
      categoryId.value = ans.productCategory[0].categoryId;
      ProductName.value = ans.productName;
      quantities.value = ans.quantity;
      prices.value = ans.price;
      productdetail.value = ans.productdetails;
      if (ans.image) {
        images.innerHTML = `<img
      src="./images/${ans.image}"
      width="100px"
      height="100px"
    />`;
      }
      // text.value = ans.subCategoryName;
      // const result = await fetch("/product/category");
      // const data = await result.json();
      // console.log(data);
      // let category = document.getElementById("subcategoryName");
      // let add = "";
      // data.forEach((d) => {
      //   if (d.id == ans.categoryId) {
      //     add += `<option id="${d.id}" value="${d.id}" selected>
      //           ${d.categoryName}</option>`;
      //   } else {
      //     add += `<option id="${d.id}" value="${d.id}">
      //           ${d.categoryName}</option>`;
      //   }
      // });
      // category.innerHTML = add;

      let yesButton = dialogue.querySelector(".yes");
      let noButton = dialogue.querySelector(".no");
      yesButton.addEventListener("click", async function () {
        dialogue.style.display = "none";
        document.getElementById("overlay").style.display = "none";
      });
      noButton.addEventListener("click", function () {
        dialogue.style.display = "none";
        document.getElementById("overlay").style.display = "none";
      });
      dialogue.style.display = "block";
    }
  } catch (err) {
    console.log(err);
  }
}
