const UpArrow = (props: TCloseProps) => {
  return (
    <svg {...props} width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_1263_4045)">
        <path d="M5.5 1L9.5 5L13.5 1" stroke="#03237C" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" shapeRendering="crispEdges" />
      </g>
      <defs>
        <filter id="filter0_d_1263_4045" x="0.5" y="0" width="18" height="14" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1263_4045" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1263_4045" result="shape" />
        </filter>
      </defs>
    </svg>
  )
}

export default UpArrow;
