// marks items as red if their class is the same as current UK time (possibly does not account for summer time???)
// yyyy MM dd hh mm
function updatePage() {
    var today = new Date();
    var yyyy = today.getFullYear();
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var date = String(today.getDate()).padStart(2, '0');
    var minutes = today.getMinutes();
    var hour = today.getHours();
    if (minutes < 30) 
        minutes = "00";
    else minutes = 30;
    var searchTime = [yyyy,mm,date,hour,minutes].join('');
    var x = document.getElementsByClassName(searchTime);
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.color= "red";
    }
}

function startUpdate() {
    updatePage();
    window.setInterval(updatePage, 60 * 1000);
}

window.onload=startUpdate;