function insert_Row() {
    const table = document.getElementById('sampleTable');
    const row = table.insertRow(0);  // Insert at FIRST position (index 0)
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    
    cell1.textContent = 'New Cell1';  // Match Cypress test expectation
    cell2.textContent = 'New Cell2';
}
