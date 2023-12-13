function saveRecord() {
    var name = document.getElementById("name").value;
    var course = document.getElementById("course").value;
    var section = document.getElementById("section").value;

    if (name && course && section) {
        var table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];
        var newRow = table.insertRow(table.rows.length);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);

        cell1.innerHTML = name;
        cell2.innerHTML = course;
        cell3.innerHTML = section;
        cell4.innerHTML = '<button onclick="deleteRow(this)">DELETE</button>';
    } else {
        alert("Please fill in all fields before saving the record.");
    }
}

function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
