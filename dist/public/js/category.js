let dialogue = document.querySelector(".dialogue");
dialogue.style.display = "none";

async function editCategory(id) {
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
  console.log(data);
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

let dialogues = document.querySelector(".dialogues");
dialogues.style.display = "none";

async function addCategory() {
  try {
    document.getElementById("overlay").style.display = "block";
    let dialogues = document.querySelector(".dialogues");

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
    console.log("error");
  }
}
