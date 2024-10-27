import clsx from 'clsx'

export function Logomark({ invert = false, filled = false, ...props }) {
  // Logomark functionality can be defined here if needed
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}) {
  return (
    <svg
      viewBox="0 0 250 32" // Adjusted viewBox width for longer text
      aria-hidden="true"
      className={clsx(fillOnHover && 'group/logo', className)}
      {...props}
    >
      <Logomark
        preserveAspectRatio="xMinYMid meet"
        invert={invert}
        filled={filled}
      />
      <text
        style={{
          fontFamily: 'Mona Sans',
          fill: invert ? 'white' : 'black',
          fontWeight: 'bold',
        }}
        x="1"
        y="24"
        fontSize="24"
      >
        Teleta Development
      </text>
    </svg>
  )
}
