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
