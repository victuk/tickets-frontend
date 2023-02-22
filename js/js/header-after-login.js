async function loadThis() {

  const user = await helpers.get(baseUrl + localStorage.getItem("role") + "/profile", true);

  console.log(user);

  document.getElementById("DashboardHeader").innerHTML = `
 <div id="navBar" class="head pb-0 mt-0">
 <div id="navigation" class="container-fluid d-flex justify-content-between">
     <div class="d-flex justify-content-between w-100">          
       <a href="" class="navbar-brand">
         <svg xmlns="http://www.w3.org/2000/svg" width="150" height="20" class="injected-svg logo-svg" data-src="/assets/tm-logo-header.623a820a.svg" xmlns:xlink="http://www.w3.org/1999/xlink">
             <path d="M125.552 5.857c-4.467 0-7.747 4.033-7.747 8.225 0 4.02 2.644 5.91 6.562 5.91 1.45 0 2.958-.344 4.327-.76l.455-2.783c-1.326.6-2.727.973-4.176.973-2.264 0-3.597-.797-3.765-2.922 0-.125-.015-.242-.015-.381v-.072-.037c.015-.92.211-1.84.57-2.682.682-1.715 1.647-2.907 3.742-2.907 1.473 0 2.241.811 2.241 2.258a5.7 5.7 0 01-.08.92h-4.851c-.313 1.059-.373 1.768-.373 2.408h8.351c.205-.992.345-1.992.345-3.016-.005-3.431-2.224-5.134-5.586-5.134zm-11.895 10.096c0-.533.088-.994.161-1.314l1.295-5.903h3.181l.549-2.57h-3.179l.879-4.01-3.809 1.234-.607 2.775h-2.57l-.551 2.57h2.562l-1.002 4.565c-.241 1.074-.455 2.098-.455 3.148 0 2.602 1.693 3.543 4.096 3.543.613 0 1.296-.182 1.911-.312l.616-2.732c-.455.189-1.1.322-1.723.322-.804.001-1.354-.513-1.354-1.316zm-14.809-5.801c0 3.383 4.601 3.594 4.601 5.772 0 1.096-1.245 1.498-2.439 1.498-1.376 0-2.38-.506-3.384-1.053l-.775 2.812c1.305.6 2.725.811 4.159.811 3.04 0 6.138-1.053 6.138-4.572 0-3.295-4.599-3.93-4.599-5.632 0-1.074 1.317-1.366 2.38-1.366 1.004 0 1.979.292 2.358.497l.776-2.651c-.703-.176-2.029-.416-3.326-.416-2.799.005-5.889 1.13-5.889 4.3zm48.113 1.315c-1.413 0-2.477-1.125-2.477-2.571 0-1.453 1.062-2.57 2.477-2.57 1.398 0 2.453 1.117 2.453 2.57 0 1.446-1.055 2.571-2.453 2.571zm-.016-5.594c-1.678 0-3.047 1.352-3.047 3.023 0 1.659 1.369 3.018 3.047 3.018 1.686 0 3.055-1.359 3.055-3.018 0-1.672-1.369-3.023-3.055-3.023zM89.004 17.43c-.9 0-1.794-.469-1.794-1.41 0-2.279 2.854-2.57 4.577-2.57h1.246c-.556 2.175-1.379 3.98-4.029 3.98zm2.469-11.564c-1.59 0-3.119.284-4.636.811l-.499 2.812c1.398-.658 2.907-1.052 4.469-1.052 1.244 0 2.717.394 2.717 1.752 0 .395 0 .79-.103 1.155h-1.237c-3.332 0-8.365.352-8.365 4.807 0 2.482 1.752 3.85 4.213 3.85 1.955 0 3.179-.854 4.387-2.381h.059l-.373 2.066h2.987c.315-2.541 1.671-7.846 1.671-9.649-.001-3.178-2.566-4.171-5.29-4.171zm54.886 2.774V7.566h.703c.367 0 .726.125.726.526 0 .46-.278.548-.726.548h-.703zm2.016-.525c0-.672-.396-.993-1.225-.993h-1.362v3.542h.579V9.093h.49l.996 1.571h.623l-1.019-1.571c.552 0 .918-.408.918-.978zm-11.5.598h-.051l.476-2.549h-3.384c-.109.628-.221 1.233-.322 1.812l-2.432 11.704h3.538l1.282-6.057c.445-2.184 1.662-4.413 4.174-4.413.447 0 .953.073 1.354.212l.74-3.44c-.418-.102-.901-.131-1.354-.131-1.641.006-3.382 1.395-4.021 2.862zM79.666 5.857c-1.908 0-3.895.812-4.794 2.564h-.056c-.183-1.629-1.849-2.564-3.464-2.564-1.67 0-3.229.73-4.183 2.119h-.051l.314-1.812h-3.303c-.08.424-.189.972-.293 1.498L61.35 19.678h3.545l1.406-6.428c.442-1.812 1.109-4.668 3.512-4.668.904 0 1.67.628 1.67 1.629 0 .811-.263 2.067-.45 2.885l-1.429 6.582h3.549l1.399-6.428c.45-1.834 1.056-4.668 3.522-4.668.9 0 1.662.628 1.662 1.629 0 .811-.264 2.075-.446 2.885l-1.433 6.582h3.557l1.414-6.449c.292-1.104.607-2.471.607-3.674.003-2.054-1.747-3.698-3.769-3.698zm-68.365.308L8.394 19.68h3.541l2.912-13.515h-3.546zm7.244 7.581c0-2.541 1.585-5.164 4.416-5.164.979 0 1.904.233 2.593.679l.872-2.885c-.952-.285-2.22-.52-3.545-.52-4.893 0-8.038 3.586-8.038 8.313 0 3.49 2.273 5.822 5.79 5.822 1.164 0 2.328-.111 3.412-.629l.399-2.783c-.926.438-2.014.68-2.882.68-2.438.011-3.017-1.759-3.017-3.513zM16.146.335h-3.544l-.743 3.368h3.544l.743-3.368zm30.107 5.522c-4.472 0-7.753 4.033-7.753 8.225 0 4.02 2.644 5.91 6.562 5.91 1.454 0 2.963-.344 4.336-.76l.446-2.783c-1.322.6-2.718.973-4.175.973-2.271 0-3.596-.797-3.765-2.922h-.003c-.008-.125-.019-.242-.019-.381 0-.021.004-.051.004-.072v-.037c.015-.92.22-1.84.575-2.682.677-1.715 1.644-2.907 3.734-2.907 1.483 0 2.249.811 2.249 2.258 0 .312-.025.598-.08.92h-4.849c-.315 1.059-.37 1.768-.378 2.408h8.35c.213-.992.348-1.992.348-3.016.002-3.431-2.221-5.134-5.582-5.134zm-6.017.308h-4.601l-4.947 4.91h-.058L32.988 0h-3.545l-4.204 19.68H28.7l1.538-7.158h.051l3.52 7.158h3.996l-4.102-7.35 6.533-6.165zm16.882 9.788c0-.533.08-.994.161-1.314l1.293-5.903h3.179l.557-2.57h-3.176l.876-4.01-3.81 1.234-.614 2.775h-2.56l-.561 2.57h2.566l-1 4.565c-.241 1.074-.453 2.098-.453 3.148 0 2.602 1.695 3.543 4.101 3.543.608 0 1.297-.182 1.905-.312l.607-2.732c-.45.189-1.08.322-1.721.322-.79.001-1.35-.513-1.35-1.316zm-52.46 0c0-.533.084-.994.157-1.314l1.297-5.903H9.29l.557-2.57H6.668l.875-4.01L3.735 3.39l-.612 2.776H.556L0 8.736h2.57l-1.006 4.565c-.238 1.072-.455 2.098-.455 3.148 0 2.6 1.696 3.543 4.106 3.543.607 0 1.296-.184 1.903-.314l.608-2.732c-.446.189-1.084.322-1.717.322-.794.002-1.351-.512-1.351-1.315z">                        
             </path>
         </svg>
       </a>
       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
       </button>
       <form class="w-25 mt-2" role="search">                      
         <input class="form-control me-2 search" type="search" placeholder="Search for artist, event or venue" aria-label="Search">                  
       </form>
       <div class="collapse navbar-collapse" id="navbarSupportedContent">
         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
           <li class="nav-item">
             <a class="nav-link active" aria-current="page" href="#">Concerts</a>
           </li>
           <li class="nav-item">
             <a class="nav-link" href="#">Sports</a>
           </li>                        
           <li class="nav-item">
             <a class="nav-link" href="">Arts & Theater</a>
           </li>
           <li class="nav-item">
             <a class="nav-link" href="">Family</a>
           </li>
           <li class="nav-item">
             <a class="nav-link" href="">VIP</a>
           </li>
           <li class="nav-item">
             <a class="nav-link" href="">Deals</a>
           </li>
         </ul>            
       </div>                   
     </div>
     <div id="dropdown-menu">
       <ul class="navbar-nav">
         <li class="nav-item dropdown">
           <a class="nav-link dropdown-toggle dropbtn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             ${user.data.firstName[0].toUpperCase() + user.data.firstName.slice(1)}
           </a>
           <ul class="dropdown-menu dropdown-content">
             <li><a class="dropdown-item" href="#">My Account</a></li>
             <li><a class="dropdown-item" href="#">My Tickets</a></li>
             <li><a class="dropdown-item" href="#">My Listings</a></li>
             <li><a class="dropdown-item" href="#">Settings</a></li>
             <li><a class="dropdown-item" href="#">Sell</a></li>
             <li><a class="dropdown-item" href="#">Learn About Verified Tickets</a></li>
             <li><a class="dropdown-item" href="#">Sign Out</a></li>
           </ul>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="">Help</a>
         </li>                    
       </ul>
     </div>
 </div>
</div>
 `;

}

loadThis();
 
 



//  <div class="my-0 p-0">
//  <div id="navBar" class="head headTransparent px-0">
//    <div class="position-relative align-items-center">
//      <!-- <div class="back-arrow position-absolute text-white">
//        <i class="bi bi-chevron-left"></i>
//      </div> -->
//       <div class="head-sm text-center text-white" style="display: flex; justify-content: space-between; align-items: center; padding: 0px 40px;">
//        <h4>Ticket Master</h4>
//        <div>
//            <a href="create-ticket.html" class="btn btn-primary" id="admins-only">Create Ticket</a>
//            <button onclick="logOut()" class="btn btn-primary">Log Out</button>
//        </div>
//       </div> 
//    </div>
//  </div>
// </div>