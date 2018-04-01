var formField = document.getElementById('formField');
clientId = '06652048b4dbb624e363';
clientSecret = '48685e282a90934bd92e53f3fbe881ea6f6666d2'
formField.addEventListener('keyup', function(e) {
  var query = e.target.value;
  var apiCall = 'https://api.github.com/users/' + query + '?' + 'client_id=' + clientId + '&' + 'clientSecret=' + clientSecret;
  var request = new XMLHttpRequest();
  request.open('GET', apiCall);
  request.onload = function() {
    // console.log(request.responseText);
    var data = JSON.parse(request.responseText);
    // console.log(data);
    var content = document.getElementById('content');
    // console.log(data.name);
    var html = `
    <section id="box">
      <div class="container">
        <div class="row">
          <div class="four columns">
            <img src="${data.avatar_url}" alt="profile">
            <a href="${data.html_url}" class="button button-primary u-full-width">${data.name}</a>
          </div>
          <div class="eight columns mt">
              <span class="black">public repos: ${data.public_repos}</span>
              <span class="blue">public gists: ${data.public_gists}</span>
              <span class="red">Followers: ${data.followers}</span>
              <span class="teal">Following: ${data.following}</span>
              <div class="box">
                <div class="data">
                  <p>company: ${data.company}</p>
                </div>
                <div class="data">
                  <p>Website/Blog: <a href="${data.blog}">${data.blog}</a></p>
                </div>
                <div class="data">
                  <p>Location: ${data.location}</p>
                </div>
                <div class="data">
                  <p>Date Created: ${data.created_at}</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
    `
    content.innerHTML = html;
  }
  request.send();
});
