fetch('../participants.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
        function appendData(data) {
            var mainContainer = document.getElementById("deck-start");
            for (var i =1; i<data.length; i++) {

                participantDiv = `
                <div class="col-12 col-lg-6 align-items-center h-100 py-5">
                  <!-- Add a placeholder for the Twitch embed -->
                  <div id="twitch-embed-${data[i].name}" class="mx-auto d-none d-lg-block"></div>
                  <!-- Create a Twitch.Embed object that will render within the "twitch-embed" element -->
                  <br><div class="ms-4 ppp-text d-block">
                    <h1 class="">${data[i].name}
                `
                for (var j in data[i].links){
                    participantDiv +=`
                    <a href="${data[i].links[j]}" target="_blank" class="btn ppp-${j} ${j} ppp-white" tabindex="-1" role="button" aria-disabled="true"><i class="bi bi-${j}"></i></a>
                    `
                }
                //Close of the h1 tag to format links on one line
                participantDiv +=`
                </h1>
                <div class="">`

                
                for (var k in data[i].timetable){
                    participantDiv +=`
                    <br><strong><u class="">${data[0][k]} (UK)</u></strong><br>
                    `
                    for (var l in data[i].timetable[k]){
                        if (l !== "date"){
                            participantDiv +=`
                            <span><strong>${data[i].timetable[k][l].start}</strong> <i class="bi bi-arrow-right-short"></i> ${data[i].timetable[k][l].name}<br></span>
                            `
                        }
                    }
                }
                participantDiv += `
                </div>
                </div>
                </div>`

                mainContainer.innerHTML += participantDiv;

                new Twitch.Embed(`twitch-embed-${data[i].name}`, {
                    channel: `${data[i].name}`,
                    width: "100%",
                    height: 480,
                    layout: "video",
                    parent: ["dusktilyawn.co.uk","www.dusktilyawn.co.uk"]
                });

            }
        }
