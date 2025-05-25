let ukuran = 2;

function setUkuran(u) {
  ukuran = u;
  renderInput();
  document.getElementById("hasilMatrix").innerText = "";
}

function renderInput() {
  let html = "";

  const generateMatrixHTML = (label, idPrefix) => {
    let rows = "";
    for (let i = 0; i < ukuran; i++) {
      let cols = "";
      for (let j = 0; j < ukuran; j++) {
        cols += `<div class="col-${12 / ukuran}">
          <input class="form-control" type="number" id="${idPrefix}${i}${j}" placeholder="0" />
        </div>`;
      }
      rows += `<div class="row g-2 mb-2">${cols}</div>`;
    }

    return `<div class="col-md-6 mb-4">
      <h4>Matriks ${label}</h4>${rows}
    </div>`;
  };

  html += generateMatrixHTML("A", "a");
  html += generateMatrixHTML("B", "b");

  document.getElementById("matriksInput").innerHTML = html;
}
