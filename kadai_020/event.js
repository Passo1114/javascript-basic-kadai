
const btn = document.getElementById('btn');

const text = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理
btn.addEventListener('click', () => {
  const childList =document.createElement('li');

  childList.textContent = 'ボタンをクリックしました';

  text.appendChild(childList);

  text.textContent ='ボタンをクリックしました';

});