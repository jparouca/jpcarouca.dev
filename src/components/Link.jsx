import NextLink from "next/link";

export const Link = ({ href = "#", ...rest }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="link break-words after:content-['_↗']"
      {...rest}
    />
  );
};
