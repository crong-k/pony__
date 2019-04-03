import React, {Component} from 'react';
import * as tf from '@tensorflow/tfjs';

class ImageUploader extends Component {

    constructor(props){
        super(props);
        this.state={
            image: '', 
            imagePreviewUrl: '',
            imgData: '',
            result: '',   //for connect 1
        };
    }
    handleImageChange(e) {
        let reader = new FileReader();
        let image = e.target.files[0];        
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
        this.setState({
            imgData: this.refs.noData,   
        });
        // console.log(imgData);  // undefinded
        return this.predictFromImage(imgData);
    }
    

    predictFromImage(imgData){
        const promise = tf.loadLayersModel('tea_model02/model.json');
        promise.then(function (gt_mode) {
            const catEl = imgData;
            const img = tf.browser.fromPixels(catEl).toFloat();
            const offset = tf.scalar(225.0);
            const normalized = img.div(offset);
            console.log(normalized);
            const batched = normalized.reshape([1, 256, 256, 3]);   
            const gopred = gt_mode.predict(batched);
            let y_pred_ = gopred.toString();
            console.log("result: ", y_pred_);
            this.setState({  //for connect 2
                result: y_pred_   //for connect 3
            });
            return y_pred_
        }).catch(function (err) {
            console.error(err); // Error 출력
        });
      
    }
    
    render(){
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        const noImageUrl = "no-image.png";
        let {result} = this.state; //or connect 4
        if (imagePreviewUrl){
            $imagePreview = (
            <div>
                <p hidden className="result" ref="y_pred_">{ result }</p>  //for connect 4
                <img id="input_img" ref="noData" src={imagePreviewUrl} />  //for connect 5
            </div>);
        
        } else {
            $imagePreview = (
            <div>
                <p hidden className="result" ref="y_pred_">None</p>  //for connect 6
                <img id="no_img" ref="noData" src={noImageUrl}/>  //for connect 7
            </div>);
        }
        return(
            <div className="imagePreview">
                <input className="imageInput" type="file" onChange={(e)=> {this.handleImageChange(e); 
                    this.getImageData();}}/>
                <div>
                    {$imagePreview}
                </div>
                <div>
                </div>
            </div>
        );
    }
}
export default ImageUploader;