const cells = document.querySelectorAll('td');

// カレンダーのすべてのセルにクリックイベントを追加する
cells.forEach(cell => {
  cell.addEventListener('click', () => {
    // クリックされたセルの背景色を変更する
    cells.forEach(cell => cell.classList.remove('selected'));
    cell.classList.add('selected');
  });
});