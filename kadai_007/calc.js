// 変数numに0～4までのランダムな整数を代入する
const num = Math.floor(Math.random() * 16);

// 変数numの値を出力する（確認用）
console.log(num);

// 変数numを3で割って余りが0ならば、「3の倍数です」という文字列を出力する
if (num % 3 === 0) {
  console.log('3の倍数です');
}

// 変数numを5で割って余りが0ならば、「5の倍数です」という文字列を出力する
else if(num % 5 === 0) {
  console.log('5の倍数です');
}

// 変数numを3で割って余りが0かつ3で割って余りが0ならば、「3と5の倍数です」という文字列を出力する
else if(num % 3 === 0 && num % 5 === 0) {
  console.log('3と5の倍数です');
}

// それ以外 //
else{
  console.log(num)
}