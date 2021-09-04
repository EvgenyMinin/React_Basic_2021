import React, { Dispatch, FC, MouseEvent, SetStateAction } from 'react';

import css from './Modal.module.css';

interface ModalProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>
}

export const Modal: FC<ModalProps> = ({ visible, setVisible, children }) => {
  let rootClasses: string[] = [css.modal];

  if (visible) {
    rootClasses = [...rootClasses, css.active];
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={css.modalContent} onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}>{children}</div>
    </div>
  );
};
