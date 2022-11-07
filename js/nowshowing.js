
    function getMovieName(movieArray, id) {
        for (let i = 0; i < movieArray.length; i++) {
            if (movieArray[i].id == id) return movieArray[i].name;
        }
        return undefined;
    }
    function getMoviePic(movieArray, id) {
        for (let i = 0; i < movieArray.length; i++) {
            if (movieArray[i].id == id) return movieArray[i].thumbnail
        }
        return undefined;
    }
    let movies = getMovies();
    let cinemas = getCinemas();
    let branchNames = new Array();
    let branchMovie = new Array();
    let movieIds = new Array();
    let movieNames = new Array();
    let movieIndex = new Array();
    let movieDate = new Array();
    let movieHouse = new Array();
    let moviePictures = new Array();
    let movieShows = new Array();

    for (let i = 0; i < cinemas.length; i++) {
        branchNames[i] = cinemas[i].branchName
    }

    let b = document
    let bloc = b.getElementById('mySelect')

    branchNames.forEach(element => {
        let elemnt = b.createElement('option')
        elemnt.innerHTML = `
           <option value="${element}">${element}</option> 
        `
        bloc.appendChild(elemnt)
    }

    )
    myFunction()
    var selectedValue = ""
    var ddl = ""
    function validate(x, y) {
        ddl = document.getElementById("cardtype");
        selectedValue = ddl.options[ddl.selectedIndex].value;
        localStorage.setItem("ind", selectedValue);
        localStorage.setItem("nme", x);
        localStorage.setItem("ne", y);
    }
    function validate1(x, y) {
        ddl = document.getElementById("cardtype1");
        selectedValue = ddl.options[ddl.selectedIndex].value;
        localStorage.setItem("ind", selectedValue);
        localStorage.setItem("nme", x);
        localStorage.setItem("ne", y);
    }
    function validate2(x, y) {
        ddl = document.getElementById("cardtype2");
        selectedValue = ddl.options[ddl.selectedIndex].value;
        localStorage.setItem("ind", selectedValue);
    }
    function validate3(x, y) {
        ddl = document.getElementById("cardtype3");
        selectedValue = ddl.options[ddl.selectedIndex].value;

        localStorage.setItem("ind", selectedValue);
    }
    function validate4(x, y) {
        ddl = document.getElementById("cardtype4");
        selectedValue = ddl.options[ddl.selectedIndex].value;
        localStorage.setItem("ind", selectedValue);

    }

    function myFunction() {
        let m = 0
        let sin = 0
        let muv = 0
        let x = document.getElementById("mySelect").value;
        for (let i = 0; i < cinemas.length; i++) {
            if (x === branchNames[i]) {
                y = i
                branchMovie = cinemas[i].movies
                for (let j = 0; j < branchMovie.length; j++) {
                    movieIds[j] = (cinemas[i].movies[j].id);
                    movieNames[j] = (getMovieName(movies, cinemas[i].movies[j].id));
                    moviePictures[j] = (getMoviePic(movies, cinemas[i].movies[j].id));
                    for (let k = 0; k < cinemas[i].movies[j].shows.length; k++) {
                        movieIndex[k] = (cinemas[i].movies[j].shows[k].index);
                        movieDate[k] = (cinemas[i].movies[j].shows[k].datetime);
                        movieHouse[k] = (cinemas[i].movies[j].shows[k].house);
                    }
                }
            }
        }
        let t = document
        let bloc = t.getElementById('_block_')
        bloc.innerHTML = ""
        for (let j = 0; j < branchMovie.length; j++) {
            ddl = ""
            let elemnt = t.createElement('div')
            elemnt.innerHTML = `
           <p>${movieNames[j]}</p>
           <img class="img_n" src="../images/${moviePictures[j]}" alt="Something went wrong!!!" />
           
           `
            let nelem = t.createElement('div')
            if (cinemas[y].movies[j].shows.length == 1) {
                nelem.innerHTML = `
           <select id="cardtype">
              <option value="${cinemas[y].movies[j].shows[0].index}">${cinemas[y].movies[j].shows[0].datetime} House: ${cinemas[y].movies[j].shows[0].house}</option>
           </select>
           <form action="../html/ticket.html" method="GET">
 <input type="submit" onclick="validate(${y},${j})" value="Buy a Ticket"> 
</form>
           `

            }
            if (cinemas[y].movies[j].shows.length == 2) {
                nelem.innerHTML = `
           <select id="cardtype1">
              <option value="${cinemas[y].movies[j].shows[0].index}">${cinemas[y].movies[j].shows[m].datetime} House: ${cinemas[y].movies[j].shows[0].house}</option>
              <option value="${cinemas[y].movies[j].shows[1].index}"> ${cinemas[y].movies[j].shows[1].datetime} House: ${cinemas[y].movies[j].shows[1].house}</option>
           </select>
           <form action="../html/ticket.html" method="GET">
 <input type="submit" onclick="validate1(${y},${j})" value="Buy a Ticket"> 
</form>
           `
            }
            if (cinemas[y].movies[j].shows.length == 3) {
                nelem.innerHTML = `
           <select id="cardtype2">
              <option value="${cinemas[y].movies[j].shows[0].index}">${cinemas[y].movies[j].shows[0].datetime} House: ${cinemas[y].movies[j].shows[0].house}</option>
              <option value="${cinemas[y].movies[j].shows[1].index}">${cinemas[y].movies[j].shows[1].datetime} House: ${cinemas[y].movies[j].shows[1].house}</option>
              <option value="${cinemas[y].movies[j].shows[2].index}">${cinemas[y].movies[j].shows[2].datetime} House: ${cinemas[y].movies[j].shows[2].house}</option>
           </select>
           <form action="../html/ticket.html" method="GET">
 <input type="submit" onclick="validate2(${y},${j})" value="Buy a Ticket"> 
</form>
           `

            }
            if (cinemas[y].movies[j].shows.length == 4) {
                nelem.innerHTML = `
           <select id="cardtype3">
              <option value="${cinemas[y].movies[j].shows[0].index}">${cinemas[y].movies[j].shows[0].datetime} House: ${cinemas[y].movies[j].shows[0].house}</option>
              <option value="${cinemas[y].movies[j].shows[1].index}">${cinemas[y].movies[j].shows[1].datetime} House: ${cinemas[y].movies[j].shows[1].house}</option>
              <option value="${cinemas[y].movies[j].shows[2].index}">${cinemas[y].movies[j].shows[2].datetime} House: ${cinemas[y].movies[j].shows[2].house}</option>
              <option value="${cinemas[y].movies[j].shows[3].index}">${cinemas[y].movies[j].shows[3].datetime} House: ${cinemas[y].movies[j].shows[3].house}</option>
           </select>
           <form action="../html/ticket.html" method="GET">
 <input type="submit" onclick="validate3(${y},${j})" value="Buy a Ticket"> 
</form>
           `
            }
            if (cinemas[y].movies[j].shows.length == 5) {
                nelem.innerHTML = `
           <select id="cardtype4">
              <option value="${cinemas[y].movies[j].shows[0].index}">${cinemas[y].movies[j].shows[0].datetime} House: ${cinemas[y].movies[j].shows[0].house}</option>
              <option value="${cinemas[y].movies[j].shows[1].index}">${cinemas[y].movies[j].shows[1].datetime} House: ${cinemas[y].movies[j].shows[1].house}</option>
              <option value="${cinemas[y].movies[j].shows[2].index}">${cinemas[y].movies[j].shows[2].datetime} House: ${cinemas[y].movies[j].shows[2].house}</option>
              <option value="${cinemas[y].movies[j].shows[3].index}">${cinemas[y].movies[j].shows[3].datetime} House: ${cinemas[y].movies[j].shows[3].house}</option>
              <option value="${cinemas[y].movies[j].shows[4].index}">${cinemas[y].movies[j].shows[4].datetime} House: ${cinemas[y].movies[j].shows[4].house}</option>
           </select>
           <form action="../html/ticket.html" method="GET">
 <input type="submit" onclick="validate4(${y},${j})" value="Buy a Ticket"> 
</form>
           `
            }

            bloc.appendChild(elemnt)
            bloc.appendChild(nelem)

        }
    }

