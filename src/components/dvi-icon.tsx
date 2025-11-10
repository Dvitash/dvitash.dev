import Image from "next/image";

interface DviIconProps {
  size?: number;
  className?: string;
}

export default function DviIcon({ size = 24, className }: DviIconProps) {
  return (
    <div className={`flex items-center justify-center ${className || ""}`} style={{ width: size, height: size }}>
      <Image src="/dvi_logo.svg" alt="Dvi" width={size} height={size} className="object-contain" />
    </div>
  );
}
