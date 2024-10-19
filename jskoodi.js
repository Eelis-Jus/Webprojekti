//https://stackoverflow.com/questions/47638046/how-to-make-a-button-show-a-table-onclick
function myfunction()
{
    if (document.getElementById("projecttable").style.visibility === "hidden")
        document.getElementById("projecttable").style.visibility="visible";
    else
        document.getElementById("projecttable").style.visibility="hidden";
}

function load()
{
    if (document.getElementById("latausteksti").style.visibility === "hidden")
        document.getElementById("latausteksti").style.visibility="visible";
    else
        document.getElementById("latausteksti").style.visibility="hidden";
}

function myTimer() {
    const d = new Date();
    document.getElementById("demo").innerHTML = "Paikallinen aikasi: "+d.toLocaleTimeString();
  }

async function fetchdata(){

    try{

        const pokemoninNimi = document.getElementById("pokemoninNimi").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemoninNimi}`);

        if(!response.ok){
            throw new Error("Pokemonia ei löytynyt");
        }

        const data = await response.json();
        const pokemoninKuva = data.sprites.front_default;
        const imgElement = document.getElementById("pokemoninKuva");

        imgElement.src = pokemoninKuva;
        imgElement.style.display = "block";
    }
    catch(error){
       alert(error);
    }
}
