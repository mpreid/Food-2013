
function addBooth(boothData, dst) {
  div = document.createElement('div');
  dst.appendChild(div);

  h2 = document.createElement('h2');
  h2.appendChild(document.createTextNode(boothData.name));
  div.appendChild(h2);

  table = document.createElement('table');
  div.appendChild(table);
  for (var i = 0; i < boothData.items.length; i++) {
    tr = document.createElement('tr');

    tdStars = document.createElement('td');
    tdStars.className = "stars-uneaten";
    tr.appendChild(tdStars);
    tdStars.appendChild(document.createTextNode('\u2606\u2606\u2605'));

    tdDesc = document.createElement('td');
    tdDesc.className = "desc";
    tr.appendChild(tdDesc);
    tdDesc.appendChild(document.createTextNode(boothData.items[i].desc));

    tdNotes = document.createElement('td');
    tdNotes.className = "notes";
    tr.appendChild(tdNotes);
    if (boothData.items[i].veg) {
      tdNotes.appendChild(document.createTextNode('V'));
    }
    if (boothData.items[i].ddp) {
      tdNotes.appendChild(document.createTextNode('D'));
    }
    if (boothData.items[i].stein) {
      tdNotes.appendChild(document.createTextNode('S'));
    }

    table.appendChild(tr);
  }
}

for (var i = 0; i < food.length; i++) {
  addBooth(food[i], document.getElementById('food'));
}


