import * as React from "react";

export const GithubIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
);

export const LinkedInIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width={256} height={256} fill="#fff" rx={60} />
      <rect width={256} height={256} fill="#0A66C2" rx={60} />
      <path
        fill="#fff"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
);

export const SunIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);

export const CircularText = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1080"
    height="1080"
    viewBox="0 0 1080 1080"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <g
      transform="translate(0.000000,1080.000000) scale(0.100000,-0.100000)"
      stroke="none"
    >
      <path
        d="M5650 9852 c0 -5 -40 -264 -90 -577 -49 -313 -90 -578 -90 -590 0
-19 9 -22 83 -33 45 -7 99 -15 120 -18 34 -6 37 -5 37 17 0 13 3 34 6 45 5 20
9 18 53 -26 72 -72 138 -94 281 -95 108 0 119 2 181 31 114 54 187 137 227
259 79 238 -8 464 -216 563 -65 31 -86 36 -172 40 -94 4 -101 3 -165 -26 l-66
-31 6 32 c20 115 55 349 55 365 0 17 -14 22 -104 36 -118 18 -146 20 -146 8z
m461 -609 c40 -21 61 -40 84 -77 26 -44 30 -58 30 -125 -1 -155 -86 -254 -220
-255 -147 0 -234 99 -223 253 14 185 172 283 329 204z"
      />
      <path
        d="M3928 9599 c-60 -33 -108 -61 -108 -62 0 -2 38 -188 84 -415 46 -227
82 -412 79 -412 -2 0 -140 124 -306 276 -166 152 -307 278 -314 281 -14 6
-213 -108 -213 -122 0 -5 36 -190 79 -410 44 -220 78 -401 76 -403 -2 -2 -141
123 -310 278 l-306 282 -112 -62 c-62 -35 -115 -65 -119 -69 -6 -6 861 -800
883 -809 5 -2 170 86 246 133 1 0 -33 180 -76 398 -43 219 -74 396 -70 395 4
-2 121 -107 260 -234 140 -126 272 -246 294 -266 l41 -36 116 66 c64 37 119
70 123 73 6 7 -219 1126 -233 1161 -6 15 -21 10 -114 -43z"
      />
      <path
        d="M4823 9486 c-118 -30 -237 -113 -289 -203 -79 -134 -84 -315 -13
-455 28 -54 103 -134 157 -165 140 -82 372 -86 538 -7 51 24 155 113 153 131
0 8 -107 99 -135 116 -8 5 -30 -5 -58 -27 -67 -51 -129 -71 -216 -70 -78 0
-122 15 -168 58 -24 21 -57 75 -50 81 2 2 147 22 323 45 176 23 324 45 328 49
11 11 -10 132 -34 193 -43 109 -128 194 -239 239 -68 27 -220 35 -297 15z
m172 -187 c52 -13 117 -66 135 -109 7 -17 11 -33 8 -35 -7 -7 -388 -56 -408
-53 -16 3 -16 8 -5 53 22 83 109 148 208 154 10 1 38 -4 62 -10z"
      />
      <path
        d="M7426 9277 c-59 -80 -626 -899 -626 -905 0 -8 442 -315 502 -350 129
-73 329 -103 454 -67 100 29 169 72 248 156 80 84 137 187 157 278 16 77 7
223 -19 295 -29 79 -89 169 -159 238 -32 31 -165 131 -295 222 l-238 165 -24
-32z m381 -494 c132 -129 144 -300 33 -456 -91 -127 -231 -175 -379 -131 -46
13 -321 186 -321 201 0 3 90 135 201 294 l200 288 107 -72 c58 -40 130 -95
159 -124z"
      />
      <path
        d="M8200 8076 c-156 -45 -283 -166 -324 -305 -23 -79 -20 -192 7 -272
49 -144 162 -281 279 -338 59 -29 148 -52 148 -38 0 3 7 41 15 84 19 101 19
113 -3 113 -10 0 -42 12 -71 26 -97 49 -179 184 -169 278 5 44 35 116 48 116
4 0 96 -117 204 -260 108 -143 199 -260 202 -260 14 0 94 63 133 105 118 128
144 321 65 479 -60 121 -160 214 -273 257 -70 26 -198 34 -261 15z m213 -217
c49 -13 115 -73 138 -124 26 -57 24 -140 -4 -190 -12 -22 -28 -40 -34 -40 -18
0 -264 333 -252 341 38 23 98 28 152 13z"
      />
      <path
        d="M2061 7813 l-74 -127 56 -245 c31 -135 54 -247 53 -249 -2 -1 -133
