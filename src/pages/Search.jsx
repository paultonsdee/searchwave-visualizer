import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Mic, Image as ImageIcon, Search as SearchIcon } from 'lucide-react';
import ImageGrid from '@/components/ImageGrid';
import ImageModal from '@/components/ImageModal';

const Search = () => {
  const [query, setQuery] = useState('');
  const [kNeighbors, setKNeighbors] = useState(50);
  const [strength, setStrength] = useState(5);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearch = () => {
    // TODO: Implement search functionality
    console.log('Searching with:', { query, kNeighbors, strength });
    // For now, let's set some dummy results
    setSearchResults(Array(kNeighbors).fill().map((_, i) => ({
      id: i,
      url: `https://picsum.photos/200/300?random=${i}`,
      code: `IMG_${i.toString().padStart(4, '0')}`,
    })));
  };

  return (
    <div className="px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Image Retrieval</h1>
      
      <div className="flex items-center mb-8">
        <Input
          type="text"
          placeholder="Enter your search query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow mr-2"
        />
        <Button variant="outline" className="mr-2">
          <Mic className="h-4 w-4" />
        </Button>
        <Button variant="outline" className="mr-2">
          <ImageIcon className="h-4 w-4" />
        </Button>
        <Button onClick={handleSearch}>
          <SearchIcon className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <label className="block text-sm font-medium mb-2">K-Neighbors: {kNeighbors}</label>
          <Slider
            min={1}
            max={200}
            step={1}
            value={[kNeighbors]}
            onValueChange={(value) => setKNeighbors(value[0])}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Strength: {strength}</label>
          <Slider
            min={1}
            max={10}
            step={1}
            value={[strength]}
            onValueChange={(value) => setStrength(value[0])}
          />
        </div>
      </div>

      <ImageGrid images={searchResults} onImageClick={setSelectedImage} />

      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
          onSearchSimilar={() => {
            console.log('Search similar images for:', selectedImage.code);
            // TODO: Implement similar image search
          }}
        />
      )}
    </div>
  );
};

export default Search;