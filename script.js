let endDate = new Date("2024-01-22T09:00:00Z");
let now = new Date();
let remainingTime = endDate - now;

function updateCountdown() {

  let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  let hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days + " Days";
  document.querySelector(".hours").innerHTML = hours + " Hr " + minutes + " Min ";

}
setInterval(updateCountdown, 1000);

sub = document.getElementById('sub');
note = document.getElementById('not').value;
       
console.log(note)
sub.addEventListener("click",()=>{

 console.log("Zzz");
 
 if (localStorage.getItem('itemsJson')==null){
             itemJsonArray = [];
             itemJsonArray.push([note]);
             localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
         }
         else{
             itemJsonArrayStr = localStorage.getItem('itemsJson')
             itemJsonArray = JSON.parse(itemJsonArrayStr);
             itemJsonArray.push([note]);
             localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
           
         }
}) 