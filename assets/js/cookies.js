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


// Define function to add trackers
function addTrackers() {
    var script1 = document.createElement('script');
    script1.src ='https://www.googletagmanager.com/gtag/js?id=G-HXHVPSX22F'
    script1.async = true;
    document.head.appendChild(script1)

    var script2 = document.createElement('script');
    script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-HXHVPSX22F');`
    document.head.appendChild(script2)
}


var cookiePreferences = getCookie('cookiePreferences')
const cookiebanner = document.getElementById('cookiebanner')


if(cookiePreferences == 'accepted') {
    cookiebanner.style.display = 'none'
    addTrackers()
} else if (cookiePreferences == 'denied') {
    cookiebanner.style.display = 'none'
}else {
    cookiebanner.style.display = 'block'
}


function acceptCookies(){
    setCookie('cookiePreferences', 'accepted', 30)
    cookiebanner.style.display = 'none'
    addTrackers()
}


function denyCookies(){
    setCookie('cookiePreferences', 'denied', 30)
    cookiebanner.style.display = 'none'
}