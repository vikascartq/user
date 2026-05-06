
export default function GreenDotIcon() {
    return <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="none"
        viewBox="0 0 18 18"
    >
        <circle cx="9" cy="9" r="6" fill="#21DB00" fillOpacity="0.54"></circle>
        <g filter="url(#filter0_d_4237_383)">
            <circle cx="9" cy="9" r="4" fill="#21DB00"></circle>
        </g>
        <defs>
            <filter
                id="filter0_d_4237_383"
                width="18"
                height="18"
                x="0"
                y="0"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                ></feColorMatrix>
                <feMorphology
                    in="SourceAlpha"
                    operator="dilate"
                    radius="1"
                    result="effect1_dropShadow_4237_383"
                ></feMorphology>
                <feOffset></feOffset>
                <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out"></feComposite>
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"></feColorMatrix>
                <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_4237_383"
                ></feBlend>
                <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_4237_383"
                    result="shape"
                ></feBlend>
            </filter>
        </defs>
    </svg>
}
