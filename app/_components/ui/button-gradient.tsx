"use client"

interface ButtonProps {
  title?: string
  icon?: React.ReactNode
  position?: string
  handleClick?: () => void
  otherClasses?: string
}

export const ButtonGradient = ({ title, icon, position, handleClick, otherClasses }: ButtonProps) => {
  return (
    <div
      className="group relative inline-flex h-11 overflow-hidden rounded-full group-hover:p-0 p-[2px] focus:outline-none"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className={`px-4 inline-flex h-full cursor-pointer items-center justify-center font-code text-sm font-bold uppercase text-white rounded-full backdrop-blur-3xl bg-primary group-hover:bg-gradient-violet ${otherClasses}`}>
        <div className="text-xl lg:text-xl">
          {position === "left" && icon}
        </div>
        {title && (
          <div className="px-1">
            {title}
          </div>
        )}
        <div className="text-xl lg:text-xl">
          {position === "right" && icon}
        </div>
      </span>
    </div>
  )
}