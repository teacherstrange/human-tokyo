import * as React from 'react';

export default function Symbol(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={28} height={28} fill="none" {...props}>
      <path
        d="M21 0H7a7 7 0 00-7 7v14a7 7 0 007 7h14a7 7 0 007-7V7a7 7 0 00-7-7zM7 17.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7zm14 0a3.5 3.5 0 110-7 3.5 3.5 0 010 7z"
        fill="var(--color-white-100)"
      />
    </svg>
  );
}
