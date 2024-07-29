/*DESAFÍO:  hacer un timer que muestre en pantalla una cuenta del 1 al 10 mediante el uso de un bucle for. Una vez realizado el timer, verificar qué sucede si en lugar de utilizar let para declarar el iterador del bucle se utiliza var. Intentar corregir dicho comportamiento observado. */


function timer (){
    for (var i = 1; i <= 10; i++) {
        console.log(i)
      }
}

timer()
