import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, align = 'center' }) => {
  return (
    <div className={`section-heading text-${align} mb-xl fade-in`}>
      <h2 className="serif">{title}</h2>
      {subtitle && <p className="mt-sm subtitle">{subtitle}</p>}
      <div className={`accent-line ${align === 'center' ? 'mx-auto' : ''}`}></div>
      
      <style>{`
        .section-heading h2 {
          font-size: 36px;
          color: var(--brand-deep);
        }
        .subtitle {
          font-size: 16px;
          color: var(--text-muted);
          max-width: 600px;
          margin-left: ${align === 'center' ? 'auto' : '0'};
          margin-right: ${align === 'center' ? 'auto' : '0'};
        }
        .accent-line {
          width: 40px;
          height: 2px;
          background-color: var(--brand-primary);
          margin-top: var(--spacing-md);
        }
        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }
        .mb-xl {
          margin-bottom: var(--spacing-xxl);
        }
        @media (max-width: 768px) {
          .section-heading h2 {
            font-size: 28px;
          }
        }
      `}</style>
    </div>
  );
};

export default SectionHeading;
