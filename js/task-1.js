const listCategor = document.querySelectorAll('.item');
console.log('Number of categories:', listCategor.length);

listCategor.forEach(function (list) {
    console.log('Category:', list.firstElementChild.textContent);
    console.log('Elements:', list.lastElementChild.children.length);
})