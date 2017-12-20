# Ecuaciones de segundo Grado 

Para utilizar esta libreria solo debes de mandar a llamar la función que contiene la logica. 
Ejemplo: 
secondDegreeEquationResult(a,b,c);

Donde a, b y c son los numeros a evaluar.

Esta libreria evalua los posibles errores: 

1._ Si el denominador es cero, te arroja un mensaje de error
2._ Si la raiz cuadrada es negativa, te arroja un mensaje de error. 

Nota: Los resultados te los muestra en un objeto.

Ejemplos: 

// caso exitoso 
x^2 + -5x + 6 = 0 // result = { x1 = 3, x2 = 2, message = "Exit" }

// caso con una raiz cuadrada negativa 
x^2 + 2x + 2 = 0 //  result = { x1 = "No tiene Solucion", x2 = "No Tiene solucion" , message = "El radicando de la raiz es negativa" }

// caso con el denominador en cero
2x + 2 = 0 // result = {x1 = "Error", X2 = "Error", message = "Todo numero dividido entre cero es un error"}