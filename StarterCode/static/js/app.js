// Build the demographic info panel
// Use `d3.json` to fetch the metadata for a sample
  function buildMetadata(sampleID) {
    d3.json("samples.json").then((importedData) => {
      console.log(importedData);

      var metaData = importedData.metadata.filter(sample => sample.id == sampleID)[0]
      var demoPanel = d3.select("#sample-metadata")
      // Clear any existing metadata
      demoPanel.html("")
      // Add each key and value pair to the panel
      Object.entries(metaData).forEach(([key, value]) => {
        demoPanel.append("h6").text(key+": " + value)
      })

    })
  }
  buildMetadata(940)

    // BONUS: Build the Gauge Chart
    // buildGauge(data.WFREQ);

// function buildPlots(sample) {
//   d3.json("samples.json").then((importedData) => {

// @TODO: Use `d3.json` to fetch the sample data for the plots

    // @TODO: Build a Horizontal Bar Chart
    // HINT: You will need to use slice() to grab the top 10 sample_values,
    // otu_ids, and labels (10 each).
// Create a horizontal bar chart with a dropdown menu 
// to display the top 10 OTUs found in that individual.
//     var trace1 = {
//       x: data.map(row => row.sample_values),
//       y: data.map(row => row.otu_ids),
//       text: data.map(row => row.otu_labels),
//       // name: "Greek",
//       type: "bar",
//       orientation: "h"
//   };

//   var trace2 = {
//       x: data.map(row => row.sample_values),
//       y: data.map(row => row.otu_ids),
//       mode: 'markers',
//       marker: {
//         color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
//         opacity: [1, 0.8, 0.6, 0.4],
//         size: [40, 60, 80, 100]
//       }
//     };

    // @TODO: Build a Bubble Chart using the sample data

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((importedData) => {
    var subjectID = importedData.names;
    subjectID.forEach((subject) => {
      selector
        .append("option")
        .text(subject)
        .property("value", subject);
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = subjectID[0];
    buildPlots(firstSample);
    buildMetadata(firstSample);
  });
}

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildPlots(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();


      
//     // // Sort the data array 
//     // data.sort(function(a, b) {
//     //     return parseFloat(b.sample_values) - parseFloat(a.sample_values);
//     // });



//     // Reverse the array due to Plotly's defaults
//     // data = data.reverse(); 


    
//       // Initializes the page with a default plot
// function init() {


//     //   ![bar Chart](Images/hw01.png)
    
//     // 3. Create a bubble chart that displays each sample.
    
//     // * Use `otu_ids` for the x values.
    
//     // * Use `sample_values` for the y values.
    
//     // * Use `sample_values` for the marker size.
    
//     // * Use `otu_ids` for the marker colors.
    
//     // * Use `otu_labels` for the text values.
    
//     // ![Bubble Chart](Images/bubble_chart.png)
    
//     // 4. Display the sample metadata, i.e., an individual's demographic information.
    
//     // 5. Display each key-value pair from the metadata JSON object somewhere on the page.
    
//     // ![hw](Images/hw03.png)
    
//     // 6. Update all of the plots any time that a new sample is selected