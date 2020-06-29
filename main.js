
var open = false;
var open1 = false;

function handleFlap() {
  if(open) {
    document.getElementsByClassName("flap")[0].style.transform = "rotateY(0deg)";
    document.getElementsByClassName("flap")[0].style.zIndex = "-1";
    open = false;
  } else {
    document.getElementsByClassName("flap")[0].style.transform = "rotateY(-180deg)";
    document.getElementsByClassName("flap")[0].style.zIndex = "1";
    open = true;
  }
}

function handleFlap1() {
  if(open1) {
    document.getElementsByClassName("flap")[1].style.transform = "rotateY(0deg)";
    document.getElementsByClassName("flap")[1].style.zIndex = "1";
    open1 = false;
  } else {
    document.getElementsByClassName("flap")[1].style.transform = "rotateY(-180deg)";
    document.getElementsByClassName("flap")[1].style.zIndex = "-1";
    open1 = true;
  }

}
