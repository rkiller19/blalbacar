import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";
import { ReactComponent as MycIcon } from "../../img/nav/myc-icon.svg";

export const DropdownContainer = styled.div(
  (props) => `
  position: relative;
  z-index: 3;
  @media (min-width: 670px) {
    display: ${props.isMobile ? "none" : "block"};
  }
`
);

export const DropdownButtonBackground = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(240, 55, 181, 1);
  opacity: 0;
  transition: opacity 0.3s ease;
`;

export const DropdownButton = styled.button(
  (props) => `
  position: relative;
  height: 36px;
  width: 
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  border-radius: 4px;
  overflow: hidden;
  background-color: transparent;
  color: white;
  margin-left: 16px;
  border: 0.6px solid var(--action-active);
  background: rgba(0, 0, 0, 1)
  &:hover {
    color: white;
  }
  &:hover ${DropdownButtonBackground} {
    opacity: 0;
  }
  ${
    props.dropdownOpen &&
    `
    ${DropdownButtonBackground} {
      opacity: 0;
    }
  `
  }
  @media (max-width: 1380px) {
    height: 36px;
  }
  @media (max-width: 450px) {
    margin-left: 8px;
  }
  `
);

export const ButtonText = styled.span`
  position: relative;
  white-space: nowrap;
  z-index: 2;
`;

export const ChevronDown = styled(FaChevronDown)(
  (props) => `
  position: relative;
  z-index: 1;
  min-width: 17px;
  min-height: 13px;
  margin-left: 8px;
  transition: color 0.3s ease;
`
);

export const MyceliumIcon = styled(MycIcon)(
  (props) => `
  position: relative;
  z-index: 1;
  min-width: 20px;
  min-height: 19px;
  transition: color 0.3s ease;
`
);

export const OutgoingLink = styled.a.attrs({
  target: "_blank",
  rel: "noreferrer noopener",
})`
  display: inline-block;
  width: 100%;
  text-decoration: none;
  &:hover {
    color: var(--action-active) !important;
  }
  > svg {
    transition: color 0.3s ease;
  }
`;

export const DropdownContent = styled.div(
  (props) => `
  position: absolute;
  top: 44px;
  right: 0;
  width: 280px;
  border-radius: 4px;
  border: 1px solid var(--action-active);
  background: rgba(240, 55, 181, 1);
  transition: opacity 0.3s ease, transform 0.3s ease;
  transform: ${props.dropdownOpen ? "translateY(0)" : "translateY(2px)"};
  opacity: ${props.dropdownOpen ? 1 : 0};
  pointer-events: ${props.dropdownOpen ? "auto" : "none"};
  @media (max-width: 360px) {
    right: -48px;
  }
`
);

export const SocialsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  gap: 0 20px;
`;

export const DropdownItem = styled.div(
  (props) => `
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 56px;
    width: 100%;
    font-size: 14px;
    overflow: hidden;
    ${
      !props.isSocialRow &&
      `
      border-bottom: 1px solid var(--cell-highlight);
      &:hover ${ItemHoverBackground} {
        opacity: 1;
        transform: translateX(0);
      }`
    }
    ${
      props.isSocialRow &&
      `
      border-bottom: 0;
      ${OutgoingLink}:hover {
        color: var(--action-active);
      }`
    }
    `
);

export const RelativeContainer = styled.div`
  position: relative;
  z-index: 1;
`;

export const ItemHoverBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  height: 100%;
  width: 100%;
  transform: translateX(256px);
  opacity: 0;
  transition: all 0.3s ease;
  background: rgb(0, 0, 0);
`;
