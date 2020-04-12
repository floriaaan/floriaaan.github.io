var username = "floriaaan";
let client = ['openmeet'];
let personnal = ['Minecraft.console'];
let school = ['atmos-fr']

$.ajax({
    url: 'https://api.github.com/users/' + username + '/repos',
    type: 'get',
    dataType: 'json',
    success: function (data) {

        data.sort(function (a, b) {
            return b.stargazers_count - a.stargazers_count;
        });

        for (let i = 0; i < 4; i++) {
            let html = ""
            if (client.includes(data[i].name)) {
                html += '<div class="row all client mb-3">';
            } else if (personnal.includes(data[i].name)) {
                html += '<div class="row all personnal mb-3">';
            } else if (school.includes(data[i].name)) {
                html += '<div class="row all school mb-3">';
            } else {
                html += '<div class="row all mb-3">';
            }

            html += `       <div class="col-lg-4 col-md-2 portfolio-thumbnail">
                                <img src="images/logo.png" alt="img">
                            </div>
            
                            <div class="col-lg-8 col-md-10 portfolio-thumbnail">
                                
                                <a href="${data[i].html_url}" style="text-decoration: none;">
                                    <h2 class="mb-1">
                                        ${data[i].name}
                                    </h2>
                                    <span class="d-flex align-content-between justify-content-center">
                                    <ion-icon name="logo-github" class="mx-1"></ion-icon> <small class="mx-1">${data[i].language}</small>
                                    </span>
                                </a>`;
            if(data[i].description) {
                html += `       <hr class="mx-5 my-1">    
                                <p>${data[i].description}</p>`;
            }

            html += `       </div>
                        </div>
            `;
            $('#portfolio-container').append(html);
        }
    },
    error: function () {
        $('#portfolio-container').append(`
                <p>Failed to import repositories from Github.</p>
                <div class="row all personnal">
                        <div class="col-lg-4 col-md-6 portfolio-thumbnail">
                            <img src="images/portfolio/openmeet.png" alt="img">
                        </div>

                        <div class="col-lg-8 col-md-6 portfolio-thumbnail">
                            <h2 class="mb-30">OpenMeet</h2>
                            <hr class="mx-5 my-1">
                            <p>CMS for creating groups and events on a well-defined theme.</p>
                        </div>
                    </div>
        `);
    }

});