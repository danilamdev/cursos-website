export const EmailIcon = ({ classname }) => {
  return (
    <svg
      className={classname}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 45 45"
    >
      <g
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3.64}
        clipPath="url(#a)"
      >
        <path d="M37.271 7.849H8.153a3.64 3.64 0 0 0-3.64 3.64v21.838a3.64 3.64 0 0 0 3.64 3.64H37.27a3.64 3.64 0 0 0 3.64-3.64V11.488a3.64 3.64 0 0 0-3.64-3.64Z" />
        <path d="M40.91 13.308 24.587 23.68a3.53 3.53 0 0 1-3.749 0L4.513 13.308" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M.873.568H44.55v43.678H.873z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const CopyIcon = ({ classname }) => {
  return (
    <svg
      className={classname}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 45 45"
    >
      <path
        stroke="#3D4357"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={0.86}
        strokeWidth={3.706}
        d="M37.227 16.849H20.55a3.706 3.706 0 0 0-3.706 3.706v16.677a3.706 3.706 0 0 0 3.706 3.706h16.677a3.706 3.706 0 0 0 3.706-3.706V20.555a3.706 3.706 0 0 0-3.706-3.706Z"
      />
      <path
        stroke="#3D4357"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={0.86}
        strokeWidth={3.706}
        d="M9.431 27.966H7.578a3.706 3.706 0 0 1-3.706-3.707V7.582a3.706 3.706 0 0 1 3.706-3.706h16.678a3.706 3.706 0 0 1 3.706 3.706v1.853"
      />
  </svg>
  )
}

export const CheckIcon = ({ classname })=> {
  return (
    <svg
      className={classname}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="m5 12 5 5L20 7" />
    </svg>
  )
}