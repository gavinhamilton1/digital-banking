declare namespace JSX {
    interface IntrinsicElements {
      'lottie-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src: string;
        background: string;
        speed: string;
        autoplay?: boolean;
        loop?: boolean;
        style?: React.CSSProperties;
      };
    }
  }
  