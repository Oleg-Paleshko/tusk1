var f_signe = 0;
var f_dot = 0;

// валидация
function write_func(n) {
    let inp = document.getElementById('id_inp');
    let str = inp.value;
    let lengt = str.length;
    let value = str[str.length - 1];

    if (n == '.') {
        if (lengt > 0) {
            // if (!value.includes('/') || !value.includes('*') || !value.includes('+') || !value.includes('-')) {
            if (!value.includes('/')) {
                if (!value.includes('*')) {
                    if (!value.includes('+')) {
                        if (!value.includes('-')) {
                            if (f_dot == 0) {
                                inp.value = inp.value + n;
                                f_dot = 1;
                                f_signe = 1;
                            }
                        }
                    }
                }
            }
            // }
        }
    }
    else if (n == '/' || n == '*' || n == '+' || n == '-') {
        if (lengt > 0) {
            if (!value.includes('.')) {
                if (f_signe == 0) {
                    inp.value = inp.value + n;
                    f_signe = 1;
                    f_dot = 0;
                }
            }
        }
    }
    else {
        inp.value = inp.value + n;
        f_signe = 0;
    }
}

var arr_save = [];

class value_info {
    constructor(f, uns) {
        this.func = f;
        this.unsv = uns;
    }
}

// валидация удаления символа
function last_del() {
    let inp = document.getElementById('id_inp');
    str = inp.value;
    n = str[str.length - 1];
    if (n.includes('.')) {
        f_dot = 0;
        if (!n.includes('/')) {
            if (!n.includes('*')) {
                if (!n.includes('+')) {
                    if (!n.includes('-')) {
                        f_signe = 0;
                    }
                }
            }
        }
    }
    else if (n == '/' || n == '*' || n == '+' || n == '-') {
        let f = 0;
        for (i = str.length - 2; i > 0; i = i - 1) {
            if (str[i].includes('.') && i != 0) {
                f = 1;
                i = 0;
            }

            if (str[i].includes('/') && i != 0) {
                i = 0;
            }
            else if (str[i].includes('*') && i != 0) {
                i = 0;
            }
            else if (str[i].includes('+') && i != 0) {
                i = 0;
            }
            else if (str[i].includes('-') && i != 0) {
                i = 0;
            }
        }
        if (f == 0) {
            f_dot = 0;
        }
        else {
            f_dot = 1;
        }
        f_signe = 0;
    }
    else {
        let v_prv = str[str.length - 2];
        if (signed_find(v_prv)) {
            f_signe = 1;
        }
    }
    inp.value = str.substring(0, str.length - 1);
}

// очистить
function clear_function() {
    let inp = document.getElementById('id_inp');
    inp.value = '';
}

function result_function_check() {
    let idselec = document.getElementById('s1');
    let selec_count = idselec.selectedIndex;
    let ideql = document.getElementById('id_eql');
    if (selec_count == 0) {
        // приоритет
        result_function();
    }
    if (selec_count == 1) {
        // без приоритета
        result_function_inline();
    }
}

async function mesage(event) {
    const serverUrl = 'https://www.google.by/';

    try {
        let response = await fetch(serverUrl, {
            method: 'POST',
            body: JSON.stringify(arr_save)
        });

        let text = await response.text();
        console.log(text);

        alert('Регистрация успешна!');
    } catch (error) {
        console.log(error);
        alert('Сервер не отвечает.');
    }
}

function alert_f() {
    alert(localStorage.getItem('savevalue'));
}

// приоритет
function result_function() {
    let inp = document.getElementById('id_inp');
    let unsv = inp.value;
    if (unsv) { inp.value = eval(unsv) }
    let obj = new value_info(unsv, inp.value);
    arr_save.push(obj);

    localStorage.setItem('savevalue', JSON.stringify(arr_save));
}

// выбор чисел
function fun_radb() {
    clear_function();
    let rad = document.getElementsByName('r1');
    let idindex = document.getElementById('dote');
    for (let i = 0; i < rad.length; i++) {
        if (rad[i].checked) {
            if (i == 0) {
                idindex.style.display = 'block';
            }
            if (i == 1) {
                idindex.style.display = 'none';
            }
        }
    }
}

