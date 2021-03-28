import { FC } from 'react';

export const Modal: FC<{
  isActive: boolean;
  onOk?: () => void;
  onCancel: () => void;
  head?: string;
  footer?: JSX.Element | JSX.Element[];
}> = ({ head, footer, isActive, onOk, onCancel, children }) => {
  const active = isActive ? 'active' : '';
  return (
    <div className={`modal ${active}`} id="modal-id">
      <div className="modal-container">
        <div className="modal-header">
          <a className="btn btn-clear float-right" aria-label="Close" onClick={onCancel} />
          <div className="modal-title h5">{head}</div>
        </div>
        <div className="modal-body">
          <div className="content">{children}</div>
        </div>
        <div className="modal-footer">{footer}</div>
      </div>
    </div>
  );
};
