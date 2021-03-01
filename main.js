updateSuccessButtons('Success');
updateErrorButtons('Fail');

function updateErrorButtons(contentText) {
    updateButtons('btn-danger', contentText);
}

function updateSuccessButtons(contentText) {
    updateButtons('btn-success', contentText);
}

function updateButtons(className, contentText) {
    let btns = document.getElementsByClassName(className);
    for (let elem in btns) {
        elem = Number.parseInt(elem)
        if (Number.isNaN(elem)) {
            continue;
        }
        btns[elem].innerHTML = contentText;
    }
}