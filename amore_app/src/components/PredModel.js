import React, {Component} from 'react';
import * as tf from '@tensorflow/tfjs';
import DrawChart from './DrawChart';

class PredModel extends Component {
    constructor(props){
        super(props);
        this.state={
            imgData: '',
             
        };
    }         
    render(){       
        const promise = tf.loadLayersModel('/static/react/tea_model02/model.json');
        promise.then((gt_model) => {
        const catEl = this.props.imgData;
        const img = tf.browser.fromPixels(catEl).toFloat();
        const offset = tf.scalar(255.0);
        const normalized = img.div(offset);
        const batched = normalized.reshape([1, 256, 256, 3]);   
        const gopred = gt_model.predict(batched);      
        const y_pred = gopred.dataSync() ;  // strip of one_dimention
        console.log('y_pred: ', y_pred);
        this.setState({  
            predResult: y_pred
        });
    
        }).catch(function (err) {
            console.error(err); // Error 출력
        });  
    
       let {predResult} = this.state;
      
        return ( 
            <DrawChart yFromParent={predResult}/> );    
                         
            
    
        }  
    }
export default PredModel;