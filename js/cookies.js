function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));

    let expires = "expires="+ d.toUTCString();

    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
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


// Check if cookies have been accepted before
var acceptedCookies = getCookie('acceptedCookies')
const cookiebanner = document.getElementById('cookiebanner')

if(acceptedCookies == 'true'){
    cookiebanner.style.display = 'none' // Hide cookie banner if yes
}else {
    cookiebanner.style.display = 'block' // Show cookie banner if no
}


// Add 'acceptedCookies' cookie
function acceptCookies(){
    setCookie('acceptedCookies', 'true', 30)
    cookiebanner.style.display = 'none'
}