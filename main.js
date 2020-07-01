
var open1 = false;
var open2 = false;
var open3 = false;
var open4 = false;
var open5 = false;
var open6 = false;
var open7 = false;
var open8 = false;
var open9 = false;
var open10 = false;
var open11 = false;
var open12 = false;

function handleFlap1() {
  if(open1) {
    document.getElementsByClassName("flap")[0].style.transform = "rotateY(0deg)";
    document.getElementsByClassName("flap")[0].style.zIndex = "12";
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
    document.getElementsByClassName("flap")[1].style.zIndex = "11";
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
    document.getElementsByClassName("flap")[2].style.zIndex = "10";
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
    document.getElementsByClassName("flap")[3].style.zIndex = "9";
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
    document.getElementsByClassName("flap")[4].style.zIndex = "8";
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
    document.getElementsByClassName("flap")[5].style.zIndex = "7";
    document.getElementsByClassName("flap")[5].style.opacity = "1";
    open6 = false;
  } else {
    document.getElementsByClassName("flap")[5].style.transform = "rotateY(-180deg)";
    document.getElementsByClassName("flap")[5].style.zIndex = "6";
    document.getElementsByClassName("flap")[5].style.opacity = "0.5";
    open6 = true;
  }

}

function handleFlap7() {
  if(open7) {
    document.getElementsByClassName("flap")[6].style.transform = "rotateY(0deg)";
    document.getElementsByClassName("flap")[6].style.zIndex = "6";
    document.getElementsByClassName("flap")[6].style.opacity = "1";
    open7 = false;
  } else {
    document.getElementsByClassName("flap")[6].style.transform = "rotateY(-180deg)";
    document.getElementsByClassName("flap")[6].style.zIndex = "7";
    document.getElementsByClassName("flap")[6].style.opacity = "0.5";
    open7 = true;
  }

}

function handleFlap8() {
  if(open8) {
    document.getElementsByClassName("flap")[7].style.transform = "rotateY(0deg)";
    document.getElementsByClassName("flap")[7].style.zIndex = "5";
    document.getElementsByClassName("flap")[7].style.opacity = "1";
    open8 = false;
  } else {
    document.getElementsByClassName("flap")[7].style.transform = "rotateY(-180deg)";
    document.getElementsByClassName("flap")[7].style.zIndex = "8";
    document.getElementsByClassName("flap")[7].style.opacity = "0.5";
    open8 = true;
  }

}

function handleFlap9() {
  if(open9) {
    document.getElementsByClassName("flap")[8].style.transform = "rotateY(0deg)";
    document.getElementsByClassName("flap")[8].style.zIndex = "4";
    document.getElementsByClassName("flap")[8].style.opacity = "1";
    open9 = false;
  } else {
    document.getElementsByClassName("flap")[8].style.transform = "rotateY(-180deg)";
    document.getElementsByClassName("flap")[8].style.zIndex = "9";
    document.getElementsByClassName("flap")[8].style.opacity = "0.5";
    open9 = true;
  }

}

function handleFlap10() {
  if(open10) {
    document.getElementsByClassName("flap")[9].style.transform = "rotateY(0deg)";
    document.getElementsByClassName("flap")[9].style.zIndex = "3";
    document.getElementsByClassName("flap")[9].style.opacity = "1";
    open10 = false;
  } else {
    document.getElementsByClassName("flap")[9].style.transform = "rotateY(-180deg)";
    document.getElementsByClassName("flap")[9].style.zIndex = "10";
    document.getElementsByClassName("flap")[9].style.opacity = "0.5";
    open10 = true;
  }

}

function handleFlap11() {
  if(open11) {
    document.getElementsByClassName("flap")[10].style.transform = "rotateY(0deg)";
    document.getElementsByClassName("flap")[10].style.zIndex = "2";
    document.getElementsByClassName("flap")[10].style.opacity = "1";
    open11 = false;
  } else {
    document.getElementsByClassName("flap")[10].style.transform = "rotateY(-180deg)";
    document.getElementsByClassName("flap")[10].style.zIndex = "11";
    document.getElementsByClassName("flap")[10].style.opacity = "0.5";
    open11 = true;
  }

}

function handleFlap12() {
  if(open12) {
    document.getElementsByClassName("flap")[11].style.transform = "rotateY(0deg)";
    document.getElementsByClassName("flap")[11].style.zIndex = "1";
    document.getElementsByClassName("flap")[11].style.opacity = "1";
    open12 = false;
  } else {
    document.getElementsByClassName("flap")[11].style.transform = "rotateY(-180deg)";
    document.getElementsByClassName("flap")[11].style.zIndex = "12";
    document.getElementsByClassName("flap")[11].style.opacity = "0.5";
    open12 = true;
  }

}
