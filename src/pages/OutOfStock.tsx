import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AlertTriangle, Mail, Home, Bell, Loader2 } from 'lucide-react';

const OutOfStock: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { unit, formData } = location.state || {};
  const [email, setEmail] = useState(formData?.email || '');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleNotificationSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://formspree.io/f/mrbkdppe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          product: unit.name,
          model: unit.model,
          btu: unit.btu,
          message: `User wants to be notified when ${unit.name} (${unit.model}) is back in stock`,
          subject: `Stock Alert Request - ${unit.name}`,
          _replyto: email,
        }),
      });

      if (response.ok) {
        setIsSubscribed(true);
      } else {
        throw new Error('Failed to submit notification request');
      }
    } catch (err) {
      setError('Failed to sign up for notifications. Please try again.');
      console.error('Formspree submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!unit) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h2>
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-700"
          >
            Return to homepage
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen arctic-gradient flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Floating ice crystals */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-blue-300 text-2xl ice-float">❄</div>
        <div className="absolute top-32 right-20 text-blue-400 text-xl ice-float" style={{animationDelay: '1s'}}>❅</div>
        <div className="absolute bottom-40 right-10 text-blue-300 text-xl ice-float" style={{animationDelay: '0.5s'}}>❅</div>
        <div className="absolute bottom-20 left-20 text-blue-400 text-2xl ice-float" style={{animationDelay: '1.5s'}}>❄</div>
      </div>

      <div className="max-w-md w-full space-y-8 text-center relative z-10">
        <div className="frost-glass rounded-xl shadow-lg p-8 frost-border">
          <div className="flex justify-center mb-6">
            <div className="bg-orange-100 p-4 rounded-full cool-glow">
              <AlertTriangle className="h-12 w-12 text-orange-600" />
            </div>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            🔥 Heatwave Demand Alert
          </h1>
          
          <div className="frost-glass rounded-lg p-4 mb-6 ice-crystal">
            <h3 className="font-semibold text-blue-900 mb-2">❄️ {unit.name}</h3>
            <p className="text-sm text-blue-700">
              Arctic Model: {unit.model} • {unit.btu.toLocaleString()} BTU
            </p>
          </div>

          <p className="text-gray-600 mb-6">
            Due to the current heatwave, the <strong>{unit.name}</strong> is temporarily out of stock. 
            High demand for arctic relief means we're working around the clock to restock our cooling arsenal. 🧊
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleNotificationSignup} className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center justify-center space-x-2">
                  <Bell className="h-5 w-5 text-blue-600" />
                  <span>Get Priority Arctic Alert</span>
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Be first to know when this arctic unit is back in stock for next day delivery. 
                  We'll send you an instant freeze alert! ❄️
                </p>
                
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                    <p className="text-sm text-red-600">{error}</p>
                  </div>
                )}

                <div className="flex space-x-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email for arctic alerts"
                    required
                    disabled={isSubmitting}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 font-medium cool-glow disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Bell className="h-4 w-4" />
                        <span>Alert Me</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <div className="frost-glass rounded-lg p-4 mb-6 border border-green-200 cooling-wave">
              <div className="flex items-center justify-center space-x-2 text-green-800 mb-2">
                <Mail className="h-5 w-5" />
                <span className="font-semibold">❄️ You're on the priority freeze list!</span>
              </div>
              <p className="text-sm text-green-700">
                We'll send an arctic alert to <strong>{email}</strong> the moment the {unit.name} is available for next day delivery. 
                Stay cool! 🧊
              </p>
            </div>
          )}

          <div className="pt-6 border-t border-blue-100">
            <button
              onClick={() => navigate('/')}
              className="w-full frost-glass text-gray-700 py-3 px-4 rounded-lg hover:bg-blue-50 transition-all duration-300 font-medium flex items-center justify-center space-x-2 cool-hover"
            >
              <Home className="h-5 w-5" />
              <span>Browse Available Arctic Units</span>
            </button>
          </div>

          <div className="mt-6">
            <p className="text-xs text-gray-500">
              Need urgent cooling? Email us at <strong>hello@summercool.co.uk</strong> for alternative arctic solutions ❄️
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutOfStock;