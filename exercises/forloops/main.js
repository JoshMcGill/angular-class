var imgArray = ["https://richmondfreelibraryvt.files.wordpress.com/2013/05/pizza-clipart.jpg", "http://www.clipartlord.com/wp-content/uploads/2014/05/pizza12.png", "http://comps.canstockphoto.com/can-stock-photo_csp6804899.jpg"];
var divImg = document.getElementById('imgs');


for (var x=0; x < imgArray.length; x++){
    var createimg = document.createElement('img');
    createimg.src = imgArray[x];
    divImg.appendChild(createimg);
}