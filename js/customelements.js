// Main header element
class mainHeader extends HTMLElement {
    constructor() {
        super();
        this.outerHTML = `
            <header>
                <div class="header">
                    <div class="left">
                        <img src="/assets/DelabieMedia_Logo_Transparant_Wit.svg" alt="Delabie Media logo" height="75%">
                    </div>
                    <div class="middle">
                        <a href="/">Home</a>
                        <a href="/about">Over ons</a>
                        <a href="/projecten">Projecten</a>
                        <a href="/contact">Contact</a>
                    </div>
                    <div class="right">
                        <a href="tel:+32 493 97 32 62" target="_blank">(+32)493 97 32 62</a>
                        <a href="mailto:info@delabiemedia.be" target="_blank">info@delabiemedia.be</a>
                    </div>
                </div>
                <div class="header-mobile">
                    <div class="left">
                        <img src="/assets/icons/DelabieMedia_Icon_Menu.svg" alt="Delabie Media logo" width="32px" onclick="showMenu()">
                    </div>
                    <div class="middle">
                        <img src="/assets/DelabieMedia_Logo_Transparant_Wit.svg" alt="Delabie Media logo" height="50%">
                    </div>
                    <div class="right">
                        <a href="tel:+32 493 97 32 62" target="_blank">(+32)493 97 32 62</a>
                        <a href="mailto:info@delabiemedia.be" target="_blank">info@delabiemedia.be</a>
                    </div>
                    <div class="menu">
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/projecten">Projecten</a>
                        <a href="/contact">Contact</a>
                        <img class="close-menu" src="/assets/icons/DelabieMedia_Icon_Cross.svg" alt="Close menu" height="32px" onclick="closeMenu()">
                    </div>
                </div>
            </header>
        `
    }
} customElements.define('main-header', mainHeader)


// Main footer element
class mainFooter extends HTMLElement {
    constructor() {
        super();
        this.outerHTML = `
            <footer>
                <div class="left">
                    <p>Dorp-Oost 160, 9080 Lochristi</p>
                </div>
                <div class="middle">
                    <div class="copyright">
                        <p>Copyright © 2024 Delabie Media<br>(Alle rechten voorbehouden)</p>
                    </div>
                    <div class="legal">
                        <a href="/cookies" class="cookies">cookies</a>
                        ·
                        <a href="/algemene-voorwaarden" class="algemene-voorwaarden">algemene voorwaarden</a>
                        ·
                        <a href="/privacy" class="privacy">privacy</a>
                    </div>
                </div>
                <div class="right">
                    <div class="socials">
                        <a href="https://www.instagram.com/delarmy_studios/" target="_blank"><img src="/assets/icons/DelabieMedia_Icon_Instagram.svg" alt="Instagram logo" height="21px"></a>
                        <a href="https://www.facebook.com/profile.php?id=100072141171620" target="_blank"><img src="/assets/icons/DelabieMedia_Icon_Facebook.svg" alt="Facebook logo" height="21px"></a>
                        <a href="https://www.youtube.com/@delarmy_studios" target="_blank"><img src="/assets/icons/DelabieMedia_Icon_YouTube.svg" alt="YouTube logo" height="21px"></a>
                    </div>
                    <div class="attribution">
                        Uicons by <a href="https://www.flaticon.com/uicons" target="_blank">Flaticon</a>
                    </div>
                </div>
            </footer>
        `
    }
} customElements.define('main-footer', mainFooter)


// Cookiebanner element
class cookieBanner extends HTMLElement {
    constructor() {
        super();
        this.outerHTML = `
            <div id="cookiebanner">
                <p>Onze website maakt gebruikt van <a href="/cookies/">cookies</a> om uw ervaring te verbeteren.</p>
                <button onclick="acceptCookies()">Accepteren</button>
            </div>
        `
    }
} customElements.define('cookie-banner', cookieBanner)