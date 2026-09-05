export default function OrangutanLogo({ size = 40, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="Glenn Rojas"
    >
      <defs>
        <linearGradient id="faceGrad" x1="30" y1="20" x2="70" y2="85" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#D98A3D" />
          <stop offset="1" stopColor="#A6420E" />
        </linearGradient>
        <g id="tuft">
          <path d="M44,30 Q50,8 56,30 Q50,20 44,30 Z" />
        </g>
      </defs>

      <g fill="#7A2F09">
        <use href="#tuft" transform="rotate(-58 50 55)" />
        <use href="#tuft" transform="rotate(-29 50 55)" />
        <use href="#tuft" transform="rotate(0 50 55)" />
        <use href="#tuft" transform="rotate(29 50 55)" />
        <use href="#tuft" transform="rotate(58 50 55)" />
      </g>

      <circle cx="50" cy="55" r="27" fill="url(#faceGrad)" />
      <path
        d="M25,40 C32,27 48,24 59,33 C61,38 58,44 52,47 C43,52 30,52 24,47 C22,45 23,42 25,40 Z"
        fill="#1E1712"
      />
      <circle cx="65" cy="57" r="3.6" fill="#1E1712" />
      <path
        d="M41,73 Q50,79 60,72"
        fill="none"
        stroke="#1E1712"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  )
}
