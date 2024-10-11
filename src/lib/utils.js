const COLOURS = {
  green: {
    bg: "bg-[#ECF7D4]",
    badge: "bg-[#D6F497]",
  },
  orange: {
    bg: "bg-[#F9EFE1]",
    badge: "bg-[#F7E0B8]",
  },
  red: {
    bg: "bg-[#FBE5E7]",
    badge: "bg-[#FDC6C7]",
  },
};

export const getRandomColour = () => {
  const colourNames = Object.keys(COLOURS);
  const randomIndex = Math.floor(Math.random() * colourNames.length);
  const randomColourName = colourNames[randomIndex];
  return COLOURS[randomColourName];
};
