// let count = document.getElementById("displayscreen");
// let btnInc = document.getElementById("btnInc");
// let btnDec = document.getElementById("btnDec");
// btnInc.addEventListener("click", () => {
//   count.value = parseInt(count.value) + 1;
// });
// btnDec.addEventListener("click", () => {
//   count.value = parseInt(count.value) - 1;
// });
//   <input type="text" value="0" id="displayscreen">
//             <button id="btnInc" >Increment</button>
//             <button id="btnDec" >Decrement</button>

const showUp = () => {
  document.getElementsByTagName("li")[0].style.left = "-7px";
  document.getElementsByTagName("li")[1].style.left = "-7px";
  document.getElementsByTagName("li")[2].style.left = "-7px";
  document.getElementsByTagName("li")[3].style.left = "-7px";

  document.getElementById("two").style.left = "0px";
  document.getElementById("one").style.left = "550px";
};

const hide = () => {
  document.getElementsByTagName("li")[0].style.left = "200px";
  document.getElementsByTagName("li")[1].style.left = "200px";
  document.getElementsByTagName("li")[2].style.left = "200px";
  document.getElementsByTagName("li")[3].style.left = "200px";
  document.getElementById("two").style.left = "100px";
  document.getElementById("one").style.left = "0px";
};

if (hide) {
  document.getElementById("one").style.zIndex = "1";
} else {
  document.getElementById("one").style.zIndex = "1";
}
