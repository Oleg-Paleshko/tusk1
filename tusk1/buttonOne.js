var submitButton = document.getElementById('button1'); 
var select = document.getElementById('select1'); 

submitButton.addEventListener('click', async function(event) {
    
    let value = select.value;
            console.log(value);
    if(value == "one")
    {
        let styleValue = document.getElementById("tableStyleID");
        styleValue.href = "tablStyleStart.css";
    }
    else if(value == "two")
    {
        let styleValue = document.getElementById("tableStyleID");
        styleValue.href = "tablStyleZebra.css";
    }
    else if(value == "three")
    {
        let styleValue = document.getElementById("tableStyleID");
        styleValue.href = "tablStyleRadius.css";
    }
});