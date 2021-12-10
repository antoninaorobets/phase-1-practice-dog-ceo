console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


// document.addEventListener("DOMContentLoaded", init)
// function init(){
//     document.querySelector("#breed-dropdown").addEventListener("change", filterBreed)
// }


fetch(imgUrl)
    .then((resp) => resp.json())
    .then(data => renderImg(data))
    .catch((error) => {
        console.error('Error:', error);
    });

fetch(breedUrl).
    then((resp) => resp.json()).
    then((data) => renderBreed(data)).
    catch((error) => { console.log('error:', error) })

function renderImg(data) {
    const div = document.querySelector("#dog-image-container")
    for (const img of data.message) {
        const imgTag = document.createElement('img')
        imgTag.src = img;
        imgTag.style.width = '100px';
        div.appendChild(imgTag)
    };
}

function renderBreed(data) {
    const list = document.querySelector('#dog-breeds')
    for (const breed in data.message) {
        const listItem = document.createElement('li')
        listItem.addEventListener('click', changeColor)
        listItem.textContent = breed
        list.appendChild(listItem)
    };
    document.querySelector("#breed-dropdown").addEventListener("change", filterBreed)  
}

function changeColor(event) {
    console.log(event.target)
    event.target.style.color = "firebrick"
}

function filterBreed(event) {
    const list = document.querySelector('#dog-breeds').children
    const filterBy = event.target.value
    for (let i = 0; i < list.length; i++) {
        if (list[i].textContent[0] === filterBy) {
            list[i].style.display = "";
        }
        else {  
            list[i].style.display = "none";
        }
    }
}