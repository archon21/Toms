interface Arguments {
  column?: boolean;
  xAlign?: string;
  yAlign?: string;
}

const getFlexAlignment = ({ column, yAlign, xAlign }: Arguments): Array<string> => {
  const alignment = [];
  if (column) {
    alignment.push(`justify-content: ${yAlign};`);
    alignment.push(`align-items: ${xAlign};`);
  } else {
    alignment.push(`justify-content: ${yAlign};`);
    alignment.push(`align-items: ${xAlign};`);
  }
  return alignment;
};

export default getFlexAlignment;
