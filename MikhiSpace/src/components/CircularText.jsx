import { useEffect, useRef } from 'react';

const CircularText = ({ 
  text = 'circular text circular text', 
  words = null,
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
    '2xl': 75,
    '3xl': 85,
    '4xl':95
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
    'text-off-white': '#D5D5D5'
  };

  const colorValue = colorMap[textColor] || 'rgb(255, 255, 255)';

  // Convert words array to character array with styling info
  const getCharactersWithStyle = () => {
    if (words && Array.isArray(words)) {
      const charArray = [];
      words.forEach((wordObj) => {
        const wordText = wordObj.text || '';
        const styles = {
          font: wordObj.font || 'Arial',
          fontSize: fontSizeMap[wordObj.fontSize] || fontSizeValue,
          textColor: colorMap[wordObj.textColor] || colorValue
        };
        wordText.split('').forEach((char) => {
          charArray.push({ char, ...styles });
        });
        // Add space between words
        charArray.push({ char: ' ', ...styles });
      });
      return charArray;
    } else {
      // Fallback to simple character array
      return text.split('').map(char => ({
        char,
        font: 'Arial',
        fontSize: fontSizeValue,
        textColor: colorValue
      }));
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;

    // Get characters with styling information
    const charactersWithStyle = getCharactersWithStyle();
    const angleSlice = 360 / charactersWithStyle.length;

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
    charactersWithStyle.forEach((charObj, index) => {
      const angle = (angleSlice * index);
      const x = radius * Math.cos((angle - 90) * Math.PI / 180);
      const y = radius * Math.sin((angle - 90) * Math.PI / 180);

      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', x);
      text.setAttribute('y', y);
      text.setAttribute('font-size', charObj.fontSize);
      text.setAttribute('fill', charObj.textColor);
      text.setAttribute('font-family', charObj.font);
      text.setAttribute('text-anchor', 'middle');
      text.setAttribute('dominant-baseline', 'middle');
      text.setAttribute('font-weight', 'bold');
      text.setAttribute('transform', `rotate(${angle}, ${x}, ${y})`);
      text.textContent = charObj.char === ' ' ? '\u00A0' : charObj.char;

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
  }, [text, words, radius, fontSize, textColor, animationDuration, fontSizeValue, colorValue, getCharactersWithStyle]);

  return (
    <div className="flex items-center justify-center w-full">
      <div ref={containerRef} />
    </div>
  );
};

export default CircularText;
