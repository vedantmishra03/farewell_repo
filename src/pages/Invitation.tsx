
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const Invitation = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isChecked) {
      setShowDialog(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center farewell-bg p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-lg w-full">
        <h1 className="text-2xl font-bold text-center mb-6">Your Special Invitation</h1>
        
        <div className="mb-6">
          <img 
            src="/lovable-uploads/eff18b02-8dfb-495d-b5c9-3aa5d150ba7f.png" 
            alt="Farewell Invitation" 
            className="w-full rounded-lg shadow-md"
          />
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="mt-1">
                <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-lg">Cute smile</span>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="mt-1">
                <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-lg">Great vibes</span>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="mt-1">
                <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-lg">Same campus</span>
            </div>
            
            <div className="flex items-center space-x-3 border p-3 rounded-md bg-yellow-50">
              <Checkbox 
                id="ready" 
                checked={isChecked}
                onCheckedChange={(checked) => setIsChecked(!!checked)}
              />
              <div>
                <label htmlFor="ready" className="text-lg font-medium cursor-pointer">
                  Are you ready to rock the Farewell 2025 with me?
                </label>
              </div>
            </div>
            
            <div className="text-xl font-bold mt-4">
              So.. we good?
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full text-lg py-6" 
            disabled={!isChecked}
          >
            Yes, I'm Ready!
          </Button>
        </form>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl">Thank You!</DialogTitle>
            <DialogDescription className="text-center text-lg">
              We will meet at the venue soon. Get ready for an amazing farewell!
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center mt-4">
            <Button onClick={() => setShowDialog(false)}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Invitation;
