const requestURL = 'data/rentals.json';


fetch(requestURL)
    .then((response) => response.json())
    .then((jsObject) => {
        let vehiclesData = jsObject['vehiclesData'];
        let tbody = document.querySelector('#chartprice');
        vehiclesData.forEach(data => {
            const tr = document.createElement('tr');
            const td1 = document.createElement('td');
            const td2 = document.createElement('td');
            const td3 = document.createElement('td');
            const td4 = document.createElement('td');
            const td5 = document.createElement('td');
            const td6 = document.createElement('td');

            td1.textContent = data.rentalType;
            td2.textContent = data.maxPersons;
            td3.textContent = `$ ${data.reservationHalfDay}`;
            td4.textContent = `$ ${data.reservationFullDay}`;
            td5.textContent = `$ ${data.walkInhalfDay}`;
            td6.textContent = `$ ${data.walkInfullfDay}`;

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);

            tbody.appendChild(tr);
        });
    });