function updatePage() {
    var today = new Date();
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var day = String(today.getDate()).padStart(2, '0');
    var minutes = today.getMinutes();
    var hour = today.getHours();
    if (minutes < 30) 
        minutes = 0;
    else minutes = 30;
    console.log(day)
    console.log(hour)
    console.log(minutes)
    var searchTime = [yyyy,mm,day,hour,minutes].join('');
    console.log(searchTime)

        
    var c = document.getElementById(searchTime);
    c.style.color= "red";

    }

    function startUpdate() 
    {
        updatePage();
        window.setInterval(updatePage, 10 * 1000);
    }

window.onload=startUpdate;
