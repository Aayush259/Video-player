console.log('Square');

// Getting input element.
const Input = document.querySelector('#URL-Bar');

// Getting Search button.
const SearchButton = document.querySelector('#search-btn');

const Search = () => {
    // Getting the URL entered by the user.
    const InputURL = Input.value;

    // Getting video-container element from DOM.
    const Video = document.querySelector('#video-container');

    Video.style.height = `100vh`;
    Video.style.width = `100vw`;
    Video.style.background = `#00000079`;

    Video.innerHTML += `
    <video src="${InputURL}" controls controlsList="nodownload"></video>
    `
}

// Adding event listener to Search button.
SearchButton.addEventListener('click', Search);

document.addEventListener('keydown', (e) => {
    if (e.key === `Enter`) {
        Search();
    }
})