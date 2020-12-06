import { PropsWithoutRef, ReactPropTypes } from 'react';

const Spacing = ({ props }: { props: any }) => {
  return `
    margin: ${props.margin || '0'};
    padding: ${props.padding || '0'};
    `;
};
export default Spacing;
