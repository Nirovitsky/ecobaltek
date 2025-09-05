import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Smartphone, Tablet, Building2, UserCheck, Apple } from "lucide-react";
import baltekLogo from "@assets/baltek-logo1_1757070533630.png";

export function Navigation() {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [qrCodes, setQrCodes] = useState({
    baltekIos: "",
    baltekAndroid: "",
    asmanIos: "",
    asmanAndroid: "",
  });

  useEffect(() => {
    // Generate QR codes when modal opens
    if (isDownloadModalOpen) {
      generateQRCodes();
    }
  }, [isDownloadModalOpen]);

  const generateQRCodes = async () => {
    try {
      // App Store URLs for both apps (replace with your actual app URLs)
      const baltekIosUrl =
        "https://apps.apple.com/app/baltek-business/id123456789";
      const baltekAndroidUrl =
        "https://play.google.com/store/apps/details?id=com.baltek.business";
      const asmanIosUrl = "https://apps.apple.com/app/asman/id987654321";
      const asmanAndroidUrl =
        "https://play.google.com/store/apps/details?id=com.asman.app";

      // Generate QR codes using QR Server API
      const baltekIosQr = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(baltekIosUrl)}`;
      const baltekAndroidQr = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(baltekAndroidUrl)}`;
      const asmanIosQr = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(asmanIosUrl)}`;
      const asmanAndroidQr = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(asmanAndroidUrl)}`;

      setQrCodes({
        baltekIos: baltekIosQr,
        baltekAndroid: baltekAndroidQr,
        asmanIos: asmanIosQr,
        asmanAndroid: asmanAndroidQr,
      });
    } catch (error) {
      console.error("Error generating QR codes:", error);
    }
  };

  return (
    <>
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <nav className="bg-white/70 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-lg px-12 py-3 w-[85vw]">
          <div className="flex items-center justify-between space-x-16">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src={baltekLogo} 
                alt="baltek" 
                className="h-8 w-auto mr-3"
                data-testid="logo-baltek"
              />
              <div className="text-lg font-medium text-black">baltek</div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-10">
              <a
                href="#about"
                className="text-sm text-gray-600 hover:text-black transition-colors font-medium"
                data-testid="link-home"
              >
                Home
              </a>
              <a
                href="#platforms"
                className="text-sm text-gray-600 hover:text-black transition-colors font-medium"
                data-testid="link-solutions"
              >
                Solutions
              </a>
              <a
                href="#reviews"
                className="text-sm text-gray-600 hover:text-black transition-colors font-medium"
                data-testid="link-reviews"
              >
                Reviews
              </a>
              <a
                href="#contact"
                className="text-sm text-gray-600 hover:text-black transition-colors font-medium"
                data-testid="link-contact"
              >
                Contact
              </a>
            </div>

            {/* Download Button */}
            <div className="flex items-center">
              <Button
                onClick={() => setIsDownloadModalOpen(true)}
                className="bg-black text-white hover:bg-gray-800 text-sm font-medium px-5 py-2 h-9 rounded-xl transition-colors"
                data-testid="button-download"
              >
                Download
              </Button>
            </div>
          </div>
        </nav>
      </div>

      {/* Download Modal */}
      <Dialog open={isDownloadModalOpen} onOpenChange={setIsDownloadModalOpen}>
        <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto">
          <DialogHeader className="text-center pb-6">
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">
              Download Our Apps
            </DialogTitle>
            <p className="text-gray-600 text-sm max-w-lg mx-auto">
              Scan the QR codes below to download our apps on your preferred
              platform
            </p>
          </DialogHeader>

          <div className="space-y-8">
            {/* baltek business App */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center justify-center mb-6">
                <Building2 className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">
                  baltek business
                </h3>
                <span className="ml-3 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                  For Employers
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* baltek iOS */}
                <div className="flex flex-col items-center group">
                  <div className="flex items-center space-x-2 mb-4">
                    <Apple className="h-5 w-5 text-gray-700" />
                    <span className="font-medium text-gray-900">iOS</span>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm group-hover:shadow-md transition-shadow duration-200">
                    {qrCodes.baltekIos ? (
                      <img
                        src={qrCodes.baltekIos}
                        alt="baltek business iOS QR Code"
                        className="w-40 h-40"
                        data-testid="qr-baltek-ios"
                      />
                    ) : (
                      <div className="w-40 h-40 bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-sm text-gray-500">
                          Loading...
                        </span>
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-gray-500 text-center mt-3">
                    iPhone & iPad
                  </p>
                </div>

                {/* baltek Android */}
                <div className="flex flex-col items-center group">
                  <div className="flex items-center space-x-2 mb-4">
                    <Tablet className="h-5 w-5 text-gray-700" />
                    <span className="font-medium text-gray-900">Android</span>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm group-hover:shadow-md transition-shadow duration-200">
                    {qrCodes.baltekAndroid ? (
                      <img
                        src={qrCodes.baltekAndroid}
                        alt="baltek business Android QR Code"
                        className="w-40 h-40"
                        data-testid="qr-baltek-android"
                      />
                    ) : (
                      <div className="w-40 h-40 bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-sm text-gray-500">
                          Loading...
                        </span>
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-gray-500 text-center mt-3">
                    Android devices
                  </p>
                </div>
              </div>
            </div>

            {/* Asman App */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100 shadow-sm">
              <div className="flex items-center justify-center mb-6">
                <UserCheck className="h-6 w-6 text-secondary mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Asman</h3>
                <span className="ml-3 px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full">
                  For Job Seekers
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Asman iOS */}
                <div className="flex flex-col items-center group">
                  <div className="flex items-center space-x-2 mb-4">
                    <Apple className="h-5 w-5 text-gray-700" />
                    <span className="font-medium text-gray-900">iOS</span>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm group-hover:shadow-md transition-shadow duration-200">
                    {qrCodes.asmanIos ? (
                      <img
                        src={qrCodes.asmanIos}
                        alt="Asman iOS QR Code"
                        className="w-40 h-40"
                        data-testid="qr-asman-ios"
                      />
                    ) : (
                      <div className="w-40 h-40 bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-sm text-gray-500">
                          Loading...
                        </span>
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-gray-500 text-center mt-3">
                    iPhone & iPad
                  </p>
                </div>

                {/* Asman Android */}
                <div className="flex flex-col items-center group">
                  <div className="flex items-center space-x-2 mb-4">
                    <Tablet className="h-5 w-5 text-gray-700" />
                    <span className="font-medium text-gray-900">Android</span>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm group-hover:shadow-md transition-shadow duration-200">
                    {qrCodes.asmanAndroid ? (
                      <img
                        src={qrCodes.asmanAndroid}
                        alt="Asman Android QR Code"
                        className="w-40 h-40"
                        data-testid="qr-asman-android"
                      />
                    ) : (
                      <div className="w-40 h-40 bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-sm text-gray-500">
                          Loading...
                        </span>
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-gray-500 text-center mt-3">
                    Android devices
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-8">
            <Button
              variant="outline"
              onClick={() => setIsDownloadModalOpen(false)}
              className="px-8 py-2 rounded-xl font-medium border-gray-300 hover:bg-gray-50"
              data-testid="button-close-modal"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
