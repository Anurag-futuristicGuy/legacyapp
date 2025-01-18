import Image from 'next/image'

export function Logo({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Image
        src="/logo.png"
        alt="LegacyLeeink Logo"
        width={120}
        height={40}
        className="dark:brightness-200"
      />
    </div>
  )
}

