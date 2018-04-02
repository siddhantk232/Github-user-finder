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
  var repoRequest = new XMLHttpRequest();
  repoCall = 'https://api.github.com/users/siddhantk232/repos?sort=created:asc&per_page=5'
  repoCall = 'https://api.github.com/users/' + query + '/repos' + '?sort=created:asc&per_page=5';
  repoRequest.open('GET', repoCall);
  repoRequest.onload = function() {
    // console.log(repoRequest.responseText);
    var repoData = JSON.parse(repoRequest.responseText);
    var repoContainer = document.getElementById('repos');
    var repoInfo = `
      <div class="container mt">
        <h3>Latest Repos</h3>
        <hr>
        <div class="container-box">
          <div class="container-content">
            <div class="row">
              <div class="five columns">
                <h6>${repoData[0].name}</h6>
              </div>
              <div class="seven columns">
                  <span class="ml">Forks: ${repoData[0].forks}</span>
                  <spanc class="ml">Watchers: ${repoData[0].watchers}</span>
                  <span class="ml">Forks: ${repoData[0].stargazers_count}</span>
                  <a href="${repoData[0].html_url}" target="_blank" class="button button-primary custom">Repo Page</a>
                </div>
              </div>
            </div>
          </div>
          <div class="container-box">
            <div class="container-content">
              <div class="row">
                <div class="five columns">
                  <h6>${repoData[1].name}</h6>
                </div>
                <div class="seven columns">
                    <span class="ml">Forks: ${repoData[1].forks}</span>
                    <spanc class="ml">Watchers: ${repoData[1].watchers}</span>
                    <span class="ml">Forks: ${repoData[1].stargazers_count}</span>
                    <a href="${repoData[0].html_url}" target="_blank" class="button button-primary custom">Repo Page</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="container-box">
              <div class="container-content">
                <div class="row">
                  <div class="five columns">
                    <h6>${repoData[2].name}</h6>
                  </div>
                  <div class="seven columns">
                      <span class="ml">Forks: ${repoData[2].forks}</span>
                      <spanc class="ml">Watchers: ${repoData[2].watchers}</span>
                      <span class="ml">Forks: ${repoData[2].stargazers_count}</span>
                      <a href="${repoData[0].html_url}" target="_blank" class="button button-primary custom">Repo Page</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="container-box">
                <div class="container-content">
                  <div class="row">
                    <div class="five columns">
                      <h6>${repoData[3].name}</h6>
                    </div>
                    <div class="seven columns">
                        <span class="ml">Forks: ${repoData[3].forks}</span>
                        <spanc class="ml">Watchers: ${repoData[3].watchers}</span>
                        <span class="ml">Forks: ${repoData[3].stargazers_count}</span>
                        <a href="${repoData[0].html_url}" target="_blank" class="button button-primary custom">Repo Page</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="container-box">
                  <div class="container-content">
                    <div class="row">
                      <div class="five columns">
                        <h6>${repoData[4].name}</h6>
                      </div>
                      <div class="seven columns">
                          <span class="ml">Forks: ${repoData[4].forks}</span>
                          <spanc class="ml">Watchers: ${repoData[4].watchers}</span>
                          <span class="ml">Forks: ${repoData[4].stargazers_count}</span>
                          <a href="${repoData[0].html_url}" target="_blank" class="button button-primary custom">Repo Page</a>
                        </div>
                      </div>
                    </div>
                  </div>
        </div>
      </div>
    `

    repoContainer.innerHTML = repoInfo;

  }
  repoRequest.send();
});
