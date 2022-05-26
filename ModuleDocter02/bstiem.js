var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

let menuToggle = document.querySelector('.toggle');
                let navigation = document.querySelector('.navigation')
                let khung = document.querySelector('.khung')
                menuToggle.onclick = function () {
                    menuToggle.classList.toggle('active');
                    navigation.classList.toggle('active');
                    khung.classList.toggle('active');
                }
        
                // add active class in selected list item
                let list = document.querySelectorAll('.list');
                for (let i = 0; i < list.length; i++) {
                    list[i].onclick = function () {
                        let j = 0;
                        while (j < list.length) {
                            list[j++].className = 'list';
                        }
                        list[i].className = 'list active';
                    }
                }