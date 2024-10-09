import React, { useState } from 'react';
import { Heart, ThumbsDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ImageGrid = ({ images, onImageClick }) => {
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {images.map((image) => (
        <div
          key={image.id}
          className="relative group"
          onMouseEnter={() => setHoveredImage(image.id)}
          onMouseLeave={() => setHoveredImage(null)}
        >
          <img
            src={image.url}
            alt={image.code}
            className="w-full h-48 object-cover rounded-lg cursor-pointer"
            onClick={() => onImageClick(image)}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
            <p className="text-white text-sm">{image.code}</p>
          </div>
          <div className="absolute bottom-2 right-2 flex space-x-2">
            <Button size="sm" variant="secondary">
              <Heart className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="secondary">
              <ThumbsDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;