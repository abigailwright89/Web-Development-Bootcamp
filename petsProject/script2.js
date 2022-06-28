function petsFunction(){
    var x = document.getElementById("hasPetsDiv");
    if (x.style.display ==="none")
    {
        x.style.display = "block";

    } else {
        x.style.display = "none"
    }
}

function noPetsFunction(){
    var x = document.getElementById("noPetsDiv");
    if (x.style.display ==="none")
    {
        x.style.display = "block";

    } else {
        x.style.display = "none"
    }
}



fetch('pets.json')
.then (function (response){
    return response.json();
})
.then (function (data) {
    appendData(data);
})
.catch (function (err) {
    console.log(err);
})

var mainContainer = document.getElementById("myData");
var secondContainer = document.getElementById("mydata2")
function appendData(data) {
for (var i = 0; i < data.length; i++)

 { if  (data[i].pets .length > 0 ) {
    var div = document.createElement("div")
    div.innerHTML ='First Name: ' + data[i].first_name + '</br>' + 'Second Name: ' + data[i].last_name + ' </br>' + 'Pets Name: ' + data[i].pets + '<hr>';
    mainContainer.appendChild(div)

 
} else if  (data[i].pets.length === 0) {
    var div2 = document.createElement("div2")
    div2.innerHTML ='First Name: ' + data[i].first_name + '</br>' + 'Second Name: ' + data[i].last_name + ' </br>' + 'Pets Name: ' + 'No Pets' + '<hr>';
    secondContainer.appendChild(div2)
    }

 }
}


