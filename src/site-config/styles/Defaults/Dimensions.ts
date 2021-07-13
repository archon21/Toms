const XYZ = ({ props }: { props: any }) => {
  return `
    width: ${props.width || '100%'};
    height: ${props.height || '100%'};
    z-index: ${props.zIndex || '1'};
    `;
};
export default XYZ;
