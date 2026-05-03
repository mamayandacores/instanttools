// admin.js

// Function to fetch user suggestions
async function fetchUserSuggestions() {
    const response = await fetch('/api/suggestions');
    if (!response.ok) {
        throw new Error('Failed to fetch suggestions');
    }
    const suggestions = await response.json();
    return suggestions;
}

// Function to display user suggestions in the admin panel
function displayUserSuggestions(suggestions) {
    const suggestionsContainer = document.getElementById('suggestionsContainer');
    suggestionsContainer.innerHTML = '';
    suggestions.forEach(suggestion => {
        const suggestionElement = document.createElement('div');
        suggestionElement.classList.add('suggestion');
        suggestionElement.innerText = suggestion.text;
        suggestionsContainer.appendChild(suggestionElement);
    });
}

// Function to delete a user suggestion
async function deleteUserSuggestion(suggestionId) {
    const response = await fetch(`/api/suggestions/${suggestionId}`, {
        method: 'DELETE'
    });
    return response.ok;
}

// Main admin panel function
async function initAdminPanel() {
    try {
        const suggestions = await fetchUserSuggestions();
        displayUserSuggestions(suggestions);
    } catch (error) {
        console.error('Error initializing admin panel:', error);
    }
}

// Initialize the admin panel on page load
document.addEventListener('DOMContentLoaded', initAdminPanel);