const XYZ = ({ props }: { props: any }) => {
  return `
    width: ${props.width || "100%"};
    max-width: ${props.maxWidth || ""};
    height: ${props.height || "auto"};
    z-index: ${props.zIndex || "1"};
    `;
};
export default XYZ;
