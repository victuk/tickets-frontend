
const checkIfLoggedIn = check();


document.getElementById("Header").innerHTML = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar">
        <div class="navbar-nav">
        ${checkIfLoggedIn.loggedIn == true
        ?
        `<a class="nav-item nav-link" id="home" href="/">Home</a>
        <a class="nav-item nav-link" id="logout" href="/logout">Logout</a>`
        :
        `<a class="nav-item nav-link" id="login" href="/login">Login</a>
        <a class="nav-item nav-link" id="signUp" href="/sign-up">Sign Up</a>`}
        </div>
      </div>
    </nav>
`;