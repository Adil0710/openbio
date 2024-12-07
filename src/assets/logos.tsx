import React from "react";

const logos = {
  spotify: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="24" // Adjust the width
      height="24" // Adjust the height
      id="spotify"
      className="icon-shadow" // Apply shadow class here
    >
      <rect
        width="44"
        height="44"
        x="2"
        y="2"
        fill="#1EC85A"
        rx="9.04"
        stroke="#404040"
        strokeWidth="0.3"
      ></rect>
      <path
        fill="#fff"
        d="M24.08,10.29A13.79,13.79,0,1,0,37.86,24.07,13.79,13.79,0,0,0,24.08,10.29Zm6.34,19.92a.82.82,0,0,1-1.17.27c-3.24-2-7.31-2.41-12.13-1.31a.86.86,0,0,1-1-.62.87.87,0,0,1,.62-1c5.24-1.17,9.79-.69,13.37,1.52A.83.83,0,0,1,30.42,30.21Zm1.65-3.79a1,1,0,0,1-1.45.34,17.86,17.86,0,0,0-13.71-1.58,1,1,0,1,1-.62-2A20.12,20.12,0,0,1,31.79,25,1,1,0,0,1,32.07,26.42Zm.14-3.86c-4.41-2.62-11.79-2.9-16-1.59a1.28,1.28,0,0,1-1.58-.82,1.29,1.29,0,0,1,.82-1.59c4.9-1.45,13-1.17,18.06,1.86A1.34,1.34,0,0,1,34,22.21,1.44,1.44,0,0,1,32.21,22.56Z"
      ></path>
    </svg>
  ),
  instagram: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="102"
      height="102"
      viewBox="0 0 102 102"
      id="instagram"
      stroke="#404040"
      strokeWidth="0.5"
      className="icon-shadow" // Apply shadow class here
    >
      <defs>
        <radialGradient
          id="a"
          cx="6.601"
          cy="99.766"
          r="129.502"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".09" stop-color="#fa8f21"></stop>
          <stop offset=".78" stop-color="#d82d7e"></stop>
        </radialGradient>
        <radialGradient
          id="b"
          cx="70.652"
          cy="96.49"
          r="113.963"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".64" stop-color="#8c3aaa" stop-opacity="0"></stop>
          <stop offset="1" stop-color="#8c3aaa"></stop>
        </radialGradient>
      </defs>
      <path
        fill="url(#a)"
        d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
      ></path>
      <path
        fill="url(#b)"
        d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
      ></path>
      <path
        fill="#fff"
        d="M461.114,477.413a12.631,12.631,0,1,1,12.629,12.632,12.631,12.631,0,0,1-12.629-12.632m-6.829,0a19.458,19.458,0,1,0,19.458-19.458,19.457,19.457,0,0,0-19.458,19.458m35.139-20.229a4.547,4.547,0,1,0,4.549-4.545h0a4.549,4.549,0,0,0-4.547,4.545m-30.99,51.074a20.943,20.943,0,0,1-7.037-1.3,12.547,12.547,0,0,1-7.193-7.19,20.923,20.923,0,0,1-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082,21.082,0,0,1,1.3-7.037,12.54,12.54,0,0,1,7.193-7.193,20.924,20.924,0,0,1,7.037-1.3c3.994-.184,5.194-.22,15.309-.22s11.316.039,15.314.221a21.082,21.082,0,0,1,7.037,1.3,12.541,12.541,0,0,1,7.193,7.193,20.926,20.926,0,0,1,1.3,7.037c.184,4,.22,5.194.22,15.314s-.037,11.316-.22,15.314a21.023,21.023,0,0,1-1.3,7.037,12.547,12.547,0,0,1-7.193,7.19,20.925,20.925,0,0,1-7.037,1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786,27.786,0,0,0-9.2,1.76,19.373,19.373,0,0,0-11.083,11.083,27.794,27.794,0,0,0-1.76,9.2c-.187,4.04-.229,5.332-.229,15.623s.043,11.582.229,15.623a27.793,27.793,0,0,0,1.76,9.2,19.374,19.374,0,0,0,11.083,11.083,27.813,27.813,0,0,0,9.2,1.76c4.042.184,5.332.229,15.623.229s11.582-.043,15.623-.229a27.8,27.8,0,0,0,9.2-1.76,19.374,19.374,0,0,0,11.083-11.083,27.716,27.716,0,0,0,1.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786,27.786,0,0,0-1.76-9.2,19.379,19.379,0,0,0-11.08-11.083,27.748,27.748,0,0,0-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229"
        transform="translate(-422.637 -426.196)"
      ></path>
    </svg>
  ),
  gmail: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      id="gmail"
      stroke="#404040"
      strokeWidth="0.1"
      className="icon-shadow" // Apply shadow class here
    >
      <path
        fill="#ea4435"
        d="M16.58,19.1068l-12.69-8.0757A3,3,0,0,1,7.1109,5.97l9.31,5.9243L24.78,6.0428A3,3,0,0,1,28.22,10.9579Z"
      ></path>
      <path
        fill="#00ac47"
        d="M25.5,5.5h4a0,0,0,0,1,0,0v18a3,3,0,0,1-3,3h0a3,3,0,0,1-3-3V7.5a2,2,0,0,1,2-2Z"
        transform="rotate(180 26.5 16)"
      ></path>
      <path
        fill="#ffba00"
        d="M29.4562,8.0656c-.0088-.06-.0081-.1213-.0206-.1812-.0192-.0918-.0549-.1766-.0823-.2652a2.9312,2.9312,0,0,0-.0958-.2993c-.02-.0475-.0508-.0892-.0735-.1354A2.9838,2.9838,0,0,0,28.9686,6.8c-.04-.0581-.09-.1076-.1342-.1626a3.0282,3.0282,0,0,0-.2455-.2849c-.0665-.0647-.1423-.1188-.2146-.1771a3.02,3.02,0,0,0-.24-.1857c-.0793-.0518-.1661-.0917-.25-.1359-.0884-.0461-.175-.0963-.267-.1331-.0889-.0358-.1837-.0586-.2766-.0859s-.1853-.06-.2807-.0777a3.0543,3.0543,0,0,0-.357-.036c-.0759-.0053-.1511-.0186-.2273-.018a2.9778,2.9778,0,0,0-.4219.0425c-.0563.0084-.113.0077-.1689.0193a33.211,33.211,0,0,0-.5645.178c-.0515.022-.0966.0547-.1465.0795A2.901,2.901,0,0,0,23.5,8.5v5.762l4.72-3.3043a2.8878,2.8878,0,0,0,1.2359-2.8923Z"
      ></path>
      <path
        fill="#4285f4"
        d="M5.5,5.5h0a3,3,0,0,1,3,3v18a0,0,0,0,1,0,0h-4a2,2,0,0,1-2-2V8.5a3,3,0,0,1,3-3Z"
      ></path>
      <path
        fill="#c52528"
        d="M2.5439,8.0656c.0088-.06.0081-.1213.0206-.1812.0192-.0918.0549-.1766.0823-.2652A2.9312,2.9312,0,0,1,2.7426,7.32c.02-.0475.0508-.0892.0736-.1354A2.9719,2.9719,0,0,1,3.0316,6.8c.04-.0581.09-.1076.1342-.1626a3.0272,3.0272,0,0,1,.2454-.2849c.0665-.0647.1423-.1188.2147-.1771a3.0005,3.0005,0,0,1,.24-.1857c.0793-.0518.1661-.0917.25-.1359A2.9747,2.9747,0,0,1,4.3829,5.72c.089-.0358.1838-.0586.2766-.0859s.1853-.06.2807-.0777a3.0565,3.0565,0,0,1,.357-.036c.076-.0053.1511-.0186.2273-.018a2.9763,2.9763,0,0,1,.4219.0425c.0563.0084.113.0077.169.0193a2.9056,2.9056,0,0,1,.286.0888,2.9157,2.9157,0,0,1,.2785.0892c.0514.022.0965.0547.1465.0795a2.9745,2.9745,0,0,1,.3742.21A2.9943,2.9943,0,0,1,8.5,8.5v5.762L3.78,10.9579A2.8891,2.8891,0,0,1,2.5439,8.0656Z"
      ></path>
    </svg>
  ),
  linkedin: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#fff"
      aria-label="LinkedIn"
      viewBox="0 0 512 512"
      id="linkedin"
      className="icon-shadow" // Apply shadow class here
    >
      <rect
        width="512"
        height="512"
        fill="#0077b5"
        rx="15%"
        stroke="#404040"
        strokeWidth="5"
      ></rect>
      <circle cx="142" cy="138" r="37"></circle>
      <path stroke="#fff" stroke-width="66" d="M244 194v198M142 194v198"></path>
      <path d="M276 282c0-20 13-40 36-40 24 0 33 18 33 45v105h66V279c0-61-32-89-76-89-34 0-51 19-59 32"></path>
    </svg>
  ),
  github: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="GitHub"
      viewBox="0 0 512 512"
      id="github"
      className="icon-shadow" // Apply shadow class here
    >
      <rect
        width="512"
        height="512"
        fill="#1B1817"
        rx="15%"
        stroke="#ccc"
        strokeWidth="1"
      ></rect>
      <path
        fill="#fff"
        d="M335 499c14 0 12 17 12 17H165s-2-17 12-17c13 0 16-6 16-12l-1-50c-71 16-86-28-86-28-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 39 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-67 0 0 21-7 70 26 42-12 86-12 128 0 49-33 70-26 70-26 14 35 6 61 3 67 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48l-1 70c0 6 3 12 16 12z"
      ></path>
    </svg>
  ),
  youtube: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#ed1d24"
      aria-label="YouTube"
      viewBox="0 0 512 512"
      id="youtube"
      className="icon-shadow" // Apply shadow class here
    >
      <rect
        width="512"
        height="512"
        rx="15%"
        stroke="#404040"
        strokeWidth="4"
      ></rect>
      <path
        fill="#fff"
        d="m427 169c-4-15-17-27-32-31-34-9-239-10-278 0-15 4-28 16-32 31-9 38-10 135 0 174 4 15 17 27 32 31 36 10 241 10 278 0 15-4 28-16 32-31 9-36 9-137 0-174"
      ></path>
      <path d="m220 203v106l93-53"></path>
    </svg>
  ),
  twitter: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      id="twitter"
      className="icon-shadow" // Apply shadow class here
    >
      <path
        fill="#050505"
        fill-rule="evenodd"
        d="m60,12c0-4.42-3.58-8-8-8H12C7.58,4,4,7.58,4,12v40c0,4.42,3.58,8,8,8h40c4.42,0,8-3.58,8-8V12h0Z"
        stroke="#ccc"
        strokeWidth="1"
      ></path>
      <path
        fill="#fff"
        d="m15.07,48.28h4l10.68-12.14,9.29,12.12h10.86l-14.25-18.84,12.06-13.7h-4l-9.91,11.26-8.5-11.25h-11.21l13.79,17.99-12.82,14.57Zm5.11-29.56h3.64l20.06,26.54h-3.35l-20.34-26.54Z"
      ></path>
    </svg>
  ),
  threads: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      id="threads"
      className="icon-shadow" // Apply shadow class here
    >
      <path
        fill="#020202"
        fill-rule="evenodd"
        d="m60,12c0-4.42-3.58-8-8-8H12C7.58,4,4,7.58,4,12v40c0,4.42,3.58,8,8,8h40c4.42,0,8-3.58,8-8V12h0Z"
        stroke="#ccc"
        strokeWidth="1"
      ></path>
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="m42.02,30.09c-.47-5.07-3.69-9.59-9.77-9.59-4.41,0-6.41,2.3-7.01,3.16l3.23,2.35s.01,0,.01-.02c0,0,1.04-1.49,3.76-1.49,3,0,4.75,1.89,5.45,4.27-1.13-.2-2.15-.27-2.95-.27-3.96,0-6.49,1.14-8.06,2.57-1.79,1.62-2.44,3.69-2.44,5.43,0,4.75,4.82,6.5,8,6.5,5.11,0,8.44-3.86,9.48-8.46,1.72,1.26,3.02,3.28,3.02,6.46,0,1.19-.61,2.61-1.75,3.91-1.98,2.27-5.54,4.09-10.75,4.09-3.97,0-7.59-1.28-10.21-4.02-2.7-2.82-4.29-7.13-4.29-12.98s2-17.04,14.49-17c11.99.03,14,9.17,14.04,9.35l3.86-1.07c-.47-1.95-3.62-12.24-17.88-12.28-15.65-.05-18.51,13.95-18.51,21s2.12,12.3,5.4,15.74c3.37,3.52,7.99,5.26,13.1,5.26,11.5,0,16.5-7.41,16.5-12,0-6.06-3.21-9.27-6.73-10.91Zm-9.77,8.91c-.86,0-1.98-.18-2.88-.69-.62-.36-1.12-.92-1.12-1.81,0-1.86,1.68-4,6.5-4,.81,0,1.98.09,3.22.38-.44,3.16-2.32,6.12-5.72,6.12Z"
      ></path>
    </svg>
  ),
};

export default logos;
