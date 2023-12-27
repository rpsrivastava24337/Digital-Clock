
function currentTime() {
    let h = document.getElementById("hours")
    let m = document.getElementById("min")
    let s = document.getElementById("sec")

    let time = new Date()

    let hours = time.getHours()
    let min = time.getMinutes()
    let sec = time.getSeconds()

    h.innerHTML = hours + " Hr"
    m.innerHTML = min + " Min"
    s.innerHTML = sec + " Sec"


    let year = document.getElementById("year")
    year.innerHTML = time.getFullYear()
}


setInterval(() => {
    currentTime()
}, 100);
