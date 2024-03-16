import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import './NavBarr.css';
import { useState } from 'react';
import avt from "../../Images/app-release.apk";

const NavBar =() => {
const [open, setOpen] = useState(false)
const handleDownloadClick = () => {
  // Replace 'your-apk-file.apk' with the actual file name and path
  const apkFileUrl = avt;
  // const apkFileUrl = '../../app-release.apk';

  // Create a temporary anchor element to initiate the download
  const downloadLink = document.createElement('a');
  downloadLink.href = apkFileUrl;
  downloadLink.download = 'Kavacha'
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};  
return (
  <div>
      <nav className='sticky'>
          <div className="logo">Kavacha</div>
          <ul className="nav-links" onClick={() => setOpen(!open)} style={{transform: open ? "translateX(0px)" : ""}}>
              {window.location.pathname !== "/deleteAccount" ? (
                  <>
                      <HashLink to="#home" eventKey={0}>Home</HashLink>
                      <HashLink to="#about" eventKey={3}>Contact Us</HashLink>
                      {/* <HashLink className='download-btn' to="../../app-release.apk" >Download</HashLink> */}
                      <button class="download-btn" onClick={handleDownloadClick}>Download Now</button>
                  </>
              ) : (
                  <Link to="/">Home</Link>
              )}
          </ul>
          <i onClick={() => setOpen(!open)} className="fas fa-bars Menu"></i>
      </nav>
  </div>
);

}

export default NavBar;
