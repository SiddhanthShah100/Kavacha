// import { HashLink } from 'react-router-hash-link';
// import './NavBarr.css';
// import { useState } from 'react';

// const NavBar =() => {
// const [open, setOpen] = useState(false)
//   return (
//     <div>
//         <nav className='sticky'>
//             <div className="logo">Suraksha</div>
//             <ul className="nav-links" onClick={() => setOpen(!open)} style={{transform: open ? "translateX(0px)" : ""}}>
//             <HashLink  to="#home" eventKey={0}>Home</HashLink>
//             <HashLink  to="#download" eventKey={1}>Download</HashLink>
//             <HashLink  to="#about" eventKey={2}>Contact Us</HashLink>
//             </ul>
//             <i onClick={() => setOpen(!open)} className="fas fa-bars Menu"></i>
//         </nav>
//     </div>
//   );
// }

// export default NavBar;



import { HashLink } from 'react-router-hash-link';
import './NavBarr.css';
import { useState } from 'react';

const NavBar =() => {
const [open, setOpen] = useState(false)
const handleDownloadClick = () => {
  // Replace 'your-apk-file.apk' with the actual file name and path
  const apkFileUrl = '../../app-release.apk';

  // Create a temporary anchor element to initiate the download
  const downloadLink = document.createElement('a');
  downloadLink.href = apkFileUrl;
  downloadLink.download = 'suraksha.apk'; // Set the desired file name
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};  
  return (
    <div>
        <nav className='sticky'>
            <div className="logo">Surakshaa</div>
            <ul className="nav-links" onClick={() => setOpen(!open)} style={{transform: open ? "translateX(0px)" : ""}}>
            <HashLink  to="#home" eventKey={0}>Home</HashLink>
            <HashLink  to="#about" eventKey={3}>Contact Us</HashLink>
            {/* <HashLink className='download-btn' to="../../app-release.apk" >Download</HashLink> */}
            <button class="download-btn" onClick={handleDownloadClick}>Download Now</button>
            </ul>
            <i onClick={() => setOpen(!open)} className="fas fa-bars Menu"></i>
        </nav>
    </div>
  );
}

export default NavBar;
