(function () {
  let type_r = document.getElementById("type_r");
  let table1 = document.getElementById("table1");
  let table2 = document.getElementById("table2");

  // Builds the header row of a table
  function buildHeader(table, columns) {
    const row = document.createElement("tr");
    columns.forEach(text => {
      const th = document.createElement("th");
      th.textContent = text;
      row.appendChild(th);
    });
    table.appendChild(row);
  }

  // Adds one cell to a table row
  function addCell(row, value) {
    const td = document.createElement("td");
    td.textContent = value;
    row.appendChild(td);
  }

  buildHeader(table1, ["modules", "exam1", "exam2", "exam3", "avg", "coeff", "EFM"]);
  buildHeader(table2, ["Module", "average", "coefficient", "EFM"]);

  // Fills both tables from the GRADES data
  GRADES.modules.forEach(m => {
    const row1 = document.createElement("tr");
    [m.name, m.exams[0] || "", m.exams[1] || "", m.exams[2] || "", m.avg, m.coeff, m.efm].forEach(value => addCell(row1, value));
    table1.appendChild(row1);

    const row2 = document.createElement("tr");
    [m.name, m.avg, m.coeff, m.efm].forEach(value => addCell(row2, value));
    table2.appendChild(row2);
  });

  // Final result row of table2
  const resultRow = document.createElement("tr");
  const tdResult = document.createElement("td");
  tdResult.colSpan = 2;
  tdResult.className = "result";
  tdResult.innerHTML = "Final Result: <strong>" + GRADES.finalResult.avg + "</strong>";
  const tdStatus = document.createElement("td");
  tdStatus.colSpan = 2;
  tdStatus.className = "result";
  tdStatus.innerHTML = "status : <strong>" + GRADES.finalResult.status + "</strong>";
  resultRow.appendChild(tdResult);
  resultRow.appendChild(tdStatus);
  table2.appendChild(resultRow);

  type_r.onchange = function () {
    if (this.value === "points") {
      table1.style.display = "table";
      table2.style.display = "none";
    } else {
      table2.style.display = "table";
      table1.style.display = "none";
    }
  };
})();
