import React from 'react';

// --- Types ---
interface CardProps {
  title: string;
  category: 'Design' | 'AI' | 'Coding';
  time: string;
  type: 'ps' | 'ai' | 'figma' | 'python' | 'sketch';
  avatars?: string[];
  moreCount?: string;
  flex?: number;
}

// --- Sub-Component: DashboardCard ---
const DashboardCard: React.FC<CardProps> = ({ 
  title, category, time, type, avatars, moreCount, flex = 1 
}) => {
  // Konfigurasi warna berdasarkan tipe
  const themes = {
    ps: { bg: '#e0f4f9', text: '#0f5263', moreBg: '#c0dfe8' },
    ai: { bg: '#e8f7df', text: '#174d33', moreBg: '#cbe3bf' },
    figma: { bg: '#ebe0fb', text: '#27165c', moreBg: '#d7c4f7' },
    python: { bg: '#fcebe1', text: '#6d1b10', moreBg: '#f7d6c4' },
    sketch: { bg: '#fbe0e8', text: '#5b1128', moreBg: '#f7c4d4' },
  };

  const theme = themes[type];

  return (
    <div 
      className="card transition-transform duration-200 hover:-translate-y-1"
      style={{ 
        backgroundColor: theme.bg, 
        color: theme.text, 
        flex: flex,
        borderRadius: '24px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '180px'
      }}
    >
      <div className="card-header flex justify-between items-center text-[13px] font-semibold">
        <div className="category-wrapper flex items-center gap-2">
          {category === 'Coding' ? (
             <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
          ) : (
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.164c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10 1.942 0 3.868-.696 5.405-2.023 1.25-1.077.838-3.08-.66-3.08h-2.126c-.754 0-1.282-.72-1.026-1.428l.204-.555c.18-.49.593-.852 1.107-.947l1.096-.201c1.472-.27 2.658-1.39 2.946-2.855.334-1.693-.207-3.411-1.38-4.664-1.571-1.678-3.664-2.296-5.566-2.296z"/></svg>
          )}
          <span>{category}</span>
        </div>
        {type === 'ai' && (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
        )}
      </div>

      <div className="card-content mt-5 mb-7">
        <h2 className="text-2xl font-bold leading-tight" dangerouslySetInnerHTML={{ __html: title }} />
      </div>

      <div className="card-footer flex justify-between items-end text-xs font-semibold">
        <span className="opacity-80">{time}</span>
        {avatars && (
          <div className="avatars flex items-center">
            {avatars.map((src, index) => (
              <img 
                key={index}
                src={src} 
                alt="User" 
                className="w-6 h-6 rounded-full border-2 object-cover -ml-2 first:ml-0"
                style={{ borderColor: theme.bg }}
              />
            ))}
            {moreCount && (
              <span 
                className="w-6 h-6 rounded-full border-2 flex items-center justify-center text-[10px] z-10 -ml-2"
                style={{ borderColor: theme.bg, backgroundColor: theme.moreBg }}
              >
                {moreCount}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// --- Main Dashboard Component ---
const DashboardUI: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f7f7f9] flex justify-center items-center p-5 font-['Inter'] text-slate-900">
      <div className="w-full max-w-[900px] p-10">
        
        {/* Logo */}
        <div className="mb-10 text-[#9aa2b1]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>

        {/* First Row */}
        <div className="flex flex-col md:flex-row gap-5 mb-5">
          <DashboardCard 
            type="ps"
            category="Design"
            title="Adobe Photoshop"
            time="in 3 days"
            avatars={['https://i.pravatar.cc/100?img=33', 'https://i.pravatar.cc/100?img=47', 'https://i.pravatar.cc/100?img=12']}
            moreCount="9+"
          />
          <DashboardCard 
            type="ai"
            category="AI"
            title="DALL·E 2, Midjourney,<br>Stable Diffusion"
            time="in 5 days"
            flex={1.2}
            avatars={['https://i.pravatar.cc/100?img=68', 'https://i.pravatar.cc/100?img=59', 'https://i.pravatar.cc/100?img=32']}
            moreCount="3+"
          />
        </div>

        {/* Second Row */}
        <div className="flex flex-col md:flex-row gap-5">
          <DashboardCard 
            type="figma"
            category="Design"
            title="Figma"
            time="8 hours ago"
          />
          <DashboardCard 
            type="python"
            category="Coding"
            title="Python"
            time="2 days ago"
          />
          <DashboardCard 
            type="sketch"
            category="Design"
            title="Sketch"
            time="4 days ago"
          />
        </div>

        {/* Footer */}
        <div className="text-right mt-5 text-[#a0a5b1] font-semibold text-sm">
          Day 020 / 365
        </div>

      </div>
    </div>
  );
};

export default DashboardUI;