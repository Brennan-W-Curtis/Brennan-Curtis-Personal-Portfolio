const myApp = {};

myApp.replaceSvgs = () => {
    const githubContainer = document.querySelector("#githubContainer");
    const linkedinContainer = document.querySelector("#linkedinContainer");
    const twitterContainer = document.querySelector("#twitterContainer");
    const youtubeContainer = document.querySelector("#youtubeContainer");

    const githubIcon = `<i class="fab fa-github"></i>`;
    const linkedinIcon = `<i class="fab fa-linkedin-in"></i>`;
    const twitterIcon = `<i class="fab fa-twitter"></i>`;
    const youtubeIcon = `<i class="fab fa-youtube"></i>`;

    const mediaQuery = window.matchMedia("(max-width: 480px)");
    
    if (mediaQuery.matches) {
        console.log("Matched");
        githubContainer.innerHTML = githubIcon;
        linkedinContainer.innerHTML = linkedinIcon;
        twitterContainer.innerHTML = twitterIcon;
        youtubeContainer.innerHTML = youtubeIcon;
    }

};

myApp.init = () => {
    myApp.replaceSvgs();
};

myApp.init();