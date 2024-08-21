// Define function for saving cookies
function setCookie(cname, cvalue, exdays) { // Parameters: cookie name, cookie value, days to expire (in days)
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));

    let expires = "expires="+ d.toUTCString();

    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


// Define function for retrieving cookies
function getCookie(cname) { // Parameters: cookie name
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');

    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }

    return "";
}


var acceptedCookies = getCookie('acceptedCookies')
const cookiebanner = document.getElementById('cookiebanner')


// Check if cookies have been accepted before & hides banner if yes
if(acceptedCookies == 'true'){
    cookiebanner.style.display = 'none'
} else {
    cookiebanner.style.display = 'block'
}


// Add 'acceptedCookies' cookie
function acceptCookies(){
    setCookie('acceptedCookies', 'true', 30)
    cookiebanner.style.display = 'none'
}