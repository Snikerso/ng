import React, {useRef} from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  background-color:red;
  width:500px;
  height:300px;
`

function LiveStreamMenager() {

    let videoRef = useRef(null)


    function stopCapture() {
        let tracks = videoRef.current.srcObject.getTracks();
      
        tracks.forEach(track => track.stop());
        videoRef.current.srcObject = null;
      }
  
  
    async function startCapture() {
        videoRef.current.srcObject = null
      let displayMediaOptions = {
        video: {
          cursor: "always"
        },
        audio: false
      };
      try {
        videoRef.current.srcObject= await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
  
      } catch(err) {
        console.error("Error: " + err);
      }
    
    
    }
  
  
    return (
      <StyledWrapper>
        <video style={{border: '1px solid #999' ,width: '300px' ,maxWidth: '860px'}} ref={videoRef}  autoPlay></video>
        <button onClick={startCapture}>Start</button>
        <button onClick={stopCapture}>Stop</button>
      </StyledWrapper>
    );
  }

export default LiveStreamMenager;
