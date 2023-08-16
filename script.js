
function jee(){
    let endDate = new Date("2024-01-20T09:00:00Z");
    let now = new Date();
    let remainingTime = endDate - now;
    
    function updateCountdown() {
    
      let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      let hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    
      document.querySelector(".days").innerHTML = days + " Days";
      document.querySelector(".hours").innerHTML = hours + " Hr " + minutes + " Min ";
    
    }
    setInterval(updateCountdown, 1000);
}

function boards(){
    let bendDate = new Date("2024-01-20T09:00:00Z");
    let bnow = new Date();
    let bremainingTime = bendDate - bnow;
    
    function updateCountdown() {
    
      let bdays = Math.floor(bremainingTime / (1000 * 60 * 60 * 24));
      let bhours = Math.floor((bremainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let bminutes = Math.floor((bremainingTime % (1000 * 60 * 60)) / (1000 * 60));
    
      document.querySelector(".bdays").innerHTML = bdays + " Days";
      document.querySelector(".bhours").innerHTML = bhours + " Hr " + bminutes + " Min ";
    
    }
    setInterval(updateCountdown, 1000);
}

jee();
boards();
//notesss
function update() {
  if (localStorage.getItem('itemsJson') == null) {
    itemJsonArray = [];
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
  }
  else
  {
    itemJsonArrayStr = localStorage.getItem('itemsJson');                        
    itemJsonArray = JSON.parse(itemJsonArrayStr);
  }
  //imperginating  the table
  tbody = document.getElementById('tbody')
  let str = "";
  itemJsonArray.forEach((element, index) => {
    str += `
<tr>
  <th scope="row">${index + 1}</th>
  <td>${element[0]}</td>
  <td><button class="dlt" onclick="dele(${index})">delete</button></td>
</tr>
`

  });
  tbody.innerHTML = str;

}
function getAndUpdate()
{
  note = document.getElementById('not').value;
  console.log(note)
  console.log("Zzz  ");

  if (localStorage.getItem('itemsJson') == null) {
    itemJsonArray = [];
    itemJsonArray.push([note]);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
  }
  else {
    itemJsonArrayStr = localStorage.getItem('itemsJson')
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    itemJsonArray.push([note]);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))

  }
  update();
}
sub = document.getElementById('sub');
sub.addEventListener("click", getAndUpdate);
update();
function dele(itemIndex){
  console.log("eureka",itemIndex);
  itemJsonArrayStr = localStorage.getItem('itemsJson')
  itemJsonArray = JSON.parse(itemJsonArrayStr);
  itemJsonArray.splice(itemIndex,1)
  localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
  update();
}