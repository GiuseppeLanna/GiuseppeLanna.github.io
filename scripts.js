var time = 0;
var mega;
var heavy;

function tick()
{
    time++;
    mega.innerHTML = time % 35;
    heavy.innerHTML = time % 25;
}
function load()
{
    mega = document.getElementById("mega");
    heavy = document.getElementById("heavy");
    console.log("carregou");
    setInterval(() => tick(), 1000);
}