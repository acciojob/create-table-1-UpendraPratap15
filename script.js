function insert_Row() {
    //Write your code here
 const table = document.getElementById('sampleTable');  // Node selection
  const tbody = table.getElementsByTagName('tbody')[0];  // Child traversal
  
  // 2. CREATE (new elements)
  const row = tbody.insertRow();  // DOM method creates <tr>
  const cell1 = row.insertCell(0);  // Creates <td> in row
  const cell2 = row.insertCell(1);
  
  // 3. MODIFY (update content)
  cell1.textContent = 'Row 2 cell1';  // Sets text node
  cell2.textContent = 'Row 2 cell2';
  }
