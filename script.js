setInterval(() => {
    const date = new Date()
    document.querySelector(".time").innerHTML = date.toLocaleTimeString();
}, 1000)
setInterval(() => {
    const date1 = new Date()
    document.querySelector(".date").innerHTML = date1.toLocaleDateString();
}, 1000)