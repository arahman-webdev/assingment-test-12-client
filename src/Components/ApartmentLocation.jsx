import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import SharedTitle from '../SharedTitle/SharedTitle';
import { FaEnvelope, FaHome, FaPhone, FaPhoneVolume, FaVoicemail } from 'react-icons/fa';

// Configure default marker icon
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const ApartmentLocation = () => {
  const apartmentCoordinates = [23.8103, 90.4125]; // Replace with your apartment's latitude and longitude

  return (
    <section className="bg-[#ECEBF8] py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <SharedTitle title={"Find Us"}></SharedTitle>
        <p className="text-center text-gray-600 mb-10">
          Our apartment is located in a prime area with convenient access to transportation and amenities.
        </p>

        {/* Map and Details */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Map */}
          <div className="w-full md:w-3/4 h-96 z-30">
            <MapContainer
              center={apartmentCoordinates}
              zoom={15}
              scrollWheelZoom={false}
              className="h-full w-full rounded-lg shadow-xl"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={apartmentCoordinates}>
                <Popup>
                  AptEase Apartments <br /> Convenient and luxurious.
                </Popup>
              </Marker>
            </MapContainer>
          </div>

          {/* Location Details */}
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-semibold text-blue-950 mb-4">
              Our Address
            </h3>
            <p className=" mb-4 flex gap-2 items-center text-gray-600">
              <span className='text-blue-950 text-xl'><FaHome /></span>
              <span>66 Road Broklyn Street, 600
                New York, USA, Gulshan <br />
                Dhaka, Bangladesh</span>
              
            </p>
            <p className='flex gap-2 items-center mb-4 text-gray-600'><span className='text-blue-950 text-xl '><FaEnvelope></FaEnvelope></span><span>mdarahman5645@gmail.com</span></p>
            <p className='flex gap-2 items-center mb-4 text-gray-600'><span className='text-blue-950 text-xl'><FaPhone /></span><span>+8801719617907</span></p>
            <h4 className="text-lg font-semibold text-blue-950 mb-2">
              How to Get Here:
            </h4>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Nearest bus stop: Gulshan 1 (5 minutes walk)</li>
              <li>10 minutes from Hazrat Shahjalal International Airport</li>
              <li>Accessible via ride-sharing apps</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApartmentLocation;
