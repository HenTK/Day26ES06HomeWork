const colorList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];
window.onload = function () {
  renderHouseColor();
};
let renderHouseColor = () => {
  content = "";
  for (var i = 0; i < colorList.length; i++) {
    content += `
        <button class = "${colorList[i]} color-button" onclick = "renderColor('${colorList[i]}')"></button>
        `;
  }
  document.getElementById("colorContainer").innerHTML = content;
};

function renderColor(data) {
  document.getElementById("house").classList.add(data);
}
