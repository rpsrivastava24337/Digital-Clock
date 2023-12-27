
function currentTime() {
    let h = document.getElementById("hours")
    let m = document.getElementById("min")
    let s = document.getElementById("sec")

    let time = new Date()

    let hours = time.getHours()
    let min = time.getMinutes()
    let sec = time.getSeconds()

    h.innerHTML = hours
    m.innerHTML = min
    s.innerHTML = sec

    
let year= document.getElementById("year")
year.innerHTML=time.getFullYear()
}


setInterval(() => {
    currentTime()
}, 1000);
