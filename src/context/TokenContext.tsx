// SEARCH ARTSY API AND READ DOCUMENTATION BEOFRE USING THIS!
function TokenProvdier({children}) {
    //  convert to fetch and Try and Catch block
    const clientID = '02d11b6e86bc69bb4e7d';
    const clientSecret = 'bdefe7de165241d7e5eb78fbda6fd97e';
    const apiUrl = 'https://api.artsy.net/api/tokens/xapp_token';
    let xappToken;

    async function getXappToken() {
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ client_id: clientID, client_secret: clientSecret }),
    });

    if (response.status === 200) {
        xappToken = await response.json();
    }
    }

    getXappToken().then(xappToken => {
    console.log(xappToken);
    });
}

function useToken() {
    //  define the context here --- for when the provider is used outdise of the context
}

export { TokenProvdier, useToken } 