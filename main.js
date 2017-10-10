// var answerBox = document.querySelector("#inject-html .answer-box")
//
// answerBox.innerHTML= "<h2> Hola!</h2>"
// console.log(answerBox);


document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Hi!!!</h2>"
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var answerPTagWithValue = document.querySelector("#compoundInvestment")
  answerPTagWithValue.textContent *=2

  // you do the rest

})

var contador = 0
document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
  var circleBw = document.querySelector("#circle-bw")

  contador ++
  console.log(contador);

  if (contador%2 !== 0) {
    circleBw.style.background = "black"
  }else if (contador%2 === 0) {
    circleBw.style.background = "rgb(255,255,255)"}


})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
  var circleRed = document.querySelector(".circle-red")
  contador ++
    if (contador === 1) {
      circleRed.style.width = '80px'
      circleRed.style.height = '80px'
    }else if (contador === 2) {
      circleRed.style.width = '160px'
      circleRed.style.height = '160px'
    }else if (contador === 3) {
      circleRed.style.width = '320px'
      circleRed.style.height = '320px'

    }else if(contador === 4){
      circleRed.style.width = '40px'
      circleRed.style.height = '40px'
    }

})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
  var userList = document.getElementsByTagName('li');
  for (var i = 0; i < userList.length; i++) {
    if (userList[i].className === "inactive") {
      userList[i].style.display = "none"

    }
  }
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
  // {
  //   display: flex;
  //   justify-content: center;
  //   flex-direction: row-reverse;
  // }
  var answerBox = document.querySelectorAll('.answer-box')
  console.log(answerBox);
  for (var i = 0; i < answerBox.length; i++) {
    answerBox[i].style.display = "flex"
    answerBox[i].style.justifyContent = "center"
    answerBox[i].style.flexDirection = "row-reverse"
  }
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
  var liTasks = document.querySelectorAll("#tasks li")
  // console.log(liTasks);
  var contenido;
  for (var i = 0; i < liTasks.length; i++) {
    contenido = liTasks[i].innerHTML.split("")
    // console.log(contenido);
    liTasks[i].innerHTML = contenido.reverse().join("")
    // console.log(nuevo);
  }

})



var i = 1;
document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #8
   var cityImg = document.querySelector("#city-img")
   console.log(cityImg);
   i ++
   var srcN= "images/city-photo-"+ i +".jpg"
   cityImg.src = srcN
   if (i === 10) {
     i = 0
   }
})
