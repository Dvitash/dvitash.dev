import Image from "next/image";

interface JavaIconProps {
  size?: number;
  className?: string;
}

export default function JavaIcon({ size = 24, className }: JavaIconProps) {
  return (
    <div className={`flex items-center justify-center ${className || ""}`} style={{ width: size, height: size }}>
      <Image src="/java_logo.png" alt="Java" width={size} height={size} className="object-contain" />
    </div>
  );
}
