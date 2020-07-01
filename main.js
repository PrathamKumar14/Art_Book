
var open1 = false;
var open2 = false;
var open3 = false;
var open4 = false;

function handleFlap1() {
  if(open1) {
    document.getElementsByClassName("flap")[0].style.transform = "rotateY(0deg)";
    document.getElementsByClassName("flap")[0].style.zIndex = "4";
    document.getElementsByClassName("flap")[0].style.opacity = "1 ";
    open1 = false;
  } else {
    document.getElementsByClassName("flap")[0].style.transform = "rotateY(-180deg)";
    document.getElementsByClassName("flap")[0].style.zIndex = "1";
    document.getElementsByClassName("flap")[0].style.opacity = "0.2";
    open1 = true;
  }
}

function handleFlap2() {
  if(open2) {
    document.getElementsByClassName("flap")[1].style.transform = "rotateY(0deg)";
    document.getElementsByClassName("flap")[1].style.zIndex = "3";
    open2 = false;
  } else {
    document.getElementsByClassName("flap")[1].style.transform = "rotateY(-180deg)";
    document.getElementsByClassName("flap")[1].style.zIndex = "2";
    open2 = true;
  }

}

function handleFlap3() {
  if(open3) {
    document.getElementsByClassName("flap")[2].style.transform = "rotateY(0deg)";
    document.getElementsByClassName("flap")[2].style.zIndex = "2";
    open3 = false;
  } else {
    document.getElementsByClassName("flap")[2].style.transform = "rotateY(-180deg)";
    document.getElementsByClassName("flap")[2].style.zIndex = "3";
    open3 = true;
  }

}

function handleFlap4() {
  if(open4) {
    document.getElementsByClassName("flap")[3].style.transform = "rotateY(0deg)";
    document.getElementsByClassName("flap")[3].style.zIndex = "1";
    open4 = false;
  } else {
    document.getElementsByClassName("flap")[3].style.transform = "rotateY(-180deg)";
    document.getElementsByClassName("flap")[3].style.zIndex = "4";
    open4 = true;
  }

}
