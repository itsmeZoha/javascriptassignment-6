let userName = prompt("Please Enter your name to visit our website? ") 
window.onload = function(){
   let message ="Good Day"
// //    let firstName = prompt("Please Enter Your First Name?")
// //    let lastName = prompt("Please Enter Your Last Name?")
// //    let fullName = firstName +" "+ lastName
   let banger ="!"
   document.getElementById("userName").innerHTML = message + " " + userName+ banger
}

//---------------------------------------------------------------------------------//
 let rightNowDate = new Date()                              
 var dayName = ["sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]


  document.getElementById('originalTextBox').innerHTML = rightNowDate

//-----------------Get Name of Today----------------//
function getNameOfToday(){
   let rightNow = new Date()
   let theDay = rightNow.getDay()
   let nameOfToday = dayName[theDay]
   // console.log(nameOfToday)
  showOutput(nameOfToday)
  tellTime() 
}
//-----------------Calculate Days Passed since I born----------------//
function calculateDaysPassed(){
   let dob = inputValue()
   if(!dob){
      alert('Please Enter your date of birth.')
      return
   }
   let Today = new Date()
   let bornDate = new Date(dob)
   // console.log(Today)
   // console.log(bornDate)

   let todayTime = Today.getTime()
   let bornDateTime = bornDate.getTime()
   // console.log(todayTime)
   // console.log(bornDateTime)
   let msDiff = todayTime - bornDateTime
   // console.log("msDiff" , msDiff)
   let daysDiff = msDiff / (1000 * 60 * 60 * 24)//this line may generate floating point number //
   // we need to remove floating point number by using Math.floor //
   // console.log(daysDiff)
   let html = Math.floor(daysDiff) + " Days have been passed since you born"
   showOutput(html)
   tellTime()
}




//-----------------------------Clear Statement-----------------------//
function clearstatementButton(){
   document.getElementById('originalTextBox').innerHTML = ""
}
//-----------------------------Clear Input-----------------------//
function clearInputButton(){
   document.getElementById('inputText').value = ""
}
//-----------------------------Clear Output-----------------------//
function clearOutputButton(){
   document.getElementById('output').innerHTML = ""
}
//-----------------------------Show Output(2 methods)-----------------------//
// const showOutput = (output) => {
//    document.getElementById('output').innerHTML = output
// }
function showOutput(output) {
   document.getElementById('output').innerHTML = output
}
//-----------------------------Show Input(2 methods)-----------------------//
function inputValue() {
   return document.getElementById('inputText').value
}
// const inputValue = () => {
//    return document.getElementById('inputText').value
// }
//-----------------------------Tell Time-----------------------//
function tellTime(){
   var now = new Date()
   var theHr = now.getHours()
   var theMint = now.getMinutes()
   var theSec = now.getSeconds()
   output.innerHTML += '<br>you clicked the button @ ' + theHr + ':' + theMint + ':' + theSec +'</br>'
}