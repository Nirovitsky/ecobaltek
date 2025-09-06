import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Smartphone, Tablet, Building2, UserCheck, Apple, Menu, X } from "lucide-react";
import baltekLogo from "@assets/baltek-logo1_1757070533630.png";

export function Navigation() {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-[95vw] px-4">
        <nav className="bg-white/70 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-lg px-4 sm:px-8 lg:px-12 py-3 mx-auto max-w-6xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src={baltekLogo} 
                alt="baltek" 
                className="h-6 sm:h-8 w-auto mr-2 sm:mr-3"
                data-testid="logo-baltek"
              />
              <div className="text-base sm:text-lg font-medium text-black">baltek</div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden xl:flex items-center space-x-6 lg:space-x-8 xl:space-x-10">
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

            {/* Desktop Download Button and Mobile Menu */}
            <div className="flex items-center space-x-3">
              <Button
                onClick={() => setIsDownloadModalOpen(true)}
                className="hidden xl:flex bg-black text-white hover:bg-gray-800 text-sm font-medium px-4 lg:px-5 py-2 h-9 rounded-xl transition-colors"
                data-testid="button-download"
              >
                Download
              </Button>
              
              {/* Mobile Menu */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-2 xl:hidden"
                    data-testid="button-mobile-menu"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <SheetHeader>
                    <SheetTitle className="flex items-center">
                      <img 
                        src={baltekLogo} 
                        alt="baltek" 
                        className="h-6 w-auto mr-2"
                      />
                      <span>baltek</span>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col space-y-6 mt-8">
                    <a
                      href="#about"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg text-gray-600 hover:text-black transition-colors font-medium"
                      data-testid="mobile-link-home"
                    >
                      Home
                    </a>
                    <a
                      href="#platforms"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg text-gray-600 hover:text-black transition-colors font-medium"
                      data-testid="mobile-link-solutions"
                    >
                      Solutions
                    </a>
                    <a
                      href="#reviews"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg text-gray-600 hover:text-black transition-colors font-medium"
                      data-testid="mobile-link-reviews"
                    >
                      Reviews
                    </a>
                    <a
                      href="#contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg text-gray-600 hover:text-black transition-colors font-medium"
                      data-testid="mobile-link-contact"
                    >
                      Contact
                    </a>
                    <Button
                      onClick={() => {
                        setIsDownloadModalOpen(true);
                        setIsMobileMenuOpen(false);
                      }}
                      className="bg-black text-white hover:bg-gray-800 text-base font-medium py-3 rounded-xl transition-colors mt-4"
                      data-testid="mobile-button-download"
                    >
                      Download Apps
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </div>

      {/* Download Modal - Modern Design */}
      <Dialog open={isDownloadModalOpen} onOpenChange={setIsDownloadModalOpen}>
        <DialogContent className="max-w-5xl w-[95vw] max-h-[90vh] overflow-y-auto bg-gradient-to-br from-slate-50 via-white to-gray-50 border-0 shadow-2xl rounded-3xl">

          <div className="space-y-16">
            {/* baltek business App */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center mb-10 bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-3 rounded-2xl">
                <Building2 className="h-7 w-7 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">
                  baltek business
                </h3>
                <span className="ml-4 px-4 py-1.5 bg-blue-600 text-white text-sm font-semibold rounded-full">
                  Employers
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 justify-items-center max-w-3xl mx-auto">
                {/* baltek iOS */}
                <div className="flex flex-col items-center group">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2 bg-gray-900 rounded-xl">
                      <Apple className="h-6 w-6 text-white" />
                    </div>
                    <span className="font-bold text-gray-900 text-xl">iOS App</span>
                  </div>

                  {qrCodes.baltekIos ? (
                    <div className="p-2 bg-white rounded-2xl shadow-lg ring-1 ring-gray-200 group-hover:shadow-xl transition-shadow duration-300">
                      <img
                        src={qrCodes.baltekIos}
                        alt="baltek business iOS QR Code"
                        className="w-44 h-44 rounded-lg"
                        data-testid="qr-baltek-ios"
                      />
                    </div>
                  ) : (
                    <div className="w-48 h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-lg ring-1 ring-gray-200 flex items-center justify-center">
                      <span className="text-base text-gray-500 font-medium">Generating...</span>
                    </div>
                  )}

                  <p className="text-base text-gray-500 mt-4 font-medium">
                    iPhone & iPad
                  </p>
                </div>

                {/* baltek Android */}
                <div className="flex flex-col items-center group">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2 bg-green-600 rounded-xl">
                      <Tablet className="h-6 w-6 text-white" />
                    </div>
                    <span className="font-bold text-gray-900 text-xl">Android</span>
                  </div>

                  {qrCodes.baltekAndroid ? (
                    <div className="p-2 bg-white rounded-2xl shadow-lg ring-1 ring-gray-200 group-hover:shadow-xl transition-shadow duration-300">
                      <img
                        src={qrCodes.baltekAndroid}
                        alt="baltek business Android QR Code"
                        className="w-44 h-44 rounded-lg"
                        data-testid="qr-baltek-android"
                      />
                    </div>
                  ) : (
                    <div className="w-48 h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-lg ring-1 ring-gray-200 flex items-center justify-center">
                      <span className="text-base text-gray-500 font-medium">Generating...</span>
                    </div>
                  )}

                  <p className="text-base text-gray-500 mt-4 font-medium">
                    Android devices
                  </p>
                </div>
              </div>
            </div>

            {/* Modern Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-6 py-2 text-sm text-gray-500 font-medium rounded-full">or</span>
              </div>
            </div>

            {/* Asman App */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center mb-10 bg-gradient-to-r from-emerald-50 to-teal-50 px-6 py-3 rounded-2xl">
                <UserCheck className="h-7 w-7 text-emerald-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Asman</h3>
                <span className="ml-4 px-4 py-1.5 bg-emerald-600 text-white text-sm font-semibold rounded-full">
                  Job Seekers
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 justify-items-center max-w-3xl mx-auto">
                {/* Asman iOS */}
                <div className="flex flex-col items-center group">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2 bg-gray-900 rounded-xl">
                      <Apple className="h-6 w-6 text-white" />
                    </div>
                    <span className="font-bold text-gray-900 text-xl">iOS App</span>
                  </div>

                  {qrCodes.asmanIos ? (
                    <div className="p-2 bg-white rounded-2xl shadow-lg ring-1 ring-gray-200 group-hover:shadow-xl transition-shadow duration-300">
                      <img
                        src={qrCodes.asmanIos}
                        alt="Asman iOS QR Code"
                        className="w-44 h-44 rounded-lg"
                        data-testid="qr-asman-ios"
                      />
                    </div>
                  ) : (
                    <div className="w-48 h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-lg ring-1 ring-gray-200 flex items-center justify-center">
                      <span className="text-base text-gray-500 font-medium">Generating...</span>
                    </div>
                  )}

                  <p className="text-base text-gray-500 mt-4 font-medium">
                    iPhone & iPad
                  </p>
                </div>

                {/* Asman Android */}
                <div className="flex flex-col items-center group">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2 bg-green-600 rounded-xl">
                      <Tablet className="h-6 w-6 text-white" />
                    </div>
                    <span className="font-bold text-gray-900 text-xl">Android</span>
                  </div>

                  {qrCodes.asmanAndroid ? (
                    <div className="p-2 bg-white rounded-2xl shadow-lg ring-1 ring-gray-200 group-hover:shadow-xl transition-shadow duration-300">
                      <img
                        src={qrCodes.asmanAndroid}
                        alt="Asman Android QR Code"
                        className="w-44 h-44 rounded-lg"
                        data-testid="qr-asman-android"
                      />
                    </div>
                  ) : (
                    <div className="w-48 h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-lg ring-1 ring-gray-200 flex items-center justify-center">
                      <span className="text-base text-gray-500 font-medium">Generating...</span>
                    </div>
                  )}

                  <p className="text-base text-gray-500 mt-4 font-medium">
                    Android devices
                  </p>
                </div>
              </div>
            </div>
          </div>

        </DialogContent>
      </Dialog>
    </>
  );
}
