// start bar 
let bar = document.querySelector(".la-bars")
let nav = document.querySelector(".la-bars + ul")
let close = document.querySelector(".la-bars + ul span")

bar.onclick =function() {      
    nav.classList.add("open")
}
close.onclick =function() {      
    nav.classList.remove("open")
}
console.log(close)
// end bar 


// start filter 
let lis = document.querySelectorAll(".switch li")
let arrayimg = document.querySelectorAll(".gallry img")
let img = Array.from(arrayimg)
console.log(img)

lis.forEach((li) => {
    li.addEventListener("click", removeActive)
    li.addEventListener("click", mangeImg)


function removeActive () {
    lis.forEach((li)=> {
        li.classList.remove("active");
    })
    this.classList.add("active") 
}

function mangeImg () {
    img.forEach((img)=> {
        img.style.display ="none"
    })  
    document.querySelectorAll(this.dataset.cat).forEach((e)=> {
        e.style.display="block"
    })
}

})

// end filter 
// start counnter 
let num = document.querySelectorAll(".text .num")
let section = document.querySelector(".FACTS")
let start = false

let skills = document.querySelector("#skkil")
let pro = document.querySelectorAll(".progress-bar")

let btn = document.querySelector(".button")
let ico = document.querySelector(".button i")
console.log(ico)


window.onscroll = function() {
    if(window.scrollY >= section.offsetTop) {
        if(!start) {
            num.forEach((num) => startcount(num))
        }
        start =true
    }
    // start proregress

    if (window.scrollY >= skills.offsetTop -100) {
        pro.forEach((e) => {
            e.style.width = e.dataset.width
        })
    }
console.log(pro)
    // end proregress
    // start top 
    if (window.scrollY >= 600) {
        btn.style.display = "block"
    } else {
        btn.style.display = "none"
    }
    btn.onclick = function() {
        window.scrollTo ({
            top: 0,
            right: 0,
            behavior: "smooth"
        })
        btn.style.background = "none"
        ico.style.color = "var(--maie-color)"

    }
    console.log(btn)
    // end top 
}

function startcount (el) { 
 let gole = el.dataset.gole;
 let count = setInterval(() => {
    el.textContent++;
    if(el.textContent === gole) {
        clearInterval(count)
    }
 },10 / gole)

} 
// startcount(document.querySelectorAll(".text .num")[0])
// end counnter 
// start imgs
let imgsone = document.querySelector(".PARTNERS .imgs .one")
let change1 = [
    "img/4.png",
    "img/5.png",
    "img/6.png"
]
function changeimg(imgs,change1) {
    setInterval(function() {
     let newimg = Math.floor(Math.random() * change1.length);
     imgsone.src = change1[newimg];     
    },2000)
}
changeimg(imgsone,change1)

let imgstwo = document.querySelector(".PARTNERS .imgs .two")
let change2 = [
    "img/6.png",
    "img/4.png",
    "img/5.png",
]
function changeimg(imgstwo,change2) {
    setInterval(function() {
     let newimg = Math.floor(Math.random() * change2.length);
     imgstwo.src = change2[newimg];     
    },3000)
}
changeimg(imgstwo,change2)

let imgsthree = document.querySelector(".PARTNERS .imgs .three")
let change3 = [
    "img/5.png",
    "img/4.png",
    "img/6.png",
]
function changeimg(imgsthree,change3) {
    setInterval(function() {
     let newimg = Math.floor(Math.random() * change3.length);
     imgsthree.src = change3[newimg];     
    },4000)
}
changeimg(imgsthree,change3)

// end imgs
// start top 


// end top 