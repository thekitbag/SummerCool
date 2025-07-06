import React from 'react';
import { Snowflake, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-blue-900 text-white py-12 relative overflow-hidden">
      {/* Floating ice crystals */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-10 left-10 text-blue-300 text-xl ice-float">❄</div>
        <div className="absolute top-20 right-20 text-blue-400 text-lg ice-float" style={{animationDelay: '1s'}}>❅</div>
        <div className="absolute bottom-20 left-1/4 text-blue-200 text-2xl ice-float" style={{animationDelay: '2s'}}>❄</div>
        <div className="absolute bottom-10 right-10 text-blue-300 text-lg ice-float" style={{animationDelay: '0.5s'}}>❅</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Snowflake className="h-8 w-8 text-blue-400 ice-float" />
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  SummerCool
                </span>
                <span className="text-sm text-blue-300 block leading-tight">.co.uk</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Your arctic ally against heatwaves. Professional cooling solutions 
              delivered faster than ice melts in the sun. ❄️
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-blue-300">Arctic Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>🧊 Daily Arctic Hire</li>
              <li>🚚 Next Day Ice Delivery</li>
              <li>❄️ Free Frost Collection</li>
              <li>🌡️ Heatwave Emergency Response</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-blue-300">Cool Support</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>🆘 24/7 Cooling Support</li>
              <li>📖 Arctic Setup Guide</li>
              <li>💡 Chill Tips & Tricks</li>
              <li>❓ Frequently Frozen Questions</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-blue-300">Get In Touch</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-2 frost-glass px-3 py-2 rounded-lg">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>hello@summercool.co.uk</span>
              </div>
              <div className="flex items-center space-x-2 frost-glass px-3 py-2 rounded-lg">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>Free Delivery in Southampton Area</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 SummerCool.co.uk. All rights reserved. Keeping Britain cool since the last ice age. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;