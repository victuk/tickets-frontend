// const baseUrl = "http://localhost:5000/v1/";
const baseUrl = "https://ticket-backend-ki4u.onrender.com/v1/";

const auth = {
    login: `${baseUrl}auth/login`,
    signUp: `${baseUrl}auth/register`
}

function ticketsRoute(userType, id = "") {
    if(id == "") {
        return `${baseUrl}${userType}/tickets`;
    } else {
        return `${baseUrl}${userType}/ticket/${id}`;
    }
}

function securedRequest(securedReq) {
    if(securedReq == true) {
        return "Bearer " + localStorage.getItem(accesstoken);
    } else {
        return null
    }
}

function handleError(error, errorMessage) {
    alert(errorMessage);
    console.log(error);
}

const helpers = {
    post: async function(url, body, isSecured) {
        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    accesstoken: securedRequest(isSecured)
                },
                body: JSON.stringify(body)
            });
            const data = await res.json();
            return {
                status: res.status,
                statusText: res.statusText,
                data: data
            };
        } catch (error) {
            handleError(error, "Client Side Error!");
        }
    },
    get: async function(url, isSecured) {
        try {
            const res = await fetch(url, {
                method: 'GET',
                accesstoken: securedRequest(isSecured)
            });
            const data = await res.json();
            return {
                status: res.status,
                statusText: res.statusText,
                data: data
            };
        } catch (error) {
            handleError(error, "Client Side Error!");
        }
    },
    put: async function(url, body, isSecured) {
        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    accesstoken: securedRequest(isSecured)
                },
                body: JSON.stringify(body)
            });
            const data = await res.json();
            return {
                status: res.status,
                statusText: res.statusText,
                data: data
            };
        } catch (error) {
            handleError(error, "Client Side Error!");
        }
    },
    delete: async function(url, isSecured) {
        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    accesstoken: securedRequest(isSecured)
                },
                body: JSON.stringify(body)
            });
            const data = await res.json();
            return {
                status: res.status,
                statusText: res.statusText,
                data: data
            };
        } catch (error) {
            handleError(error, "Client Side Error!");
        }
    }
}