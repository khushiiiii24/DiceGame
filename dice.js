const numbers = document.querySelectorAll(".num");
const diceImg = document.querySelector("img");
const scoreDisplay = document.querySelector("#score");
// console.log(num);
let score = 0;
let selectedNumber;
let randomNumber;
const diceArr = {
1:'dicephotos/dice_1.png',
2:'dicephotos/dice_2.png',
3:'dicephotos/dice_3.png',
4:'dicephotos/dice_4.png',
5:'dicephotos/dice_5.png',
6:'dicephotos/dice_6.png',
}
  
numbers.forEach((numb)=>{
numb.addEventListener("click",()=>{
    selectedNumber=numb.innerText;
    console.log("Selected Number : " ,selectedNumber);
    
})
})
diceImg.addEventListener("click",()=>{
    randomNumber=getARandomNumber();
    console.log("RandomNumber : ",randomNumber);
    diceImg.src = diceArr[randomNumber];
    if(Number(selectedNumber)===Number(randomNumber)){
        score +=5;
    }
    else{
        score -=5;
    }
    scoreDisplay.innerText=score;
})
function getARandomNumber(){
const randomValue=Math.floor(Math.random()*6);
if(randomValue===0){
   return getARandomNumber();
}
else{
    return randomValue;
}
}