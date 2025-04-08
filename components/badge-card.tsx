import Image from "next/image"

interface BadgeCardProps {
  title: string
  description: string
  image: string
  color: string
  locked?: boolean
}

export function BadgeCard({ title, description, image, color, locked = false }: BadgeCardProps) {
  return (
    <div
      className={`bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-center hover:border-zinc-700 transition-all duration-300 ${locked ? "opacity-50" : ""}`}
    >
      <div className="relative w-24 h-24 mx-auto mb-4">
        <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${color} opacity-20 blur-md`}></div>
        <div className="relative z-10">
          <Image src={image || "/placeholder.svg"} width={100} height={100} alt={title} className="rounded-full p-2" />
          {locked && (
            <div className="absolute inset-0 bg-black/60 rounded-full flex items-center justify-center">
              <LockIcon className="h-8 w-8 text-zinc-400" />
            </div>
          )}
        </div>
      </div>
      <h3 className="text-lg font-bold mb-1">{title}</h3>
      <p className="text-sm text-zinc-400">{description}</p>
    </div>
  )
}

function LockIcon({ className, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

