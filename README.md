# belly-button-challenge
##  Module 14 Challenge
---
 - `This repository will illustrate skills in building an interactive dashboard to explore the belly button biodiversity dataset. D3.js with be used for the interactive data visualizations in homepage`

 ---

-  Repository file structure:
    - root:
        -   index.html -Homepage
        -   README.md -Basic information about the repository
        -   static folder:
            - style.css - stylesheet for index.html
            - samples.json -Reference to the dataset being requested by the API call.
            - README Resources folder -Contains README.md picture.
            - js folder:
                - .gitkeep
                - `app.js` - main javascript using D3 library for homepage interactive data visualization.


 ---
  ### Building a web site with interactive dashboard

  - Layout
    - Dropdown menu.
    
    ![dropdown list](static/README_Resources/dropdown_menu_list.png)
    ![dropdown meny](<static/README_Resources/dropdown_menu.png>)

    - Sample's metadata display.
    ![metadata display](static/README_Resources/metadata_display.png)
    
    - Horizontal bar chart displaying the top 10 OTUs from sample selected in dropdown menu.
    ![bar chart](static/README_Resources/bar_chart.png)
        - Values for bar chart: sample_values
        - Label for the bar chart: otu_ids

             ![hovertext](static/README_Resources/hovertext.png)
             - Hovertext: otu_labels

    - Bubble chart displaying each sample
    ![bubble chart](static/README_Resources/bubble_chart.png)
        - x axis values: otu_ids
        - y axis values: sample_values
        - marker size value: sample_values
            ![hover text over bubble](static/README_Resources/hoverover_bubble.png)
            - Hovertext: otu_labels

website: [HERE]
![website page](static/README_Resources/homepage.png)




    

    
    


  

                            