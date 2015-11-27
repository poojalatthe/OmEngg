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
    console.log(data);
    document.getElementById("contents").innerHTML = document.getElementById("hello").innerHTML;
}

