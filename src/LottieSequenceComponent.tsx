import React, { useEffect, useRef } from 'react';
import '@lottiefiles/lottie-player'; // Import Lottie Player


// Define a custom interface for the lottie-player element
interface LottiePlayer extends HTMLElement {
  play: () => void;
  stop: () => void;
  pause: () => void;
  addEventListener: (type: string, listener: EventListenerOrEventListenerObject) => void;
}

const LottieSequenceComponent: React.FC = () => {
  const animation1Ref = useRef<LottiePlayer | null>(null);
  const animation2Ref = useRef<LottiePlayer | null>(null);
  const animation3Ref = useRef<LottiePlayer | null>(null);

  useEffect(() => {
    const animation1 = animation1Ref.current;
    const animation2 = animation2Ref.current;
    const animation3 = animation3Ref.current;

    if (animation1 && animation2 && animation3) {
      animation1.addEventListener('complete', () => {
        console.log('Animation 1 complete');
        animation1.style.display = 'none';
        animation2.style.display = 'block';
        animation2.play();
      });

      animation2.addEventListener('complete', () => {
        console.log('Animation 2 complete');
        animation2.style.display = 'none';
        animation3.style.display = 'block';
        animation3.play();
      });

      animation3.addEventListener('complete', () => {
        console.log('Animation 3 complete');
        alert('All animations complete!');
      });
    }

    // Cleanup event listeners on unmount
    return () => {
      if (animation1) animation1.removeEventListener('complete', () => {});
      if (animation2) animation2.removeEventListener('complete', () => {});
      if (animation3) animation3.removeEventListener('complete', () => {});
    };
  }, []);

  return (
    <div>
      <lottie-player
        ref={animation1Ref}
        src="http://localhost:8100/Animation2.json"
        background="transparent"
        speed="1"
        style={{ width: 300, height: 300 }}
        autoplay
      ></lottie-player>

      <lottie-player
        ref={animation2Ref}
        src="http://localhost:8100/Animation2.json"
        background="transparent"
        speed="1"
        style={{ width: 300, height: 300, display: 'none' }}
      ></lottie-player>

      <lottie-player
        ref={animation3Ref}
        src="http://localhost:8100/Animation3.json"
        background="transparent"
        speed="1"
        style={{ width: 300, height: 300, display: 'none' }}
      ></lottie-player>
    </div>
  );
};

export default LottieSequenceComponent;