74 -291 168 -158 93 -290 170 -294 170 -3 0 -34 -48 -68 -107 -55 -96 -60
-108 -45 -118 31 -22 1021 -605 1026 -605 5 0 126 205 126 214 0 3 -42 30 -94
61 l-94 56 -20 82 c-12 45 -20 82 -19 83 1 1 85 14 187 29 102 14 199 28 217
31 29 5 40 20 109 135 42 71 75 131 73 133 -2 1 -143 -16 -314 -39 -170 -23
-312 -41 -315 -39 -3 1 -35 113 -70 248 -36 135 -67 246 -70 246 -3 0 -38 -58
-79 -127z"
      />
      <path
        d="M8672 7072 c-182 -180 -332 -331 -332 -337 0 -5 21 -62 46 -126 l47
-117 469 -7 c258 -4 472 -5 475 -2 3 4 -13 53 -36 110 l-42 104 -61 7 c-34 3
-177 6 -319 6 -143 0 -259 3 -259 8 0 4 101 106 226 227 l226 220 -45 115
c-25 63 -49 115 -54 117 -4 1 -158 -145 -341 -325z"
      />
      <path
        d="M1684 6846 c-240 -112 -326 -492 -164 -719 93 -130 280 -206 436
-178 187 35 327 178 380 391 33 131 1 286 -76 372 l-39 43 -66 -65 c-90 -89
-91 -90 -56 -145 39 -62 47 -111 26 -180 -20 -69 -71 -128 -130 -151 -100 -38
-249 8 -310 94 -27 40 -30 51 -30 121 0 69 3 83 30 126 21 34 45 56 80 74 28
14 52 27 54 28 2 2 -6 50 -19 108 -26 120 -28 122 -116 81z"
      />
      <path
        d="M8888 6281 c-195 -63 -308 -230 -308 -457 0 -152 51 -292 137 -375
l45 -44 64 70 c35 39 64 75 64 81 0 6 -12 21 -26 35 -89 83 -106 268 -34 368
31 42 87 79 100 64 4 -4 22 -141 39 -303 18 -162 35 -306 38 -319 6 -23 8 -24
79 -18 124 9 238 72 311 170 153 209 90 545 -129 683 -100 64 -261 83 -380 45z
m297 -255 c77 -41 121 -158 96 -254 -14 -50 -68 -114 -111 -132 -17 -7 -33
-10 -36 -8 -2 3 -13 81 -24 174 -11 93 -22 188 -25 211 l-6 43 33 -6 c18 -4
51 -16 73 -28z"
      />
      <path
        d="M1567 5809 c-184 -43 -277 -204 -264 -454 5 -101 31 -206 68 -275 36
-68 29 -67 122 -16 l85 46 -28 58 c-90 182 -45 382 90 394 l35 3 6 -180 c6
-207 21 -264 86 -327 50 -49 99 -68 173 -68 103 0 177 46 226 142 66 129 44
342 -42 418 l-35 30 51 0 50 0 0 120 0 120 -292 -1 c-161 -1 -310 -5 -331 -10z
m384 -262 c48 -32 79 -98 79 -170 0 -95 -34 -139 -107 -139 -52 0 -81 34 -93
107 -11 68 -13 208 -3 218 15 16 91 6 124 -16z"
      />
      <path
        d="M8605 5218 c-3 -29 -7 -87 -8 -128 l-2 -75 575 -52 c316 -28 587 -52
601 -52 l26 -1 10 123 c6 67 9 124 7 126 -3 3 -1147 109 -1196 111 -4 0 -9
-24 -13 -52z"
      />
      <path
        d="M2085 4964 c-39 -26 -71 -48 -73 -49 -1 -1 9 -24 23 -50 39 -75 29
-136 -28 -167 -41 -22 -382 -96 -388 -84 -4 6 -14 48 -24 92 -10 45 -21 87
-25 94 -6 9 -25 8 -88 -5 -44 -10 -85 -21 -91 -25 -9 -5 -5 -34 12 -109 17
-71 21 -104 13 -106 -6 -2 -53 -14 -104 -26 -89 -20 -93 -22 -88 -44 3 -13 15
-65 27 -117 12 -51 24 -96 28 -100 3 -4 50 4 104 17 l98 23 8 -22 c5 -11 12
-40 16 -63 4 -24 11 -43 17 -43 6 0 50 9 98 20 l87 21 -14 61 c-8 33 -10 64
-6 68 4 4 91 27 193 50 102 23 205 51 230 61 50 22 114 79 136 122 39 73 36
198 -7 313 -19 51 -62 114 -77 114 -4 0 -39 -21 -77 -46z"
      />
      <path
        d="M8828 4839 c-292 -41 -480 -417 -353 -706 31 -69 120 -162 189 -197
321 -162 658 47 683 424 9 136 -27 245 -114 341 -93 103 -257 158 -405 138z
m129 -264 c27 -8 68 -28 91 -45 146 -105 96 -348 -79 -390 -122 -30 -273 46
-309 155 -33 101 15 220 109 268 62 31 113 34 188 12z"
      />
      <path
        d="M2047 4295 c-51 -19 -117 -68 -144 -108 -12 -17 -29 -59 -38 -92 -19
