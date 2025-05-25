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

function hitung(operasi) {
  const a = [], b = [];
  for (let i = 0; i < ukuran; i++) {
    a[i] = [];
    b[i] = [];
    for (let j = 0; j < ukuran; j++) {
      a[i][j] = parseFloat(document.getElementById(`a${i}${j}`).value) || 0;
      b[i][j] = parseFloat(document.getElementById(`b${i}${j}`).value) || 0;
    }
  }

  let result = [];

  if (operasi === "tambah" || operasi === "kurang") {
    for (let i = 0; i < ukuran; i++) {
      result[i] = [];
      for (let j = 0; j < ukuran; j++) {
        result[i][j] = operasi === "tambah" ? a[i][j] + b[i][j] : a[i][j] - b[i][j];
      }
    }
  } else if (operasi === "kali") {
    const colsA = a[0].length, rowsA = a.length;
    const colsB = b[0].length, rowsB = b.length;

    if (colsA !== rowsB) {
      document.getElementById("hasilMatrix").innerText = "Dimensi tidak cocok untuk perkalian matriks.";
      return;
    }

    for (let i = 0; i < rowsA; i++) {
      result[i] = [];
      for (let j = 0; j < colsB; j++) {
        let sum = 0;
        for (let k = 0; k < colsA; k++) {
          sum += a[i][k] * b[k][j];
        }
        result[i][j] = sum;
      }
    }
  }

  let output = "";
  for (let i = 0; i < result.length; i++) {
    output += result[i].join("   ") + "\n";
  }

  document.getElementById("hasilMatrix").innerText = output;
}

// Inisialisasi default
renderInput();



