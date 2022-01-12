// marks items as red if their class is the same as current UK time (does not account for summer time)
function updatePage() {
    var today = new Date();
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var day = String(today.getDate()).padStart(2, '0');
    var minutes = today.getMinutes();
    var hour = today.getHours();
    if (minutes < 30) 
        minutes = "00";
    else minutes = 30;
    var searchTime = [yyyy,mm,day,hour,minutes].join('');
    var x = document.getElementsByClassName(searchTime);
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.color= "red";
    }
    }
    function startUpdate() 
    {
        updatePage();
        window.setInterval(updatePage, 60 * 1000);
    }
window.onload=startUpdate;
