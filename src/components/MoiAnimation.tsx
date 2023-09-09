
import { useState, useEffect } from 'react';

function MoiAnimation() {
  const [frame, setFrame] = useState(1);
  const [pos, setPos] = useState(0);

  // The frames for Kirby's animation
  const frames = [
    `
     .--.
    /  -  \\
   |      |
    \\.--./
    `,
    `
      .--.
     /  -  \\
    |      |
     \\.--./
    `,
    `
       .-.
      / - \\
     |     |
      \\.-./
    `,
    `
      .--.
     /  -  \\
    |      |
     \\.--./
    `
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prevFrame) => (prevFrame === 4 ? 1 : prevFrame + 1));
    }, 500);
    
    // Cleanup: Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <pre onClick={() => setPos(pos+1)} className='makimoto'
    style={{ fontFamily: 'monospace', whiteSpace: 'pre', paddingLeft: `${pos}ch` }}>
      {frames[frame - 1]}
    </pre>
  );
}

export default MoiAnimation;

