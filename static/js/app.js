// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field
    let metadata=data.metadata;

    // Filter the metadata for the object with the desired sample number
    let meta_sample = metadata.find(meta => meta.id == sample);

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

    let samples_array=samples.find(samp => samp.id == sample);

    // Get the otu_ids, otu_labels, and sample_values

    let ids= samples_array.otu_ids;
    let labels=samples_array.otu_labels;
    let values=samples_array.sample_values;
    

    // Build a Bubble Chart
    let bubble_chart ={
      x:ids,
      y:values,
      text:labels,
      mode: 'markers',
      marker:{ size:values,
         color:ids}
    };
    let bubble_layout={
      title: 'Bacteria Cultures Per Sample',
      //xaxis: 'OTU ID '+samp.id,
      //yaxis: 'Number of Bacteria',
      

    };

    // Render the Bubble Chart

    Plotly.newPlot('bubble',[bubble_chart],bubble_layout);

    //sorting the top 10.


    // For the Bar Chart, map the otu_ids to a list of strings for your yticks

    let yticks= ids.slice(0, 10).map(id => `OTU ${id}`).reverse();


    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately
    let bar_chart={
      x: values.slice(0,10).reverse(),
      y:yticks,
      text: labels.slice(0.10).reverse(),
      type:'bar',
      orientation:'h'//horizontal 
    };
    let bar_layout={
      title: 'Top 10 Bacteria Cultures Found',
      //xaxis: 'Number of Bacteria'
    };

    // Render the Bar Chart
    Plotly.newPlot('bar',[bar_chart],bar_layout);

  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field
    let names= data.names;

    // Use d3 to select the dropdown with id of `#selDataset`
    let dropdown=d3.select('#selDataset');

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    names.forEach(name => {
      dropdown.append('option').text(name).attr('value',name);
    });

    // Get the first sample from the list
    let default_data=names[0]

    // Build charts and metadata panel with the first sample
    buildCharts(default_data);
    buildMetadata(default_data);

  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);

}

// Initialize the dashboard
init();
