function createcard(thumbnail, title, cname, views, monthsold, duration) {

    let viewstr
    if (views < 1000) {
        viewstr = views
    }
    else if (views > 1000000) {
        viewstr = views / 1000000 + "M"
    }
    else {
        viewstr = views / 1000 + "K"
    }

    let html = ` <div class="card">
            <div class="img"><img src="${thumbnail}" alt="">
            <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cname} . ${viewstr}views  . ${monthsold} months ago</p>
            </div>
        </div>`

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}
createcard("https://i.ytimg.com/vi/gRLdHSabW3o/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB21Dwm3c7yoXYuR2rb5vPT7YxK1A", "Back-end Intro| Sigma Web Dev Course", "CodeWithHarry .", 9000, 8, "32:22")

