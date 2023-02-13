const btn = document.querySelector("#btn");
const box = document.querySelector(".box");
var names = [];
var ImagesUrl = [];
var imagetag;
var red, green, blue;
var randomNumber;
var count = 0;
var memename = document.querySelector(".meme-name");
btn.addEventListener("click", () => {
  count++;
  if (count > 1) {
    clearFunc();
  }
  doAPi();
});
function clearFunc() {
  box.removeChild(imagetag);
}

function doAPi() {
  red = Math.floor(Math.random() * 256) + 1;
  green = Math.floor(Math.random() * 256) + 1;
  blue = Math.floor(Math.random() * 256) + 1;
  randomNumber = Math.floor(Math.random() * 100);
  box.style.boxShadow = `0 0 20px 12px rgba(${red},${green},${blue},0.5)`;
  box.style.border = "none";
  box.style.color = "#fff";
  box.style.fontStyle = "italic";
  imagetag = document.createElement("img");
  imagetag.setAttribute("src", ImagesUrl[randomNumber]);
  imagetag.style.width = "100%";
  imagetag.style.height = "100%";
  imagetag.style.backgroundSize = "cover";
  box.innerHTML = "";
  box.appendChild(imagetag);
  memename.innerHTML = names[randomNumber];
  //   console.log(ImagesUrl[randomNumber]);
  //   box.innerHTML = `<img src=${ImagesUrl[randomNumber]}></img>`;
}
fetch("https://api.imgflip.com/get_memes")
  .then((res) => {
    // console.log(res);
    return res.json();
  })
  .then((data) => {
    var datas = data.data.memes;
    for (var i = 0; i < datas.length; i++) {
      //   console.log(datas[i].name);
      names.push(datas[i].name);
      ImagesUrl.push(datas[i].url);
    }
  })
  .catch((error) => console.log(error));
