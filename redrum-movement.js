function menuFN() { //This fn is here for the mobile menu
    var m = document.getElementById("nav");
    if (m.className === "navRight") {
        m.className += " responsive";
    } else {
        m.className = "navRight";
    }
}

function vDis() {//This fn displays the showcase video if device is bigger than 1144px. If not than the video does not load, increasing loading speed
    var v = document.getElementById("mobile");
    var c = getComputedStyle(v)
    if (c.display !== "none") {
        var v = document.getElementById("bcgVid")
        var s = document.createElement('source');
        s.setAttribute('src', '2.mp4');
        v.appendChild(s);

    }
}
