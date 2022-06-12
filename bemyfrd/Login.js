const name = document.getElementById('name');
 
 
const form = document.getElementById('form');
 
form.addEventListener('submit', e => {
    e.preventDefault()
    const username = name.value.trim();
    if(username === '') {
        alert("null name");
    }
});