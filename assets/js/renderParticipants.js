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
            for (var i = 0; i < data.length; i++) {
                mainContainer.innerHTML += `
                <div class="col-12 col-lg-6 align-items-center h-100 py-5">
                  <!-- Add a placeholder for the Twitch embed -->
                  <div id="twitch-embed-${data[i].name}" class="mx-auto d-none d-lg-block"></div>
                  <!-- Create a Twitch.Embed object that will render within the "twitch-embed" element -->
                  <br><div class="ms-4 ppp-text d-block">
                    <h1 class="">${data[i].name}</h1>
                    <a href="${data[i].twitch}" target="_blank" class="btn me-2 ppp-twitch ${data[i].twitchClass} ppp-white" tabindex="-1" role="button" aria-disabled="true"><i class="bi bi-twitch"></i> Twitch</a>
                    <a href="${data[i].youtube}" target="_blank" class="btn me-2 ppp-youtube ${data[i].youtubeClass} ppp-white" tabindex="-1" role="button" aria-disabled="true"><i class="bi bi-youtube"></i> Youtube</a>
                    <div class="mt-4">
                        <strong><u class="">Thursday 3rd March 2022 (UK)</u></strong><br>
                        <!-- id: yyyy MM dd hh mm-->
                        <span class="${data[i].entry1Class}" id="">${data[i].entry1Date} <i class="bi bi-arrow-right-short"></i> ${data[i].entry1Game} <br></span>
                        <span class="${data[i].entry2Class}" id="">${data[i].entry2Date} <i class="bi bi-arrow-right-short"></i> ${data[i].entry2Game} <br></span>
                        <span class="${data[i].entry3Class}" id="">${data[i].entry3Date} <i class="bi bi-arrow-right-short"></i> ${data[i].entry3Game} <br></span>
                        <span class="${data[i].entry4Class}" id="">${data[i].entry4Date} <i class="bi bi-arrow-right-short"></i> ${data[i].entry4Game} <br></span>
                        <span class="${data[i].entry5Class}" id="">${data[i].entry5Date} <i class="bi bi-arrow-right-short"></i> ${data[i].entry5Game} <br></span>
                        <span class="${data[i].entry6Class}" id="">${data[i].entry6Date} <i class="bi bi-arrow-right-short"></i> ${data[i].entry6Game} <br></span>
                        <span class="${data[i].entry7Class}" id="">${data[i].entry7Date} <i class="bi bi-arrow-right-short"></i> ${data[i].entry7Game} <br></span>
                        <span class="${data[i].entry8Class}" id="">${data[i].entry8Date} <i class="bi bi-arrow-right-short"></i> ${data[i].entry8Game} <br></span>
                        <span class="${data[i].entry9Class}" id="">${data[i].entry9Date} <i class="bi bi-arrow-right-short"></i> ${data[i].entry9Game} <br></span>
                        <span class="${data[i].entry10Class}" id="">${data[i].entry10Date} <i class="bi bi-arrow-right-short"></i> ${data[i].entry10Game} <br></span>
                        <br><strong><u class="">Friday 4th March 2022 (UK)</u></strong><br>
                        <span class="${data[i].entry11Class}" id="">${data[i].entry11Date} <i class="bi bi-arrow-right-short"></i> ${data[i].entry11Game} <br></span>
                        <span class="${data[i].entry12Class}" id="">${data[i].entry12Date} <i class="bi bi-arrow-right-short"></i> ${data[i].entry12Game} <br></span>
                        <span class="${data[i].entry13Class}" id="">${data[i].entry13Date} <i class="bi bi-arrow-right-short"></i> ${data[i].entry13Game} <br></span>
                        <span class="${data[i].entry14Class}" id="">${data[i].entry14Date} <i class="bi bi-arrow-right-short"></i> ${data[i].entry14Game} <br></span>
                        <span class="${data[i].entry15Class}" id="">${data[i].entry15Date} <i class="bi bi-arrow-right-short"></i> ${data[i].entry15Game} <br></span>
                        <span class="${data[i].entry16Class}" id="">${data[i].entry16Date} <i class="bi bi-arrow-right-short"></i> ${data[i].entry16Game} <br></span>
                        <span class="${data[i].entry17Class}" id="">${data[i].entry17Date} <i class="bi bi-arrow-right-short"></i> ${data[i].entry17Game} <br></span>
                        <span class="${data[i].entry18Class}" id="">${data[i].entry18Date} <i class="bi bi-arrow-right-short"></i> ${data[i].entry18Game} <br></span>
                        <span class="${data[i].entry19Class}" id="">${data[i].entry19Date} <i class="bi bi-arrow-right-short"></i> ${data[i].entry19Game} <br></span>
                        <span class="${data[i].entry20Class}" id="">${data[i].entry20Date} <i class="bi bi-arrow-right-short"></i> ${data[i].entry20Game} <br></span>
                    </div>
                  </div>
                </div>`

                new Twitch.Embed(`twitch-embed-${data[i].name}`, {
                    channel: `${data[i].name}`,
                    width: "100%",
                    height: 480,
                    layout: "video",
                    parent: ["dusktilyawn.co.uk","www.dusktilyawn.co.uk"]
                });

            }
            startUpdate();
        }