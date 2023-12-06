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
//-----------------When is your next Birthday?----------------//
function nextBirthday(){
   let dob = inputValue()
   if(!dob){
      alert('Please Enter your date of birth.')
      return
   }
   let Today = new Date()
   let nextBirthDate = new Date(dob)
   console.log(Today)
   console.log(nextBirthDate)

   let todayTime = Today.getTime()
   let nextBirthTime = nextBirthDate.getTime()
   console.log(todayTime)
   console.log(nextBirthTime)
   let msDiff =  nextBirthTime - todayTime
   console.log("msDiff" , msDiff)
   let daysDiff = msDiff / (1000 * 60 * 60 * 24)//this line may generate floating point number //
   // we need to remove floating point number by using Math.floor //
   console.log(daysDiff)
   let html = "Your next Birth day is ' <span class = text-danger >" + Math.floor(daysDiff) + "</span> ' Days away"
   showOutput(html)
   tellTime()
}
//-----------------Greet User----------------//
function greetUser(msg){
   showOutput( msg)
   tellTime()
}
function greetUserButton(){
   let userName = prompt("Enter Your Name")
   // greetUser(userName) 
   let greetingMessage = "Good "
   let now = new Date()
   let hour = now.getHours()
   if( hour >= 4 && hour < 12 ){
      greetingMessage += "Morning"
   }else if( hour >= 12 && hour < 17 ){
      greetingMessage += "Afternoon"
   }else if( hour >= 17 && hour < 20 ){
      greetingMessage += "Evening"
   }else{
      greetingMessage += "Night"
   }
   let msg = greetingMessage + " " + userName
   greetUser(msg)        // parameter pass kar rahy ha //
}function tellTime1(){
   tellTime()
}
//-----------------------------Tell Time 2-----------------------//
function tellTime2(){
   tellTime()
}
//-----------------------------Tell Time 3-----------------------//
function tellTime3(){
   tellTime()
}
//-----------------Calculate Tax Button----------------//
function calculateTaxBtn(){
   var price = +prompt("Enter Price.")
   var taxRate = 17
   var tax = calculateTax(price,taxRate)
   let html = 'Tax <span style="color:green;">"' + tax +'"</span>'
   showOutput(html)
}
function calculateTax(price,taxRate){
    var tax =  price * taxRate / 100
    return tax
}
function calculateTotal(price){                          
  if (price < 1000){
   var taxRate = 8
  }else{
   var taxRate = 16
  }
  var tax = calculateTax(price,taxRate)
  var Total = price + tax
  return Total
}        
function calculateTotalTaxBtn(){                                 // Total Calculate Tax Button //
   var price = +prompt("Enter Price.")
   if (!price){
      alert('Please enter price.')
      return
   }
   var total = calculateTotal(price)
   let html = 'Total: <span style="color:green;">"' + Math.round(total)  +'"</span>'
   showOutput(html)
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