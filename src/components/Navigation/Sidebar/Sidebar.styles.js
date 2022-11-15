import styled from "styled-components";

export const SideMenu = styled.aside(
  (props) => `
  position: relative;
  font-family: "aileron", sans-serif;
  background: var(--background-primary);
  height: 100vh;
  background: rgb(0, 0, 0);
  border-right: 1px solid var(--action-active);
  overflow: hidden;
  transition: width 0.3s ease, opacity 0.3s ease;
  width: ${props.visible ? "48px" : "310px"};
  padding-top: 16px;
  &:hover {
    width: 310px;
    ${Logo} {
        transform: translateX(0px);
        width: 220px;
    }
    ${LegalMenu},
    ${EventBox},
    ${CopyrightYear} {
     opacity: 1;
    }
  }
  ${LegalMenu},
  ${EventBox},
  ${CopyrightYear} {
    opacity: ${props.visible ? "0" : "1"};
  }
`
);

export const MenuContainer = styled.div`
  position: absolute;
  left: 0;
  top: 76px;
  width: 310px;
  height: calc(100% - 76px);
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-x: hidden;
  overflow-y: overlay;
`;

export const Logo = styled.div(
  (props) => `
  position: relative;
  width: ${props.visible ? "20px" : "220px"};
  overflow: hidden;
  height: 22px;
  padding-bottom: 40px;
  transition: all 0.3s ease;
  margin-left: 14px;
  img {
    position: absolute;
    width: 220px;
    height: 22px;
    top: 0;
    left: 0;
  }
`
);

export const NavMenu = styled.ul(
  (props) => `
  margin-top: 0;
  padding: 0;
  padding-bottom: ${props.noPadding ? "0px" : "40px"};
`
);

export const LegalMenu = styled.div`
  display: flex;
  padding-left: 16px;
  margin-bottom: 20px;
  transition: opacity 0.3s ease;
  a {
    transition: color 0.3s ease;
    margin-right: 20px;
    text-decoration: none;
    color: var(--action-active);

    &:hover {
      color: white;
    }
  }
`;

export const BottomMenuItem = styled.div`
  padding-bottom: 0;
  border-bottom: 1px solid var(--action-active);
  margin-bottom: 16px;
  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 48px;
    text-decoration: none;
    padding-left: 6px;
    transition: color 0.3s ease;
    > svg {
      margin-right: 8px;
    }
    color: var(--action-active);
    &:hover {
      color: white;
    }
  }
`;

export const MenuItem = styled.li(
  (props) => `
  list-style: none;
  padding-bottom: 0;
  border-top: 1px solid var(--action-active);
  &:last-of-type {
    border-bottom: 1px solid var(--action-active);
  }
  a {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 48px;
    text-decoration: none;
    padding-left: 8px;
    color: ${props.yellow ? "var(--light-green)" : "var(--action-active)"};
    transition: color 0.3s ease;
    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgb(0, 0, 0);
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    &.active,
    &:hover {
      color: white;
    }
    &.active:before,
    &:hover:before {
      opacity: 1;
    }
    svg {
      position: relative;
      z-index: 1;
      margin-right: 8px;
    }
    span {
      position: relative;
      z-index: 1;
    }
  }
  `
);
export const ExternalLinkIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 10px;
`;

export const SocialLinksMenu = styled.div`
  width: max-content;
  padding-left: 12px;
  margin-bottom: 20px;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    transition: color 0.3s ease;
    color: var(--action-active);
    &:hover {
      color: white;
    }
  }
`;

export const FixedContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  transition: transform 0.3s ease, opacity 0.3s ease;
  @media (max-width: 1380px) {
    opacity: 0;
    pointer-events: none;
    transform: translateX(-310px);
  }
`;

export const PullTab = styled.button(
  (props) => `
  background: transparent;
  border: none;
  position: absolute;
  left: 100%;
  top: 30px;
  transition: all 0.3s ease;
  color: var(--action-active);
  cursor: pointer;
  z-index: 1;
  &:hover {
    color: white;
  }
  > svg {
    transform: ${props.visible ? "rotate(0deg) translateX(-6px)" : "rotate(180deg) translateX(20px)"};
  }
`
);

export const CopyrightYear = styled.span`
  display: block;
  margin-left: 16px;
  font-size: 14px;
  color: var(--action-active);
  transition: opacity 0.3s ease;
`;

export const EventBox = styled.div`
  position: relative;
  margin: 16px;
  border-radius: 4px;
  border: 1px solid var(--cell-stroke);
  height: 177px;
  overflow: hidden;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

export const EventHeader = styled.div`
  position: relative;
  z-index: 1;
  padding: 6px 8px;
  color: var(--background-primary);
  font-size: 8px;
  line-height: 12px;
  font-weight: 600;
  font-family: "Inter", sans-serif;
  background-color: var(--light-green);
`;

export const EventContent = styled.div`
  padding: 16px 8px 8px;
  background: linear-gradient(0deg, #000000, #000000), rgb(0, 0, 0);
  > a {
    text-decoration: none;
  }
`;

export const ViewNowButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 108px;
  height: 32px;
  background-color: transparent;
  border: 1px solid var(--action-active);
  color: white;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: var(--action-active);
  }
`;

export const EventGraphic = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
`;

export const EventTitle = styled.span`
  display: block;
  color: var(--action-active);
  margin-bottom: 10px;
`;

export const EventDescription = styled.p`
  margin: 0 0 30px;
`;
