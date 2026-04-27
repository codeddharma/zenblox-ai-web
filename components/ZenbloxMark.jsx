import Image from 'next/image';

export default function ZenbloxMark({ size = 18, variant = 'dark', style }) {
  const src = variant === 'cream' ? '/assets/zenblox-logo-cream.png' : '/assets/zenblox-logo.png';
  return (
    <Image
      src={src}
      alt="Zenblox"
      width={size}
      height={size}
      priority
      style={{ display: 'block', width: size, height: size, objectFit: 'contain', ...style }}
    />
  );
}
