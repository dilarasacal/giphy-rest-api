var serverUrl = 'https://api.giphy.com/v1/gifs/trending?rating=g&api_key=oSPMrVIYR1pYt1OUtbYUQ7jrmn2Xn1OG'
//fetch ile rest apı den data çekeriz javscriptte.
//fetch javascript native bir keyworddür.altarnatif olarak jqoery için ajax, nmp için axios kütüphaneleri kullanılab

var gifContainer = document.getElementById('gifContainer');

fetch(serverUrl)
    .then(function (res) {
        return res.json()
    })
    .then(function (res) {
        if (res.meta.status == 200) {
            writeGif(res.data);
        } else {
            console.log('Api de hata var: ' + res.meta.status);
        }
    })

function writeGif(gifs) {
    gifs.forEach(function (gif, i) {
        var gifObject = document.createElement('img')
        gifObject.src = gif.images.original.url
        gifObject.classList.add('gif-img')
        gifContainer.appendChild(gifObject);
    })
}