import { Interfaces, Styles } from '../..';
import styled, { withTheme } from 'styled-components';

const Colors = ({ props }: { props: any }) => {
  const { theme, color, background } = props;
  console.log(props);

  console.log(`
  color: ${color ? Styles.Colors[color](color, props) : theme.primary};
  background: ${background ? theme[background] : 'none'};`);
  return `
    color: ${color ? Styles.Colors[color](color, props) : theme.primary};
    background: ${background ? theme[background] : 'none'};`;
};
export default Colors;
