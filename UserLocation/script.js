const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  if (navigator.geolocation) {
    btn.innerText = "Allow to detect location";
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  } else {
    btn.innerText = "Your browser not support";
  }
});

function onSuccess(position) {
  btn.innerText = "Detecting your location...";
  let { latitude, longitude } = position.coords;
  // https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key= ${eb41a6b9630f4f5bba3df8ec738bf1c4}
  fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=eb41a6b9630f4f5bba3df8ec738bf1c4`
  )
    .then((response) =>
      response.json().then((result) => {
        // console.log(result);
        // let allDetails = result.results[0].components;
        // console.table(allDetails)
        // let {country, country_code,state} = allDetails
        // btn.innerText = `${country} ${country_code}, ${state}`

        let allDetails = result.results[0].formatted;
        btn.innerText = allDetails;
      })
    )
    .catch(() => {
      btn.innerText = "Something went wrong";
    });
}

function onError(error) {
  if (error.code === 1) {
    // if user denide the request
    btn.innerText = "You denide the request";
  } else if (error.code === 2) {
    // if location is not available
    btn.innerText = "Loction not available";
  } else {
    // if any other error occured
    btn.innerText = "Something went wrong";
  }
  btn.setAttribute("disabled", "true");
}
