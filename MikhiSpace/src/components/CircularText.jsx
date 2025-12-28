import { useEffect, useRef } from 'react';

const CircularText = ({ 
  text = 'circular text circular text', 
  radius = 120,
  fontSize = 'text-lg',
  textColor = 'text-white',
  animationDuration = 6000
}) => {
  const containerRef = useRef(null);

  // Map fontSize class to actual pixel value for SVG
  const fontSizeMap = {
    'text-xs': 12,
    'text-sm': 14,
    'text-base': 16,
    'text-lg': 18,
    'text-xl': 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36
  };

  const fontSizeValue = fontSizeMap[fontSize] || 18;
  
  // Map text color to RGB
  const colorMap = {
    'text-white': 'rgb(255, 255, 255)',
    'text-black': 'rgb(0, 0, 0)',
    'text-red-500': 'rgb(239, 68, 68)',
    'text-blue-500': 'rgb(59, 130, 246)',
    'text-green-500': 'rgb(34, 197, 94)',
    'text-yellow-500': 'rgb(234, 179, 8)',
    'text-purple-500': 'rgb(168, 85, 247)',
    'text-pink-500': 'rgb(236, 72, 153)',
  };

  const colorValue = colorMap[textColor] || 'rgb(255, 255, 255)';

  useEffect(() => {
    if (!containerRef.current) return;

    // Split text into individual characters
    const characters = text.split('');
    const angleSlice = 360 / characters.length;

    // Clear existing content
    containerRef.current.innerHTML = '';

    // Create SVG
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const size = radius * 2.5;
    svg.setAttribute('width', size);
    svg.setAttribute('height', size);
    svg.setAttribute('viewBox', `${-radius * 1.25} ${-radius * 1.25} ${radius * 2.5} ${radius * 2.5}`);

    // Create a group for rotating text
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('id', 'rotatingText');

    // Create text elements positioned around the circle
    characters.forEach((char, index) => {
      const angle = (angleSlice * index);
      const x = radius * Math.cos((angle - 90) * Math.PI / 180);
      const y = radius * Math.sin((angle - 90) * Math.PI / 180);

      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', x);
      text.setAttribute('y', y);
      text.setAttribute('font-size', fontSizeValue);
      text.setAttribute('fill', colorValue);
      text.setAttribute('text-anchor', 'middle');
      text.setAttribute('dominant-baseline', 'middle');
      text.setAttribute('font-weight', 'bold');
      text.setAttribute('transform', `rotate(${angle}, ${x}, ${y})`);
      text.textContent = char === ' ' ? '\u00A0' : char;

      g.appendChild(text);
    });

    svg.appendChild(g);
    containerRef.current.appendChild(svg);

    // Add CSS animation for rotation
    const animationName = `rotate-${Math.random().toString(36).substr(2, 9)}`;
    const style = document.createElement('style');
    style.textContent = `
      @keyframes ${animationName} {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      #rotatingText {
        animation: ${animationName} ${animationDuration}ms linear infinite;
        transform-origin: center;
        transform-box: fill-box;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [text, radius, fontSize, textColor, animationDuration, fontSizeValue, colorValue]);

  return (
    <div className="flex items-center justify-center w-full">
      <div ref={containerRef} />
    </div>
  );
};

export default CircularText;
