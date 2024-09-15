// src/App.jsx
import React, { useState, useEffect, useDebugValue } from 'react';
import { MdTabletMac, MdLaptopMac, MdDesktopMac } from 'react-icons/md';
import Avatar from 'react-avatar';

// Custom hook to get window size
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({ width: undefined, height: undefined });
  useDebugValue(`width: ${windowSize.width}px, height: ${windowSize.height}px`);

  useEffect(() => {
    const handleResize = () => setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    window.addEventListener('resize', handleResize);
    handleResize(); // Call it right away!

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

// Custom hook to check if window width is within range
function useWithinWindowWidth(minWidth, maxWidth) {
  const { width } = useWindowSize();

  const isWithin = width && width >= minWidth && width <= maxWidth;
  useDebugValue({ minWidth, maxWidth, isWithin }, formatDebugValueWithinWindow);
  return isWithin;
}

const formatDebugValueWithinWindow = ({ minWidth, maxWidth, isWithin }) => {
  if (maxWidth === Infinity) {
    return `(min-width: ${minWidth}px) => ${isWithin}`;
  }
  if (minWidth === 0) {
    return `(max-width: ${maxWidth}px) => ${isWithin}`;
  }
  return `(max-width: ${maxWidth}px) and (min-width: ${minWidth}px) => ${isWithin}`;
};

// Avatar component
const RandomHead = ({ name }) => {
  const getRandomColor = () => {
    const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Purple'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <Avatar
      name={name}
      size="150"
      round={true}
      color={getRandomColor()}
    />
  );
};

// Component to display message based on screen size
const PersonMessage = ({ state }) => {
  if (!state) {
    return <div>No person to display</div>;
  }
  
  return (
    <div>
      <h2>Current State:</h2>
      <p>{state.name} ({state.size})</p>
      {state.icon}
    </div>
  );
};

// Component to display different avatars based on window size
function PersonByWindowSize() {
  const isBig = useWithinWindowWidth(1000, Infinity);
  const isMedium = useWithinWindowWidth(700, 999);
  const isSmall = useWithinWindowWidth(0, 699);

  let person = null;
  let state = null;

  if (isBig) {
    person = <RandomHead name="Mithi" />;
    state = { name: 'Mithi', size: 'big', icon: <MdDesktopMac /> };
  } else if (isMedium) {
    person = <RandomHead name="Diana" />;
    state = { name: 'Diana', size: 'medium', icon: <MdLaptopMac /> };
  } else if (isSmall) {
    person = <RandomHead name="Mikong" />;
    state = { name: 'Mikong', size: 'small', icon: <MdTabletMac /> };
  }

  return (
    <div>
      {person}
      <PersonMessage state={state} />
    </div>
  );
}

// Component to display window size
const DisplaySize = ({ width, height }) => (
  <div>
    <h1>Window Size</h1>
    <p>Width: {width}px</p>
    <p>Height: {height}px</p>
  </div>
);

// Main App component
function App() {
  const { width, height } = useWindowSize();

  return (
    <div>
      <DisplaySize width={width} height={height} />
      <PersonByWindowSize />
      <p>
        Resizing your window changes the clothes and accessories of the avatar. A
        specific avatar is shown depending on whether your window is big, medium, or
        small.
      </p>
    </div>
  );
}

export default App;


   