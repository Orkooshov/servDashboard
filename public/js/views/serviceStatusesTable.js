async function loadToTableBody(dataJsonPromise, tableId) {
    let tmp = await dataJsonPromise;
    let res = await makeHtmlTableBody(tmp);
    document.getElementById(tableId).innerHTML = res;
    console.log('updated');
}

function makeHtmlTableBody(dataJsonPromise) {
    let text = '';
    for (let row in dataJsonPromise) {
        let tr = '';
        for (let col in dataJsonPromise[row]) {
            let td = '';
            if (typeof dataJsonPromise[row][col] == "boolean") {
                let button = document.createElement('button');
                let btnClasses = 'btn ';
                if (dataJsonPromise[row][col]) {
                    btnClasses += 'btn-success';
                    button.innerHTML = SERVICE_OK;
                } else {
                    btnClasses += 'btn-danger';
                    button.innerHTML = SERVICE_FAIL;
                }
                button.className = btnClasses;
                td += button.outerHTML;
                // } else if (dataJsonPromise[row][col].toString().includes('://')) {
                //     td += `<a href="${dataJsonPromise[row][col]}">link</a>`;
            } else {
                td += dataJsonPromise[row][col];
            }
            tr += insertIntoTag(td, 'td');
        }
        text += insertIntoTag(tr, 'tr');
    }
    return text;
}