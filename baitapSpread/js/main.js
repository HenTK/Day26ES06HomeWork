let Seperatetxt = () => {
  let txt = document.getElementById("heading").innerHTML;
  let chars = [...txt];
  let content = "";
  for (let i = 0; i < chars.length; i++) {
    content += `<span class = "char-Hover">${chars[i]}</span>`;
  }
  document.getElementById("heading").innerHTML = content;
};
window.onload = () => {
  Seperatetxt();
};
