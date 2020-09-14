const title = document.querySelector('h2');
const p = document.querySelectorAll('p');
const article = document.querySelector('article');

const arr = Array.from(article.children);
console.log(arr);
arr.forEach((node) => {
    node.setAttribute('style','color:red')
    console.log(node.textContent);
})
console.log(title.parentElement.parentElement);
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);
/*
const article = document.querySelector('article');

console.log(article.children);


console.log(Array.from(article.children));

Array.from(article.children).forEach(child => {
    child.classList.add('article-Element');
});
*/