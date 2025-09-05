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

      {/* Download Modal - Apple Glass Design */}
      <Dialog open={isDownloadModalOpen} onOpenChange={setIsDownloadModalOpen}>
        <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto bg-white/80 backdrop-blur-2xl border-0 shadow-2xl">
          <DialogHeader className="text-center pb-8">
            <DialogTitle className="text-3xl font-semibold text-gray-900 mb-4">
              Download Our Apps
            </DialogTitle>
            <p className="text-gray-600 text-base max-w-lg mx-auto">
              Scan the QR codes below to download our apps on your preferred platform
            </p>
          </DialogHeader>

          <div className="space-y-8">
            {/* baltek business App */}
            <div className="bg-white/40 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <Building2 className="h-6 w-6 text-gray-700 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">
                  baltek business
                </h3>
                <span className="ml-3 px-3 py-1 bg-black/10 text-gray-700 text-xs font-medium rounded-full">
                  For Employers
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* baltek iOS */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center space-x-2 mb-4">
                    <Apple className="h-5 w-5 text-gray-700" />
                    <span className="font-medium text-gray-900">iOS</span>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white/40 shadow-sm">
                    {qrCodes.baltekIos ? (
                      <img
                        src={qrCodes.baltekIos}
                        alt="baltek business iOS QR Code"
                        className="w-40 h-40"
                        data-testid="qr-baltek-ios"
                      />
                    ) : (
                      <div className="w-40 h-40 bg-gray-50/80 rounded-lg flex items-center justify-center">
                        <span className="text-sm text-gray-500">Loading...</span>
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-gray-500 text-center mt-3">
                    iPhone & iPad
                  </p>
                </div>

                {/* baltek Android */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center space-x-2 mb-4">
                    <Tablet className="h-5 w-5 text-gray-700" />
                    <span className="font-medium text-gray-900">Android</span>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white/40 shadow-sm">
                    {qrCodes.baltekAndroid ? (
                      <img
                        src={qrCodes.baltekAndroid}
                        alt="baltek business Android QR Code"
                        className="w-40 h-40"
                        data-testid="qr-baltek-android"
                      />
                    ) : (
                      <div className="w-40 h-40 bg-gray-50/80 rounded-lg flex items-center justify-center">
                        <span className="text-sm text-gray-500">Loading...</span>
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
            <div className="bg-white/40 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <UserCheck className="h-6 w-6 text-gray-700 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Asman</h3>
                <span className="ml-3 px-3 py-1 bg-black/10 text-gray-700 text-xs font-medium rounded-full">
                  For Job Seekers
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Asman iOS */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center space-x-2 mb-4">
                    <Apple className="h-5 w-5 text-gray-700" />
                    <span className="font-medium text-gray-900">iOS</span>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white/40 shadow-sm">
                    {qrCodes.asmanIos ? (
                      <img
                        src={qrCodes.asmanIos}
                        alt="Asman iOS QR Code"
                        className="w-40 h-40"
                        data-testid="qr-asman-ios"
                      />
                    ) : (
                      <div className="w-40 h-40 bg-gray-50/80 rounded-lg flex items-center justify-center">
                        <span className="text-sm text-gray-500">Loading...</span>
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-gray-500 text-center mt-3">
                    iPhone & iPad
                  </p>
                </div>

                {/* Asman Android */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center space-x-2 mb-4">
                    <Tablet className="h-5 w-5 text-gray-700" />
                    <span className="font-medium text-gray-900">Android</span>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white/40 shadow-sm">
                    {qrCodes.asmanAndroid ? (
                      <img
                        src={qrCodes.asmanAndroid}
                        alt="Asman Android QR Code"
                        className="w-40 h-40"
                        data-testid="qr-asman-android"
                      />
                    ) : (
                      <div className="w-40 h-40 bg-gray-50/80 rounded-lg flex items-center justify-center">
                        <span className="text-sm text-gray-500">Loading...</span>
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
              variant="ghost"
              onClick={() => setIsDownloadModalOpen(false)}
              className="px-6 py-2 text-gray-700 hover:bg-black/5 rounded-lg font-medium"
              data-testid="button-close-modal"
            >
              Done
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
