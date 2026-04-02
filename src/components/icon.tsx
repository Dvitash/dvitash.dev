import Image from "next/image";

interface IconProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
  tintWithAccent?: boolean;
}

export default function Icon({ src, alt, size = 24, className, tintWithAccent = false }: IconProps) {
  return (
    <div className={`flex items-center justify-center ${className || ""}`} style={{ width: size, height: size }}>
      <Image 
        src={src} 
        alt={alt} 
        width={size} 
        height={size} 
        className="object-contain"
        style={tintWithAccent ? {
          // Apply filter to match the accent color using CSS custom property
          filter: "brightness(0) saturate(100%) var(--icon-accent-filter)"
        } : undefined}
      />
    </div>
  );
}

const ICONS = {
  java: { src: "/java_logo.svg", alt: "Java" },
  luau: { src: "/luau_logo.png", alt: "Luau" },
  "nexus-blast": { src: "/nexus_blast_logo.png", alt: "Nexus Blast" },
  archipelago: { src: "/archipelago.svg", alt: "Archipelago" },
} as const;

type IconName = keyof typeof ICONS;

interface NamedIconProps {
  name: IconName;
  size?: number;
  className?: string;
  tintWithAccent?: boolean;
}

export function NamedIcon({ name, size = 24, className, tintWithAccent = false }: NamedIconProps) {
  const icon = ICONS[name];
  return <Icon src={icon.src} alt={icon.alt} size={size} className={className} tintWithAccent={tintWithAccent} />;
}
