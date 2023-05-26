let dialogues = document.querySelector(".dialogues");
dialogues.style.display = "none";

async function addsubCategory() {
  try {
    document.getElementById("overlay").style.display = "block";
    let dialogues = document.querySelector(".dialogues");
    let text = document.getElementById("text");
    let id = document.getElementById("id");
    const result = await fetch("/subcategory/add");
    const { data } = await result.json();
    let category = document.getElementById("categoryName");
    let add = "";
    data.forEach((d) => {
      add += `<option id="${d.id}" value="${d.id}">
              ${d.categoryName}</option>`;
    });
    category.innerHTML = add;
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

let dialogue = document.querySelector(".dialogue");
dialogue.style.display = "none";

async function editsubCategory(id) {
  try {
    document.getElementById("overlay").style.display = "block";
    const result = await fetch(`/category/${id}`);
    const ans = await result.json();
    if (ans) {
      let dialogue = document.querySelector(".dialogue");
      let text = document.getElementById("text");
      let id = document.getElementById("id");
      id.value = ans.id;
      text.value = ans.categoryName;
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
