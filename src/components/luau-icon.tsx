import Image from "next/image";

interface LuauIconProps {
  size?: number;
  className?: string;
}

export default function LuauIcon({ size = 24, className }: LuauIconProps) {
  return (
    <div className={`flex items-center justify-center ${className || ""}`} style={{ width: size, height: size }}>
      <Image src="/luau_logo.png" alt="Luau" width={size} height={size} className="object-contain" />
    </div>
  );
}
