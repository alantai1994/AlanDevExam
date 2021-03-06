//get elements
var productName = document.getElementsByTagName("h4")[0].innerHTML;
var table = document.querySelectorAll('body > div > table > tbody > tr > td');
var session = document.getElementById("session_id").getAttribute("value");
var btn = document.getElementsByTagName("input")[1];
var textarea = document.getElementsByTagName("textarea")[0];

//build specifications to string
var specifications = '';
for (var i = 0, len = table.length; i < table.length; i++) {
    len == (i+1) ? specifications += table[i].innerHTML : specifications += table[i].innerHTML + '||';
}

//ajax part
btn.addEventListener('click', function() {
    xhr = new XMLHttpRequest();
    var url = "handle.php?product=" + encodeURIComponent(productName) + "&specifications=" + encodeURIComponent(specifications) + "&session=" + encodeURIComponent(session);
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            textarea.innerHTML = xhr.responseText;
        }
    }
    xhr.send();
});