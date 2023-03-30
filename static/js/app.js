const url = "api/brewery_untappd_export_MD.json";

// read data from html.

d3.json(url).then(function(x) {
    console.log(x);

    for ( let i=0; i<x.length; i++){
        let b_location = x[i].brewery_location;
        console.log(b_location);
    }
    const distinctValues = [...new Set(x.map((d) => d.brewery_type))]
    
    //fill the dropdown
    for ( let i=0; i<x.length; i++){
        d3.select("#selectpicker").append("option").text(x[i].brewery_location).property("value",x[i].brewery_location )
        d3.select("#selDataset").append("option").text(distinctValues[i]).property("value",distinctValues[i])
   }
})
//    //ploting the id 940 as the initial set of plots
//    let samples=x.samples.filter(function(f){return f.id==940})
//             console.log(samples)
//         let samplesValue= samples[0].sample_values.slice(0,10).reverse()
//             console.log(samplesValue)
//         let samplesLabels= samples[0].otu_labels.slice(0,10).reverse()
//             console.log(samplesLabels)
//             //map functin is valid on array, therefore we have to pick the otu_id array
//         let samplesOtu_ids= samples[0].otu_ids.map(x=> `OTU_${x}`).slice(0,10).reverse()
//             console.log(samplesOtu_ids)

//         let trace1={
//             x:samplesValue,
//             y:samplesOtu_ids,
//             type:"bar",
//             orientation: 'h'
//         }
//         let data=[trace1];

//         Plotly.newPlot('bar',data);



//     //Bubble plot
//     let samples2=x.samples.filter(function(f){return f.id==940})
//             console.log(samples2)
//     let samplesValue2= samples2[0].sample_values
//             console.log(samplesValue2)
//     let samplesLabels2= samples2[0].otu_labels
//             console.log(samplesLabels2)
//     //map functin is valid on array, therefore we have to pick the otu_id array
//     let samplesOtu_ids2= samples2[0].otu_ids
//             console.log(samplesOtu_ids2)
    
//     //Bubble plot
//         let trace2= {
//             x: samplesOtu_ids2,
//             y: samplesValue2,
//             text: samplesLabels2,
//             mode: 'markers',
//             marker: {
//              color: samplesOtu_ids2,
//              size: samplesValue2,
//                 }
//               };
              
//             let data2 = [trace2];
              
//             let layout = {
//                 title: 'Bubble Chart',
//                 showlegend: false,
//                 height: 600,
//                 width: 1200
//               };
              
//               Plotly.newPlot('bubble', data2, layout);

//     //adding the panel info

//         let panelInfo=x.metadata.filter(f=> f.id==940)
//         console.log(panelInfo);
        
//         //clearing the demographic panel
//         d3.select(".marginclass").remove();
//         //Adding the demographic infop to the panel
//         d3.select(".panel-primary").append("p").html(`id: ${panelInfo[0].id} <br> ethnicity:  ${panelInfo[0].ethnicity} <br>
//          gender:  ${panelInfo[0].gender} <br> age:  ${panelInfo[0].age} <br>
//           location:  ${panelInfo[0].location} bbtype:  ${panelInfo[0].bbtype} <br> wfreq:  ${panelInfo[0].wfreq}`).attr("class", "marginclass");
         
//     });

// //defining a function that does the ploting

// function plots(selectedid){
//     d3.json(url).then(function(x) {
//         //bar chart
//         let samples=x.samples.filter(function(f){return f.id==selectedid})
//             console.log(samples)
//         let samplesValue= samples[0].sample_values.slice(0,10).reverse()
//             console.log(samplesValue)
//         let samplesLabels= samples[0].otu_labels.slice(0,10).reverse()
//             console.log(samplesLabels)
//             //map functin is valid on array, therefore we have to pick the otu_id array
//         let samplesOtu_ids= samples[0].otu_ids.map(x=> `OTU_${x}`).slice(0,10).reverse()
//             console.log(samplesOtu_ids)

        
//         let trace1={
//             x:samplesValue,
//             y:samplesOtu_ids,
//             type:"bar",
//             orientation: 'h'
//         }
//         let data=[trace1];

//         Plotly.newPlot('bar',data)


//         //Bubble plot
//         let samples2=x.samples.filter(function(f){return f.id==selectedid})
//             console.log(samples2)
//         let samplesValue2= samples2[0].sample_values
//             console.log(samplesValue2)
//         let samplesLabels2= samples2[0].otu_labels
//             console.log(samplesLabels2)
//             //map functin is valid on array, therefore we have to pick the otu_id array
//         let samplesOtu_ids2= samples2[0].otu_ids
//             console.log(samplesOtu_ids2)

//         //Bubble plot
//         let trace2= {
//             x: samplesOtu_ids2,
//             y: samplesValue2,
//             text: samplesLabels2,
//             mode: 'markers',
//             marker: {
//               color: samplesOtu_ids2,
//               size: samplesValue2,
//             }
//           };
          
//           let data2 = [trace2];
          
//           let layout = {
//             title: 'Bubble Chart',
//             showlegend: false,
//             height: 600,
//             width: 1200
//           };
          
//           Plotly.newPlot('bubble', data2, layout);

//           //adding the panel info

//         let panelInfo=x.metadata.filter(f=> f.id==selectedid)
//             console.log(panelInfo);
            
//             //clearing the demographic panel
//             d3.select(".marginclass").remove();
//             //Adding the demographic infop to the panel
//             d3.select(".panel-primary").append("p").html(`id: ${panelInfo[0].id} <br> ethnicity:  ${panelInfo[0].ethnicity} <br>
//             gender:  ${panelInfo[0].gender} <br> age:  ${panelInfo[0].age} <br>
//              location:  ${panelInfo[0].location} bbtype:  ${panelInfo[0].bbtype} <br> wfreq:  ${panelInfo[0].wfreq}`).attr("class", "marginclass");
             
//         });
//     }      



// //Defining the function in the html which executes once the drop downn is clicked
// function optionChanged(selectedid){
//         console.log(`item ${selectedid} selected`)
//         plots(selectedid)
        
//        }
