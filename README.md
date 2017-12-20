# Ecuaciones de segundo Grado 

*Para utilizar esta libreria solo debes de mandar a llamar la función que contiene la logica.* 
```javascript
Ejemplo: 

secondDegreeEquationResult(a,b,c);

Donde a, b y c son los numeros a evaluar.
```

### Esta libreria evalua los posibles errores: 

1. Si el denominador es cero, te arroja un mensaje de error
2. Si la raiz cuadrada es negativa, te arroja un mensaje de error. 

> Nota: Los resultados te los muestra en un objeto.

### Ejemplos: 

```javascript
// caso exitoso 
secondDegreeEquationResult(1,-5,6);
/* result = {
			  x1 = 3, 
			  x2 = 2, 
			  message = "Exit" 
			} */

// caso con una raiz cuadrada negativa 
secondDegreeEquationResult(1,2,2);
/* result = { 
			  x1 = "No tiene Solucion",
			  x2 = "No Tiene solucion" ,
			  message = "El radicando de la raiz es negativa"
			} 
*/

// caso con el denominador en cero
secondDegreeEquationResult(0,4,5);
/* result = {
			  x1 = "Error",
			  X2 = "Error",
			  message = "Todo numero dividido entre cero es un error"}
*/
```