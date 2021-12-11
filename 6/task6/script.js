class pizza{
    constructor(value_batter, value_sous, value_ingredient, value_meat, value_countere, value_calori){
        this.batter = value_batter;
        this.sous = value_sous;
        this.ingredient = value_ingredient;
        this.meat = value_meat;
        this.countere = value_countere;
        this.calori = value_calori;
    }
    inform(){
        alert(this.batter + " - " + this.sous + " - " + this.ingredient + " - " + this.meat)
    }
    pryse()
    {
        alert("цена " + this.countere + " калории " + this.calori);
    }
}

class newpizza extends pizza{
    constructor(value_batter, value_sous, value_ingredient, value_meat, value_picle, value_wurst, value_sousage, value_cheez, value_wegetables, value_oliv, value_ingredientone, value_countere, value_calori){
        super(value_batter, value_sous, value_ingredient, value_meat, value_countere, value_calori);
        this.picle = value_picle;
        this.wurst = value_wurst;
        this.sousage = value_sousage;
        this.cheez = value_cheez;
        this.wegetables = value_wegetables;
        this.oliv = value_oliv;
        this.ingredientone = value_ingredientone;
        // this.countere = value_countere;
        // this.calori = value_calori;
    }
    inform(){
        super.inform();
        alert(this.picle + " - " + this.wurst + " - " + this.sousage + " - " + this.cheez + " - " + this.wegetables + " - " + this.oliv + " - " + this.ingredientone);
    }
    pryse()
    {
        super.pryse();
    }
}

let count = 40;
let calories = 1000;

let k1 = 50;
let k2 = 70;

function wurstf(n, m) {
    var chbox;
    chbox = document.getElementById('wurst');
    let lebel = document.getElementById('pris');
    let lbtwo = document.getElementById('fat')
    if (chbox.checked) {
        count = count + n;
        calories = calories + m;
        lebel.textContent = count;
        lbtwo.textContent = calories;
    }
    else {
        count = count - n;
        calories = calories - m;
        lebel.textContent = count;
        lbtwo.textContent = calories;
    }
}

function sousagef(n, m) {
    var chbox;
    chbox = document.getElementById('sousage');
    let lebel = document.getElementById('pris');
    let lbtwo = document.getElementById('fat')
    if (chbox.checked) {
        count = count + n;
        calories = calories + m;
        lebel.textContent = count;
        lbtwo.textContent = calories;
    }
    else {
        count = count - n;
        calories = calories - m;
        lebel.textContent = count;
        lbtwo.textContent = calories;
    }
}

function cheezf(n, m) {
    var chbox;
    chbox = document.getElementById('cheez');
    let lebel = document.getElementById('pris');
    let lbtwo = document.getElementById('fat')
    if (chbox.checked) {
        count = count + n;
        calories = calories + m;
        lebel.textContent = count;
        lbtwo.textContent = calories;
    }
    else {
        count = count - n;
        calories = calories - m;
        lebel.textContent = count;
        lbtwo.textContent = calories;
    }
}

function wegetablesf(n, m) {
    var chbox;
    chbox = document.getElementById('wegetables');
    let lebel = document.getElementById('pris');
    let lbtwo = document.getElementById('fat')
    if (chbox.checked) {
        count = count + n;
        calories = calories + m;
        lebel.textContent = count;
        lbtwo.textContent = calories;
    }
    else {
        count = count - n;
        calories = calories - m;
        lebel.textContent = count;
        lbtwo.textContent = calories;
    }
}

function olivf(n, m) {
    var chbox;
    chbox = document.getElementById('oliv');
    let lebel = document.getElementById('pris');
    let lbtwo = document.getElementById('fat')
    if (chbox.checked) {
        count = count + n;
        calories = calories + m;
        lebel.textContent = count;
        lbtwo.textContent = calories;
    }
    else {
        count = count - n;
        calories = calories - m;
        lebel.textContent = count;
        lbtwo.textContent = calories;
    }
}

function fun_radb() {
    let rad = document.getElementsByName('r1');
    let lebel = document.getElementById('pris');
    for (let i = 0; i < rad.length; i++) {
        if (rad[i].checked) {
            if (i == 0) {
                count = count - 15;
                lebel.textContent = count;
            }
            if (i == 1) {
                count = count + 15;
                lebel.textContent = count;
            }
        }
    }
}

