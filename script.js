function jee()
{
    const targetDate = new Date('2024-01-20 12:00:00');

        function getTimeLeft() {
        const now = new Date();
        const diff = targetDate - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        return `JEE in <br>${days}d <br>${hours}h ${minutes}m ${seconds}s`;
        }

        const clock = document.querySelector('.clock');

        setInterval(() => {
        clock.innerHTML = getTimeLeft();
        }, 1000);
}

function boards()
{
    const targetDate = new Date('2024-02-20 12:00:00');

        function getTimeLeft() {
        const now = new Date();
        const diff = targetDate - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        return `Boards in <br>${days}d <br>${hours}h ${minutes}m ${seconds}s`;
        }

        const clock = document.querySelector('.bclock');

        setInterval(() => {
        clock.innerHTML = getTimeLeft();
        }, 1000);
}

boards();
jee();

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