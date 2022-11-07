let d = document
let movies = getMovies();
let block = d.getElementById('movies')

movies.forEach(element => {
    if (element.type === 'now') {
        let elemnt = d.createElement('div.book_item')
        elemnt.innerHTML = `
       <h4>${element.name}</h4>
       <img src="../images/${element.thumbnail}" alt="Something went wrong!!!"  onclick="ord(${element.id})"/>
       <ul>
              <li><span>Name: </span>${element.name}</li>
              <li><span>Cast: </span>${element.cast}</li>
              <li><span>Director: </span>${element.director}</li>
              <li><span>Duration: </span>${element.duration}</li>
          </ul>
    `
        block.appendChild(elemnt)
    }
})

let mov = getMovies();
let b = document
let bloc = b.getElementById('mov')
mov.forEach(element => {
    if (element.type === 'upcoming') {
        let elemnt = b.createElement('div.bok_item')
        elemnt.innerHTML = `
       <h4>${element.name}</h4>
       <img src="../images/${element.thumbnail}" alt="Something went wrong!!!" onclick="ord(${element.id})" />
       <ul>
              <li><span>Name: </span>${element.name}</li>
              <li><span>Cast: </span>${element.cast}</li>
              <li><span>Director: </span>${element.director}</li>
              <li><span>Duration: </span>${element.duration}</li>
       </ul>
       
    `
        bloc.appendChild(elemnt)
    }
})

let i = 1
function ord(clicked_id) {
    let c = clicked_id - 1
    i = c
    video.currentTime = video.duration
}
var video = document.getElementById('myVideo');
var vidlen = movies.length
var videoSource = new Array();
for (let j = 0; j < vidlen; j++) {

    videoSource[j] = movies[j].src
    console.log(videoSource[j])
}
var videoCount = videoSource.length;
video.setAttribute("src", videoSource[0]);
function videoPlay(videoNum) {
    video.setAttribute("src", videoSource[videoNum]);
    video.load();
    setTimeout(function () { video.play() }, 2000);
}
video.addEventListener('ended', myHandler, false);
function myHandler() {
    if (i == (videoCount)) {
        i = 0;
        videoPlay(i);

    }
    else {
        videoPlay(i);

    }
    i++;
}
