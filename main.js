const theColors = [
  "rgb(0, 0, 255)",
  "rgb(255, 0, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(255, 255, 0)",
  "rgb(255, 0, 255)"
  ];
  const square  = document.querySelectorAll(".square");
  const messageContainer = document.getElementById("messageContainer");
  
  const displayColor = document.getElementById("DisplayColor")
  let pickedColor = theColors[0];
  displayColor.textContent = pickedColor;
  for (let i = 0; i < square.length; i++){
    square[i].style.backgroundColor = theColors[i];
  square[i].addEventListener("click",function(){
    const clickedColor = this.style.backgroundColor
    if (clickedColor === pickedColor){
     messageContainer.textContent = "you won"; 
     changeAllcolorstotrue(pickedColor);
    } else {
      this.style.backgroundColor = "black";
      messageContainer.textContent = ("whoops! try again");
    }
  })
  };
  const changeAllcolorstotrue = (colo)=> {
    square.forEach((squares)=> {
      squares.style.backgroundColor = pickedColor;
    })
  }