// проверка на математическую принадлежность
function signed_find(value) {
    if (value == '/') {
        return 1;
    }
    else if (value == '*') {
        return 1;
    }
    else if (value == '+') {
        return 1;
    }
    else if (value == '-') {
        return 1;
    }
    else {
        return 0;
    }
}

// без приоритета
function result_function_inline() {

    eval(unsv)

    let inp = document.getElementById('id_inp');
    let v = inp.value;
    let f = inp.value;
    let unsv = 0;

    let first_value = 0;
    let next_value = 0;

    let prev_position = 0;
    let now_position = 0;
    let next_position = 0;

    let find_dot = 0;
    let stop_flag = 0;
    let one_minus = 0;
    for (i = 0; i < v.length; i = i + 1) {

        if (v[i] == '/') {

            i++;
            one_minus = 1;

            if (prev_position == 0) {
                first_value = v.substring(prev_position, i - 1);
            }
            else {
                first_value = unsv.toString();
            }

            now_position = i;
            while (stop_flag != 1) {
                if (i >= v.length) {

                    stop_flag = 1;
                }
                else if (signed_find(v[i])) {
                    stop_flag = 1;
                }
                if (stop_flag != 1) {
                    i++;
                }
            }
            stop_flag = 0;
            next_position = i;

            next_value = v.substring(now_position, next_position);

            let result_value = first_value.toString() + '/' + next_value.toString();

            unsv = eval(result_value);

            if (i < v.length) {
                prev_position = i + 1;
            }

        }
        else if (v[i] == '*') {

            i++;
            one_minus = 1;

            if (prev_position == 0) {
                first_value = v.substring(prev_position, i - 1);
            }
            else {
                first_value = unsv.toString();
            }

            now_position = i;
            while (stop_flag != 1) {
                if (i >= v.length) {

                    stop_flag = 1;
                }
                else if (signed_find(v[i])) {
                    stop_flag = 1;
                }
                if (stop_flag != 1) {
                    i++;
                }
            }
            stop_flag = 0;
            next_position = i;

            next_value = v.substring(now_position, next_position);

            let result_value = first_value.toString() + '*' + next_value.toString();

            unsv = eval(result_value);

            if (i < v.length) {
                prev_position = i + 1;
            }

        }
        else if (v[i] == '+') {

            i++;
            one_minus = 1;

            if (prev_position == 0) {
                first_value = v.substring(prev_position, i - 1);
            }
            else {
                first_value = unsv.toString();
            }

            now_position = i;
            while (stop_flag != 1) {
                if (i >= v.length) {

                    stop_flag = 1;
                }
                else if (signed_find(v[i])) {
                    stop_flag = 1;
                }
                if (stop_flag != 1) {
                    i++;
                }
            }
            stop_flag = 0;
            next_position = i;

            next_value = v.substring(now_position, next_position);

            let result_value = first_value.toString() + '+' + next_value.toString();

            unsv = eval(result_value);

            if (i < v.length) {
                prev_position = i + 1;
            }

        }
        else if (v[i] == '-') {

            i++;
            one_minus = 1;

            if (prev_position == 0) {
                first_value = v.substring(prev_position, i - 1);
            }
            else {
                first_value = unsv.toString();
            }

            now_position = i;
            while (stop_flag != 1) {
                if (i >= v.length) {

                    stop_flag = 1;
                }
                if (signed_find(v[i])) {
                    stop_flag = 1;
                }
                if (stop_flag != 1) {
                    i++;
                }
            }
            stop_flag = 0;
            next_position = i;

            next_value = v.substring(now_position, next_position);

            let result_value = first_value.toString() + '-' + next_value.toString();

            unsv = eval(result_value);

            if (i < v.length) {
                prev_position = i + 1;
            }

        }

        if (one_minus == 1) {
            i--
        }

    }
    inp.value = unsv;
    let obj = new value_info(f, inp.value);
    arr_save.push(obj);

    localStorage.setItem('savevalue', JSON.stringify(arr_save));
}