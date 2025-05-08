
// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 20,
            behavior: 'smooth'
        });
    });
});

// Progress tracking based on scroll position
const progressContainer = document.createElement('div');
progressContainer.className = 'progress-container';

const progressBar = document.createElement('div');
progressBar.className = 'progress-bar';

progressContainer.appendChild(progressBar);
document.body.insertBefore(progressContainer, document.body.children[1]);

window.addEventListener('scroll', () => {
    const scrollHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const scrollPercentage = (scrollPosition / scrollHeight) * 100;
    
    progressBar.style.width = `${Math.min(scrollPercentage, 100)}%`;
});

// Code syntax highlighting toggle
let codeHighlightingEnabled = true;

document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'e') {  // Ctrl + e to toggle code highlighting
        codeHighlightingEnabled = !codeHighlightingEnabled;
        if (codeHighlightingEnabled) {
            document.querySelectorAll('.code-example').forEach(element => {
                element.style.opacity = '1';
            });
        } else {
            document.querySelectorAll('.code-example').forEach(element => {
                element.style.opacity = '0.6';
            });
        }
    }
});

// Explore button click handling
document.querySelectorAll('.explore-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        // Normally this would just follow the link, but for demonstration
        e.preventDefault();
        alert('In a fully implemented site, this would direct you to the linked resource.');
    });
});
