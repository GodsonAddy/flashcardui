import React, {
  HTMLAttributes,
  MouseEventHandler,
  useState,
  useEffect,
} from 'react';
import { StyledButton, StyledContent, StyledRipple } from './Button.style';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /** Choose the size of a button */
  size?: 'small' | 'medium' | 'large' | 'fullWidth';

  /** Provide a text for the button */
  label: string;

  onClick?: MouseEventHandler<HTMLButtonElement>;

  /** Choose your type of button */
  buttonType?: 'contained' | 'text' | 'outlined';

  /** Provide a color for the hover */
  hover?: string;

  /** Disable button */
  disabled?: boolean;

  /** Provide a color for the button */
  color?: string;

  /** Rounded button */
  rounded?: boolean;
}

/** This is your favorite button */
export const Button = ({
  disabled = false,
  size = 'medium',
  buttonType = 'text',
  label,
  hover,
  rounded = false,
  onClick,
  color = '#2196f3',
  children,
  ...props
}: ButtonProps) => {
  const [coords, setCoords] = useState({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = useState(false);

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 300);
    } else setIsRippling(false);
  }, [coords]);

  useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 });
  }, [isRippling]);

  const RippleClick = (e: any) => {
    const rect = e.target.getBoundingClientRect();
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    onClick && onClick(e);
  };

  return (
    <StyledButton
      type="button"
      className={[`${buttonType}`, `${size}`].join(' ')}
      style={{
        backgroundColor: buttonType === 'contained' ? color : 'transparent',
        color,
      }}
      disabled={disabled}
      rounded={rounded}
      hover={hover}
      onClick={RippleClick}
      {...props}
    >
      {isRippling ? (
        <StyledRipple
          style={{
            left: coords.x,
            top: coords.y,
          }}
        />
      ) : (
        ''
      )}
      <StyledContent>{children}</StyledContent>
      {label}
    </StyledButton>
  );
};
