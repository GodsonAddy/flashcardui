import styled, { keyframes, css } from 'styled-components';
import { ButtonProps } from './Button';

const rippleEffect = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(10);
    opacity: 0.375;
  }
  100% {
    transform: scale(35);
    opacity: 0;
  }
`;

const animationRule = css`
  animation: ${rippleEffect} 0.9s ease 1 forwards;
`;

export const StyledRipple: any = styled.span<ButtonProps>`
  position: absolute;
  border-radius: 50%;
  animation: ${animationRule};
  content: '';
  width: 100%;
  height: 100%;
  background-color: #eeeeee;
  display: block;
  opacity: 1;
`;

export const StyledContent = styled.span`
  position: relative;
  z-index: 2;
`;

export const StyledButton: any = styled.button<ButtonProps>`
  font-weight: 700;
  border: none;
  cursor: ${(props) => (props.disabled ? !'pointer' : 'pointer')};
  display: inline-block;
  line-height: 1;
  font-size: 1em;
  padding: 10px;
  border-radius: ${(props) => (props.rounded ? '20px' : '3px')};
  text-align: center;
  position: relative;
  overflow: hidden;

  &.fullWidth {
    display: block;
    width: 100%;
    padding: 14px 28px;
    font-size: 18px;
  }
  &.large {
    font-size: 16px;
    padding: 12px 24px;
  }

  &.medium {
    font-size: 14px;
    padding: 11px 20px;
  }

  &.small {
    font-size: 12px;
    padding: 10px 16px;
  }

  &.contained {
    background-color: ${(props) => (props.disabled ? '#e0e0e0' : props.color)};
    color: ${(props) => (props.disabled ? '#424242' : 'white')};
    :hover {
      background-color: ${(props) =>
        props.disabled ? '#e0e0e0' : props.hover};
    }
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  }

  &.outlined {
    background-color: white;
    color: ${(props) => (props.disabled ? '#424242' : props.color)};
    border: 1px solid ${(props) => (props.disabled ? '#e0e0e0' : props.color)};
    :hover {
      border: ${(props) => (props.disabled ? '1px' : '2px')} solid
        ${(props) => (props.disabled ? '#e0e0e0' : props.hover)};
      color: ${(props) => (props.disabled ? '#424242' : props.hover)};
    }
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  }

  &.text {
    color: ${(props) => (props.disabled ? '#424242' : props.color)};
    background-color: transparent;
    :hover {
      color: ${(props) => (props.disabled ? '#424242' : props.hover)};
    }
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  }
`;
