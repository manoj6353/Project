async function fetchstate() {
  let states = document.querySelector('#country');
  const result = await fetch(`fetch-state/${states.value}`);
  const { state } = await result.json();
  let opt = '';
  state.forEach((d) => {
    opt += `<option value="${d.id}">${d.name}</option>`;
    document.getElementById('state').innerHTML = opt;
  });
}

async function fetchcity() {
  let cities = document.querySelector('#state');
  const result = await fetch(`fetch-city/${cities.value}`);
  const { city } = await result.json();
  let opt = '';
  city.forEach((d) => {
    opt += `<option value="${d.id}">${d.name}</option>`;
    document.getElementById('city').innerHTML = opt;
  });
}
