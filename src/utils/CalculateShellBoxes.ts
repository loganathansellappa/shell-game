import { Children } from 'react';

const calculateShellBoxes = (children) => {
  const boundingBoxes = {};

  Children.forEach(children, (child) => {
    const domNode = child.ref.current;
    if (domNode) {
      const nodeBoundingBox = domNode.getBoundingClientRect();

      boundingBoxes[child.key] = nodeBoundingBox;
    }
  });

  return boundingBoxes;
};

export default calculateShellBoxes;
