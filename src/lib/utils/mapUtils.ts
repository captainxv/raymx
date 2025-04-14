// src/lib/utils/mapUtils.ts

export interface MapOptions {
    container: string;
    style?: string;
    center?: [number, number];
    zoom?: number;
  }
  
  export function initializeMap(options: MapOptions): any {
    try {
      // Replace YOUR_MAPBOX_ACCESS_TOKEN with your actual token.
      (window as any).mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
      const map = new (window as any).mapboxgl.Map({
        container: options.container,
        style: options.style || 'mapbox://styles/mapbox/streets-v11',
        center: options.center || [0, 0],
        zoom: options.zoom || 12
      });
      console.log('Map initialized successfully.');
      return map;
    } catch (error) {
      console.error('Error initializing Mapbox map:', error);
      throw error;
    }
  }
  
  export function createMarker(map: any, coordinates: [number, number], popupText?: string): any {
    try {
      const marker = new (window as any).mapboxgl.Marker().setLngLat(coordinates);
      if (popupText) {
        const popup = new (window as any).mapboxgl.Popup({ offset: 25 }).setText(popupText);
        marker.setPopup(popup);
      }
      marker.addTo(map);
      console.log('Marker added at', coordinates);
      return marker;
    } catch (error) {
      console.error('Error creating marker:', error);
      throw error;
    }
  }
  