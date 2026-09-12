import React from "react";

export const SkillIcon = ({ name, className = "w-7 h-7" }) => {
  switch (name) {
    case "Python":
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none">
          <path d="M63.5 8c-23.7 0-22.3 10.3-22.3 10.3l.1 10.6h22.7v3.2H32.4S18 30.5 18 54.3c0 23.7 12.6 22.9 12.6 22.9h7.5V66.6s-.4-12.6 12.4-12.6h21.4s12-.2 12-11.8V20.3S85.2 8 63.5 8zm-12.2 6.9c2.3 0 4.1 1.8 4.1 4.1s-1.8 4.1-4.1 4.1-4.1-1.8-4.1-4.1 1.8-4.1 4.1-4.1z" fill="#3776AB"/>
          <path d="M64.5 120c23.7 0 22.3-10.3 22.3-10.3l-.1-10.6H64v-3.2h31.6s14.4 1.6 14.4-22.2c0-23.7-12.6-22.9-12.6-22.9h-7.5v10.6s.4 12.6-12.4 12.6H46.1s-12 .2-12 11.8v21.9s-1.3 12.3 20.4 12.3zm12.2-6.9c-2.3 0-4.1-1.8-4.1-4.1s1.8-4.1 4.1-4.1 4.1 1.8 4.1 4.1-1.8 4.1-4.1 4.1z" fill="#FFD43B"/>
        </svg>
      );
    case "PyTorch":
      return (
        <svg className={className} viewBox="0 0 128 128">
          <path d="M69.8 14.4L58.2 26l17.4 17.5-17.4 17.4 11.6 11.6 29-29-29-29.1z" fill="#EE4C2C"/>
          <path d="M64 4.5c-32.9 0-59.5 26.6-59.5 59.5 0 32.9 26.6 59.5 59.5 59.5 32.9 0 59.5-26.6 59.5-59.5 0-32.9-26.6-59.5-59.5-59.5zm-5.8 91.2c-17.5 0-31.7-14.2-31.7-31.7 0-17.5 14.2-31.7 31.7-31.7v11.6c-11.1 0-20.1 9-20.1 20.1s9 20.1 20.1 20.1c11.1 0 20.1-9 20.1-20.1H80c0 17.5-14.2 31.7-21.8 31.7z" fill="#EE4C2C"/>
        </svg>
      );
    case "Hugging Face":
      return (
        <svg className={className} viewBox="0 0 128 128">
          <circle cx="64" cy="64" r="56" fill="#FFD21E"/>
          <path d="M42 46c3 0 6 3 6 7s-3 7-6 7-6-3-6-7 3-7 6-7zm44 0c3 0 6 3 6 7s-3 7-6 7-6-3-6-7 3-7 6-7z" fill="#2D2B26"/>
          <path d="M40 76c6 10 14 16 24 16s18-6 24-16" stroke="#2D2B26" strokeWidth="6" strokeLinecap="round" fill="none"/>
          <path d="M26 62c-6-4-10-12-10-20 0-14 10-22 22-22 6 0 12 3 16 8" stroke="#FF9D00" strokeWidth="5" strokeLinecap="round" fill="none"/>
          <path d="M102 62c6-4 10-12 10-20 0-14-10-22-22-22-6 0-12 3-16 8" stroke="#FF9D00" strokeWidth="5" strokeLinecap="round" fill="none"/>
        </svg>
      );
    case "Scikit-learn":
      return (
        <svg className={className} viewBox="0 0 128 128">
          <ellipse cx="44" cy="64" rx="34" ry="46" fill="#F7931E"/>
          <ellipse cx="84" cy="64" rx="34" ry="46" fill="#3499CD"/>
          <path d="M64 36c6 8 10 18 10 28s-4 20-10 28c-6-8-10-18-10-28s4-20 10-28z" fill="#FFFFFF" opacity="0.8"/>
        </svg>
      );
    case "FastAPI":
      return (
        <svg className={className} viewBox="0 0 128 128">
          <circle cx="64" cy="64" r="56" fill="#009688"/>
          <path d="M69 22L36 72h24l-7 34 39-54H64l5-30z" fill="#FFFFFF"/>
        </svg>
      );
    case "Node.js":
      return (
        <svg className={className} viewBox="0 0 128 128">
          <path d="M64 8l52 30v60L64 128 12 98V38L64 8z" fill="#333333"/>
          <path d="M64 16l45 26v52L64 120 19 94V42L64 16z" fill="#539E43"/>
          <path d="M64 42c-12 0-20 6-20 16 0 16 26 12 26 22 0 4-4 6-8 6-6 0-12-3-16-8l-4 6c5 6 13 8 20 8 12 0 20-6 20-16 0-16-26-12-26-22 0-4 4-6 8-6 5 0 10 2 14 6l4-6c-5-5-11-6-18-6z" fill="#FFFFFF"/>
        </svg>
      );
    case "Express.js":
      return (
        <svg className={className} viewBox="0 0 128 128">
          <circle cx="64" cy="64" r="56" fill="#1C1C1C"/>
          <text x="64" y="74" textAnchor="middle" fill="#FFFFFF" fontSize="30" fontWeight="bold" fontFamily="monospace">ex</text>
        </svg>
      );
    case "React":
      return (
        <svg className={className} viewBox="0 0 128 128">
          <ellipse cx="64" cy="64" rx="14" ry="14" fill="#61DAFB"/>
          <ellipse cx="64" cy="64" rx="48" ry="18" stroke="#61DAFB" strokeWidth="4" fill="none"/>
          <ellipse cx="64" cy="64" rx="48" ry="18" stroke="#61DAFB" strokeWidth="4" fill="none" transform="rotate(60 64 64)"/>
          <ellipse cx="64" cy="64" rx="48" ry="18" stroke="#61DAFB" strokeWidth="4" fill="none" transform="rotate(120 64 64)"/>
        </svg>
      );
    case "Next.js":
      return (
        <svg className={className} viewBox="0 0 128 128">
          <circle cx="64" cy="64" r="56" fill="#000000" stroke="#FFFFFF" strokeWidth="3"/>
          <path d="M42 42v44h8V56l38 30h8V42h-8v30L50 42h-8z" fill="#FFFFFF"/>
        </svg>
      );
    case "Flutter":
      return (
        <svg className={className} viewBox="0 0 128 128">
          <path d="M74 12L24 62l15 15L89 27H74z" fill="#47C5FB"/>
          <path d="M54 77l-15 15 25 25h16L54 77z" fill="#02569B"/>
          <path d="M80 77L65 92l15 15 15-15-15-15z" fill="#0175C2"/>
          <path d="M65 92l15 15h16L80 92H65z" fill="#01579B"/>
        </svg>
      );
    case "Dart":
      return (
        <svg className={className} viewBox="0 0 128 128">
          <path d="M24 24h48l32 32-48 48-32-32V24z" fill="#0175C2"/>
          <path d="M24 72l32 32h48L24 24v48z" fill="#00B4AB"/>
          <path d="M56 24L24 56v48l80-80H56z" fill="#29B6F6"/>
        </svg>
      );
    case "JavaScript":
      return (
        <svg className={className} viewBox="0 0 128 128">
          <rect width="128" height="128" rx="20" fill="#F7DF1E"/>
          <path d="M68 94c3 5 8 8 15 8 8 0 14-4 14-11 0-7-5-10-14-14l-5-2c-13-6-19-12-19-24 0-12 9-21 24-21 11 0 18 4 23 13l-10 6c-3-5-6-7-13-7-6 0-10 4-10 9 0 6 4 9 12 12l5 2c15 6 22 13 22 26 0 15-11 23-28 23-14 0-23-6-27-16l11-5zM34 94c2 3 5 5 9 5 5 0 9-3 9-10V32h14v57c0 14-8 21-22 21-10 0-17-5-20-12l10-4z" fill="#000000"/>
        </svg>
      );
    case "Tailwind CSS":
      return (
        <svg className={className} viewBox="0 0 128 128">
          <path d="M34 46c6-18 20-22 34-12 10 7 14 15 22 15 8 0 14-5 18-15-6 18-20 22-34 12-10-7-14-15-22-15-8 0-14 5-18 15zm-18 36c6-18 20-22 34-12 10 7 14 15 22 15 8 0 14-5 18-15-6 18-20 22-34 12-10-7-14-15-22-15-8 0-14 5-18 15z" fill="#38B2AC"/>
        </svg>
      );
    case "PostgreSQL":
      return (
        <svg className={className} viewBox="0 0 128 128">
          <circle cx="64" cy="64" r="56" fill="#336791"/>
          <path d="M64 26c-18 0-28 12-28 26 0 18 12 36 28 50 16-14 28-32 28-50 0-14-10-26-28-26z" fill="#FFFFFF"/>
          <path d="M48 54c0-8 7-14 16-14s16 6 16 14c0 12-8 22-16 30-8-8-16-18-16-30z" fill="#336791"/>
        </svg>
      );
    case "MongoDB":
      return (
        <svg className={className} viewBox="0 0 128 128">
          <path d="M64 12c-4 12-28 36-28 62 0 24 16 42 28 46 12-4 28-22 28-46 0-26-24-50-28-62z" fill="#47A248"/>
          <path d="M64 12v108c12-4 28-22 28-46 0-26-24-50-28-62z" fill="#4BA148"/>
          <path d="M64 12c-2 8-10 24-10 40 0 20 10 38 10 42V12z" fill="#3FA037"/>
        </svg>
      );
    case "Supabase":
      return (
        <svg className={className} viewBox="0 0 128 128">
          <circle cx="64" cy="64" r="56" fill="#1C1C1C"/>
          <path d="M69 18L32 68h34l-5 42 41-54H68l1-38z" fill="#3ECF8E"/>
        </svg>
      );
    case "SQLite":
      return (
        <svg className={className} viewBox="0 0 128 128">
          <circle cx="64" cy="64" r="56" fill="#003B57"/>
          <ellipse cx="64" cy="45" rx="30" ry="12" fill="#00A8FF"/>
          <path d="M34 45v38c0 7 13 12 30 12s30-5 30-12V45" stroke="#00A8FF" strokeWidth="4" fill="none"/>
          <path d="M34 64c0 7 13 12 30 12s30-5 30-12" stroke="#00A8FF" strokeWidth="4" fill="none"/>
        </svg>
      );
    case "AWS SageMaker":
      return (
        <svg className={className} viewBox="0 0 128 128">
          <rect width="128" height="128" rx="20" fill="#232F3E"/>
          <circle cx="64" cy="64" r="32" stroke="#FF9900" strokeWidth="6" fill="none" strokeDasharray="8 4"/>
          <circle cx="64" cy="64" r="14" fill="#FF9900"/>
        </svg>
      );
    case "AWS S3":
      return (
        <svg className={className} viewBox="0 0 128 128">
          <rect width="128" height="128" rx="20" fill="#232F3E"/>
          <path d="M64 28l36 18v36L64 100 28 82V46L64 28z" fill="#E05243"/>
          <path d="M64 28l36 18-36 18-36-18 36-18z" fill="#E26A5E"/>
        </svg>
      );
    case "Git":
      return (
        <svg className={className} viewBox="0 0 128 128">
          <path d="M120 54L74 8a12 12 0 00-17 0L8 54a12 12 0 000 17l46 46a12 12 0 0017 0l49-46a12 12 0 000-17z" fill="#F05032"/>
          <circle cx="48" cy="64" r="8" fill="#FFFFFF"/>
          <circle cx="80" cy="48" r="8" fill="#FFFFFF"/>
          <circle cx="80" cy="80" r="8" fill="#FFFFFF"/>
          <path d="M48 64h16l16-16m-16 16v16h16" stroke="#FFFFFF" strokeWidth="5" fill="none"/>
        </svg>
      );
    case "TanStack Query":
      return (
        <svg className={className} viewBox="0 0 128 128">
          <circle cx="64" cy="64" r="56" fill="#1C1C1C"/>
          <circle cx="64" cy="64" r="28" fill="#FF4154"/>
          <circle cx="64" cy="64" r="16" fill="#FFD43B"/>
        </svg>
      );
    case "SQL":
      return (
        <svg className={className} viewBox="0 0 128 128">
          <rect width="128" height="128" rx="20" fill="#00758F"/>
          <ellipse cx="64" cy="38" rx="34" ry="12" fill="#F29111"/>
          <path d="M30 38v52c0 7 15 12 34 12s34-5 34-12V38" stroke="#F29111" strokeWidth="5" fill="none"/>
          <path d="M30 64c0 7 15 12 34 12s34-5 34-12" stroke="#F29111" strokeWidth="5" fill="none"/>
        </svg>
      );
    case "HTML/CSS":
      return (
        <svg className={className} viewBox="0 0 128 128">
          <path d="M22 18l8 82 34 10 34-10 8-82H22z" fill="#E44D26"/>
          <path d="M64 26v74l24-7 6-67H64z" fill="#F16529"/>
          <path d="M42 42h44l-2 20H44l2 18h36l-2 20-16 4-16-4-1-10h-8l2 18 23 6 23-6 4-38H40l2-28z" fill="#FFFFFF"/>
        </svg>
      );
    case "Docker":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.714h2.118a.186.186 0 00.186-.185V6.289a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.186v1.888c0 .102.082.185.185.185m-2.955 0h2.119a.186.186 0 00.186-.185V6.289a.186.186 0 00-.186-.186H8.074a.185.185 0 00-.185.186v1.888c0 .102.083.185.185.185m0 2.716h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186H8.074a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.955 0h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186H5.12a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954 0h2.119a.186.186 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.165a.186.186 0 00-.186.185v1.888c0 .102.083.185.186.185m8.863 2.716h2.119a.186.186 0 00.186-.186V9.006a.186.186 0 00-.186-.186h-2.119a.186.186 0 00-.186.186v1.888c0 .102.084.186.186.186m-2.954 0h2.119a.186.186 0 00.186-.186V9.006a.186.186 0 00-.186-.186H8.074a.186.186 0 00-.185.186v1.888c0 .102.083.186.185.186m15.823-1.127a4.27 4.27 0 00-.91-.186c-.463-.046-.926.046-1.343.277a3.46 3.46 0 01-.787.324c-.185-.88-.74-1.62-1.528-2.037-.88-.463-1.898-.51-2.824-.139-.231.093-.417.231-.602.37-1.157-1.25-2.731-1.99-4.398-1.99h-.185c-.093 0-.185 0-.278.046a.35.35 0 00-.231.232c-.046.092-.046.185 0 .277.694 1.574 1.157 3.287 1.342 5.046.047.463-.185.926-.555 1.157-.37.232-.833.232-1.25 0-1.481-.833-3.194-1.296-4.953-1.296H1.98c-.463 0-.88.37-.926.833-.88 6.018 3.842 11.203 9.86 11.897 1.018.139 2.037.139 3.055 0 3.796-.463 7.083-2.685 9.073-5.972.556-.926 1.389-1.62 2.361-2.037.278-.139.556-.185.88-.185.417 0 .833.139 1.157.37.787.556 1.76.787 2.731.648.278-.046.556-.139.787-.278a.434.434 0 00.231-.37c0-.185-.092-.324-.231-.417-.833-.555-1.76-.88-2.731-.972"
            fill="#2496ED"
          />
        </svg>
      );
    default:
      return (
        <div className="w-7 h-7 rounded-full bg-indigo-500/30 flex items-center justify-center text-xs font-bold text-white">
          {name.slice(0, 2).toUpperCase()}
        </div>
      );
  }
};
