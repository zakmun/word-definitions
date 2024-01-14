const btn = document.querySelector('#btn');
const h1 = document.querySelector('h1');
const container = document.querySelector('#container');
let contentContainer;

async function randomWord() {
    const url = 'https://wordsapiv1.p.rapidapi.com/words/?random=true';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6106ee37e4mshfdb5a7795c99b6fp1db75ajsnf5a241fa9f74',
            'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        if (data && data.results && data.results.length > 0) {
            const word = data.word;
            const define = data.results[0].definition;

            // Create a new contentContainer div if not exists
            if (!contentContainer) {
                contentContainer = document.createElement('div');
                container.appendChild(contentContainer);
            }

            // Set the HTML content of contentContainer
            contentContainer.innerHTML = `<h2 style="font-size: 1em;">${word}</h2> <p style="font-size: 0.6em;">${define}</p>`;

            

            h1.after(contentContainer);
        } else {
            console.log('Unexpected API response format:', data);
        }

    } catch (error) {
        console.log('Error fetching data:', error);
    }
}

btn.addEventListener('click', randomWord);
