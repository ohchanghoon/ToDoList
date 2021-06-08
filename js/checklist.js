'use strict';

let itemList = []; // 준비물 담을 배열 (입력받기 위해 빈 배열)
const addBtn = document.querySelector('#add'); // 버튼을 변수 할당

function addList() {
  let item = document.querySelector('#item').value; // 사용자가 값 입력하는 곳

  if (item != null) {
    itemList.push(item);
    document.querySelector('#item').value = ''; // 텍스트필드 비우기
    document.querySelector('#item').focus(); // 텍스트필드에 focus() 함수 적용
  }
  showList();
}

function showList() {
  let list = '<ul>';
  for (let i = 0; i < itemList.length; i++) {
    list +=
      '<li>' + itemList[i] + "<span class='close' id=" + i + '>X</sapn></li>';
  }
  list += '</ul>';
  document.querySelector('#itemList').innerHTML = list;

  let remove = document.querySelectorAll('.close');
  for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener('click', removeList);
  }
}

function removeList() {
  let id = this.getAttribute('id');
  itemList.splice(id, 1);
  showList();
}

addBtn.addEventListener('click', addList);
