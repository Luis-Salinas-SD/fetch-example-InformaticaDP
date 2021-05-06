var url = 'https://jsonplaceholder.typicode.com/users'

fetch(url, {
    method: 'GET'
})
    .then(Response => Response.json())
    .then(data => showData(data))
    .catch(error => console.error('Algo salió mal!!!' + error))

const showData = (data) => {
    //console.log(data);
    let body = '';
    for (let index = 0; index < data.length; index++) {
        body += `<tr>   <td>${data[index].id}</td>  <td>${data[index].name}</td>    <td>${data[index].email}</td></tr>`

        document.getElementById('data').innerHTML = body //*imprime los datos
    }//for
    console.log(data.length);
}//showData Function
