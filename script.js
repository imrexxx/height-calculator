document.getElementById("calculate").addEventListener("click", function () {
  let dadHeight = document.getElementById("dad-height");
  let momHeight = document.getElementById("mom-height");

  // calculate

  // get the radio button
  let selected = document.querySelector('input[type="radio"]:checked');
  // console.log(selected.parentElement.textContent);

  if (selected.parentElement.textContent === "Laki-laki") {
    const dh = (document.getElementById("dh").innerHTML = `${dadHeight.value} cm`);
    const mh = (document.getElementById("mh").innerHTML = `${momHeight.value} cm`);

    // calculate the height
    const height = (parseInt(momHeight.value) + 13 + parseInt(dadHeight.value)) / 2 + 8.5;
    const ty = (document.getElementById("ty").innerHTML = `${height} cm`);
    const ft = (document.getElementById("ft").innerHTML = `${(height * 0.0328084).toFixed(1)} ft`);
  } else if (selected.parentElement.textContent === "Perempuan") {
    const dh = (document.getElementById("dh").innerHTML = `${dadHeight.value} cm`);
    const mh = (document.getElementById("mh").innerHTML = `${momHeight.value} cm`);

    // calculate the height
    const height = (parseInt(dadHeight.value) - 13 + parseInt(momHeight.value)) / 2 + 8.5;
    const ty = (document.getElementById("ty").innerHTML = `${height} cm`);
    const ft = (document.getElementById("ft").innerHTML = `${(height * 0.0328084).toFixed(1)} ft`);
  } else {
    alert("Anda tidak memasukkan inputan yang valid!");
  }
});
