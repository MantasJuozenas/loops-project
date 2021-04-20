const URL = 'https://dog.ceo/api/breeds/image/random';

//Fetches an URL

function loadImages(numImages = 15) {
  let i = 0
  while (i < numImages) {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        renderImages(data);
      })
    i++
  }
};

loadImages();

//Listens for scroll event and loads more images

window.addEventListener('scroll', () => {
  if (window.scrollY +
      window.innerHeight >= document.documentElement.scrollHeight);
   {
    loadImages();
  }
});

//Renders images

function renderImages (imageData) {
  const container = document.querySelector('.container');
  const breed = imageData.message.split('.ceo/')[1].split('/')[0];
  const breedName = imageData.message.split('.ceo/')[1].split('/')[1];
  const imageBox = document.createElement('div');
  const img = document.createElement('img');
  const hoverDiv = document.createElement('div');
  const paragraph = document.createElement('p');
  imageBox.setAttribute('class', 'imageBox');
  hoverDiv.setAttribute('class', 'hover');
  paragraph.innerHTML = (`${breedName}<hr>${breed}`);
  img.src = imageData.message;
  hoverDiv.appendChild(paragraph);
  imageBox.appendChild(img);
  imageBox.appendChild(hoverDiv);
  container.appendChild(imageBox);
}
