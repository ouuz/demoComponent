let baseMock = {
  "date": "2016-05-02",
  "name": "王小虎",
  "address": "上海市普陀区金沙江路1518弄"
}
function init(count) {
  let mock = ""
  for (let i = 0; i < count; i++) {
    mock += `      
    <div class="row">
      <p>${baseMock.date}</p>
      <p>${baseMock.name}</p>
      <p>${baseMock.address}</p>
    </div>`
  }
  tbody.innerHTML = mock;
}

let tbody = document.querySelector(".table-body");

init(50);