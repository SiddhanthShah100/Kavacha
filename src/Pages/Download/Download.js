import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import './Download.css';
import Screen1 from '../../Images/KAVACHA1.png';
import Screen2 from '../../Images/KAVACHA2.png';
import Screen3 from '../../Images/KAVACHA3.png';
import Screen4 from '../../Images/KAVACHA4.png';
import PlayButton from '../../Images/google-play-badge.png';
import appt from "../../Images/app-release.apk"
const Downloads = () => {
  
  const handleDownloadClick = () => {
    const apkFileUrl = appt;

    const downloadLink = document.createElement('a');
    downloadLink.href = apkFileUrl;
    downloadLink.download = 'KAVACHA';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };  
  <NavBar />
  return (
    <><><div className='p1'>
      <div className='part1 d-flex'>
        <div className='word1'>Safety SOS: <br /> Instant Help at Hand  <p className='p0'>Set up your emergency contacts and get immediate assistance in times of distress.</p></div>
        <img src={Screen1} alt={Screen1} className='Screen1' />
      </div>
    </div>

      <div className='p2'>
        <div className='part2 d-flex'>
          <img src={Screen2} alt={Screen2} className='Screen2' />
          <div className='word2'>Secure Boundaries: <br />  Your Safe Zones  <p className='p00'>Create virtual safety perimeters by looking as well as marking unsafe zones and<br /> stay protected with real-time alerts.</p></div>
        </div>
      </div>

      <div className='p2'>
        <div className='part1 d-flex'>
          <div className='word3'>Connect with like-minded individuals,<br />  share experiences<p className='p0'>and support each other in your legal journey.</p></div>
          <img src={Screen3} alt={Screen3} className='Screen3' />
        </div>
      </div>

      <div className='p2'>
        <div className='part2 d-flex'>
          <img src={Screen4} alt={Screen4} className='Screen2' />
          <div className='word2'>Global Connection: <br /> Language Options  <p className='p00'>Bridge language barriers and connect worldwide with our diverse language choices.</p></div>
        </div>
      </div>
    </>
      <div className='pp'>
        <div class='ww'>And Many more Features..</div>
        <button class="download-button" onClick={handleDownloadClick}>Download Now</button>
      </div>
      <div className='pp2'><img class="play-button" onClick={handleDownloadClick} src={PlayButton} alt={PlayButton} className='PlayButton' /></div>

    </>

  )
};

export default Downloads;
