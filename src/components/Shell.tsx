import React, { forwardRef, ReactElement } from 'react';
import { faBellConcierge } from '@fortawesome/free-solid-svg-icons';
import './Shell.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Ball } from './Ball';

export interface ShellProps {
  shellId: string;
  ballPlaced: boolean;
  color: string;
  className?: string;
  onClickHandler: (shellId: string) => void;
}

export const Shell = forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<ShellProps>
>(
  (
    { color = 'white', shellId, className, ballPlaced, onClickHandler },
    ref
  ) => {
    return (
      <div className={'shell'} ref={ref}>
        <FontAwesomeIcon
          icon={faBellConcierge}
          color={color}
          onClick={() => onClickHandler(shellId)}
          className={`${className} defaultShell`}
        />
        <div className={'ball-placed'}>
          {ballPlaced ? <Ball className={'animate'} /> : null}
        </div>
      </div>
    );
  }
);
