const modal = document.getElementById("modal");
let currMod = null;

const modalButtons = (function () {
    let tempButtons = document.querySelectorAll(".modal-link");
    let result = [];
    for (let btn of tempButtons) {
        let item = new Object();
        item.self = btn;
        item.target = document.getElementById(btn.getAttribute("target"));
        item.close = document.querySelector(`.close[target=${item.target.getAttribute("id")}]`)
        result.push(item);
    }
    return result;
})();

// console.table(modalButtons);

function toggleModal(modalSection) {
    modalSection.classList.toggle("hidden");
    modal.classList.toggle("hidden");
    currMod = currMod == null ? modalSection : null;
}

modalButtons.forEach(function(item) {
    for (let elm of [item.self, item.close]) {
        elm.addEventListener('click', function () {
            toggleModal(item.target);
        });
    }
});

window.addEventListener('click', function (ev) {
    if (ev.target == modal) {
        toggleModal(currMod);
    }
});