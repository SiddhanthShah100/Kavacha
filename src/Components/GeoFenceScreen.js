// import React, { useEffect, useState } from 'react';
// import { MapContainer, TileLayer, Marker, CircleMarker } from 'react-leaflet';
// import axios from 'axios';

// const GeoFenceScreen = ({ apiKey }) => {
//     const [unsafeLocations, setUnsafeLocations] = useState([]);
//     const [mapRendered, setMapRendered] = useState(false);

//     useEffect(() => {
//         if (!mapRendered) {
//             const fetchData = async () => {
//                 try {
//                     const response = await axios.get(
//                         'https://docs.google.com/spreadsheets/d/1OpJE1U1XqYu4jwvSi0j8GGH9b9dwsJDxQ9OeIcYpMiI/gviz/tq?tqx=out:json&sheet=Sheet1'
//                     );

//                     const data = JSON.parse(response.data.substr(47).slice(0, -2));

//                     const locations = data.table.rows.map((row) => {
//                         const latitude = parseFloat(row.c[0].v);
//                         const longitude = parseFloat(row.c[1].v);
//                         const range = parseFloat(row.c[2].v);

//                         return { latitude, longitude, range };
//                     });

//                     setUnsafeLocations(locations);
//                     setMapRendered(true);
//                 } catch (error) {
//                     console.log('Error fetching data:', error);
//                 }
//             };

//             fetchData();
//         }
//     }, [mapRendered]);

//     return mapRendered && unsafeLocations.length ? (
//         <div className="map-container" style={{ height: '500px', width: '100%', margin: '0 auto', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
//             <MapContainer center={[0, 0]} zoom={13} style={{ height: '100%', width: '100%' }}>
//                 <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

//                 {unsafeLocations.map((location, index) => (
//                     <React.Fragment key={index}>
//                         <Marker position={[location.latitude, location.longitude]} />
//                         <CircleMarker
//                             center={[location.latitude, location.longitude]}
//                             radius={location.range}
//                             pathOptions={{
//                                 color: 'red',
//                                 fillColor: 'rgba(255, 0, 0, 0.2)',
//                                 fillOpacity: 1,
//                                 stroke: true,
//                                 weight: 2,
//                             }}
//                         />
//                     </React.Fragment>
//                 ))}
//             </MapContainer>
//         </div>
//     ) : null;
// };

// export default GeoFenceScreen;
