import React, { Children, useEffect, useLayoutEffect, useState } from 'react';
import usePrevious from '../CustomHooks/usePrevious';
import calculateShellBoxes from '../utils/CalculateShellBoxes';

const Shuffle = ({ children }) => {
  const [ShellBox, setShellBox] = useState({});
  const [prevShellBox, setPrevShellBox] = useState({});
  const prevChildren = usePrevious(children);
  useLayoutEffect(() => {
    const newShellBox = calculateShellBoxes(children);
    setShellBox(newShellBox);
  }, [children]);

  useLayoutEffect(() => {
    const prevShellBox = calculateShellBoxes(prevChildren);
    setPrevShellBox(prevShellBox);
  }, [prevChildren]);

  useEffect(() => {
    const hasPrevShellBox = Object.keys(prevShellBox).length;

    if (hasPrevShellBox) {
      Children.forEach(children, (child) => {
        const domNode = child.ref.current;
        const firstBox = prevShellBox[child.key];
        const lastBox = ShellBox[child.key];
        const changeInX = firstBox.left - lastBox.left;

        if (changeInX) {
          requestAnimationFrame(() => {
            domNode.style.transform = `translateX(${changeInX}px)`;
            domNode.style.transition = 'transform 0s';

            requestAnimationFrame(() => {
              domNode.style.transform = '';
              domNode.style.transition = 'transform 500ms';
            });
          });
        }
      });
    }
  }, [ShellBox, prevShellBox, children]);

  return children;
};

export default Shuffle;
