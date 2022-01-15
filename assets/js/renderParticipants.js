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
                // var div = document.createElement("div");
                mainContainer.innerHTML += `
                <div class="col-12 col-lg-8 d-flex d-none d-lg-block align-items-center h-100 py-5">
                  <!-- Add a placeholder for the Twitch embed -->
                  <div id="twitch-embed-${data[i].name}" class="mx-auto"></div>
                  <!-- Create a Twitch.Embed object that will render within the "twitch-embed" element -->
                  <script type="text/javascript">
                    new Twitch.Embed("twitch-embed-${data[i].name}", {
                      channel: "${data[i].name}",
                      width: "100%",
                      height: 480,
                      layout: "video",
                      parent: ["dusktildawn.co.uk","www.dusktildawn.co.uk"]
                    });
                  </script>
                </div>
                <div class="col-12 col-lg-4 d-flex align-items-center h-100 py-5">
                  <div class="ms-4 ppp-text">
                    <h1 class="">${data[i].name}</h1>
                    <a href="${data[i].twitch}" target="_blank" class="btn me-2 ppp-twitch" tabindex="-1" role="button" aria-disabled="true"><i class="bi bi-twitch"></i> Twitch</a>
                    <a href="${data[i].youtube}" target="_blank" class="btn me-2 ppp-youtube ${data[i].youtubeClass}" tabindex="-1" role="button" aria-disabled="true"><i class="bi bi-youtube"></i> Youtube</a>
                    <div class="mt-4">
                        <strong><u class="">Thursday 3rd March 2022 (UK)</u></strong><br>
                        <!-- id: yyyy MM dd hh mm-->
                        <span class="202203031300" id="">01:00pm <i class="bi bi-arrow-right-short"></i> Among Us </span><br>
                        <span class="202203031500" id="">03:00pm <i class="bi bi-arrow-right-short"></i> ??? </span><br>
                        <span class="202203031700" id="">05:00pm <i class="bi bi-arrow-right-short"></i> ??? </span><br>
                        <span class="" id="">05:30pm <i class="bi bi-arrow-right-short"></i> ??? </span><br>
                        <span class="" id="">06:30pm <i class="bi bi-arrow-right-short"></i> ??? </span><br>
                        <br><strong><u class="">Friday 4th March 2022 (UK)</u></strong><br>
                        <span class="202201121500" id="">00:00am <i class="bi bi-arrow-right-short"></i> ??? </span><br>
                        <span class="202201121530" id="">12:00pm <i class="bi bi-arrow-right-short"></i> Just Chatting </span><br>
                    </div>
                  </div>
                </div>`
                // mainContainer.appendChild(div);

                new Twitch.Embed(`twitch-embed-${data[i].name}`, {
                    channel: `${data[i].name}`,
                    width: "100%",
                    height: 480,
                    layout: "video",
                    parent: ["dusktildawn.co.uk","www.dusktildawn.co.uk"]
                });

            }
        }