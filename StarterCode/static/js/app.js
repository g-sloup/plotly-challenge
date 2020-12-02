

  // @TODO: Complete the following function that builds the metadata panel
  function buildMetadata(sampleID) {
    d3.json("samples.json").then((importedData) => {
      console.log(importedData);
    })
  }
  // init();
  // var data = importedData.metadata.filter(sample => sample.id)
  // Use `d3.json` to fetch the metadata for a sample
    // Use d3 to select the panel with id of `#sample-metadata`

    // Use `.html("") to clear any existing metadata

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.

    // BONUS: Build the Gauge Chart
    // buildGauge(data.WFREQ);
// 

// function buildCharts(sample) {

//   // @TODO: Use `d3.json` to fetch the sample data for the plots

//     // Create a horizontal bar chart with a dropdown menu 
//     // to display the top 10 OTUs found in that individual.
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

//     // @TODO: Build a Bubble Chart using the sample data

//     // @TODO: Build a Horizontal Bar Chart
//     // HINT: You will need to use slice() to grab the top 10 sample_values,
//     // otu_ids, and labels (10 each).
// }

// function init() {
//   // Grab a reference to the dropdown select element
//   var selector = d3.select("#selDataset");

//   // Use the list of sample names to populate the select options
//   d3.json("/names").then((sampleNames) => {
//     sampleNames.forEach((sample) => {
//       selector
//         .append("option")
//         .text(sample)
//         .property("value", sample);
//     });

//     // Use the first sample from the list to build the initial plots
//     const firstSample = sampleNames[0];
//     buildCharts(firstSample);
//     buildMetadata(firstSample);
//   });
// }

// function optionChanged(newSample) {
//   // Fetch new data each time a new sample is selected
//   buildCharts(newSample);
//   buildMetadata(newSample);
// }

// // Initialize the dashboard
// init();


// // build dropdown menus of "names"
//   // Use D3 to select the dropdown menu
//   var dropdownMenu = d3.select("#selDataset");
//   // Assign the value of the dropdown menu option to a variable
//   var dataset = dropdownMenu.property("value");

// // function buildMetadata(sample) {

// // Use d3.json() to fetch data from JSON file
// d3.json("data/samples.json").then((data) => {
//   console.log(data);


      
//     // // Sort the data array 
//     // data.sort(function(a, b) {
//     //     return parseFloat(b.sample_values) - parseFloat(a.sample_values);
//     // });

//     // Slice the first 10 objects for plotting
//     topOTU = data.slice(0, 10);

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