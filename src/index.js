console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function()
{
    loadImages();
    loadBreedOptions();
});

function loadImages()
{
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(function(res)
    {
        res.json()
    })
    .then(function(results) 
    {
        results.message.forEach(function(image) {addImage(image)} )
    });
}

function loadBreedOptions()
{
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
}

