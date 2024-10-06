"use client";

import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const MapComponent: React.FC = () => {
  // Reference for the map container
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Initialize the map when the component is mounted
    const initMap = async () => {
      // Load the Google Maps API
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string, // Use your API key here
        version: "weekly",
      });

      // Import Maps and Marker libraries
      const { Map } = await loader.importLibrary("maps") as any;
      const { Marker } = await loader.importLibrary("marker") as any;

      // Define the map position (latitude and longitude)
      const position = {
        lat: 43.642693,
        lng: -79.3871189,
      };

      // Map options
      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 17,
        mapId: "MY_NEXTJS_MAPID", // Ensure this is a valid Map ID in Google Maps
      };

      // Create the map and attach it to the DOM
      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      // Place a marker on the map at the defined position
      const marker = new Marker({
        map: map,
        position: position,
      });
    };

    initMap(); // Call the map initialization function
  }, []);

  return (
    <div>
      {/* Map container */}
      <div ref={mapRef} style={{ height: "400px", width: "100%" }} />
    </div>
  );
};

export default MapComponent;
