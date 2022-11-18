let calc01 = () => {
  let Math = +document.getElementById("inpToan").value;
  let Physic = +document.getElementById("inpLy").value;
  let Chemic = +document.getElementById("inpHoa").value;
  let total = calcAverage(Math, Physic, Chemic);
  console.log(total);
  document.getElementById("tbKhoi1").innerHTML = total;
};
let calc02 = () => {
  let Liter = +document.getElementById("inpVan").value;
  let His = +document.getElementById("inpSu").value;
  let Geo = +document.getElementById("inpDia").value;
  let Eng = +document.getElementById("inpEnglish").value;
  let total = calcAverage(Liter, His, Geo, Eng);
  console.log(total);
  document.getElementById("tbKhoi2").innerHTML = total;
};

function calcAverage(...params) {
  let total = 0;
  let count = 0;

  for (let i = 0; i < params.length; i++) {
    total += params[i];
    count++;
  }

  return total / count;
}
