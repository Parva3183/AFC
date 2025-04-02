import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src="https://i.postimg.cc/05Z9DVvG/afc.png" alt="Logo" className="w-9 h-9"/>
              <span className="text-xl font-bold text-white">Alok Freight Carriers</span>
            </div>
            <p className="text-gray-400">
              A leading transport company providing comprehensive logistics solutions across India, Nepal, and Bangladesh.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { id: 'AboutUs', label: 'About Us' },
                { id: 'services', label: 'Our Fleets' },
                { id: 'Domestic', label: 'Domestic Routes' },
                { id: 'International', label: 'International Routes' },
                { id: 'tracking', label: 'Track Your Shipment' },
                { id: 'contact', label: 'Contact Us' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  314, Freeway Trade Centre, Nr Vatva Turning Narol-Aslali Road, Narol Ahmedabad, Gujarat, India-382405 
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-400">+91 9327071622</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-400 ml-8">+91 8238428721</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-400">alokfreight@yahoo.com</span>
              </li>
            </ul>
          </div>

          {/* India Map Image */}
          <div className="flex items-center justify-center">
            <img 
              src="https://i.postimg.cc/LXnQv3YQ/file-3.png" 
              alt="India Map" 
              className="max-w-full h-auto"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Alok Freight Carriers. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-orange-500 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}