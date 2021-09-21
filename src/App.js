import React, { Component } from 'react';
import './App.css';
import Info from  './info';
import Explanation from  './explanation';
import  Media  from './media';
import LikeButton from "./components/LikeButton";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myData:{},
      theme:'light'    
    };

  }
  async componentDidMount() {
    let url = 'https://api.nasa.gov/planetary/apod?api_key=F9Xsd9hAgzVLg3abCgFgRmvZP071Ywmovv7EOlom'
    this.setState({
      myData:await this.getData(url)
    })
    console.log(this.state.myData)
  }
  getMedia() {
    const {url,hdurl,media_type} = this.state.myData
    
    if (media_type === 'video') {
      return <iframe src={url} title='media' width="100%" height="450"></iframe>
    } else if (media_type === 'image') {
      return <img style={{width:'100%',borderRadius:'5px'}} alt="foo" src={hdurl} />
    } else {
      return 'no media'
    }
  }


  async getData(url) {
    try {
        let data = await fetch(url)
        return  data.json()
    } 
    catch (error) {
      console.log(error)
    } 
  }
  


   render() {
   const {explanation,title,date,} = this.state.myData;
    return (
      <div className='light-theme-bg'>
        <div className='container' >

          <div className='headings'>
              <h1 className='topHeading'>Spacestagram</h1>
              <h2 className='subHeading'>Image-sharing from the final frontier 
              </h2>
          </div>
          <Info  title={title} date={date} />
          
          <div className="i-frame"><Media media={this.getMedia()} /></div>
            <Explanation 
            theText={explanation} >
              
              
                
              </Explanation>
              <LikeButton />


              
        </div>
      </div>
    );
  }
}
export default App;
