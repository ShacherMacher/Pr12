const requestURL = 'https://jsonplaceholder.typicode.com/users';
function sendRequest(method, url, body = null) {
   return fetch(url).then( response => {
       return response.json()
	   
   })
   
}

sendRequest('GET', requestURL).then( data => {
   console.log(data);
   var Tab1 = document.getElementById("Table");
   var Tab2 = "<tr><td>ID</td><td>Name</td><td>UserName</td><td>Email</td><td>Street</td><td>Suite</td><td>City</td><td>zipcode</td><td>Lat</td><td>Lng</td><td>Phone</td></tr>";
	for(var i = 0; i < data.length; i++)
	{
		Tab2 += "<tr><td>"+data[i].id+"</td><td>"+data[i].name+"</td><td>"+data[i].username+"</td><td>"+data[i].email+"</td><td>"+data[i].address.street+"</td><td>"+data[i].address.suite+"</td><td>"+data[i].address.city+"</td><td>"+data[i].address.zipcode+"</td><td>"+data[i].address.geo.lat+"</td><td>"+data[i].address.geo.lng+"</td><td>"+data[i].phone+"</td></tr>";
	}
	Tab1.insertAdjacentHTML('beforeEnd', Tab2);
}).catch( error => console.error(error));



