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

      {/* Download Modal - Modernized */}
      <Dialog open={isDownloadModalOpen} onOpenChange={setIsDownloadModalOpen}>
        <DialogContent className="max-w-5xl w-[95vw] max-h-[90vh] overflow-y-auto p-0 border-0 bg-transparent">
          {/* Backdrop with animated gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-3xl"></div>
          
          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-70"></div>
            <div className="absolute top-20 right-16 w-1 h-1 bg-pink-400 rounded-full animate-pulse opacity-60" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse opacity-50" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-32 right-12 w-1 h-1 bg-green-400 rounded-full animate-pulse opacity-60" style={{animationDelay: '0.5s'}}></div>
          </div>

          <div className="relative p-8 sm:p-12">
            <DialogHeader className="text-center pb-12">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 animate-pulse"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm p-4 rounded-full border border-white/20">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <DialogTitle className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-6">
                Download Our Apps
              </DialogTitle>
              <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
                Get the ultimate recruitment experience on your mobile device. Scan QR codes or visit app stores directly.
              </p>
            </DialogHeader>

            <div className="space-y-12">
              {/* baltek business App */}
              <div className="group">
                <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] hover:bg-white/8">
                  <div className="flex items-center justify-center mb-8">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-60 group-hover:opacity-80 transition-opacity"></div>
                      <div className="relative bg-blue-500/20 p-3 rounded-full">
                        <Building2 className="h-8 w-8 text-blue-200" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-3xl font-bold text-white mb-2">baltek business</h3>
                      <span className="px-4 py-2 bg-blue-500/20 text-blue-200 text-sm font-medium rounded-full border border-blue-400/30">
                        For Employers
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* baltek iOS */}
                    <div className="flex flex-col items-center group/item">
                      <div className="flex items-center space-x-3 mb-6">
                        <Apple className="h-6 w-6 text-white/80" />
                        <span className="font-semibold text-white text-lg">iOS</span>
                      </div>

                      <div className="relative">
                        <div className="absolute -inset-2 bg-gradient-to-r from-slate-400 to-gray-300 rounded-2xl blur opacity-30 group-hover/item:opacity-50 transition-opacity"></div>
                        <div className="relative bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-xl group-hover/item:shadow-2xl transition-all duration-300 group-hover/item:scale-105">
                          {qrCodes.baltekIos ? (
                            <img
                              src={qrCodes.baltekIos}
                              alt="baltek business iOS QR Code"
                              className="w-44 h-44 mx-auto"
                              data-testid="qr-baltek-ios"
                            />
                          ) : (
                            <div className="w-44 h-44 bg-gray-100 rounded-xl flex items-center justify-center mx-auto">
                              <div className="flex flex-col items-center">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mb-3"></div>
                                <span className="text-sm text-gray-500">Loading...</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      <p className="text-white/60 text-sm text-center mt-4 font-medium">
                        iPhone & iPad
                      </p>
                    </div>

                    {/* baltek Android */}
                    <div className="flex flex-col items-center group/item">
                      <div className="flex items-center space-x-3 mb-6">
                        <Tablet className="h-6 w-6 text-white/80" />
                        <span className="font-semibold text-white text-lg">Android</span>
                      </div>

                      <div className="relative">
                        <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-emerald-300 rounded-2xl blur opacity-30 group-hover/item:opacity-50 transition-opacity"></div>
                        <div className="relative bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-xl group-hover/item:shadow-2xl transition-all duration-300 group-hover/item:scale-105">
                          {qrCodes.baltekAndroid ? (
                            <img
                              src={qrCodes.baltekAndroid}
                              alt="baltek business Android QR Code"
                              className="w-44 h-44 mx-auto"
                              data-testid="qr-baltek-android"
                            />
                          ) : (
                            <div className="w-44 h-44 bg-gray-100 rounded-xl flex items-center justify-center mx-auto">
                              <div className="flex flex-col items-center">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500 mb-3"></div>
                                <span className="text-sm text-gray-500">Loading...</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      <p className="text-white/60 text-sm text-center mt-4 font-medium">
                        Android devices
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Asman App */}
              <div className="group">
                <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] hover:bg-white/8">
                  <div className="flex items-center justify-center mb-8">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-60 group-hover:opacity-80 transition-opacity"></div>
                      <div className="relative bg-purple-500/20 p-3 rounded-full">
                        <UserCheck className="h-8 w-8 text-purple-200" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-3xl font-bold text-white mb-2">Asman</h3>
                      <span className="px-4 py-2 bg-purple-500/20 text-purple-200 text-sm font-medium rounded-full border border-purple-400/30">
                        For Job Seekers
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Asman iOS */}
                    <div className="flex flex-col items-center group/item">
                      <div className="flex items-center space-x-3 mb-6">
                        <Apple className="h-6 w-6 text-white/80" />
                        <span className="font-semibold text-white text-lg">iOS</span>
                      </div>

                      <div className="relative">
                        <div className="absolute -inset-2 bg-gradient-to-r from-slate-400 to-gray-300 rounded-2xl blur opacity-30 group-hover/item:opacity-50 transition-opacity"></div>
                        <div className="relative bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-xl group-hover/item:shadow-2xl transition-all duration-300 group-hover/item:scale-105">
                          {qrCodes.asmanIos ? (
                            <img
                              src={qrCodes.asmanIos}
                              alt="Asman iOS QR Code"
                              className="w-44 h-44 mx-auto"
                              data-testid="qr-asman-ios"
                            />
                          ) : (
                            <div className="w-44 h-44 bg-gray-100 rounded-xl flex items-center justify-center mx-auto">
                              <div className="flex flex-col items-center">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500 mb-3"></div>
                                <span className="text-sm text-gray-500">Loading...</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      <p className="text-white/60 text-sm text-center mt-4 font-medium">
                        iPhone & iPad
                      </p>
                    </div>

                    {/* Asman Android */}
                    <div className="flex flex-col items-center group/item">
                      <div className="flex items-center space-x-3 mb-6">
                        <Tablet className="h-6 w-6 text-white/80" />
                        <span className="font-semibold text-white text-lg">Android</span>
                      </div>

                      <div className="relative">
                        <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-emerald-300 rounded-2xl blur opacity-30 group-hover/item:opacity-50 transition-opacity"></div>
                        <div className="relative bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-xl group-hover/item:shadow-2xl transition-all duration-300 group-hover/item:scale-105">
                          {qrCodes.asmanAndroid ? (
                            <img
                              src={qrCodes.asmanAndroid}
                              alt="Asman Android QR Code"
                              className="w-44 h-44 mx-auto"
                              data-testid="qr-asman-android"
                            />
                          ) : (
                            <div className="w-44 h-44 bg-gray-100 rounded-xl flex items-center justify-center mx-auto">
                              <div className="flex flex-col items-center">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500 mb-3"></div>
                                <span className="text-sm text-gray-500">Loading...</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      <p className="text-white/60 text-sm text-center mt-4 font-medium">
                        Android devices
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center pt-12">
              <Button
                onClick={() => setIsDownloadModalOpen(false)}
                className="relative group px-12 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 rounded-2xl font-semibold text-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
                data-testid="button-close-modal"
              >
                <span className="relative z-10">Close</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
