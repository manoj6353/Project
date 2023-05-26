async function fetchstate() {
  let states = document.getElementById("country");
  const result = await fetch(`/addresses/fetch-state/${states.value}`);
  const { state } = await result.json();
  let opt = "";
  state.forEach((d) => {
    opt += `<option value="${d.id}">${d.name}</option>`;
    document.getElementById("state").innerHTML = opt;
  });
}

async function fetchcity() {
  let cities = document.getElementById("state");
  const result = await fetch(`/addresses/fetch-city/${cities.value}`);
  const { city } = await result.json();
  let opt = "";
  city.forEach((d) => {
    opt += `<option value="${d.id}">${d.name}</option>`;
    document.getElementById("city").innerHTML = opt;
  });
}
