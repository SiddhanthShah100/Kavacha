import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import './Download.css';
import Screen1 from '../../Images/downloads/Screen1.png';
import Screen2 from '../../Images/downloads/Screen2.png';
import Screen4 from '../../Images/downloads/Screen4.png';
import Screen5 from '../../Images/downloads/Screen5.png';

const Downloads = () => {
  
  const handleDownloadClick = () => {
    // Replace 'your-apk-file.apk' with the actual file name and path
    const apkFileUrl = '../app-release.apk';

    // Create a temporary anchor element to initiate the download
    const downloadLink = document.createElement('a');
    downloadLink.href = apkFileUrl;
    downloadLink.download = 'suraksha.apk'; // Set the desired file name
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
          <img src={Screen2} alt={Screen2} className='Screen1' />
          <div className='word2'>Know Your Rights: <br /> Legal Empowerment  <p className='p00'>Navigate through legal essentials and empower yourself with knowledge and resources.</p></div>
        </div>
      </div>

      <div className='p2'>
        <div className='part1 d-flex'>
          <div className='word1'>Secure Boundaries:<br />  Your Safe Zones <p className='p0'>Create virtual safety perimeters by looking as well as marking unsafe zones and <br /> stay protected with real-time alerts.</p></div>
          <img src={Screen4} alt={Screen4} className='Screen1' />
        </div>
      </div>

      <div className='p2'>
        <div className='part2 d-flex'>
          <img src={Screen5} alt={Screen5} className='Screen1' />
          <div className='word2'>Global Connection: <br /> Language Options  <p className='p00'>Bridge language barriers and connect worldwide with our diverse language choices.</p></div>
        </div>
      </div>
    </>
      <div className='pp'>
        <div class='ww'>And Many more Features..</div>
        <button class="download-button" onClick={handleDownloadClick}>Download Now</button>
      </div>

    </>

  )
};

export default Downloads;