type Alignment = "center" | "flex-start" | "flex-end";

interface DisplayAlign {
  alignSelf: Alignment;
  justifySelf: Alignment;
  alignItems: Alignment;
  justifyItems: Alignment;
}

export default DisplayAlign;
