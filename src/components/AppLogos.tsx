import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

// 1. GMAIL LOGO OFICIAL
export function GmailLogo({ size = 32, className, style }: LogoProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path d="M44 24V9.5C44 7.57 42.43 6 40.5 6H7.5C5.57 6 4 7.57 4 9.5V24L24 37L44 24Z" fill="#EA4335" />
      <path d="M4 9.5V38.5C4 40.43 5.57 42 7.5 42H13V24L4 18V9.5Z" fill="#4285F4" />
      <path d="M44 9.5V38.5C44 40.43 42.43 42 40.5 42H35V24L44 18V9.5Z" fill="#34A853" />
      <path d="M35 42H13V24L24 31L35 24V42Z" fill="#FBBC04" />
      <path d="M44 9.5L24 23L4 9.5C4 7.57 5.57 6 7.5 6H40.5C42.43 6 44 7.57 44 9.5Z" fill="#EA4335" />
    </svg>
  );
}

// 2. GOOGLE DRIVE LOGO OFICIAL
export function GoogleDriveLogo({ size = 32, className, style }: LogoProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 87.3 78" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/>
      <path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44c-.8 1.4-1.2 2.95-1.2 4.5h27.5z" fill="#00ac47"/>
      <path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#ea4335"/>
      <path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/>
      <path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/>
      <path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/>
    </svg>
  );
}

// 3. GOOGLE MEET LOGO OFICIAL
export function GoogleMeetLogo({ size = 32, className, style }: LogoProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <rect x="4" y="8" width="26" height="32" rx="4" fill="#00832D"/>
      <path d="M4 12C4 9.79086 5.79086 8 8 8H30V18L4 15V12Z" fill="#0066DA"/>
      <path d="M4 33L30 30V40H8C5.79086 40 4 38.2091 4 36V33Z" fill="#00AC47"/>
      <path d="M30 18L44 8V40L30 30V18Z" fill="#EA4335"/>
      <path d="M30 18L44 8V24L30 20V18Z" fill="#FFBA00"/>
      <path d="M30 28L44 24V40L30 30V28Z" fill="#2684FC"/>
    </svg>
  );
}

// 4. ANYDESK LOGO OFICIAL
export function AnyDeskLogo({ size = 32, className, style }: LogoProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path 
        d="M27.5 7L13 21.5L20.5 29L35 14.5L27.5 7Z" 
        fill="#EF4444" 
      />
      <path 
        d="M20.5 29L28 36.5L42.5 22L35 14.5L20.5 29Z" 
        fill="#DC2626" 
      />
      <path 
        d="M13 21.5L5.5 29L20 43.5L27.5 36L13 21.5Z" 
        fill="#B91C1C" 
      />
      <path 
        d="M20.5 29L27.5 22L35 29.5L28 36.5L20.5 29Z" 
        fill="#F87171" 
      />
    </svg>
  );
}

// 5. MICROSOFT EXCEL LOGO OFICIAL
export function ExcelLogo({ size = 32, className, style }: LogoProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <rect x="8" y="6" width="34" height="36" rx="4" fill="#107C41" />
      <rect x="22" y="12" width="16" height="24" fill="#21A366" rx="2" />
      <path d="M25 18H35M25 24H35M25 30H35" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <rect x="6" y="12" width="20" height="24" rx="3" fill="#185ABD" style={{ fill: '#107C41' }} />
      <rect x="4" y="10" width="22" height="28" rx="4" fill="#107C41" stroke="#0E6B37" strokeWidth="1" />
      <path d="M8.5 17L14 24L8.5 31H12L15.5 26.5L19 31H22.5L17 24L22.5 17H19L15.5 21.5L12 17H8.5Z" fill="white" />
    </svg>
  );
}

// 6. MICROSOFT WORD LOGO OFICIAL
export function WordLogo({ size = 32, className, style }: LogoProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <rect x="8" y="6" width="34" height="36" rx="4" fill="#185ABD" />
      <rect x="22" y="12" width="16" height="24" fill="#2B7CD3" rx="2" />
      <path d="M25 18H35M25 24H35M25 30H35" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <rect x="4" y="10" width="22" height="28" rx="4" fill="#103F91" stroke="#0C3276" strokeWidth="1" />
      <path d="M7 17L9.5 31H12.5L14.5 21L16.5 31H19.5L22 17H19L17.5 26.5L15.5 17H13.5L11.5 26.5L10 17H7Z" fill="white" />
    </svg>
  );
}

