import React from "react";

const HomeIcon = ({ className = "", ...props }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`h-5 w-5 ${className}`.trim()}
    {...props}
  >
    <path d="M3 9.75L12 3l9 6.75V21a1.5 1.5 0 0 1-1.5 1.5H4.5A1.5 1.5 0 0 1 3 21V9.75z" />
    <path d="M9 21V12h6v9" fillOpacity="0.5" />
  </svg>
);

export default HomeIcon;
