let userRegion = '';
let userLanguage = '';

function setRegion(region) {
    userRegion = region;
    
    const stepLocation = document.getElementById('step-location');
    const stepLanguage = document.getElementById('step-language');
    
    // Fade out location step
    stepLocation.style.opacity = '0';
    
    setTimeout(() => {
        stepLocation.classList.remove('active');
        
        // Prepare language step
        stepLanguage.classList.add('active');
        
        // Trigger fade in
        setTimeout(() => {
            stepLanguage.style.opacity = '1';
        }, 50);
        
    }, 400); // Wait for fade out to finish
}

function setLanguage(language) {
    userLanguage = language;
    const splashScreen = document.getElementById('splash-screen');
    
    // Fade out the whole splash screen
    splashScreen.style.opacity = '0';
    splashScreen.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        splashScreen.style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }, 500);
    
    console.log(`Region: ${userRegion}, Language: ${userLanguage}`);
}