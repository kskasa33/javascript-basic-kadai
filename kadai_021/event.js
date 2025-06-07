// 同期処理：ボタンとテキスト要素を取得
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンをクリックしたときのイベントを設定
btn.addEventListener('click', () => {
  // 非同期処理：2秒後にテキストを変更
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
    console.log('2秒後に文字を変更しました');
  }, 2000);
});
