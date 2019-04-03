import React, {Component} from 'react';
import { Polar } from 'react-chartjs-2';

class DrawChart extends Component {   
   static defaultProps ={
          yFromParent : [5, 10, 10, 10, 5, 10, 10, 5, 10, 10,10, 10, 10, 10, 10]
        }  
  
    render(){
        console.log("***", this.props.yFromParent);
       

        return(
            <div className = 'chart'>
            <Polar 
             data = { {
                labels: ['Pepper_Bacterial', 'Pepper_healthy', 'Potato_Early_blight',
                'Potato_Late_blight', 'Potato_healthy', 'Tomato_Bacterial',
                'Tomato_Early_blight' ,'Tomato_Late_blight' ,'Tomato_Leaf_Mold',
                'Tomato_Septoria_leaf_spot' ,'Tomato_Spider_mites_Two_spotted_spider_mite',
                'Tomato_Target_Spot' ,'Tomato_YellowLeaf_Curl_Virus' ,'Tomato_healthy',
                'Tomato_mosaic_virus'],
                datasets: [{
                    label: 'Plant Disease',
                    data: this.props.yFromParent ,              
                    backgroundColor: [
                        'rgba(27, 26, 24, 0.6)', //Bacterial
                        'rgba(39, 148, 66, 0.6)', //healthy
                        'rgba(114, 56, 1, 0.6)', //Early_blight
                        'rgba(66, 34, 4, 0.6)', //Late_blight
                        'rgba(39, 148, 66, 0.6)',//healthy
                        'rgba(27, 26, 24, 0.6)', //Bacterial
                        'rgba(114, 56, 1, 0.6)', //Early_blight
                        'rgba(66, 34, 4, 0.6)', //Late_blight
                        'rgba(211, 190, 70, 0.6)', //Leaf_Mold
                        'rgba(76, 62, 209, 0.6)', //Septoria_leaf_spot
                        'rgba(115, 113, 129, 0.6)', // Spider_mites_Two_spotted_spider_mite
                        'rgba(206, 106, 136, 0.6)', //Target_Spot
                        'rgba(245, 188, 3, 0.6)', // YellowLeaf_Curl_Virus
                        'rgba(39, 148, 66, 0.6)', // //healthy
                        'rgba(59, 12, 26, 0.6)' // mosaic_virus
                    ]    ,                    
                    borderWidth: 1
                }]
            }}
             options = {{
                 title :{
                     display: true,
                     text : 'Plant Disease Prediction',
                     fontSize : 30
                 },
                 legend:{
                     display:true,
                     position:'right'
                 }
             }}
             />  
             </div>
        ) } } 

export default DrawChart;