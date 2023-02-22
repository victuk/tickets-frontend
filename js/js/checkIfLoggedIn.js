const check = () => {
    if(localStorage.getItem("accesstoken") != null) {
        return {
            loggedIn: true,
            accesstoken: `Bearer ${localStorage.getItem("accesstoken")}`,
            role: localStorage.getItem("role")
        };
    } else {

        setTimeout(function() {
            location.assign("/login.html");
        }, 2000);

        return {
            loggedIn: false,
            accesstoken: null,
            role: null
        };
    }
}