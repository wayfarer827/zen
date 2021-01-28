function insert(num) {
    document.form.textview.value = document.form.textview.value + num;
}

function clean() {
    document.form.textview.value = ""
}

function steret() {
    let back = document.form.textview.value
    document.form.textview.value = back.substring(0, back.length - 1);
}

function equal() {
    let back = document.form.textview.value
    document.form.textview.value = eval(back)
}