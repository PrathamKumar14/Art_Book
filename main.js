
var open1 = false;
var open2 = false;
var open3 = false;
var open4 = false;
var open5 = false;
var open6 = false;

function handleFlap1() {
  if(open1) {
    document.getElementsByClassName("flap")[0].style.transform = "rotateY(0deg)";
    document.getElementsByClassName("flap")[0].style.zIndex = "6";
    document.getElementsByClassName("flap")[0].style.opacity = "1";
    open1 = false;
  } else {
    document.getElementsByClassName("flap")[0].style.transform = "rotateY(-180deg)";
    document.getElementsByClassName("flap")[0].style.zIndex = "1";
    document.getElementsByClassName("flap")[0].style.opacity = "0.5";
    open1 = true;
  }
}

function handleFlap2() {
  if(open2) {
    document.getElementsByClassName("flap")[1].style.transform = "rotateY(0deg)";
    document.getElementsByClassName("flap")[1].style.zIndex = "5";
    document.getElementsByClassName("flap")[1].style.opacity = "1";
    open2 = false;
  } else {
    document.getElementsByClassName("flap")[1].style.transform = "rotateY(-180deg)";
    document.getElementsByClassName("flap")[1].style.zIndex = "2";
    document.getElementsByClassName("flap")[1].style.opacity = "0.5";
    open2 = true;
  }

}

function handleFlap3() {
  if(open3) {
    document.getElementsByClassName("flap")[2].style.transform = "rotateY(0deg)";
    document.getElementsByClassName("flap")[2].style.zIndex = "4";
    document.getElementsByClassName("flap")[2].style.opacity = "1";
    open3 = false;
  } else {
    document.getElementsByClassName("flap")[2].style.transform = "rotateY(-180deg)";
    document.getElementsByClassName("flap")[2].style.zIndex = "3";
    document.getElementsByClassName("flap")[2].style.opacity = "0.5";
    open3 = true;
  }

}

function handleFlap4() {
  if(open4) {
    document.getElementsByClassName("flap")[3].style.transform = "rotateY(0deg)";
    document.getElementsByClassName("flap")[3].style.zIndex = "3";
    document.getElementsByClassName("flap")[3].style.opacity = "1";
    open4 = false;
  } else {
    document.getElementsByClassName("flap")[3].style.transform = "rotateY(-180deg)";
    document.getElementsByClassName("flap")[3].style.zIndex = "4";
    document.getElementsByClassName("flap")[3].style.opacity = "0.5";
    open4 = true;
  }

}

function handleFlap5() {
  if(open5) {
    document.getElementsByClassName("flap")[4].style.transform = "rotateY(0deg)";
    document.getElementsByClassName("flap")[4].style.zIndex = "2";
    document.getElementsByClassName("flap")[4].style.opacity = "1";
    open5 = false;
  } else {
    document.getElementsByClassName("flap")[4].style.transform = "rotateY(-180deg)";
    document.getElementsByClassName("flap")[4].style.zIndex = "5";
    document.getElementsByClassName("flap")[4].style.opacity = "0.5";
    open5 = true;
  }

}

function handleFlap6() {
  if(open6) {
    document.getElementsByClassName("flap")[5].style.transform = "rotateY(0deg)";
    document.getElementsByClassName("flap")[5].style.zIndex = "1";
    document.getElementsByClassName("flap")[5].style.opacity = "1";
    open6 = false;
  } else {
    document.getElementsByClassName("flap")[5].style.transform = "rotateY(-180deg)";
    document.getElementsByClassName("flap")[5].style.zIndex = "6";
    document.getElementsByClassName("flap")[5].style.opacity = "0.5";
    open6 = true;
  }

}
