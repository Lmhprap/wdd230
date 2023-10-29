//Copywrite - year

const copyYear = document.querySelector("#year");

try {
    const options = {
        year: "numeric",
    };
    copyYear.innerHTML = `${new Date().toLocaleDateString("en-Us",
    options
  )}`;
} catch (e) {
    console.log("Error with code or your browser does not support Locale");
}

let last = document.lastModified;
let date = new Date(last);
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let local = date.toLocaleDateString('en-US'.options);
let fullDate = `${local} ${hours}:${minutes}:${seconds}`;

document.getElementById('currentDate').textContent = fullDate;