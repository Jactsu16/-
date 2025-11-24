
import React from 'react';
import { PERSONA_DATA, DISC_DATA, COMPETENCIES_DATA } from '../constants';

const ProfileView: React.FC = () => {
  return (
    <div className="w-full">
      {/* 
        Responsive Container:
        - Mobile (<768px): Uses the mobile layout structure (stacked)
        - Tablet (768px - 1024px): Adapts the desktop layout concepts but fluid
        - Desktop (>1024px): Matches the exact reference layout
      */}
      <main className="pt-24 md:pt-[110px] pb-12 px-4 md:px-6 max-w-[1080px] mx-auto relative min-h-screen">
        
        {/* ================= DESKTOP VIEW (>1024px) ================= */}
        <div className="hidden lg:block relative h-[673px]">
           {/* Profile Badge */}
            <div className="absolute left-[25px] top-[26px] bg-[#0087fc] rounded-md w-16 h-6 flex items-center justify-center z-20">
              <span className="text-white text-xs font-bold">PERFIL</span>
            </div>

            {/* Left Card - Personal Info */}
            <div className="bg-white dark:bg-dark-card border border-[#f2f6ff] dark:border-dark-border rounded-2xl w-[518px] h-[449px] absolute left-0 top-0 overflow-visible animate-fade-in shadow-sm hover:shadow-md transition-all">
              
              {/* Name & Title */}
              <h2 className="absolute left-[25px] top-[62px] text-4xl font-bold text-[#005e91] dark:text-brand-secondary leading-[45px] tracking-[-0.5px]">Jamileth</h2>
              <h2 className="absolute left-[25px] top-[107px] text-4xl font-bold text-[#005e91] dark:text-brand-secondary leading-[45px] tracking-[-0.5px]">Jackelinne</h2>
              <h3 className="absolute left-[25px] top-[156px] text-[30px] font-bold text-[#0076c7] dark:text-brand-primary leading-[38px] tracking-[-0.5px]">Guerra Aguilar</h3>
              <p className="absolute left-[25px] top-[210px] text-sm font-semibold text-[#005e91] dark:text-brand-secondary leading-5">{PERSONA_DATA.role}</p>

              {/* Info Grid */}
              <div className="absolute left-[25px] top-[254px] w-[230px] h-[50px] bg-[#f2f6ff] dark:bg-dark-bg rounded-lg">
                <p className="absolute left-2 top-2 text-xs font-semibold text-[#0076c7] dark:text-brand-primary leading-4">CÉDULA</p>
                <p className="absolute left-2 top-[26px] text-xs font-semibold text-[#001d26] dark:text-white leading-4">{PERSONA_DATA.cedula}</p>
              </div>
              <div className="absolute left-[263px] top-[254px] w-[230px] h-[50px] bg-[#f2f6ff] dark:bg-dark-bg rounded-lg">
                <p className="absolute left-2 top-2 text-xs font-semibold text-[#0076c7] dark:text-brand-primary leading-4">EDAD</p>
                <p className="absolute left-2 top-[26px] text-xs font-semibold text-[#001d26] dark:text-white leading-4">{PERSONA_DATA.age}</p>
              </div>
              <div className="absolute left-[25px] top-[312px] w-[230px] h-[50px] bg-[#f2f6ff] dark:bg-dark-bg rounded-lg">
                <p className="absolute left-2 top-2 text-xs font-semibold text-[#0076c7] dark:text-brand-primary leading-4">ESTADO</p>
                <p className="absolute left-2 top-[26px] text-xs font-semibold text-[#001d26] dark:text-white leading-4">{PERSONA_DATA.status}</p>
              </div>
              <div className="absolute left-[263px] top-[312px] w-[230px] h-[50px] bg-[#f2f6ff] dark:bg-dark-bg rounded-lg">
                <p className="absolute left-2 top-2 text-xs font-semibold text-[#0076c7] dark:text-brand-primary leading-4">UBICACIÓN</p>
                <p className="absolute left-2 top-[26px] text-xs font-semibold text-[#001d26] dark:text-white leading-4">{PERSONA_DATA.location}</p>
              </div>

              {/* Contact */}
              <div className="absolute left-[25px] top-[371px] border-t border-[#f2f6ff] dark:border-dark-border w-[469px] h-[61px]">
                <p className="absolute left-[2px] top-[11px] text-xs font-semibold text-[#0076c7] dark:text-brand-primary leading-4">CONTACTO</p>
                <p className="absolute left-[2px] top-[33px] text-xs font-semibold text-[#0076c7] dark:text-brand-secondary leading-4">{PERSONA_DATA.phone1}</p>
                <p className="absolute left-[1.6px] top-[51.85px] text-xs font-semibold text-[#0076c7] dark:text-brand-secondary leading-4">{PERSONA_DATA.phone2}</p>
              </div>

              {/* Quote */}
              <div className="absolute left-[156.6px] top-[381.85px] bg-[#f2f6ff] dark:bg-dark-bg border border-[#f2f6ff] dark:border-dark-border rounded-[10px] w-[344px] h-[57px] flex flex-col items-center justify-center">
                <p className="text-[11.5px] font-semibold text-[#005e91] dark:text-brand-secondary font-playfair italic text-center leading-3 tracking-[-0.02em] w-[333px]">
                  {PERSONA_DATA.quote}
                </p>
                <p className="text-[9px] italic font-light text-[#035f9e] dark:text-brand-primary mt-1">Filosofía Personal</p>
              </div>

              {/* Profile Image - Absolute on Desktop with Glow */}
              <img 
                src={PERSONA_DATA.image} 
                alt="Profile" 
                className="absolute top-[-22.15px] left-[249.6px] w-[276px] h-[272px] object-cover pointer-events-none rounded-full z-10 shadow-[0_0_30px_rgba(0,135,252,0.4)] dark:shadow-[0_0_50px_rgba(0,135,252,0.8)] transition-all duration-500"
              />
            </div>

            {/* DISC Profile */}
            <div className="bg-white dark:bg-dark-card border border-[#f2f6ff] dark:border-dark-border rounded-2xl w-[452px] h-[181px] absolute left-[537.6px] top-0 animate-fade-in delay-100 shadow-sm hover:shadow-md">
              <h3 className="absolute left-[20.8px] top-5 text-xs font-semibold text-[#0076c7] dark:text-brand-primary leading-4">PERFIL DISC</h3>
              <div className="grid grid-cols-2 gap-x-[30px] gap-y-4 absolute left-[20.8px] top-[48px]">
                {DISC_DATA.map((item, idx) => (
                  <div key={idx} className="disc-item">
                    <p className="text-xs font-semibold text-[#005e91] dark:text-brand-secondary leading-4 mb-[4.85px]">{item.name}</p>
                    <div className="w-[200px] h-1 bg-[#f2f6ff] dark:bg-dark-bg rounded-full overflow-hidden">
                      <div className="h-full bg-[#0076c7] rounded-full animate-progress" style={{ width: `${item.percentage}%` }}></div>
                    </div>
                    <p className="text-xs font-bold text-[#0076c7] dark:text-brand-primary leading-4 mt-[3.15px]">{item.percentage}%</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Competencies */}
            <div className="bg-white dark:bg-dark-card border border-[#f2f6ff] dark:border-dark-border rounded-2xl w-[452px] h-[261px] absolute left-[537.6px] top-[188.15px] animate-fade-in delay-200 shadow-sm hover:shadow-md">
              <h3 className="absolute left-[27px] top-5 text-sm font-semibold text-[#0076c7] dark:text-brand-primary leading-4">COMPETENCIAS</h3>
              <div className="absolute left-0 top-[52px] w-full">
                 {COMPETENCIES_DATA.map((comp, idx) => (
                  <div key={idx} className="flex items-center justify-between h-[31px] border-b border-[#f2f6ff] dark:border-dark-border px-[27px] competency-item">
                    <p className="text-[13px] font-semibold text-[#005e91] dark:text-brand-secondary leading-5">{comp.name}</p>
                    <span className="bg-[#0087fc] text-white text-xs font-bold leading-4 px-3 h-[21px] rounded flex items-center justify-center">{comp.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Info Grid */}
            <div className="grid grid-cols-4 gap-[33px] absolute left-[9.4px] top-[470px] animate-fade-in delay-300 w-full">
              {/* Ficha Personal */}
              <div className="info-card w-[227px]">
                <p className="text-[11px] text-[#0076c7] dark:text-brand-secondary leading-4">
                  <span className="font-bold dark:text-brand-primary text-xs">FICHA PERSONAL</span><br/>
                  <span className="font-medium text-[#001d26] dark:text-dark-text">Carrera:</span> <span className="font-light text-[#001d26] dark:text-dark-subtext">{PERSONA_DATA.fichaPersonal.carrera}</span><br/>
                  <span className="font-medium text-[#001d26] dark:text-dark-text">Curso:</span> <span className="font-light text-[#001d26] dark:text-dark-subtext">{PERSONA_DATA.fichaPersonal.curso}</span><br/>
                  <span className="font-medium text-[#001d26] dark:text-dark-text">Diplomado:</span> <span className="font-light text-[#001d26] dark:text-dark-subtext">{PERSONA_DATA.fichaPersonal.diplomado}</span>
                </p>
              </div>
              {/* Intereses */}
              <div className="info-card w-[178px]">
                <p className="text-[11px] text-[#0076c7] dark:text-brand-secondary leading-4">
                  <span className="font-bold dark:text-brand-primary text-xs">INTERESES</span><br/>
                  <span className="font-medium text-[#001d26] dark:text-dark-text">Pasión:</span> <span className="font-light text-[#001d26] dark:text-dark-subtext">{PERSONA_DATA.intereses.pasion}</span><br/>
                  <span className="font-medium text-[#001d26] dark:text-dark-text">Hobby:</span> <span className="font-light text-[#001d26] dark:text-dark-subtext">{PERSONA_DATA.intereses.hobby}</span>
                </p>
              </div>
              {/* Pro */}
              <div className="info-card w-[276px]">
                <p className="text-[11px] text-[#0076c7] dark:text-brand-secondary leading-4">
                  <span className="font-bold dark:text-brand-primary text-xs">PRO</span><br/>
                  <span className="font-medium text-[#001d26] dark:text-dark-text">Motivación:</span> <span className="font-light text-[#001d26] dark:text-dark-subtext">{PERSONA_DATA.pro.motivacion}</span><br/>
                  <span className="font-medium text-[#001d26] dark:text-dark-text">Oportunidad:</span> <span className="font-light text-[#001d26] dark:text-dark-subtext">{PERSONA_DATA.pro.oportunidad}</span><br/>
                  <span className="font-medium text-[#001d26] dark:text-dark-text">Deseo:</span> <span className="font-light text-[#001d26] dark:text-dark-subtext">{PERSONA_DATA.pro.deseo}</span>
                </p>
              </div>
              {/* Contra */}
              <div className="info-card w-[206px]">
                <p className="text-[11px] text-[#0076c7] dark:text-brand-secondary leading-4">
                  <span className="font-bold dark:text-brand-primary text-xs">CONTRA</span><br/>
                  <span className="font-medium text-[#001d26] dark:text-dark-text">Frustración:</span> <span className="font-light text-[#001d26] dark:text-dark-subtext">{PERSONA_DATA.contra.frustracion}</span><br/>
                  <span className="font-medium text-[#001d26] dark:text-dark-text"> Miedo:</span> <span className="font-light text-[#001d26] dark:text-dark-subtext">{PERSONA_DATA.contra.miedo}</span>
                </p>
              </div>
            </div>
        </div>

        {/* ================= MOBILE & TABLET VIEW (<1024px) ================= */}
        <div className="lg:hidden flex flex-col gap-4">
           
           {/* Header Card (Image + Name) */}
           <div className="bg-white dark:bg-dark-card border border-[#f2f6ff] dark:border-dark-border rounded-2xl p-5 shadow-sm">
             {/* Use flex-row for Tablet/Landscape (sm) and flex-col for Portrait Mobile */}
             <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
               
               {/* Image with Glow */}
               <img 
                  src={PERSONA_DATA.image} 
                  alt="Profile" 
                  className="w-48 h-48 md:w-52 md:h-52 object-cover rounded-full flex-shrink-0 sm:order-2 shadow-[0_0_20px_rgba(0,135,252,0.4)] dark:shadow-[0_0_40px_rgba(0,135,252,0.8)] transition-all duration-500" 
               />
               
               <div className="text-center sm:text-left flex-1 sm:order-1">
                 <div className="inline-block bg-[#0087fc] rounded-md px-2 py-1 mb-2">
                   <span className="text-white text-[10px] font-bold leading-3">PERFIL</span>
                 </div>
                 <h2 className="text-3xl font-bold text-[#005e91] dark:text-brand-secondary leading-tight">Jamileth<br/>Jackelinne</h2>
                 <h3 className="text-2xl font-bold text-[#0076c7] dark:text-brand-primary leading-tight mt-1">Guerra Aguilar</h3>
                 <p className="text-sm font-semibold text-[#005e91] dark:text-brand-secondary mt-2">{PERSONA_DATA.role}</p>

                 {/* Basic Stats Grid - Mobile */}
                 <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="bg-[#f2f6ff] dark:bg-dark-bg rounded-lg p-2 text-left">
                      <p className="text-[10px] font-semibold text-[#0076c7] dark:text-brand-primary">CÉDULA</p>
                      <p className="text-[10px] font-semibold text-[#001d26] dark:text-white">{PERSONA_DATA.cedula}</p>
                    </div>
                    <div className="bg-[#f2f6ff] dark:bg-dark-bg rounded-lg p-2 text-left">
                      <p className="text-[10px] font-semibold text-[#0076c7] dark:text-brand-primary">EDAD</p>
                      <p className="text-[10px] font-semibold text-[#001d26] dark:text-white">{PERSONA_DATA.age}</p>
                    </div>
                    <div className="bg-[#f2f6ff] dark:bg-dark-bg rounded-lg p-2 text-left">
                      <p className="text-[10px] font-semibold text-[#0076c7] dark:text-brand-primary">ESTADO</p>
                      <p className="text-[10px] font-semibold text-[#001d26] dark:text-white">{PERSONA_DATA.status}</p>
                    </div>
                    <div className="bg-[#f2f6ff] dark:bg-dark-bg rounded-lg p-2 text-left">
                      <p className="text-[10px] font-semibold text-[#0076c7] dark:text-brand-primary">UBICACIÓN</p>
                      <p className="text-[10px] font-semibold text-[#001d26] dark:text-white">{PERSONA_DATA.location}</p>
                    </div>
                 </div>

                 {/* Tablet Vertical specific: Contact goes HERE (inside main card) */}
                 <div className="hidden md:block sm:hidden border-t border-[#f2f6ff] dark:border-dark-border mt-4 pt-3">
                    <p className="text-[10px] font-semibold text-[#0076c7] dark:text-brand-primary mb-1">CONTACTO</p>
                    <div className="flex gap-4">
                        <p className="text-sm font-semibold text-[#005e91] dark:text-brand-secondary">{PERSONA_DATA.phone1}</p>
                        <p className="text-sm font-semibold text-[#005e91] dark:text-brand-secondary">{PERSONA_DATA.phone2}</p>
                    </div>
                 </div>
               </div>
             </div>
           </div>

           {/* DISC & Competencies Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* DISC */}
              <div className="bg-white dark:bg-dark-card border border-[#f2f6ff] dark:border-dark-border rounded-2xl p-4 shadow-sm">
                <h3 className="text-xs font-semibold text-[#0076c7] dark:text-brand-primary mb-4">PERFIL DISC</h3>
                <div className="grid grid-cols-2 gap-4">
                  {DISC_DATA.map((item, idx) => (
                    <div key={idx}>
                      <p className="text-xs font-semibold text-[#005e91] dark:text-brand-secondary mb-1">{item.name}</p>
                      <div className="w-full h-1 bg-[#f2f6ff] dark:bg-dark-bg rounded-full overflow-hidden">
                        <div className="h-full bg-[#0076c7] rounded-full" style={{ width: `${item.percentage}%` }}></div>
                      </div>
                      <p className="text-xs font-bold text-[#0076c7] dark:text-brand-primary mt-1">{item.percentage}%</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Competencies */}
              <div className="bg-white dark:bg-dark-card border border-[#f2f6ff] dark:border-dark-border rounded-2xl p-4 shadow-sm">
                 <h3 className="text-sm font-semibold text-[#0076c7] dark:text-brand-primary mb-4">COMPETENCIAS</h3>
                 <div className="space-y-3">
                    {COMPETENCIES_DATA.map((comp, idx) => (
                      <div key={idx} className="flex items-center justify-between pb-2 border-b border-[#f2f6ff] dark:border-dark-border last:border-0">
                        <p className="text-xs font-semibold text-[#005e91] dark:text-brand-secondary pr-2">{comp.name}</p>
                        <span className="bg-[#0087fc] text-white text-[10px] font-bold px-2 py-1 rounded min-w-[2.5rem] text-center">{comp.percentage}%</span>
                      </div>
                    ))}
                 </div>
              </div>
           </div>

           {/* Contact & Quote */}
           <div className="flex flex-col sm:flex-row gap-4">
              {/* Contact: Visible on Mobile, Hidden on Tablet Vertical (because it moved up), Visible on Landscape */}
              <div className="bg-white dark:bg-dark-card border border-[#f2f6ff] dark:border-dark-border rounded-2xl p-4 flex-1 shadow-sm md:hidden sm:block">
                <p className="text-xs font-semibold text-[#0076c7] dark:text-brand-primary mb-2">CONTACTO</p>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-semibold text-[#005e91] dark:text-brand-secondary">{PERSONA_DATA.phone1}</p>
                  <p className="text-sm font-semibold text-[#005e91] dark:text-brand-secondary">{PERSONA_DATA.phone2}</p>
                </div>
              </div>

              {/* Quote - Tablet Vertical: Goes next to where Contact was (filling the row) */}
              <div className="bg-[#f2f6ff] dark:bg-dark-bg border border-[#b6d0ff] dark:border-brand-dark rounded-2xl p-4 flex-[2] flex flex-col items-center justify-center relative shadow-sm">
                <p className="text-sm font-semibold text-[#005e91] dark:text-brand-secondary font-playfair italic text-center">
                  "{PERSONA_DATA.quote}"
                </p>
                <p className="text-[10px] italic font-light text-[#035f9e] dark:text-brand-primary mt-1">Filosofía Personal</p>
              </div>
           </div>

           {/* Full Info Grid (Pro/Contra/Ficha/Intereses) */}
           {/* SM: Landscape Mobile - Intereses next to Ficha, Pro next to Contra */}
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Ficha & Intereses Wrapper for Landscape */}
              <div className="contents sm:flex sm:flex-col gap-4"> 
                  {/* Ficha */}
                  <div className="bg-white dark:bg-dark-card border border-[#f2f6ff] dark:border-dark-border rounded-2xl p-4 shadow-sm">
                    <p className="text-xs text-[#0076c7] dark:text-brand-primary leading-5">
                      <span className="font-bold block mb-2 dark:text-brand-secondary">FICHA PERSONAL</span>
                      <span className="font-medium text-[#001d26] dark:text-dark-text">Carrera:</span> <span className="font-light text-[#001d26] dark:text-dark-subtext">{PERSONA_DATA.fichaPersonal.carrera}</span><br/>
                      <span className="font-medium text-[#001d26] dark:text-dark-text">Curso:</span> <span className="font-light text-[#001d26] dark:text-dark-subtext">{PERSONA_DATA.fichaPersonal.curso}</span><br/>
                      <span className="font-medium text-[#001d26] dark:text-dark-text">Diplomado:</span> <span className="font-light text-[#001d26] dark:text-dark-subtext">{PERSONA_DATA.fichaPersonal.diplomado}</span>
                    </p>
                  </div>

                  {/* Intereses */}
                  <div className="bg-white dark:bg-dark-card border border-[#f2f6ff] dark:border-dark-border rounded-2xl p-4 shadow-sm">
                    <p className="text-xs text-[#0076c7] dark:text-brand-primary leading-5">
                      <span className="font-bold block mb-2 dark:text-brand-secondary">INTERESES</span>
                      <span className="font-medium text-[#001d26] dark:text-dark-text">Pasión:</span> <span className="font-light text-[#001d26] dark:text-dark-subtext">{PERSONA_DATA.intereses.pasion}</span><br/>
                      <span className="font-medium text-[#001d26] dark:text-dark-text">Hobby:</span> <span className="font-light text-[#001d26] dark:text-dark-subtext">{PERSONA_DATA.intereses.hobby}</span>
                    </p>
                  </div>
              </div>

              {/* Pro & Contra Wrapper */}
              <div className="contents sm:flex sm:flex-col gap-4">
                  {/* Pro */}
                  <div className="bg-white dark:bg-dark-card border border-[#f2f6ff] dark:border-dark-border rounded-2xl p-4 shadow-sm">
                    <p className="text-xs text-[#0076c7] dark:text-brand-primary leading-5">
                      <span className="font-bold block mb-2 dark:text-brand-secondary">PRO</span>
                      <span className="font-medium text-[#001d26] dark:text-dark-text">Motivación:</span> <span className="font-light text-[#001d26] dark:text-dark-subtext">{PERSONA_DATA.pro.motivacion}</span><br/>
                      <span className="font-medium text-[#001d26] dark:text-dark-text">Oportunidad:</span> <span className="font-light text-[#001d26] dark:text-dark-subtext">{PERSONA_DATA.pro.oportunidad}</span><br/>
                      <span className="font-medium text-[#001d26] dark:text-dark-text">Deseo:</span> <span className="font-light text-[#001d26] dark:text-dark-subtext">{PERSONA_DATA.pro.deseo}</span>
                    </p>
                  </div>

                  {/* Contra */}
                  <div className="bg-white dark:bg-dark-card border border-[#f2f6ff] dark:border-dark-border rounded-2xl p-4 shadow-sm">
                    <p className="text-xs text-[#0076c7] dark:text-brand-primary leading-5">
                      <span className="font-bold block mb-2 dark:text-brand-secondary">CONTRA</span>
                      <span className="font-medium text-[#001d26] dark:text-dark-text">Frustración:</span> <span className="font-light text-[#001d26] dark:text-dark-subtext">{PERSONA_DATA.contra.frustracion}</span><br/>
                      <span className="font-medium text-[#001d26] dark:text-dark-text">Miedo:</span> <span className="font-light text-[#001d26] dark:text-dark-subtext">{PERSONA_DATA.contra.miedo}</span>
                    </p>
                  </div>
              </div>
           </div>

        </div>

      </main>
    </div>
  );
};

export default ProfileView;
