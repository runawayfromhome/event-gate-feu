import React from "react";

const SignUpIcon = ({ className = "", ...props }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`h-5 w-5 ${className}`.trim()}
    {...props}
  >
    <path d="M12 3a9 9 0 1 0 9 9 9 9 0 0 0-9-9zm0 16.2a7.2 7.2 0 1 1 7.2-7.2 7.2 7.2 0 0 1-7.2 7.2z" />
    <path d="M12.75 8.25h-1.5v3.75H7.5v1.5h3.75v3.75h1.5v-3.75h3.75v-1.5h-3.75z" fillOpacity="0.9" />
  </svg>
);

export default SignUpIcon;
