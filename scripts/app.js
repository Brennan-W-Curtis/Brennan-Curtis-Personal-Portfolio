// Declare a namespace object to store all variables and functions.
const myApp = {};

// Listens for when the user scrolls then calls the updatePosition method when such an event should occur.
myApp.handleScroll = () => {
    document.addEventListener("scroll", myApp.updatePosition);
}

// Updates the header section link upon loading a new session if the user's viewport is at the top of the screen.
myApp.handleNewSession = () => {

    // Store the HTML used to render the different states the side navigation icons can take.
    const inactive = `<i class="far fa-circle"></i>`;
    const active = `<i class="fas fa-circle"></i>`;

    // If the user begins their session at the top of the document then the headerLink is dynamically changed to reflect that.
    document.documentElement.scrollTop === 0 ?
        headerLink.innerHTML = active :
        headerLink.innerHTML = inactive;
}

// Dynamically update the icon used in the side navigation based on the user's vertical position on the document.  
myApp.updatePosition = () => {

    // Store the HTML used to render the different states the side navigation icons can take.
    const inactive = `<i class="far fa-circle"></i>`;
    const active = `<i class="fas fa-circle"></i>`;
 
     // Store a reference to each of the sections on the page. 
     const headerSection = document.querySelector("#headerSection");
     const aboutSection = document.querySelector("#aboutSection");
     const skillsSection = document.querySelector("#skillsSection");
     const projectsSection = document.querySelector("#projectsSection");
     const contactSection = document.querySelector("#contactSection");

    // Store a reference to each of the links in the side navigation. 
    const headerLink = document.querySelector("#headerLink");
    const aboutLink = document.querySelector("#aboutLink");
    const skillsLink = document.querySelector("#skillsLink");
    const projectsLink = document.querySelector("#projectsLink");
    const contactLink = document.querySelector("#contactLink");

    myApp.elementVisible(headerSection) ?
        headerLink.innerHTML = active :
        headerLink.innerHTML = inactive;

    myApp.elementVisible(aboutSection) ?
        aboutLink.innerHTML = active :
        aboutLink.innerHTML = inactive;

    myApp.elementVisible(skillsSection) ?
        skillsLink.innerHTML = active :
        skillsLink.innerHTML = inactive;

    myApp.elementVisible(projectsSection) ?
        projectsLink.innerHTML = active :
        projectsLink.innerHTML = inactive;

    myApp.elementVisible(contactSection) ?
        contactLink.innerHTML = active :
        contactLink.innerHTML = inactive;
}

// Determines if the passed element is visible within the viewport and returns true if so otherwise it returns null.
myApp.elementVisible = element => {

    // Store a reference to an object with element's boundaries.  
    const rectangle = element.getBoundingClientRect();

    // Store the value of the user's window height after performance division. 
    const dividedHeight = window.innerHeight / 2;

    // Returns a boolean depending on if the top property is less than or equal to the dividedHeight AND greater than the negative dividedHeight.
    return (
        rectangle.top <= dividedHeight &&
        rectangle.top > -dividedHeight
    );

}

// Declare the initialization method.
myApp.init = () => {
    myApp.handleNewSession();
    myApp.handleScroll();
}

// Call the initialization method.
myApp.init();