-73 -15 -124 27 -325 17 -80 31 -171 32 -203 1 -53 -2 -61 -27 -83 -53 -45
-135 -25 -190 48 -61 80 -106 225 -107 341 l0 57 -87 -6 c-146 -9 -137 -2
-129 -94 18 -222 127 -443 271 -552 165 -125 398 -82 482 90 25 51 28 67 27
152 -1 66 -11 139 -33 238 -39 179 -40 230 -5 271 51 61 135 34 199 -62 67
-101 115 -291 100 -400 l-6 -49 105 4 c57 1 108 7 113 11 15 16 6 181 -16 272
-26 107 -102 267 -164 346 -49 61 -147 133 -205 149 -51 14 -160 11 -205 -5z"
      />
      <path
        d="M7987 4090 c-37 -55 -67 -102 -67 -105 0 -2 75 -55 166 -116 l167
-111 -51 -17 c-166 -56 -285 -271 -254 -459 16 -93 55 -167 128 -238 114 -113
275 -170 407 -146 137 26 261 121 324 249 24 50 28 70 28 145 0 49 1 88 3 88
2 0 20 -11 40 -25 20 -14 39 -21 43 -17 17 19 130 194 127 196 -14 13 -973
648 -982 652 -7 3 -40 -37 -79 -96z m519 -504 c60 -28 120 -85 140 -132 19
-46 17 -131 -5 -180 -24 -53 -91 -109 -147 -123 -140 -36 -314 97 -314 239 0
165 171 268 326 196z"
      />
      <path
        d="M2613 2811 l-422 -427 90 -90 89 -89 425 425 c234 234 425 430 425
435 0 14 -163 175 -175 174 -6 0 -200 -193 -432 -428z"
      />
      <path
        d="M7676 3078 c-202 -38 -412 -241 -433 -417 l-6 -50 34 -6 c75 -13 159
-21 164 -17 3 3 5 15 5 26 1 38 38 104 85 151 58 58 134 95 198 95 48 0 109
-19 121 -38 3 -6 -105 -104 -241 -218 -137 -113 -249 -210 -251 -213 -5 -15
60 -92 114 -135 183 -144 419 -122 597 55 187 186 194 443 17 633 -112 119
-248 164 -404 134z m301 -424 c59 -165 -141 -342 -297 -262 -25 13 -45 28 -45
34 0 14 307 273 319 270 5 -1 16 -20 23 -42z"
      />
      <path
        d="M2983 2476 c-200 -261 -363 -478 -363 -483 1 -7 151 -126 185 -145 9
-5 127 142 376 467 200 261 364 479 364 484 0 10 -179 151 -192 151 -4 0 -171
-214 -370 -474z"
      />
      <path
        d="M3447 2313 l-186 -398 111 -52 c61 -29 114 -53 117 -53 3 0 28 49 56
108 164 356 180 382 250 413 52 24 110 24 160 -1 78 -37 107 -77 107 -148 -1
-58 -13 -89 -132 -341 -50 -106 -89 -195 -87 -197 16 -16 221 -104 227 -97 16
16 228 480 244 532 58 195 -40 368 -250 442 -47 16 -74 19 -134 16 -41 -3 -86
-9 -98 -13 l-24 -7 21 41 c12 23 21 44 21 47 0 5 -204 105 -214 105 -1 0 -86
-179 -189 -397z"
      />
      <path
        d="M6935 2608 c-55 -28 -101 -51 -103 -53 -1 -1 45 -99 103 -216 112
-227 129 -282 106 -352 -15 -44 -70 -101 -124 -128 -23 -12 -44 -23 -46 -26
-8 -7 93 -203 104 -203 22 0 121 79 148 117 14 21 34 58 44 81 l19 44 23 -50
24 -51 108 55 109 54 -195 390 c-107 215 -201 390 -208 389 -6 0 -57 -23 -112
-51z"
      />
      <path
        d="M5962 2270 c-47 -29 -72 -76 -72 -135 0 -121 120 -193 230 -137 104
52 109 210 8 272 -44 27 -122 27 -166 0z"
      />
      <path
        d="M5039 2228 c0 -2 -15 -93 -32 -203 -26 -158 -35 -200 -47 -198 -8 1
-124 18 -258 39 -134 20 -245 35 -247 32 -6 -5 -37 -199 -33 -203 2 -2 116
-20 253 -41 138 -20 254 -41 258 -45 5 -4 -1 -68 -12 -143 -12 -74 -21 -138
-21 -141 0 -10 -48 -5 -308 35 -144 22 -268 40 -275 40 -10 0 -19 -30 -30
-102 -9 -57 -15 -103 -14 -104 3 -2 852 -131 854 -130 3 2 173 1129 171 1131
-11 8 -257 39 -259 33z"
      />
    </g>
  </svg>
);

export const LinkArrow = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
);
