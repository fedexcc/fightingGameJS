var Personaje = {
    nombre: 'Mago',
    nivel: 10,
    vida: 100,
    vidaActual: 100,
    ataques: [
        {
            nombre: 'Bola de fuego',
            poderAtaque: 15
        },
        {
            nombre: 'Rayo',
            poderAtaque: 25
        }
    ],
    atacar: function (personajeAAtacar, nombreAtaque) {
        //Me fijo si nombreAtaque es igual a alguno de los nombres de mis ataques.
        // Por cada ataque reviso si es correcto sino dar aviso de que no coinciden
        for (var i = 0; i < this.ataques.length; i++) {
            // Reduzco la variable del plural al singular
            var ataque = this.ataques[i];
            console.log(Personaje.nombre + ' ha usado ' + ataque.nombre);
            // Me fijo si el nombreAtaque es igual
            // al nombre de ataque de cada iteracion sino doy aviso de error
            if (nombreAtaque == ataque.nombre && personajeAAtacar.vidaActual > 0) {
                console.log('Realizando ' + ataque.nombre)

                personajeAAtacar.vidaActual -= ataque.poderAtaque // Reducir vida del rival.
                Personaje.vidaActual -= Rival.ataques[0].poderAtaque // Tambien recibo daño al atacar. Reducir vida mia.

                console.log('La vida de ' + personajeAAtacar.nombre + ' es de ' + personajeAAtacar.vidaActual)
                break;

            } else {
                //console.log('No seleccionaste ' + ataque.nombre + ', probá con otro ataque.') **PROBAR CON LA LINEA DE ABAJO**//
                alert('Derrotaste a ' + Rival.nombre + '!')
                break;
            }
        }
    }
};

var Rival = {
    nombre: 'Pirata',
    nivel: 10,
    vida: 100,
    vidaActual: 100,
    ataques: [
        {
            nombre: 'patada',
            poderAtaque: 20
        },
        {
            nombre: 'piña',
            poderAtaque: 25
        }
    ],
    atacar: function (personajeAAtacar, nombreAtaque) {
        //Me fijo si nombreAtaque es igual a alguno de los nombres de mis ataques.
        // Por cada ataque reviso si es correcto sino dar aviso de que no coinciden
        for (var i = 0; i < Rival.ataques.length; i++) {
            // Reduzco la variable del plural al singular
            var ataque = this.ataques[i];
            console.log(ataque.nombre);
            // Me fijo si el nombreAtaque es igual
            // al nombre de ataque de cada iteracion sino doy aviso de error
            if (nombreAtaque == ataque.nombre) {
                console.log('Existe el ataque ' + ataque.nombre)

                personajeAAtacar.vidaActual -= ataque.poderAtaque

                console.log('La vida de ' + personajeAAtacar.nombre + ' es de ' + personajeAAtacar.vidaActual)
                break;

            } else {
                console.log('No existe el ataque ' + ataque.nombre + ', probá con otro ataque.')
            }
        }
    }
};


//Muestra lista de ataques disponibles
// for (var i=0; i < Personaje.ataques.length; i++){
//     console.log('Los ataques del Mago son: ' + Personaje.ataques[i].nombre)
// }

//Escribir en este orden para realizar ataque:
// PERSONAJE/RIVAL.atacar(PERSONAJE/RIVAL, 'Nombre del ataque disponible')
//  Ejemplo: Rival.atacar(Personaje, 'Empujar')
//   Codigo en acción:

//Figura mensaje de vida restante del personaje que se ataco

//Funcion para bajar las barras de salud al realizar un ataque (Realizo ataque y el enemigo tambien)

let enemyLife = document.getElementById("enemyLifeID")
let myLife = document.getElementById("myLifeID")
//VIDA ACTUAL y VIDA TOTAL. Operar con variables. VIDA TOTAL BARRA AL 100% (100). VIDA ACTUAL INDICADOR ej: 75 (75%)
//100(VIDA ACTUAL) - 15(ATAQUE) = 85(NUEVA VIDA ACTUAL)
//Rival.vidaActual -= Personaje.ataques[0].poderAtaque
//var PorcentajeARestar = Number(Personaje.ataques[0].poderAtaque / Rival.vida) * Number(100);
//Rival.vida == 100% 
//console.log(PorcentajeARestar)
//console.log(Rival.vida)
//console.log(Rival.vida -= PorcentajeARestar)

// ATACAR //

function attackEnemy() {
    enemyLife.value -= Personaje.ataques[0].poderAtaque;
    myLife.value -= Rival.ataques[0].poderAtaque;

    //HEALTHBARS DE BOOTSTRAP, BORRAR EN VERSION FINAL SI NO SE USAN//
    //document.getElementById("enemyLifeID").style.width = "75%"; //Vida del personaje enemigo//
    // document.getElementById("myLifeID").style.width = "95%"; //Vida de mi personaje//
    //**FIN**HEALTHBARS DE BOOTSTRAP, BORRAR EN VERSION FINAL SI NO SE USAN//

    Personaje.atacar(Rival, 'Bola de fuego'); //Accion de ataque / Nombre del ataque //
    var combatLogUpdate = document.createElement("p");
    var combatLogUpdate2 = document.createElement("p");
   // var myAttackLog = document.createTextNode(Personaje.nombre + ' atacó con ' + Personaje.ataques[0].nombre + ' y ha causado ' + Personaje.ataques[0].poderAtaque + ' de daño! '); //
    var enemyCombatLogText = document.createTextNode(Personaje.nombre + ' ataca con ' + Personaje.ataques[0].nombre + ' y ' + Rival.nombre + ' pierde ' + Personaje.ataques[0].poderAtaque + ' puntos de vida. La vida restante del enemigo es de  ' + Rival.vidaActual + '.');
    var myCombatLogText = document.createTextNode(Rival.nombre + ' devuelve el golpe con ' + Rival.ataques[0].nombre + ' y pierdo ' + Rival.ataques[0].poderAtaque + ' puntos de vida. Mi vida restante es de ' + Personaje.vidaActual + '.');
   // combatLogUpdate.appendChild(myAttackLog); // //* REVISAR FORMATO DEL TEXTO *//
    combatLogUpdate.appendChild(enemyCombatLogText);
    combatLogUpdate2.appendChild(myCombatLogText);
    var newElement = document.getElementById("combatLog");
    newElement.appendChild(combatLogUpdate);
    newElement.appendChild(combatLogUpdate2);
}

document.getElementById("atacar").addEventListener("click", attackEnemy); //Boton de ataque en HTML / funcion de ataque //

function heal() {
    myLife.value += 10; //Curarme cierta cantidad de vida, **REVISAR QUE DE MOMENTO CURA 100%**//
    Personaje.vidaActual += 10; // Vida actual del personaje / Cantidad a curar //
    var healLogUpdate = document.createElement("p");
    var myHealthLogText = document.createTextNode('He sido curado. Mi vida ahora es de ' + Personaje.vidaActual + '.');
    healLogUpdate.appendChild(myHealthLogText);
    var newElement = document.getElementById("combatLog");
    newElement.appendChild(healLogUpdate);
}

document.getElementById("curar").addEventListener("click", heal); //Boton de curar en HTML / funcion de curar //




//Test//
//var lifeBar = document.getElementById("enemyLifeID").style.width;
//lifeBar = Number(100*100)/100;
//var testVar = Number(100*10)/100;
//console.log(document.getElementById("enemyLifeID").style.width - testVar)
//console.log(document.getElementById("enemyLifeID").style.width)