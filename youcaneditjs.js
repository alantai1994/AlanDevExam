//get elements
var productName = document.getElementsByTagName("h4")[0].innerHTML;
var table = document.querySelector('tbody').innerHTML;
var session = document.getElementById("session_id").getAttribute("value");
var btn = document.getElementsByTagName("input")[1];
var textarea = document.getElementsByTagName("textarea")[0];

//ajax part
btn.addEventListener('click', function() {
    xhr = new XMLHttpRequest();
    var url = "handle.php?product=" + encodeURIComponent(productName) + "&table=" + encodeURIComponent(table) + "&session=" + encodeURIComponent(session);
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            textarea.innerHTML = xhr.responseText;
        }
    }
    xhr.send();
});