async function mesagestandart(event) {
    const serverUrl = 'https://www.google.by/';

    let batter;
        let sous;
        let ingredient;
        let meat;
        let countere = 40;
        let calori = 1000;

        if(countere < k1)
        {
            countere = countere + (countere / 100) * 20;
        }
        else if(countere < k2)
        {
            countere = countere + (countere / 100) * 15;
        }
        else
        {
            countere = countere + (countere / 100) * 10;
        }

        let idselec = document.getElementById('s1');
    let selec_count = idselec.selectedIndex;
    if(selec_count == 0)
    {
        batter = "тонкое";
    }
    if(selec_count == 1)
    {
        batter = "толстое";
    }
    if(selec_count == 2)
    {
        batter = "слойное";
    }

    idselec = document.getElementById('s2');
    selec_count = idselec.selectedIndex;

    if(selec_count == 0)
    {
        sous = "кетчуп"
    }
    if(selec_count == 1)
    {
        sous = "майонез"
    }

    idselec = document.getElementById('s3');
    selec_count = idselec.selectedIndex;

    if(selec_count == 0)
    {
        ingredient = "горчица"
    }
    if(selec_count == 1)
    {
        ingredient = "ананасы"
    }

    idselec = document.getElementById('s4');
    selec_count = idselec.selectedIndex;

    if(selec_count == 0)
    {
        meat = "ветчина"
    }
    if(selec_count == 1)
    {
        meat = "мясо"
    }

    let objec = new pizza(batter, sous, ingredient, meat, countere, calori);
    objec.inform();
    objec.pryse();
    try {
        let response = await fetch(serverUrl, {
            method: 'POST',
            body: JSON.stringify(objec)
        });

        let text = await response.text();
        console.log(text);

        alert('Сообщение успешно.');
    } catch (error) {
        console.log(error);
        alert('Сервер не отвечает.');
    }
}

async function mesage(event) {
    const serverUrl = 'https://www.google.by/';

    let batter;
        let sous;
        let ingredient;
        let meat;
        let picle;
        let wurst;
        let sousage;
        let cheez;
        let wegetables;
        let oliv;
        let ingredientone;
        let countere = count;
        let calori = calories;

        if(countere < k1)
        {
            countere = countere + (countere / 100) * 20;
        }
        else if(countere < k2)
        {
            countere = countere + (countere / 100) * 15;
        }
        else
        {
            countere = countere + (countere / 100) * 10;
        }

        let idselec = document.getElementById('s1');
    let selec_count = idselec.selectedIndex;
    if(selec_count == 0)
    {
        batter = "тонкое";
    }
    if(selec_count == 1)
    {
        batter = "толстое";
    }
    if(selec_count == 2)
    {
        batter = "слойное";
    }

    idselec = document.getElementById('s2');
    selec_count = idselec.selectedIndex;

    if(selec_count == 0)
    {
        sous = "кетчуп"
    }
    if(selec_count == 1)
    {
        sous = "майонез"
    }

    idselec = document.getElementById('s3');
    selec_count = idselec.selectedIndex;

    if(selec_count == 0)
    {
        ingredient = "горчица"
    }
    if(selec_count == 1)
    {
        ingredient = "ананасы"
    }

    idselec = document.getElementById('s4');
    selec_count = idselec.selectedIndex;

    if(selec_count == 0)
    {
        meat = "ветчина"
    }
    if(selec_count == 1)
    {
        meat = "мясо"
    }

    let rad = document.getElementsByName('r1');
    for (let i = 0; i < rad.length; i++) {
        if (rad[i].checked) {
            if (i == 0) {
                picle = " - ";
            }
            if (i == 1) {
                picle = "огурец";
            }
        }
    }

    var chbox;
    chbox = document.getElementById('wurst');
    if (chbox.checked) {
        wurst = "колбасы";
    }
    else {
        wurst = " - ";
    }

    chbox = document.getElementById('sousage');
    if (chbox.checked) {
        sousage = "сосиски"
    }
    else {
        sousage = " - "
    }

    chbox = document.getElementById('cheez');
    if (chbox.checked) {
        cheez = "сыра"
    }
    else {
        cheez = " - "
    }

    chbox = document.getElementById('wegetables');
    if (chbox.checked) {
        wegetables = "овощей"
    }
    else {
        wegetables = " - "
    }

    chbox = document.getElementById('oliv');
    if (chbox.checked) {
        oliv = "олива"
    }
    else {
        oliv = " - "
    }

    idselec = document.getElementById('s5');
    selec_count = idselec.selectedIndex;

    if(selec_count == 0)
    {
        ingredientone = "маслины"
    }
    if(selec_count == 1)
    {
        ingredientone = "помидоры"
    }

    let objec = new newpizza(batter, sous, ingredient, meat, picle, wurst, sousage, cheez, wegetables, oliv, ingredientone, countere, calori);
    objec.inform();
    objec.pryse();
    try {
        let response = await fetch(serverUrl, {
            method: 'POST',
            body: JSON.stringify(objec)
        });

        let text = await response.text();
        console.log(text);

        alert('Сообщение успешно.');
    } catch (error) {
        console.log(error);
        alert('Сервер не отвечает.');
    }
}