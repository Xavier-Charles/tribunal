export async function authenticate(props) {
  try {
    const user = await Moralis.authenticate(props);
    return user;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export const truncateWithEllipsis = (s, n, type) => {
  const maxLen = n !== undefined ? n : 12;
  
  if (s.length > maxLen) {
    if (type === "end") {
      return `${s.substr(0, maxLen)}...`;
    }
    return `${s.substr(0, Math.floor(maxLen / 2))}...${s.substr(
      s.length - Math.floor(maxLen / 2)
    )}`;
  }
  return s;
};

export const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};
