function filterData() { 
  event.preventDefault();
  var startdate = documant.getElementById("startdate").value;
  var enddate = documant.getElementById("enddate").value;
  console.log("Starting date: " + startdate);
  console.log("Ending date: " + enddate);
  fetch("https://compute.samford.edu/zohauth/clients/data");
}

// Fetch data from the URL and populate the table
fetch('https://compute.samford.edu/zohauth/clients/datajson')
  .then(response => response.json())  // Parse the JSON response
  .then(data => {
    const tableBody = document.querySelector('#data-table tbody');
    tableBody.innerHTML = ''; // Clear any existing rows

    // Loop through the fetched data and create rows for each entry
    data.forEach(item => {
      const row = document.createElement('tr');
      
      // Create ID link
      const idCell = document.createElement('td');
      const link = document.createElement('a');
      link.href = `details.html?id=${item.id}`;  // Assuming "id" is a unique identifier
      link.textContent = `Pitch ${item.id}`;
      idCell.appendChild(link);
      row.appendChild(idCell);

      // Speed cell
      const speedCell = document.createElement('td');
      speedCell.textContent = item.speed || '--'; // Default to '--' if no speed
      row.appendChild(speedCell);

      // Result cell
      const resultCell = document.createElement('td');
      resultCell.textContent = item.result || '--'; // Default to '--' if no result
      row.appendChild(resultCell);

      // Datetime cell
      const datetimeCell = document.createElement('td');
      datetimeCell.textContent = item.datetime || '--'; // Default to '--' if no datetime
      row.appendChild(datetimeCell);

      // Append the row to the table body
      tableBody.appendChild(row);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    const tableBody = document.querySelector('#data-table tbody');
    const errorRow = document.createElement('tr');
    const errorCell = document.createElement('td');
    errorCell.colSpan = 4;
    errorCell.textContent = 'Failed to load data.';
    errorRow.appendChild(errorCell);
    tableBody.appendChild(errorRow);
  });