// JavaScript for Fading In Content
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM content loaded.");

    const loadingScreen = document.querySelector('.loading-screen');
    const content = document.querySelector('.content');
    const typewriter = document.querySelector('.typewriter1');
    const typewriterDesc = document.querySelector('.typewriter-description');

    // Check if all required elements are found
    if (loadingScreen && content && typewriter && typewriterDesc) {
        console.log("All required elements found.");

        // Typewriter Effect for "FASTYaari"
        const text = typewriter.textContent;
        typewriter.textContent = ''; // Clear existing text
        let index = 0;

        function type() {
            if (index < text.length) {
                typewriter.textContent += text.charAt(index);
                index++;
                setTimeout(type, 100); // Adjust the timeout for typing speed
            } else {
                // Typewriter effect completed
                typewriterDesc.style.opacity = 1; // Show description
                setTimeout(() => {
                    loadingScreen.style.opacity = 0;
                    loadingScreen.style.display = 'none';
                    content.style.opacity = 1;
                    content.style.display = 'block'; // Show content after loading screen fades out
                    content.style.transition = 'opacity 1s ease';
                }, 2000); // Wait for 2 seconds before fading out loading screen
            }
        }

        // Start the typewriter effect
        type();
    } else {
        console.error('Required elements not found.');
    }
});
