
function addBooth(boothData, dst) {
  div = document.createElement('div');
  dst.appendChild(div);
  div.appendChild(document.createTextNode(boothData.name));
  table = document.createElement('table');
  div.appendChild(table);
  for (var i = 0; i < boothData.items.length; i++) {
    tr = document.createElement('tr');
    tr.appendChild(document.createTextNode(boothData.items[i].desc));
    table.appendChild(tr);
  }
}

for (var i = 0; i < food.length; i++) {
  addBooth(food[i], document.getElementById('food'));
}


