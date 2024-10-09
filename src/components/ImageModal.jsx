import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const ImageModal = ({ image, onClose, onSearchSimilar }) => {
  if (!image) return null;

  return (
    <Dialog open={!!image} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{image.code}</DialogTitle>
          <DialogDescription>
            Details about the related video
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <img src={image.url} alt={image.code} className="w-full h-64 object-cover rounded-lg" />
          <p>Additional information about the image and related video would go here.</p>
        </div>
        <Button onClick={onSearchSimilar}>Search Similar Images</Button>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;