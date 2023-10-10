const dateTimeNow = new Date();

alert(addDateTime("This is the best moment to have a look at this website !"));


function addDateTime(message){
    let date = dateTimeNow.toLocaleDateString()+ " "+dateTimeNow.toLocaleTimeString() +" : " + message;
    return date;
}