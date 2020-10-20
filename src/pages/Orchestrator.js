const API_URL = 'https://corch.pegatsdemo.com/prweb/PRRestService/';
// Testing
const CLIENT_ID = '68776101015220084839';
const CLIENT_SECRET = '51826202038BC7FFCAB5889D247E9CA5';

export function requestAccessToken(delegate) {
    const authInfo = `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    const requestOptions = {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
        }),
        body: authInfo,
    };

    return fetch(`${API_URL}oauth2/v1/token`, requestOptions)
    .then(response => response.json())
    .then(response => sessionStorage.setItem('access_token',response.access_token))
    .then(response => setTimeout(delegate,100));
}

export async function requestCreateSpace(spaceInfo) {
    const token = await sessionStorage.getItem('access_token');
    const requestOptions = await {
        method: 'POST',
        headers: new Headers({
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        }),
        body: spaceInfo,
    };
console.log(token);
    try {
        const response = await fetch(`${API_URL}ControllerPilot/v1/CreateSpace`, requestOptions);
        const data = await response.json();
        await console.log(data);
        return await data.spaceID;
    } catch (err) {
        console.log(err);
    }
    // .then(response => response.json());
    // .then(response => console.log(response));
    // .then(response => setTimeout(delegate,100));
}
