import React from 'react';

const logos = {
  gmail: 'Gmail.svg', drive: 'googleDrive.svg', meet: 'googleMeet.svg',
  anydesk: 'AnyDesk.svg', chrome: 'googleChrome.svg',
  malwarebytes: 'Malwarebytes.svg', canva: 'Canva.svg',
  openai: 'OpenAI.svg',
};

interface LogoProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

function BrandLogo({ src, alt, size = 32, className, style }: LogoProps & { src: string; alt: string }) {
  return <img src={`/${src}`} alt={alt} width={size} height={size} className={className} style={{ objectFit: 'contain', ...style }} loading="lazy" />;
}

// 1. GMAIL LOGO OFICIAL
export function GmailLogo({ size = 32, className, style }: LogoProps) {
  return <BrandLogo src={logos.gmail} alt="Gmail" size={size} className={className} style={style} />;
}

// 2. GOOGLE DRIVE LOGO OFICIAL
export function GoogleDriveLogo({ size = 32, className, style }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 87.3 78" className={className} style={style} role="img" aria-label="Google Drive">
      <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da" />
      <path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44c-.8 1.4-1.2 2.95-1.2 4.5h27.5z" fill="#00ac47" />
      <path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#ea4335" />
      <path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d" />
      <path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc" />
      <path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00" />
    </svg>
  );
}

// 3. GOOGLE MEET LOGO OFICIAL
export function GoogleMeetLogo({ size = 32, className, style }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className={className} style={style} role="img" aria-label="Google Meet">
      <rect x="4" y="8" width="26" height="32" rx="4" fill="#00832d" />
      <path d="M4 12C4 9.79086 5.79086 8 8 8H30V18L4 15V12Z" fill="#0066da" />
      <path d="M4 33L30 30V40H8C5.79086 40 4 38.2091 4 36V33Z" fill="#00ac47" />
      <path d="M30 18L44 8V40L30 30V18Z" fill="#ea4335" />
      <path d="M30 18L44 8V24L30 20V18Z" fill="#ffba00" />
      <path d="M30 28L44 24V40L30 30V28Z" fill="#2684fc" />
    </svg>
  );
}

// 4. ANYDESK LOGO OFICIAL
export function AnyDeskLogo({ size = 32, className, style }: LogoProps) {
  return <BrandLogo src={logos.anydesk} alt="AnyDesk" size={size} className={className} style={style} />;
}

// 5. MICROSOFT EXCEL LOGO OFICIAL
export function ExcelLogo({ size = 32, className, style }: LogoProps) {
  return <svg width={size} height={size} viewBox="0 0 48 48" className={className} style={style} aria-label="Microsoft Excel"><path fill="#185c37" d="M26 5h17v38H26z"/><path fill="#21a366" d="M31 5h12v38H31z"/><path fill="#107c41" d="M26 16h17v16H26z"/><path fill="#107c41" stroke="#fff" strokeWidth="1.5" d="M5 10h24v28H5z"/><path fill="#fff" d="m11 17 4.5 6.5L20 17h4l-6 8 6 8h-4l-4.5-6.5L11 33H7l6-8-6-8z"/></svg>;
}

// 6. MICROSOFT WORD LOGO OFICIAL
export function WordLogo({ size = 32, className, style }: LogoProps) {
  return <svg width={size} height={size} viewBox="0 0 48 48" className={className} style={style} aria-label="Microsoft Word"><path fill="#185abd" d="M26 5h17v38H26z"/><path fill="#2b7cd3" d="M31 5h12v38H31z"/><path fill="#41a5ee" d="M26 16h17v16H26z"/><path fill="#185abd" stroke="#fff" strokeWidth="1.5" d="M5 10h24v28H5z"/><path fill="#fff" d="m9 17 2 16h4l3-9 3 9h4l2-16h-4l-1 10-3-10h-3l-3 10-1-10z"/></svg>;
}

// 7. MICROSOFT POWERPOINT LOGO OFICIAL
export function PowerPointLogo({ size = 32, className, style }: LogoProps) {
  return <svg width={size} height={size} viewBox="0 0 48 48" className={className} style={style} aria-label="Microsoft PowerPoint"><path fill="#c43e1c" d="M26 5h17v38H26z"/><circle cx="31" cy="24" r="10" fill="#ed6c47"/><path fill="#b73212" stroke="#fff" strokeWidth="1.5" d="M5 10h24v28H5z"/><path fill="#fff" d="M11 17h7c4 0 6 2 6 5s-2 5-6 5h-3v6h-4zm4 3v4h3c1 0 2-.7 2-2s-1-2-2-2z"/></svg>;
}

// 8. GOOGLE CHROME LOGO OFICIAL
export function ChromeLogo({ size = 32, className, style }: LogoProps) {
  return <BrandLogo src={logos.chrome} alt="Google Chrome" size={size} className={className} style={style} />;
}

// 9. MALWAREBYTES LOGO OFICIAL
export function MalwarebytesLogo({ size = 32, className, style }: LogoProps) {
  return <BrandLogo src={logos.malwarebytes} alt="Malwarebytes" size={size} className={className} style={style} />;
}

// 10. CANVA LOGO OFICIAL
export function CanvaLogo({ size = 32, className, style }: LogoProps) {
  return <BrandLogo src={logos.canva} alt="Canva" size={size} className={className} style={style} />;
}

// 11. WINDOWS LOGO OFICIAL
export function WindowsLogo({ size = 32, className, style }: LogoProps) {
  return <svg width={size} height={size} viewBox="0 0 48 48" className={className} style={style} aria-label="Windows"><path fill="#0078d4" d="M5 10 22 7v16H5zm20-3 18-3v19H25zM5 25h17v16L5 38zm20 0h18v19l-18-3z"/></svg>;
}

// 12. CHATGPT / OPENAI LOGO OFICIAL
export function ChatGPTLogo({ size = 32, className, style }: LogoProps) {
  return <BrandLogo src={logos.openai} alt="OpenAI" size={size} className={className} style={style} />;
}
