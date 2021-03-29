import React from 'react';
import Button, { OutlineButton } from './Button';
import './styles/prompter.scss';

interface PrompterProps {
  text: string;
  actionText: string;
  disabled: boolean;
  deleteAction: () => void;
  cancelAction: () => void;
}

const Prompter: React.FC<PrompterProps> = ({
  text,
  deleteAction,
  cancelAction,
  actionText,
  disabled,
}) => (
  <div className="prompter">
    <div className="message-wrapper">
      <h3>{text}</h3>
    </div>
    <div className="action-section">
      <div>
        <OutlineButton
          withBorderRadius
          withIcon={false}
          text="Cancel"
          onClick={cancelAction}
          className="cancel-btn"
        />
        <Button text={actionText} onClick={deleteAction} disabled={disabled} />
      </div>
    </div>
  </div>
);

export default Prompter;
