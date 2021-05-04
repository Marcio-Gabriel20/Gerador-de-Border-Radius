function gerar() {
    const border = document.querySelector('.mborda');

    var tl = document.querySelector('#top-left').value;

    var tr = document.querySelector('#top-right').value;

    var bl = document.querySelector('#bottom-left').value;

    var br = document.querySelector('#bottom-right').value;

    border.style.borderTopLeftRadius = tl + "px";
    border.style.borderTopRightRadius = tr + "px";
    border.style.borderBottomLeftRadius = bl + "px";
    border.style.borderBottomRightRadius = br + "px";
}

function zerar() {
    const zerar = document.querySelector('.reset');

    const border = document.querySelector('.mborda');

    var tl = document.querySelector('#top-left').value = "";

    var tr = document.querySelector('#top-right').value = "";

    var bl = document.querySelector('#bottom-left').value = "";

    var br = document.querySelector('#bottom-right').value = "";

    border.style.borderRadius = "0px";
}