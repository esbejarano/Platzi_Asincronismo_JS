let xmlHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let APIURL = 'https://rickandmortyapi.com/api/character';


function fetchData(urlApi, callback){
    let xhttp = new xmlHttpRequest();
    xhttp.open('GET', urlApi, true);
    xhttp.onreadystatechange = function(event){
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error(`Error ${urlApi}`);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

fetchData(APIURL, function(error1, data1) {
    if (Boolean(error1)){
        console.log(error1);
    }
    const characterId = data1.results[0].id;
    fetchData(`${APIURL}/${characterId}`, function(error2, data2) {
        if (Boolean(error2)){
            console.log(error2);
        }
        fetchData(data2.origin.url, function(error3, data3) {
            if (Boolean(error3)){
                console.log(error3);
            }
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    });
});
