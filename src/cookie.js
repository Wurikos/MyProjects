/*
 ДЗ 7 - Создать редактор cookie с возможностью фильтрации

 7.1: На странице должна быть таблица со списком имеющихся cookie. Таблица должна иметь следующие столбцы:
   - имя
   - значение
   - удалить (при нажатии на кнопку, выбранная cookie удаляется из браузера и таблицы)

 7.2: На странице должна быть форма для добавления новой cookie. Форма должна содержать следующие поля:
   - имя
   - значение
   - добавить (при нажатии на кнопку, в браузер и таблицу добавляется новая cookie с указанным именем и значением)

 Если добавляется cookie с именем уже существующей cookie, то ее значение в браузере и таблице должно быть обновлено

 7.3: На странице должно быть текстовое поле для фильтрации cookie
 В таблице должны быть только те cookie, в имени или значении которых, хотя бы частично, есть введенное значение
 Если в поле фильтра пусто, то должны выводиться все доступные cookie
 Если добавляемая cookie не соответсвует фильтру, то она должна быть добавлена только в браузер, но не в таблицу
 Если добавляется cookie, с именем уже существующей cookie и ее новое значение не соответствует фильтру,
 то ее значение должно быть обновлено в браузере, а из таблицы cookie должна быть удалена

 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то добавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
const homeworkContainer = document.querySelector('#homework-container');
// текстовое поле для фильтрации cookie
const filterNameInput = homeworkContainer.querySelector('#filter-name-input');
// текстовое поле с именем cookie
const addNameInput = homeworkContainer.querySelector('#add-name-input');
// текстовое поле со значением cookie
const addValueInput = homeworkContainer.querySelector('#add-value-input');
// кнопка "добавить cookie"
const addButton = homeworkContainer.querySelector('#add-button');
// таблица со списком cookie
const listTable = homeworkContainer.querySelector('#list-table tbody');


filterNameInput.addEventListener('keyup', function() {
    // здесь можно обработать нажатия на клавиши внутри текстового поля для фильтрации cookie
});

addButton.addEventListener("click", () => {
  // здесь можно обработать нажатие на кнопку "добавить cookie"

  // function getCookie() {
  //   document.cookie = `${addNameInput.value}=${addValueInput.value}`;
  //   let splitCookie = document.cookie.split("; ");
  //   let arrCookie = [];
  //   splitCookie.forEach(function(item) {
  //     let resCookie = item.split("=");
  //     arrCookie.push({ name: resCookie[0], value: resCookie[1] });
  //   });
  //   return arrCookie;
  // }
  // function renderTable(arrCookie) {
  //   let tr = document.createElement("tr");

  //   for (let item in arrCookie) {
  //     if (arrCookie.hasOwnProperty(item)) {
  //       let td = document.createElement("td");

  //       td.textContent = `${arrCookie[item]}`;
  //       tr.appendChild(td);
  //     }
  //   }
  //   let td = document.createElement('td');
  //   tr.appendChild(td);
  //   listTable.append(tr);
  // }
  
  // renderTable(getCookie());




  
//   document.cookie = `${addNameInput.value}=${addValueInput.value}`;
//   let splitCookie =  document.cookie.split('; ');
//   let arrCookie = [];
// splitCookie.forEach(function(item){
//     let resCookie = item.split('=');
//     arrCookie.push({ 'name': resCookie[0], 'value': resCookie[1] })
// }); 

// arrCookie.forEach( (element) =>{
//   let tr = document.createElement("TR")
//   listTable.append(tr)
//   let td1 = document.createElement("TD")
//   let td2 = document.createElement("TD")
//   let td3 = document.createElement("TD")
//   let btn = document.createElement('button');
//   tr.append(td1 , td2, td3)
//   td1.innerText = element.name
//   td2.innerText = element.value
//   td3.append(btn)
//   btn.innerText = 'удалить'

//   btn.addEventListener('click', (e) =>{
//     let target = e.target.closest('tr');
//     var cookie_date = new Date ( );  // Текущая дата и время
//     cookie_date.setTime ( cookie_date.getTime() - 1 );
//     document.cookie = element.name += "=; expires=" + cookie_date.toGMTString()
//     target.remove();
//   })
// }) 






});
