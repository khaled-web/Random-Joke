const mainBtn = document.getElementById('mainBtn');
const result = document.getElementById('result');
const mainImg = document.getElementById('img');

mainBtn.addEventListener('click', function () {
  const ajax = new XMLHttpRequest();
  const url = "https://api.chucknorris.io/jokes/random";

  ajax.open('GET', url, true);

  ajax.onload = function () {
    if (this.status === 200) {
      const data = JSON.parse(this.responseText);
      console.log(data)
      const {
        icon_url: img,
        value: joke
      } = data;
      result.textContent = joke;
      mainImg.src = img;
    }
  }


  ajax.onerror = function () {
    console.log('there are an error');
  }

  ajax.send();
});