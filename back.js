const endpoint = 'https://api.quotable.io/random';

async function getQuote() {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        document.getElementById('quote').textContent = data.content;
        document.getElementById('author').textContent = `- ${data.author}`;
    } catch (error) {
        console.error('There was a problem fetching the quote:', error);
    }
}

function searchQuotes() {
    const authorName = document.getElementById('author-search').value;
    if (authorName.trim() === '') {
        alert('Please enter an author name to search.');
        return;
    }

    fetch(`https://api.quotable.io/quotes?author=${authorName}`)
        .then(response => response.json())
        .then(data => {
            if (data.results.length > 0) {
                const randomIndex = Math.floor(Math.random() * data.results.length);
                const quote = data.results[randomIndex];
                document.getElementById('quote').textContent = quote.content;
                document.getElementById('author').textContent = `- ${quote.author}`;
            } else {
                alert('No quotes found for the author.');
            }
        })
        .catch(error => console.error('There was a problem fetching the quotes:', error));
}

document.addEventListener('DOMContentLoaded', getQuote);
