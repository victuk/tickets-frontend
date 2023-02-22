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

const forAdminsOnly = document.getElementById("admins-only");

function checkForAdminFeatures(){
    if(localStorage.getItem("role") == "user") {
        if(forAdminsOnly == null) {
            return;
        }
        forAdminsOnly.style.display = "none!important";
    }
}

checkForAdminFeatures();

function logOut() {
    localStorage.removeItem("accesstoken");
    localStorage.removeItem("role");
    location.assign("/login.html");
}