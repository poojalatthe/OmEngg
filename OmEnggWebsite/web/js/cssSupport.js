/**
 * Created by om on 26-Nov-15.
 */

function openDropdown(clicked_id) {

    if (document.getElementById(clicked_id).className === "dropdown open")
        document.getElementById(clicked_id).className = "dropdown ";
    else
        document.getElementById(clicked_id).className = "dropdown open";
}

function load_map() {
    alert("hello");
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
        title: "This is the place."
    });

    var contentString = 'Hello';
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });

}

function orderMore() {
    console.log("Hello");
    var original = document.getElementById('repeat');
    var divele = document.createElement("div");
    divele.innerHTML = createFormField();
    original.appendChild(divele);
}

function removeTag(obj){
    obj.closest('div').remove();
}

function loadContainer(menu) {

    if (menu === "home_page")
        $('#contents').load('home_page.html #home_page');
    if (menu === "check_valve")
        $('#contents').load('check_valve.html #check_valve');
    if (menu === "place_order")
        $('#contents').load('place_order.html #place_order');
    if (menu === "contact_us") {
        $('#contents').load('contact_us.html #contact_us');
        load_map();
    }
}


function createFormField() {
    var attach = '<label class="col-lg-2 control-label text_style">Model Number</label>' +
        '<div class="col-lg-3">' +
        '<select class="form-control" name="modelType">' +
        '<option>NRV-6 - S1</option>  <option>NRV-6 - S2</option>  <option>NRV-6 - S3</option>  <option>NRV-6 - S4</option>' +
        '<option>NRV-8 - S1</option>  <option>NRV-8 - S2</option> <option>NRV-8 - S3</option>  <option>NRV-8 - S4</option>' +
        '<option>NRV-10 - S1</option>  <option>NRV-10 - S2</option> <option>NRV-10 - S3</option> <option>NRV-10 - S4</option>' +
        '<option>NRV-15 - S1</option> <option>NRV-15 - S2</option> <option>NRV-15 - S3</option> <option>NRV-15 - S4</option>' +
        '<option>NRV-20 - S1</option>      <option>NRV-20 - S2</option>       <option>NRV-20 - S3</option> <option>NRV-20 - S4</option>' +
        '<option>NRV-25 - S1</option>  <option>NRV-25 - S2</option>    <option>NRV-25 - S3</option>   <option>NRV-25 - S4</option>' +
        '<option>NRV-30 - S1</option>  <option>NRV-30 - S2</option>  <option>NRV-30 - S3</option>   <option>NRV-30 - S4</option>' +
        '</select>  </div>  <label class="col-lg-2 control-label text_style">Quantity</label> ' +
        '<div class="col-lg-3">' +
        '<input type="number" min="1" max="500" value="1" name="qty"class="form-control">'
        + '</div>' + '<button class="btn btn-success" type="button" onclick="orderMore();">Add</button> ' +
        '<button class="btn btn-danger" type="button" onclick="removeTag(this)">Cancel</button>';

    return attach;
}
