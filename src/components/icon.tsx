import Image from "next/image";

interface IconProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}

export default function Icon({ src, alt, size = 24, className }: IconProps) {
  return (
    <div className={`flex items-center justify-center ${className || ""}`} style={{ width: size, height: size }}>
      <Image src={src} alt={alt} width={size} height={size} className="object-contain" />
    </div>
  );
}

const ICONS = {
  java: { src: "/java_logo.svg", alt: "Java" },
  luau: { src: "/luau_logo.png", alt: "Luau" },
  "nexus-blast": { src: "/nexus_blast_logo.png", alt: "Nexus Blast" },
  dvi: { src: "/dvi_logo_light.svg", alt: "Dvi" },
} as const;

type IconName = keyof typeof ICONS;

interface NamedIconProps {
  name: IconName;
  size?: number;
  className?: string;
}

export function NamedIcon({ name, size = 24, className }: NamedIconProps) {
  const icon = ICONS[name];
  return <Icon src={icon.src} alt={icon.alt} size={size} className={className} />;
}
