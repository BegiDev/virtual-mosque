declare module 'three/examples/jsm/loaders/GLTFLoader' {
    export class GLTFLoader {
      constructor();
      load(
        url: string,
        onLoad: (gltf: any) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void
      ): void;
      setDRACOLoader(dracoLoader: any): void;
      setCrossOrigin(value: string): void;
    }
  }
  
  declare module 'three/examples/jsm/loaders/DRACOLoader' {
    export class DRACOLoader {
      constructor();
      setDecoderPath(path: string): void;
      load(
        url: string,
        onLoad: (geometry: any) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void
      ): void;
    }
  }