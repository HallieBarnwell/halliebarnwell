function downloadData() { 
  event.preventDefault();
  var startdate = documant.getElementById("startdate").value;
  var enddate = documant.getElementById("enddate").value;
  console.log("Starting date: " + startdate);
  console.log("Ending date: " + enddate);
  fetch("https://compute.samford.edu/zohauth/clients/data");
}
