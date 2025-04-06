import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#020817] border-t dark:border-t-gray-800 border-t-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between gap-8">
        {/* Branding & Info */}
        <div>
          <h1 className="text-2xl font-extrabold text-indigo-600 dark:text-white mb-2">
            LEARNIT
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-sm">
            LEARNIT is an ed-tech platform empowering learners through accessible, high-quality education.
          </p>
          <div className="mt-4 space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <p>Email: <a href="mailto:darjianuj8@gmail.com" className="underline">darjianuj8@gmail.com</a></p>
            <p>Phone: <a href="tel:9104602128" className="underline">9104602128</a></p>
            <p>Address: Gandhinagar, Gujarat</p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <h2 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Platform</h2>
            <ul className="space-y-1 text-gray-600 dark:text-gray-400 text-sm">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/my-learning">My Learning</Link></li>
              <li><Link to="/profile">Profile</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Support</h2>
            <ul className="space-y-1 text-gray-600 dark:text-gray-400 text-sm">
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/faq">FAQs</Link></li>
              <li><Link to="/terms">Terms of Use</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Follow Us</h2>
            <div className="flex gap-4 text-xl text-gray-600 dark:text-gray-400">
              <a href="#" className="hover:text-indigo-500"><FaTwitter /></a>
              <a href="#" className="hover:text-indigo-500"><FaInstagram /></a>
              <a href="#" className="hover:text-indigo-500"><FaLinkedin /></a>
              <a href="#" className="hover:text-indigo-500"><FaGithub /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t dark:border-t-gray-800 border-t-gray-200 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} LEARNIT. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
