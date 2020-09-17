var time = 0;
var mega = 0;
var heavy = 0;

function main()
{
    var delay = parseInt(prompt("Escolha o tempo a ser esperado antes que o cronômetro inicie.", "5"));
    if (isNaN(delay))
        delay = 0;

    setTimeout(start, 1000 * delay);
    showCountdown(delay);
}

function showCountdown(t)
{
    if (t<=0)
        return;

    const show = function()
    {
        if(t==0)
            return;
        //N"ao vai ser exatamente isso que vou querer fazer.
        document.getElementById('armor').innerHTML = t;
        document.getElementById('megahealth').innerHTML = t;
    }

    show();
    
    var counter = setInterval(() => {
        if (--t == 0)
            clearInterval(counter);
        show();
    }, 1000);
}

function start()
{
    var time = 0;
    var armor = document.getElementById('armor');
    var megahealth = document.getElementById('megahealth');

    const update = function()
    {
        var armorcounter = time + 25;
        var megacounter = time + 35;
        armor.innerHTML = parseInt(armorcounter / 60) + ":" + armorcounter % 60;
        megahealth.innerHTML = parseInt(megacounter / 60) + ":" + megacounter % 60;
    }

    update();

    var counter = setInterval(() => {
        time++;
        update();
    }, 1000);
}