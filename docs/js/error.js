// Modern Error Page JavaScript

// DOM Load Event Listener
document.addEventListener('DOMContentLoaded', function() {
  // Initialize error page
  initErrorPage();
});

// Initialize Error Page Function
function initErrorPage() {
  // Add any initialization code here
  console.log('Error page initialized');
  
  // Optional: Add event listeners for interactive elements
  setupEventListeners();
  
  // Optional: Add performance monitoring
  monitorPerformance();
}

// Setup Event Listeners
function setupEventListeners() {
  // Get action button if exists
  const actionButton = document.querySelector('.action-button');
  
  if (actionButton) {
    actionButton.addEventListener('click', function(e) {
      // Optional: Add click tracking or additional functionality
      console.log('Action button clicked');
    });
  }
  
  // Optional: Add keyboard navigation support
  document.addEventListener('keydown', function(e) {
    // Handle ESC key to go back (if applicable)
    if (e.key === 'Escape') {
      handleEscapeKey();
    }
  });
}

// Handle Escape Key Press
function handleEscapeKey() {
  // Optional: Go back in history if possible
  if (window.history.length > 1) {
    window.history.back();
  }
}

// Monitor Performance (Optional)
function monitorPerformance() {
  // Check if Performance API is supported
  if ('performance' in window) {
    // Log page load time
    const loadTime = performance.now();
    console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
  }
}

// Optional: Add smooth scroll functionality
function smoothScrollTo(element) {
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

// Optional: Add dark mode support (if needed)
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// Export functions for potential module use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initErrorPage,
    setupEventListeners,
    handleEscapeKey,
    monitorPerformance,
    smoothScrollTo,
    toggleDarkMode
  };
}