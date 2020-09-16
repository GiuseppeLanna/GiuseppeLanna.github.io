var time = 0;
var mega;
var heavy;

function tick()
{
    time++;
    var heavyCounter = time + 25;
    var megaCounter = time + 35;
    heavy.innerHTML = parseInt(heavyCounter / 60) + ":" + heavyCounter % 60;
    mega.innerHTML = parseInt(megaCounter / 60) + ":" + megaCounter % 60;
}
function body_load()
{
    var delay = parseInt(prompt("Escolha o tempo a ser esperado antes que o cronômetro inicie.", "5"))
    time = -delay;

    var heavyCounter = time + 25;
    var megaCounter = time + 35;
    mega = document.getElementById("mega");
    heavy = document.getElementById("heavy");
    heavy.innerHTML = parseInt(heavyCounter / 60) + ":" + heavyCounter % 60;
    mega.innerHTML = parseInt(megaCounter / 60) + ":" + megaCounter % 60;
    setInterval(() => tick(), 1000);
}