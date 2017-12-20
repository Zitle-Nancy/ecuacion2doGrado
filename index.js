(function() {
	function secondDegreeEquationResult(a,b,c) {
		var valueA = Number(a);
		var valueB = Number(b); 
		var valueC = Number(c);
		var radicando = Math.pow(valueB, 2) - 4 * (valueA * valueC);
		var result = {
			x1:"",
			x2:"",
			message:""
		}
		var discriminate = Math.sqrt(radicando);
		var numeratorPositive = (-1) * (valueB) + discriminate;
		var numeratorNegative = (-1) * (valueB) - discriminate;
		var denominator = (2 * valueA);
		if(radicando < 0){
			result.message = 'El resultado de la raiz cuadrada es negativa';
			result.x1 = 'No hay solución';
			result.x2 = 'No hay solución';
			return result;
		}else {
			result.message = "Exit";
			result.x1 = (numeratorPositive / denominator);
			result.x2 = (numeratorNegative / denominator);
		}
		if(valueA === 0){
			result.message = 'Todo numero dividido por cero es un error';
			result.x1 = 'Error';
			result.x2 = 'Error';
			return result;
		}else {
			result.message = "Exit";
			result.x1 = (numeratorPositive / denominator);
			result.x2 = (numeratorNegative / denominator);
		}
		return result;	
	};
	// secondDegreeEquationResult(1,-5,6);
})();