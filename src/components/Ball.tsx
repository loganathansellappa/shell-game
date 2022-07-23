import React from 'react';
import { faBaseball } from '@fortawesome/free-solid-svg-icons';
import './Ball.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface BallProps {
  color: string;
  className?: string;
}

export const Ball = ({ color = 'red', className }: BallProps) => (
  <div className={'ball'}>
    <FontAwesomeIcon
      icon={faBaseball}
      spin={true}
      color={color}
      className={`${className} default`}
    />
  </div>
);
