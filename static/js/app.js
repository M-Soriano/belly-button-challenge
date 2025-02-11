// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field
    let metadata=data.metadata;

    // Filter the metadata for the object with the desired sample number
    let meta_sample = metadata.filter(meta => meta.id == sample);

    // Use d3 to select the panel with id of `#sample-metadata`

    let panel_info =d3.select('#sample-metadata');

    // Use `.html("") to clear any existing metadata

    panel_info.html("");

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    //Understanding Object.entries : https://www.geeksforgeeks.org/javascript-object-entries-method/
    Object.entries(meta_sample).forEach(([key,value ]) => { 
      panel_info.append("kv").text(`${key}:${value}`);
    });

  });
}

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field

    let samples= data.samples;

    // Filter the samples for the object with the desired sample number

    let samples_array=samples.filter(samp => samp.id == sample);

    // Get the otu_ids, otu_labels, and sample_values

    let ids= samples_array.otu_ids;
    let labels=samples_array.otu_labels;
    let values=samples_array.sample_values;

    // Build a Bubble Chart
    let bubble_chart ={
      x:ids,
      y:values,
      mode: 'marker',
      marker:{ size:values, color:ids}
    }
    let bubble_layout={
      title: 'Bacteria Cultures Per Sample',
      xaxis: 'OTU ID '+samp.id,
      yaxis: 'Number of Bacteria'
    }

    // Render the Bubble Chart

    Plotly.newPlot('bubble',[bubble_chart],bubble_layout)


    // For the Bar Chart, map the otu_ids to a list of strings for your yticks


    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately


    // Render the Bar Chart

  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field


    // Use d3 to select the dropdown with id of `#selDataset`


    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.


    // Get the first sample from the list


    // Build charts and metadata panel with the first sample

  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected

}

// Initialize the dashboard
init();
