function iniciarMap(){
    var coord ={lat: 31.599038 ,lng:-106.409267};
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 18,
        center:coord
    });
        var marker = new google.maps.Marker({
        position : coord,
        map:map
         });
 }
 