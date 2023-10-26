//color generator
let start = document.getElementById("start");
let stop = document.getElementById("stop");

let colorgenerator = function () {
  let color = "#";
  const hex = "123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let startchange = function () {
  document.body.style.backgroundColor = colorgenerator();
};

let stopExe;
let changecolor = function () {
if(!stopExe){
    stopExe = setInterval(startchange, 2000);
}
};

let stopprocess = function () {
  clearInterval(stopExe);
  stopExe=null;
};

start.addEventListener("click", changecolor);
stop.addEventListener("click", stopprocess);
