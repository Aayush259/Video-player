console.log('Square');

// Getting input element.
const Input = document.querySelector('#URL-Bar');

// Getting Search button.
const SearchButton = document.querySelector('#search-btn');

// Adding event listener to Search button.
SearchButton.addEventListener('click', () => {

    // Getting the URL entered by the user.
    const InputURL = Input.value;

    // Getting video-container element from DOM.
    const Video = document.querySelector('#video-container');

    Video.innerHTML = `
    <video src="${InputURL}" autoplay></video>
    <div class="control-btn-container">
        <button id="Play-Pause" class="control-btn"></button>
        <button id="Full-Screen" class="control-btn"></button>
    </div>
    `
})