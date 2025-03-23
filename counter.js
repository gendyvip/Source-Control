var btn = document.getElementById("counter")
var showCount = document.getElementById("count")
var count = 0
showCount.innerText = count
btn.addEventListener("click", function () {
    showCount.innerText = count++
})