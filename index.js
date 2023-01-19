function send(url,content,amount) {
  let id=url.replace('https://box-freshapp.com/index.php?id=','').replace('https://boxfresh.jp/index.php?id=','').split('&')[0];
  if (!(id=='') && !(content=='') && !(amount=='') && !(isNaN(amount)) && Number(amount)>=1) {
    for (var i = 0;  i < Number(amount);  i++) {
      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://boxfresh.jp/apppage.php');
      xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
      xhr.send(`slug=${id}&content=${content}`);
    console.log('success')
    }
  } else {
    console.log('error')
  }
}
send('https://boxfresh.jp/index.php?id=example','content','100')
// urlでもidでもok.
