function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

//To display current date 

const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);