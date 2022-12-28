declare let PUBLIC_URL: string;
declare let API_URL: string;
declare let keep: boolean;

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const content: string;

  export { ReactComponent };
  export default content;
}

interface Window {
  keep?: boolean;
  ethereum?: any;
  videoask?: {
    loadEmbed: (config: any, callback: any) => Promise<any>;
  };
}
