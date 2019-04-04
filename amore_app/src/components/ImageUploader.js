import React, {Component} from 'react';
import * as tf from '@tensorflow/tfjs';
import DrawChart from './DrawChart';

class ImageUploader extends Component {
    constructor(props){
        super(props);
        this.state={
            image: '', 
            imagePreviewUrl: '',
            imgData: '',
            predResult: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], //for connect 
        };
    }
    handleImageChange(e) {
        let reader = new FileReader();
        let image = e.target.files[0];     
        console.log('check 1')
        reader.onloadend = () => {
            this.setState({
                image: image,
                imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(image);
    }

    getImageData() {
        let imgData = this.refs.noData;
        console.log('check 2')
        //this.predictFromImage(imgData);
        this.setState({
            imgData: this.refs.noData,   
        });
        console.log('img_info',imgData)
        this.predictFromImage(imgData);
        return imgData    }   
  
     
predictFromImage(imgData){
    console.log('check 3')
    const promise = tf.loadLayersModel('/static/react/tea_model02/model.json');
    promise.then((gt_model) => {
        const catEl = imgData;
        const img = tf.browser.fromPixels(catEl).toFloat();
        const offset = tf.scalar(225.0);
        const normalized = img.div(offset);
        const batched = normalized.reshape([1, 256, 256, 3]);   
        const gopred = gt_model.predict(batched);      
        const y_pred = gopred.dataSync() ;  // strip of one_dimention
        console.log('y_pred: ', y_pred);
        //const data = JSON.parse(result);
        this.setState({  
            predResult: y_pred
        });

    }).catch(function (err) {
        console.error(err); // Error 출력
    });    
}
    render(){
        console.log('check 4 - render')
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        const noImageUrl = "/static/react/tea_model02/no-image.png";
        let {predResult} = this.state;   //this.state;
        
        if (imagePreviewUrl){
            $imagePreview = (<img id="input_img" ref="noData" src={imagePreviewUrl} />);
    
        } else {
            $imagePreview = (<img id="no_img" ref="noData" src={noImageUrl}/>);
    
        }
        return(
            <div className="imagePreview">
                <input className="imageInput" type="file" onChange={(e)=> {this.handleImageChange(e); 
                 this.getImageData();}}/>
            <div>
                {$imagePreview}
                {console.log("before_render: ",predResult)}
                <DrawChart yFromParent={predResult}/>   
            </div>
            <div></div>
        </div>
    );
}
}
export default ImageUploader;