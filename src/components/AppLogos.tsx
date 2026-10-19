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
  return <BrandLogo src={logos.drive} alt="Google Drive" size={size} className={className} style={style} />;
}

// 3. GOOGLE MEET LOGO OFICIAL
export function GoogleMeetLogo({ size = 32, className, style }: LogoProps) {
  return <BrandLogo src={logos.meet} alt="Google Meet" size={size} className={className} style={style} />;
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
