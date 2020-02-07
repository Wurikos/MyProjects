/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array,fn) {
	
	for(var i=0;i<array.length;i++){
		fn(array[i], i, array)
	}
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
	var result=[];
	
	for(var i = 0;i < array.length; i++){
		
		let newArr = fn(array[i], i, array);
		result.push(newArr); 
	}
	return 	result
}


/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */


 function reduce(array, fn, initial) {
    let i = 0;
    let result = initial || array[i++];

    while (i < array.length) {
        result = fn(result, array[i], i, array);
        i++;
    }
    return result;
}




/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
	var newArr=[]
	for(var key in obj){
		newArr.push(key.toUpperCase())
	}return newArr
} 
/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from = 0,  to = array.length) {
	const newArr = [];
	if (to < 0) {
	  to = array.length + to;
	}
	if (from < 0) {
		from = array.length + from;
	}
	for (let i = from; i < to; i++) {
	  if (array[i]) {
		newArr.push(array[i]);
	  }
	}
	return newArr;
  }

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
