/**
 * Created by om on 26-Nov-15.
 */
function openDropdown(clicked_id) {

    if(document.getElementById(clicked_id).className === "dropdown open")
        document.getElementById(clicked_id).className = "dropdown ";
    else
        document.getElementById(clicked_id).className = "dropdown open";
}

function load_menu(){
    console.log("hello");
    var link = document.querySelector('link[rel="import"]');
    var content = link.import;
    if (supportsImports()) {
       console.log("Supports");
    } else {
        console.log("no Support");
    }
    console.log(content);

    link.getElementById("formcontent");
    document.getElementById("contents").innerHTML = document.getElementById("navigation-bar").innerHTML;

}

function supportsImports() {
    return 'import' in document.createElement('link');
}

function load_map() {
    var position = new google.maps.LatLng(15.815952, 74.495882);
    var myOptions = {
        zoom: 10,
        center: position,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(
        document.getElementById("map_canvas"),
        myOptions);

    var marker = new google.maps.Marker({
        position: position,
        map: map,
        title:"This is the place."
    });

    var contentString = 'Hello';
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });

}
