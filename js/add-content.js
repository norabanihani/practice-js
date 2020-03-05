function  createGreating() {
    


//var today= new Date();
var hourNow = prompt('enter the time now');
var greeting;
if (hourNow > 18 && hourNow<24) {
greeting= 'Good evening!';
}else if (hourNow > 12 && hourNow <18) {
greeting = ' Good afternoon!';
}else if (hourNow > 0 && hourNow<12) {
greeting = 'Good morning!';
}else{greeting = 'Welcome! ' ;
}
return greeting; 
}

var showOrder = function(){
    var userOrder = prompt('what would u like to order');
    var orderImage="";
    var numOfImgs;
    while(userOrder !== "house" && userOrder !=="hotel"){
        var userOrder = prompt('Please house or hotel');
    }
    numOfImgs=prompt('How many ?');
    for (let ctr = 0; ctr < numOfImgs; ctr++) {
        console.log("index"+ctr);
            if(userOrder ==="house"){
        orderImage +='<img src="../images/house.png">';
    }else if (userOrder === "hotel"){
        orderImage =orderImage +'<img src="../images/hotel.png">';
    }
    }

    return orderImage;
}