// 7. MICROSOFT POWERPOINT LOGO OFICIAL
export function PowerPointLogo({ size = 32, className, style }: LogoProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <rect x="8" y="6" width="34" height="36" rx="4" fill="#C43E1C" />
      <circle cx="30" cy="24" r="8" fill="#ED6C47" />
      <path d="M30 16A8 8 0 0 1 38 24H30V16Z" fill="#F8A88B" />
      <rect x="4" y="10" width="22" height="28" rx="4" fill="#B73212" stroke="#9A290E" strokeWidth="1" />
      <path d="M9 17H15.5C18 17 19.5 18.2 19.5 20.8C19.5 23.4 18 24.6 15.5 24.6H12V31H9V17ZM12 19.8V22H15C16.5 22 17.2 21.4 17.2 20.8C17.2 20.2 16.5 19.8 15 19.8H12Z" fill="white" />
    </svg>
  );
}

// 8. GOOGLE CHROME LOGO OFICIAL
export function ChromeLogo({ size = 32, className, style }: LogoProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <circle cx="24" cy="24" r="20" fill="#EA4335" />
      <path d="M24 4C31.5 4 37.9 8.1 41.2 14.2L28.5 36.2C27.1 36.7 25.6 37 24 37C16.8 37 11 31.2 11 24C11 20.9 12.1 18.1 13.9 15.8L24 4Z" fill="#FBBC05" />
      <path d="M4 24C4 16.5 8.1 10.1 14.2 6.8L36.2 19.5C36.7 20.9 37 22.4 37 24C37 31.2 31.2 37 24 37C20.9 37 18.1 35.9 15.8 34.1L4 24Z" fill="#34A853" />
      <path d="M24 4H43.8L34 21L24 4Z" fill="#EA4335" />
      <circle cx="24" cy="24" r="11" fill="white" />
      <circle cx="24" cy="24" r="8.5" fill="#4285F4" />
    </svg>
  );
}

// 9. MALWAREBYTES LOGO OFICIAL
export function MalwarebytesLogo({ size = 32, className, style }: LogoProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path d="M24 4L8 10V22C8 32.5 14.8 42.2 24 44C33.2 42.2 40 32.5 40 22V10L24 4Z" fill="#0072CE" />
      <path d="M16 32V18L21 27L24 22L27 27L32 18V32H29V24L26 29H22L19 24V32H16Z" fill="white" />
    </svg>
  );
}

// 10. CANVA LOGO OFICIAL
export function CanvaLogo({ size = 32, className, style }: LogoProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <circle cx="24" cy="24" r="20" fill="url(#canvaGrad)" />
      <path d="M30 18C28.5 15 25 14 21.5 15.5C17.5 17 14 21.5 14 26C14 30.5 17.5 33 21.5 33C26.5 33 30 29.5 31.5 26.5C31.8 26 31.5 25.5 31 25.5C30.5 25.5 30.2 25.8 29.8 26.5C28.2 29 25.5 31.2 21.8 31.2C18.5 31.2 16.2 29 16.2 25.5C16.2 21.5 19.2 17.5 22.8 17.5C25.5 17.5 27.5 19 28.5 21C28.8 21.5 29.5 21.8 30 21.2C30.5 20.6 30.3 19 30 18Z" fill="white" />
      <defs>
        <linearGradient id="canvaGrad" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00C4CC" />
          <stop offset="0.5" stopColor="#7D2AE8" />
          <stop offset="1" stopColor="#FF4F81" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// 11. WINDOWS LOGO OFICIAL
export function WindowsLogo({ size = 32, className, style }: LogoProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path d="M6 7H22V23H6V7Z" fill="#0078D4" />
      <path d="M26 7H42V23H26V7Z" fill="#0078D4" />
      <path d="M6 25H22V41H6V25Z" fill="#0078D4" />
      <path d="M26 25H42V41H26V25Z" fill="#0078D4" />
    </svg>
  );
}

// 12. CHATGPT / OPENAI LOGO OFICIAL
export function ChatGPTLogo({ size = 32, className, style }: LogoProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <rect width="48" height="48" rx="24" fill="#10A37F" />
      <path 
        d="M34.5 21.5C34.1 18.2 31.8 15.6 28.6 15.1C28 13.2 26.6 11.6 24.7 10.8C21.8 9.5 18.4 10.2 16.2 12.4C14.2 12.7 12.5 13.9 11.5 15.7C10 18.5 10.4 22 12.3 24.3C11.9 25.8 12.1 27.4 13 28.7C14.3 30.6 16.5 31.7 18.8 31.7V33.5C18.8 35.8 20.3 37.8 22.5 38.5C25.4 39.4 28.5 38.3 30.2 35.8C31.5 35.8 32.8 35.1 33.7 34C35.2 32.1 35.3 29.5 34.1 27.5C34.7 25.7 34.8 23.5 34.5 21.5Z" 
        stroke="white" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        fill="none" 
      />
    </svg>
  );
}
