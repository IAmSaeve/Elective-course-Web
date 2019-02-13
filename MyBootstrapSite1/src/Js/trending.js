// https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query

// Get trending movies today
// https://api.themoviedb.org/3/trending/movie/day?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb

// URL to iamge hosting site
// http://image.tmdb.org/t/p/w500/

var movies
var centerSection = document.getElementById('centerSection')

function getMovies () {
  var url = 'https://api.themoviedb.org/3/trending/movie/day?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb'
  var xhr = new XMLHttpRequest()
  xhr.open('GET', url, true)
  xhr.onload = function () {
    var xhrResult = JSON.parse(xhr.responseText)
    movies = xhrResult.results
    if (xhr.readyState === 4 && xhr.status === 200) {
      genSite()
    } else {
      var errorHeader = document.createElement('h1')
      errorHeader.style.color = 'FF0000'
      errorHeader.innerText = 'ERROR: Failed to get data from TheMovieDB'
      centerSection.appendChild(errorHeader)
      console.error(xhrResult.status_message)
    }
  }
  xhr.send(null)
}

window.addEventListener('load', getMovies)

function genSite () {
  centerSection.innerHTML = ''
  var divRowContainer = document.createElement('div')
  divRowContainer.className = 'row mb-3 mt-5'
  centerSection.appendChild(divRowContainer)

  var divRow
  var divCol
  var img
  var h3
  var p

  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i]

    divCol = document.createElement('div')
    divCol.className = 'col'
    divRowContainer.appendChild(divCol)
    divRow = document.createElement('div')
    divRow.className = 'row'
    divCol.appendChild(divRow)

    divCol = document.createElement('div')
    divCol.className = 'col'
    divRow.appendChild(divCol)

    img = document.createElement('img')
    img.className = 'img-fluid float-right'
    // img.src = `http://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`
    img.src = `http://image.tmdb.org/t/p/w300${movie.poster_path}`
    divCol.appendChild(img)

    divCol = document.createElement('div')
    divCol.className = 'col'
    divRow.appendChild(divCol)

    h3 = document.createElement('h3')
    h3.innerText = movie.title
    p = document.createElement('p')
    p.innerText = movie.overview
    divCol.appendChild(h3)
    divCol.appendChild(p)

    if ((i + 1) % 2 === 0) {
      divRowContainer = document.createElement('div')
      divRowContainer.className = 'row mb-3'
      centerSection.appendChild(divRowContainer)
    }
  }
}
