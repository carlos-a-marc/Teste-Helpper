sendForm = () => {
    let data = formDataRead();
    AddReg(data);

}

formDataRead = () => {
    let data = {};
    data['name'] = document.getElementById('name').value;
    data['email'] = document.getElementById('email').value;
    data['cpf'] = document.getElementById('cpf').value;
    data['phone'] = document.getElementById('phone').value;
    data['postal'] = document.getElementById('postal').value;
    data['street'] = document.getElementById('street').value;
    data['number'] = document.getElementById('number').value;
    data['neighborhood'] = document.getElementById('neighborhood').value;
    data['city'] = document.getElementById('city').value;
    data['state'] = document.getElementById('state').value;
    return data;
}

AddReg = (data) => {
    let tableBody = document.getElementById('clientList').getElementsByTagName('tbody')[0];
    let row = tableBody.insertRow(tableBody.lenght);
    cell1 = row.insertCell(0);
    cell1.innerHTML = data.name;

    cell2 = row.insertCell(1);
    cell2.innerHTML = data.email;

    cell3 = row.insertCell(2);
    cell3.innerHTML = data.cpf;

    cell4 = row.insertCell(3);
    cell4.innerHTML = data.phone;

    cell5 = row.insertCell(4);
    cell5.innerHTML = data.postal;

    cell6 = row.insertCell(5);
    cell6.innerHTML = data.street;

    cell7 = row.insertCell(6);
    cell7.innerHTML = data.number;

    cell8 = row.insertCell(7);
    cell8.innerHTML = data.neighborhood;

    cell9 = row.insertCell(8);
    cell9.innerHTML = data.city;

    cell10 = row.insertCell(9);
    cell10.innerHTML = data.state;

    cell11 = row.insertCell(10);
    cell11.innerHTML = "<a onClick=deleteReg(this)><img src='img/lixo.png' width='16' class='lixo'/>";
    clear();
}

deleteReg = (regLine) => {
    let row = regLine.parentElement.parentElement;
    document.getElementById('clientList').deleteRow(row.rowIndex);
    clear();
}

clear = () => {
    document.getElementById('name').value = ''
    document.getElementById('email').value = ''
    document.getElementById('cpf').value = ''
    document.getElementById('phone').value = ''
    document.getElementById('postal').value = ''
    document.getElementById('street').value = ''
    document.getElementById('number').value = ''
    document.getElementById('neighborhood').value = ''
    document.getElementById('city').value = ''
    document.getElementById('state').value = ''
}