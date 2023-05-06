const courses = [
    {
        name:"Complete React Js course",
        price: "2.3",
    },
    {
        name:"Complete Reactcourse",
        price: "2",
    },
    {
        name:"Complete  Js course",
        price: "1.5",
    },
    {
        name:"Complete java course",
        price: "2.3",
    },
]




function generatelist() {
    const ul = document.querySelector(".list-group");
    ul.innerHTML=""
    courses.forEach((course)=> {
        const li = document.createElement("li")
        li.classList.add("list-group-item")
        
        const name = document.createTextNode(course.name)
        li.appendChild(name)
        
        const span = document.createElement("span")
        span.classList.add("float-right")

        const price = document.createTextNode("$"+ course.price)
        span.appendChild(price)

        li.appendChild(span)
        ul.appendChild(li)
    });
}
window.addEventListener("load",generatelist()) 

const button= document.querySelector(".sort-inc")
button.addEventListener("click",()=> {
    courses.sort((a,b)=> a.price - b.price)
    generatelist()
});
const buttton= document.querySelector(".sort-dec")
buttton.addEventListener("click",()=> {
    courses.sort((a,b)=> b.price - a.price)
    generatelist()
});