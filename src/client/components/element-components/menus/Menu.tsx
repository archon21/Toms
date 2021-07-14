import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { Styles,  } from '../../../../site-config';


import MenuItem from './MenuItem';

interface Links {
  text: string;
  url: string;
}

interface Props {
  links: Array<Links>;
  isOpen: boolean;
  handleMenu: any;
}

const ClickCatcherVessel = styled.div<Props>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  width: ${(props) => (props.isOpen ? '100vw' : '100vh')};
`;

const ClickCatcher: React.FC<Props> = (props) => {
  const { isOpen, handleMenu } = props;
  return isOpen ? (
    <ClickCatcherVessel onClick={handleMenu} {...props}></ClickCatcherVessel>
  ) : (
    <Fragment></Fragment>
  );
};

const MenuVessel = styled.ul<Props>`
    position: fixed;
    right: .5em;
    top: .5em;
    border-radius: 3px;
    box-shadow: -10px -10px 30px 4px ${Styles.Colors.boxShadow},
    10px 10px 30px 4px ${Styles.Colors.boxShadow};
    width: max-content;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: .5em;
    background ${Styles.Colors.backgroundSecondary};
    z-index: 101;
    
    opacity: ${(props) => (props.isOpen ? '1' : '0')};
    transform: ${(props) =>
      props.isOpen ? 'translate(0)' : 'translate(0, -100%)'};
    transition: all 300ms;
    
  
`;

const Menu: React.FC<Props> = (props) => {
  const { links, isOpen, handleMenu } = props;

  return (
    <Fragment>
      <ClickCatcher {...props}></ClickCatcher>
      <MenuVessel {...props}>
        {links.map(({ url, text }) => {
          return <MenuItem label={text} key={text} url={url}></MenuItem>;
        })}
      </MenuVessel>
    </Fragment>
  );
};

export default Menu;
