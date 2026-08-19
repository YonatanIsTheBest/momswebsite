let userRegion = '';
let userLanguage = '';

function setRegion(region) {
    userRegion = region;
    
    // Hide location step and show language step
    document.getElementById('step-location').style.display = 'none';
    document.getElementById('step-language').style.display = 'block';
}

function setLanguage(language) {
    userLanguage = language;
    
    // Hide the entire splash screen
    document.getElementById('splash-screen').style.display = 'none';
    
    // Show the main content (or redirect to a new page)
    document.getElementById('main-content').style.display = 'block';
    
    // Example of a redirect based on choices:
    // window.location.href = `/${userRegion.toLowerCase()}/${userLanguage}`;
    
    console.log(`User selected Region: ${userRegion}, Language: ${userLanguage}`);
}