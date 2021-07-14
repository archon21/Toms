import { PropsWithoutRef, ReactPropTypes } from "react";

const DisplayAlignSelf = ({ props }: { props: any }) => {
  return `
    align-self: ${props?.displayAlign?.alignSelf || "center"};
    justify-self: ${props?.displayAlign?.justifySelf || "center"};
    align-items: ${props?.displayAlign?.alignItems || "center"};
    justify-items: ${props?.displayAlign?.justifyItems || "center"};
    `;
};
export default DisplayAlignSelf;
