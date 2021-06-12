const disableScroll = document.querySelector("body");
const header = document.querySelector("header");
const overlay = document.querySelector(".overlay");
const hamburger = document.querySelector(".hamburger");
const dropDown = document.querySelector(".dropdown");
const bringBack = document.querySelector(".hero");
const kDrama = document.querySelector(".drama-wrapper");

hamburger.addEventListener("click", function() {
    if (header.classList.contains("open")) {
        header.classList.remove("open");
        overlay.classList.remove("fade-in");
        overlay.classList.add("fade-out");
        dropDown.classList.remove("fade-in");
        dropDown.classList.add("fade-out");
        disableScroll.classList.remove("disable-scroll");
        // bringBack.classList.remove("bringback");
        // kDrama.classList.remove("bringback");
    } else {
        header.classList.add("open");
        overlay.classList.add("fade-in");
        overlay.classList.remove("fade-out");
        dropDown.classList.add("fade-in");
        dropDown.classList.remove("fade-out");
        disableScroll.classList.add("disable-scroll");
        // bringBack.classList.add("bringback");
        // kDrama.classList.add("bringback");
    }
});

const navLinks = document.querySelectorAll(".nav-link");

for (let navLink of navLinks) {
    navLink.addEventListener("click", function() {
        header.classList.remove("open");
        overlay.classList.remove("fade-in");
        overlay.classList.add("fade-out");
        dropDown.classList.remove("fade-in");
        dropDown.classList.add("fade-out");
        disableScroll.classList.remove("disable-scroll");
        // bringBack.classList.remove("bringback");
        // kDrama.classList.remove("bringback");
    });
}

// looping topTenplayLists

let outputSongs = "";
let playLists = {
    1: {
        image: "/assets/images/modern.jfif",
        title: "Friday",
        link: "https://www.youtube.com/watch?v=EiVmQZwJhsA",
        album: "Modern Times",
        year: "2013",
    },
    2: {
        image: "/assets/images/flower.jfif",
        title: "Meaning of You",
        link: "https://www.youtube.com/watch?v=JA0j2-SAsBg",
        album: "A Flower Bookmark",
        year: "2014",
    },
    3: {
        image: "/assets/images/shire.jfif",
        title: "Twenty Three",
        link: "https://www.youtube.com/watch?v=42Gtm4-Ax2U",
        album: "Chat-Shire",
        year: "2015",
    },
    4: {
        image: "/assets/images/pallete.jfif",
        title: "Through the Night",
        link: "https://www.youtube.com/watch?v=BzYnNdJhZQw",
        album: "Pallete",
        year: "2017",
    },
    5: {
        image: "/assets/images/pallete.jfif",
        title: "Pallete",
        link: "https://www.youtube.com/watch?v=d9IxdwEFk1c",
        album: "Pallete",
        year: "2017",
    },
    6: {
        image: "/assets/images/flower2.jfif",
        title: "Autumn Morning",
        link: "https://www.youtube.com/watch?v=vQrDL9RZyYw",
        album: "A Flower Bookmark 2",
        year: "2017",
    },
    7: {
        image: "/assets/images/BBIBBI.jfif",
        title: "BBIBBI",
        link: "https://www.youtube.com/watch?v=nM0xDI5R50E",
        album: "BBIBBI",
        year: "2018",
    },
    8: {
        image: "/assets/images/love.jfif",
        title: "Blueming",
        link: "https://www.youtube.com/watch?v=D1PvIWdJ8xo",
        album: "Love Poem",
        year: "2019",
    },
    9: {
        image: "/assets/images/eight.jfif",
        title: "Eight",
        link: "https://www.youtube.com/watch?v=TgOu00Mf3kI",
        album: "Eight",
        year: "2020",
    },
    10: {
        image: "/assets/images/lilac.jfif",
        title: "Lilac",
        link: "https://www.youtube.com/watch?v=v7bnOxV4jAc",
        album: "Lilac",
        year: "2021",
    },
};

for (let playlist of Object.keys(playLists)) {
    outputSongs += "<div class='song'>";
    outputSongs += "<div class='image-title'>";
    outputSongs += "<img src=" + playLists[playlist].image + ">";
    outputSongs +=
        "<a href=" +
        playLists[playlist].link +
        " target='_blank'>" +
        playLists[playlist].title +
        "</a>";
    outputSongs += "</div>";
    outputSongs += "<div class='album-year'>";
    outputSongs += "<p>" + playLists[playlist].album + "</p>";
    outputSongs += "<p>" + playLists[playlist].year + "</p>";
    outputSongs += "</div>";
    outputSongs += "</div>";
}

document.querySelector(".playlist_wrapper").innerHTML = outputSongs;

// looping topThreeKdrama

let outputDrama = "";
dramas = {
    1: {
        image: "/assets/images/mister.jpg",
        title: "My Mister (2018)",
        rating: "9.1",
        link: "https://www.netflix.com/id/title/81267691",
        stars: {
            female: "Lee Ji Eun",
            male: "Lee Sun kyun",
            list: "https://mydramalist.com/people/441-lee-sun-gyun",
        },
    },
    2: {
        image: "/assets/images/hotel.jpg",
        title: "Hotel de Luna (2019)",
        rating: "8.2",
        link: "https://www.netflix.com/id/title/81205849",
        stars: {
            female: "Lee Ji Eun",
            male: "Yoo Jin Gu",
            list: "https://mydramalist.com/people/1500-yeo-jin-goo",
        },
    },
    3: {
        image: "/assets/images/persona.jpg",
        title: "Persona (2019)",
        rating: "6.6",
        link: "https://www.netflix.com/id/title/81044884",
        stars: {
            female: "Lee Ji Eun",
            male: "Park Hae Soo",
            link: "https://mydramalist.com/people/2810-park-hae-soo",
        },
    },
};

for (let drama of Object.keys(dramas)) {
    outputDrama +=
        "<div class='dramas flex'>" +
        "<img src=" +
        dramas[drama].image +
        ">" +
        "<p class='title'>" +
        dramas[drama].title +
        "<p class='imdb'>IMDb Rating</p> <div class='dramas_rating flex'>" +
        "<img src='/assets/images/star.png'/>" +
        "<p><strong>" +
        dramas[drama].rating +
        "</strong> / 10</p> </div>" +
        "<div class='star'>" +
        "<a target='_blank' href='https://mydramalist.com/people/426-iu'>" +
        dramas[drama].stars.female +
        "</a><span> . </span>" +
        "<a target='_blank' href='" +
        dramas[drama].stars.link +
        "'>" +
        dramas[drama].stars.male +
        "</a>" +
        "</div>" +
        "<div class='playbutton flex'>" +
        "<div class='background'></div>" +
        "<a target='_blank' href=" + [dramas[drama].link] +
        "><img src='/assets/images/play.png'/></a> </div> </div> </div>";
}
document.querySelector(".drama_wrapper").innerHTML = outputDrama;