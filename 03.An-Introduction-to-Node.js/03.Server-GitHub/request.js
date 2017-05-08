let https = require('https');
function getRepo(username,callback) {
    let option = {
        host: 'api.github.com', //GitHub API
        path: '/users/' + username + '/repos',
        method: 'GET',
        headers: {'user-agent': 'node.js'} //Required from GitHub
    };

    let request = https.request(option, (response) => {
        let body = '';
        response.on('data', (chunk) => {
            body += chunk.toString('utf8');
        });
        response.on('end', () => {
            let repos = [];

            let json = JSON.parse(body);
            json.forEach(repo => {
                repos.push({
                    name: repo.name,
                    description: repo.description
                })
            });
            callback(repos);
        });
    });
    request.end();
}

getRepo('asenAce',(repos) => {
    console.log("Body: ", repos);
});