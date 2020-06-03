document.addEventListener('DOMContentLoaded', () => {
    //Variables
    let botonDropDown = document.getElementById('botontemas')
    let dropDown = document.getElementById('dropdown')


    botonDropDown.addEventListener('click', function(){
        dropDown.classList.toggle('d-visible');
    })


})