/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array,fn) {
	
	for(i=0;i<array.length;i++){
		fn(array[i], i, array)
	}
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
	
	newArr=[];
	
	for(i = 0;i < array.length; i++){
		
		 array[i] += 2
	}
	return 	newArr=array
}



// function map(array, fn) {
//     let results = []; 
//     for (let i = 0; i < array.length; i++ ) { 
//         let item = fn(array[i], i, array); 

//         results.push(item); 
//     }
//     return results; 
// }
/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
  
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
	newArr=[]
	for(key in obj){
		newArr.push(key.toUpperCase())
	}return newArr
} 
/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from, to) {
  var newArr=[];
  var counter=0;
 for(i=0;i<array.length;i++){
 if (i >from-1 && counter != to ) {
   newArr.push(array[i])
   counter ++
 }
 } return newArr
 
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
