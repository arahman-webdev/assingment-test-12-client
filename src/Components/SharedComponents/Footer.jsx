import React from 'react';
import { FaFacebook, FaFacebookF, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#122E50] text-white py-16">
      <div className="container mx-auto px-6 flex justify-center gap-8 ">
        {/* Newsletter Section */}
        <div className="text-center bg-[#14355E] sm:p-20 p-10  border rounded-md border-[#2C4A6E] shadow-xl w-full">
          <h3 className="sm:text-3xl text-2xl font-semibold mb-2">Subscribe Our Newsletter</h3>
          <p className="text-sm mb-4 text-[#B9C3CF]">Subscribe to receive news & updates in your inbox.</p>
          <div className="sm:flex justify-center items-center gap-2 mt-5">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full max-w-md px-4 py-4 text-black rounded-md"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:mt-0 mt-2 py-4 rounded-md w-full sm:w-44">
              Subscribe
            </button>
          </div>
        </div>

        {/* Download App Section */}

      </div>

      {/* Links Section */}
      <div className="bg-[122E50] text-[#B9C3CF] py-16">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-6">
        
        {/* First Column: Address, Logo, and Social Icons */}
        <div>
          <h2 className="text-white text-3xl font-bold mb-2">AptEase</h2>
          <p className="text-sm mb-4">Your reliable apartment management platform, making life easier for tenants and landlords globally.</p>
          <p className="text-xs mb-4">© 2025 AptEase. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/sk.abdur.rahman.492461" target="_blank" rel="noopener noreferrer" className="text-lg text-blue-600 p-3 bg-[#ffffff] border bord2C4A6E] rounded-full">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-lg text-blue-600 p-3 bg-[#ffffff] border border-[#2C4A6E] rounded-full">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/arahman-webdev/" target="_blank" rel="noopener noreferrer" className="text-lg text-blue-600 p-3 bg-[#ffffff] border border-[#2C4A6E] rounded-full">
              <FaLinkedin
              name='' />
            </a>
            <a href="https://github.com/arahman-webdev" target="_blank" rel="noopener noreferrer" className="text-lg p-3 bg-[#ffffff] text-blue-600 border border-[#2C4A6E] rounded-full">
              <FaGithub></FaGithub>
            </a>
          </div>
        </div>

        {/* Second Column: Apartment Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-white">Apartment Links</h3>
          <ul>
            <li><a href="#apartments" className="text-sm hover:text-blue-400">Available Apartments</a></li>
            <li><a href="#floorplans" className="text-sm hover:text-blue-400">Floor Plans</a></li>
            <li><a href="#pricing" className="text-sm hover:text-blue-400">Pricing</a></li>
            <li><a href="#availability" className="text-sm hover:text-blue-400">Availability</a></li>
          </ul>
        </div>

        {/* Third Column: Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-white">Useful Links</h3>
          <ul>
            <li><a href="#about" className="text-sm hover:text-blue-400">About Us</a></li>
            <li><a href="#contact" className="text-sm hover:text-blue-400">Contact</a></li>
            <li><a href="#privacy" className="text-sm hover:text-blue-400">Privacy Policy</a></li>
            <li><a href="#terms" className="text-sm hover:text-blue-400">Terms of Service</a></li>
          </ul>
        </div>

        {/* Fourth Column: Service Short Description */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-white">Our Services</h3>
          <p className="text-sm">We offer a range of apartment management services that make renting easy for both tenants and landlords, ensuring a smooth living experience.</p>
        </div>

      </div>

      {/* Footer Bottom (Optional) */}

    </div>
      {/* Footer Bottom */}
      <div className="border-t border-[#2C4A6E] mt-8 pt-4 text-center">
        <p className="text-xs">© 2025 Xhyre. All rights reserved.</p>
        <p className="text-xs mt-2">
          <a href="#privacy" className="hover:text-blue-400">Privacy</a> | <a href="#terms" className="hover:text-blue-400">Terms & Condition</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
