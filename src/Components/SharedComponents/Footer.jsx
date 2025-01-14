import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-16">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-6">
        
        {/* First Column: Address, Logo, and Social Icons */}
        <div>
          <h2 className="text-blue-900 text-3xl font-bold mb-2">AptEase</h2>
          <p className="text-sm mb-4">Your reliable apartment management platform, making life easier for tenants and landlords globally.</p>
          <p className="text-xs mb-4">© 2025 AptEase. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/sk.abdur.rahman.492461" target="_blank" rel="noopener noreferrer" className="text-lg text-blue-600 p-3 bg-[#e3e2f5e5] border border-[#E6F2FE] rounded-full">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-lg text-blue-400 p-3 bg-[#e3e2f5e5] border border-[#E6F2FE] rounded-full">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/arahman-webdev/" target="_blank" rel="noopener noreferrer" className="text-lg text-blue-600 p-3 bg-[#e3e2f5e5] border border-[#E6F2FE] rounded-full">
              <FaLinkedin />
            </a>
            <a href="https://github.com/arahman-webdev" target="_blank" rel="noopener noreferrer" className="text-lg p-3 bg-[#e3e2f5e5] border border-[#E6F2FE] rounded-full">
              <FaGithub></FaGithub>
            </a>
          </div>
        </div>

        {/* Second Column: Apartment Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-blue-900">Apartment Links</h3>
          <ul>
            <li><a href="#apartments" className="text-sm hover:text-blue-400">Available Apartments</a></li>
            <li><a href="#floorplans" className="text-sm hover:text-blue-400">Floor Plans</a></li>
            <li><a href="#pricing" className="text-sm hover:text-blue-400">Pricing</a></li>
            <li><a href="#availability" className="text-sm hover:text-blue-400">Availability</a></li>
          </ul>
        </div>

        {/* Third Column: Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-blue-900">Useful Links</h3>
          <ul>
            <li><a href="#about" className="text-sm hover:text-blue-400">About Us</a></li>
            <li><a href="#contact" className="text-sm hover:text-blue-400">Contact</a></li>
            <li><a href="#privacy" className="text-sm hover:text-blue-400">Privacy Policy</a></li>
            <li><a href="#terms" className="text-sm hover:text-blue-400">Terms of Service</a></li>
          </ul>
        </div>

        {/* Fourth Column: Service Short Description */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-blue-900">Our Services</h3>
          <p className="text-sm">We offer a range of apartment management services that make renting easy for both tenants and landlords, ensuring a smooth living experience.</p>
        </div>

      </div>

      {/* Footer Bottom (Optional) */}
      <div className="bg-blue-900 text-white text-center py-4 mt-10">
        <p className="text-xs">© 2025 AptEase. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
