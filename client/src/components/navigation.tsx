import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Smartphone, Tablet, X } from "lucide-react";

export function Navigation() {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [iosQrCode, setIosQrCode] = useState<string>("");
  const [androidQrCode, setAndroidQrCode] = useState<string>("");

  useEffect(() => {
    // Generate QR codes when modal opens
    if (isDownloadModalOpen) {
      generateQRCodes();
    }
  }, [isDownloadModalOpen]);

  const generateQRCodes = async () => {
    try {
      // App Store URLs (replace with your actual app URLs)
      const iosUrl = "https://apps.apple.com/app/your-app/id123456789";
      const androidUrl = "https://play.google.com/store/apps/details?id=com.yourcompany.yourapp";
      
      // For now, use QR.io service to generate QR codes
      const iosQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(iosUrl)}`;
      const androidQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(androidUrl)}`;
      
      setIosQrCode(iosQrUrl);
      setAndroidQrCode(androidQrUrl);
    } catch (error) {
      console.error('Error generating QR codes:', error);
    }
  };

  return (
    <>
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <nav className="bg-white/70 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-lg px-12 py-3 w-[85vw]">
          <div className="flex items-center justify-between space-x-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-lg font-medium text-black">
                Cursor
              </div>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-10">
              <a 
                href="#features"
                className="text-sm text-gray-600 hover:text-black transition-colors font-medium"
                data-testid="link-features"
              >
                Features
              </a>
              <a 
                href="#pricing"
                className="text-sm text-gray-600 hover:text-black transition-colors font-medium"
                data-testid="link-pricing"
              >
                Pricing
              </a>
              <a 
                href="#changelog"
                className="text-sm text-gray-600 hover:text-black transition-colors font-medium"
                data-testid="link-changelog"
              >
                Changelog
              </a>
              <a 
                href="#docs"
                className="text-sm text-gray-600 hover:text-black transition-colors font-medium"
                data-testid="link-docs"
              >
                Docs
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
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-semibold mb-2">
              Download Our App
            </DialogTitle>
            <p className="text-center text-gray-600 text-sm">
              Scan the QR code to download the app on your device
            </p>
          </DialogHeader>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6">
            {/* iOS QR Code */}
            <div className="flex flex-col items-center space-y-3">
              <div className="flex items-center space-x-2 mb-2">
                <Smartphone className="h-5 w-5 text-gray-600" />
                <span className="font-medium text-gray-900">iOS</span>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                {iosQrCode ? (
                  <img 
                    src={iosQrCode} 
                    alt="iOS App QR Code" 
                    className="w-32 h-32"
                    data-testid="qr-ios"
                  />
                ) : (
                  <div className="w-32 h-32 bg-gray-100 rounded flex items-center justify-center">
                    <span className="text-xs text-gray-500">Loading...</span>
                  </div>
                )}
              </div>
              
              <p className="text-xs text-gray-500 text-center">
                iPhone & iPad
              </p>
            </div>

            {/* Android QR Code */}
            <div className="flex flex-col items-center space-y-3">
              <div className="flex items-center space-x-2 mb-2">
                <Tablet className="h-5 w-5 text-gray-600" />
                <span className="font-medium text-gray-900">Android</span>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                {androidQrCode ? (
                  <img 
                    src={androidQrCode} 
                    alt="Android App QR Code" 
                    className="w-32 h-32"
                    data-testid="qr-android"
                  />
                ) : (
                  <div className="w-32 h-32 bg-gray-100 rounded flex items-center justify-center">
                    <span className="text-xs text-gray-500">Loading...</span>
                  </div>
                )}
              </div>
              
              <p className="text-xs text-gray-500 text-center">
                Android devices
              </p>
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <Button
              variant="outline"
              onClick={() => setIsDownloadModalOpen(false)}
              className="px-6"
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
