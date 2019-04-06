import React, {Component} from 'react';
import * as tf from '@tensorflow/tfjs';
import PredModel from './PredModel';

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
        return imgData    }   
  
 

    render(){
        console.log('check 4 - render')
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        const noImageUrl = "/static/react/no-image.png";
        let {imgData} = this.state;   //this.state;
        
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
              
                <PredModel imgData={imgData}/>   
                
            </div>
            <div></div>
        </div>
    );
}
}
export default ImageUploader;