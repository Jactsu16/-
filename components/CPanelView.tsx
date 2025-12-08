
import React, { useState } from 'react';
import { Project, ProjectCategory, ProjectSection, SectionType, BriefData, FlowchartData, ProjectStatus } from '../types';

interface CPanelViewProps {
  onAddProject: (project: Project) => void;
}

const SECTION_TYPES: { type: SectionType, label: string }[] = [
  { type: 'TEXT', label: 'Texto Simple' },
  { type: 'BRIEF', label: 'Brief Estructurado' },
  { type: 'FLOWCHART', label: 'Flowchart' },
  { type: 'IMAGE', label: 'Imagen' },
];

const PREDEFINED_SECTIONS = [
  'Introducción',
  'Planificación',
  'Brief',
  'Branding',
  'Flowchart',
  'Planificación de Medios',
  'Ejecución',
  'Resumen del Evento',
  'Análisis',
  'Resultados',
  'Evaluación'
];

const INITIAL_BRIEF: BriefData = {
  antecedentes: '', historiaProducto: '', caracteristicas: '', beneficios: '',
  distribucion: '', target: '', posicionamiento: '', precio: '', medio: '', competencia: ''
};

const INITIAL_FLOWCHART: FlowchartData = {
  objetivo: '', estrategiaMedios: '', presupuesto: '', medidas: ''
};

const PASSWORD = 'J162004';
const getTodayISO = () => new Date().toISOString().split('T')[0];

const CPanelView: React.FC<CPanelViewProps> = ({ onAddProject }) => {
  // Auth State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');
  const [formError, setFormError] = useState('');

  // Project Info
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [category, setCategory] = useState<ProjectCategory>('Estrategia');
  const [status, setStatus] = useState<ProjectStatus>('Real');
  const [date, setDate] = useState(() => getTodayISO());
  const [thumbnailUrl, setThumbnailUrl] = useState(''); // Stores Base64 string
  const [isIdeaForge, setIsIdeaForge] = useState(false);
  
  // Dynamic Sections
  const [sections, setSections] = useState<ProjectSection[]>([]);
  const [uploadedImages, setUploadedImages] = useState<{ name: string; dataUrl: string }[]>([]);
  
  // Section Editor State
  const [currentSectionTitle, setCurrentSectionTitle] = useState('');
  const [currentSectionType, setCurrentSectionType] = useState<SectionType>('TEXT');
  const [textContent, setTextContent] = useState('');
  const [briefContent, setBriefContent] = useState<BriefData>(INITIAL_BRIEF);
  const [flowchartContent, setFlowchartContent] = useState<FlowchartData>(INITIAL_FLOWCHART);
  const [selectedLibraryImage, setSelectedLibraryImage] = useState('');
  const [selectedThumbnailName, setSelectedThumbnailName] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === PASSWORD) {
      setIsAuthenticated(true);
      setAuthError('');
      setPasswordInput('');
    } else {
      setAuthError('Contraseña incorrecta');
    }
  };

  type ImageTarget = 'cover' | 'section' | 'library';

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, target: ImageTarget) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach((file, index) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;

        // Save to shared library
        setUploadedImages(prev => {
          const exists = prev.some(img => img.name === file.name);
          if (exists) return prev;
          return [...prev, { name: file.name, dataUrl: result }];
        });

        if (target === 'cover' && index === 0) {
          setThumbnailUrl(result);
          setSelectedThumbnailName(file.name);
        }

        if (target === 'section' && index === 0) {
          setTextContent(result); // Using textContent to store image base64 for sections
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleAddSection = () => {
    let content: any;
    if (currentSectionType === 'TEXT' || currentSectionType === 'IMAGE') content = textContent;
    else if (currentSectionType === 'BRIEF') content = briefContent;
    else if (currentSectionType === 'FLOWCHART') content = flowchartContent;

    const newSection: ProjectSection = {
      id: Date.now().toString(),
      title: currentSectionTitle,
      type: currentSectionType,
      content
    };

    setSections([...sections, newSection]);
    
    // Reset inputs
    setCurrentSectionTitle('');
    setTextContent('');
    setBriefContent(INITIAL_BRIEF);
    setFlowchartContent(INITIAL_FLOWCHART);
  };

  const handlePublish = () => {
    if (!title.trim() || !subtitle.trim() || sections.length === 0) {
      setFormError('Completa título, subtítulo y al menos una sección antes de publicar.');
      return;
    }

    // Format Date for display (e.g., "may 2025")
    const dateObj = date ? new Date(date) : new Date();
    const safeDate = isNaN(dateObj.getTime()) ? new Date() : dateObj;
    const displayDate = safeDate.toLocaleDateString('es-ES', { month: 'short', year: 'numeric' });

    const newProject: Project = {
      id: Date.now().toString(),
      title,
      subtitle,
      category,
      status,
      // Combine date and status into tags for display in PortfolioView
      tags: [displayDate, status], 
      thumbnailUrl: thumbnailUrl || 'https://via.placeholder.com/600x400',
      date: displayDate,
      sections,
      isIdeaForge
    };
    onAddProject(newProject);
    setFormError('');

    setTitle('');
    setSubtitle('');
    setCategory('Estrategia');
    setStatus('Real');
    setDate(getTodayISO());
    setThumbnailUrl('');
    setIsIdeaForge(false);
    setSections([]);
    setCurrentSectionTitle('');
    setCurrentSectionType('TEXT');
    setTextContent('');
    setBriefContent(INITIAL_BRIEF);
    setFlowchartContent(INITIAL_FLOWCHART);
    setSelectedLibraryImage('');
    setSelectedThumbnailName('');
  };

  if (!isAuthenticated) {
    return (
      <div className="pt-32 pb-12 px-4 min-h-screen flex items-center justify-center">
        <div className="bg-white dark:bg-dark-card border border-[#b6d0ff] dark:border-dark-border shadow-neon p-8 rounded-2xl w-full max-w-md text-center">
          <div className="mb-6 text-4xl">🔒</div>
          <h2 className="text-2xl font-bold text-[#005e91] dark:text-dark-highlight mb-2">Acceso Restringido</h2>
          <p className="text-slate-500 dark:text-dark-subtext mb-6">Introduce la contraseña maestra para acceder al Panel de Control.</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              className="w-full p-3 bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-dark-border rounded-xl text-center text-lg tracking-widest focus:outline-none focus:ring-2 focus:ring-[#0087fc] dark:text-white"
              placeholder="•••••••"
              autoFocus
            />
            {authError && <p className="text-red-500 text-sm">{authError}</p>}
            <button 
              type="submit"
              className="w-full py-3 bg-[#0087fc] text-white rounded-xl font-bold hover:bg-[#005e91] transition-all shadow-md"
            >
              Desbloquear
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 md:pt-[110px] pb-12 px-4 md:px-6 max-w-[900px] mx-auto min-h-screen animate-fade-in">
      <div className="bg-white dark:bg-dark-card border border-[#b6d0ff] dark:border-dark-border rounded-2xl p-6 md:p-8 shadow-neon backdrop-blur-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#005e91] dark:text-dark-highlight flex items-center gap-3">
            <span className="bg-slate-100 dark:bg-white/10 p-2 rounded-lg">🎛️</span> 
            Nuevo Proyecto
          </h2>
          <button onClick={() => setIsAuthenticated(false)} className="text-xs text-red-500 hover:underline">Cerrar Sesión</button>
        </div>

        {/* Step 1: Basic Info */}
        <div className="space-y-6 mb-8">
           <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">1. Información General</h3>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 ml-1">Título</label>
                <input 
                  className="w-full p-3 bg-slate-50 dark:bg-black/30 border border-slate-200 dark:border-dark-border rounded-lg text-slate-800 dark:text-white focus:ring-2 focus:ring-[#0087fc] outline-none"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
             </div>
             <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 ml-1">Categoría</label>
                <select 
                  className="w-full p-3 bg-slate-50 dark:bg-black/30 border border-slate-200 dark:border-dark-border rounded-lg text-slate-800 dark:text-white outline-none"
                  value={category}
                  onChange={e => setCategory(e.target.value as ProjectCategory)}
                >
                  <option value="Estrategia">Estrategia</option>
                  <option value="Diseño">Diseño</option>
                  <option value="Website">Website</option>
                  <option value="Varios">Varios</option>
                </select>
             </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="space-y-1">
               <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 ml-1">Estado del Proyecto</label>
               <select 
                  className="w-full p-3 bg-slate-50 dark:bg-black/30 border border-slate-200 dark:border-dark-border rounded-lg text-slate-800 dark:text-white outline-none"
                  value={status}
                  onChange={e => setStatus(e.target.value as ProjectStatus)}
                >
                  <option value="Real">Real</option>
                  <option value="Ficticio">Ficticio</option>
                  <option value="Estudio de Caso">Estudio de Caso</option>
                </select>
             </div>
             <div className="space-y-1">
               <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 ml-1">Fecha Realizada/Entregada</label>
               <input 
                  type="date"
                  className="w-full p-3 bg-slate-50 dark:bg-black/30 border border-slate-200 dark:border-dark-border rounded-lg text-slate-800 dark:text-white outline-none"
                  value={date}
                  onChange={e => setDate(e.target.value)}
               />
             </div>
           </div>
           
           <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 ml-1">Subtítulo / Resumen</label>
              <input 
                className="w-full p-3 bg-slate-50 dark:bg-black/30 border border-slate-200 dark:border-dark-border rounded-lg text-slate-800 dark:text-white outline-none"
                value={subtitle}
                onChange={e => setSubtitle(e.target.value)}
              />
           </div>
           
           <div className="space-y-1">
             <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 ml-1">Imagen de Portada (Subir archivo)</label>
             <div className="flex gap-4 items-center">
               <input
                 type="file"
                 accept="image/*"
                 onChange={(e) => handleImageUpload(e, 'cover')}
                 className="block w-full text-sm text-slate-500 dark:text-slate-400
                   file:mr-4 file:py-2 file:px-4
                   file:rounded-full file:border-0
                   file:text-sm file:font-semibold
                   file:bg-blue-50 file:text-[#0076c7]
                   dark:file:bg-white/10 dark:file:text-white
                   hover:file:bg-blue-100 dark:hover:file:bg-white/20
                 "
               />
               {thumbnailUrl && (
                 <div className="w-16 h-16 rounded-lg overflow-hidden border border-slate-200 dark:border-white/20 flex-shrink-0">
                   <img src={thumbnailUrl} alt="Preview" className="w-full h-full object-cover" />
                 </div>
               )}
              </div>

              {uploadedImages.length > 0 && (
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <label className="font-semibold text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Elegir miniatura de biblioteca</label>
                  <select
                    value={selectedThumbnailName}
                    onChange={(e) => {
                      const chosen = uploadedImages.find(img => img.name === e.target.value);
                      setSelectedThumbnailName(e.target.value);
                      if (chosen) setThumbnailUrl(chosen.dataUrl);
                    }}
                    className="flex-1 p-2 bg-white dark:bg-black/40 border border-slate-200 dark:border-dark-border rounded-lg text-slate-800 dark:text-white"
                  >
                    <option value="">Selecciona una imagen subida</option>
                    {uploadedImages.map(img => (
                      <option key={img.name} value={img.name}>{img.name}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            <label className="flex items-center gap-2 cursor-pointer bg-slate-50 dark:bg-black/20 p-3 rounded-lg border border-transparent dark:border-dark-border hover:border-[#0087fc] transition-colors">
              <input type="checkbox" checked={isIdeaForge} onChange={e => setIsIdeaForge(e.target.checked)} className="rounded text-blue-500 w-5 h-5" />
              <span className="text-slate-700 dark:text-slate-300 font-medium">Guardar en "Fraguas de ideas" (Privado/Borrador)</span>
           </label>
        </div>

        {/* Image library uploader */}
        <div className="mb-8 p-4 bg-slate-50 dark:bg-black/20 rounded-xl border border-slate-200 dark:border-dark-border">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">Biblioteca de imágenes</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">Sube imágenes una sola vez y reutilízalas como miniatura o dentro de las secciones.</p>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => handleImageUpload(e, 'library')}
            className="block w-full text-sm text-slate-500 dark:text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-[#0076c7] dark:file:bg-white/10 dark:file:text-white"
          />
          {uploadedImages.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {uploadedImages.map(img => (
                <span key={img.name} className="px-3 py-1 text-xs bg-white dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-full text-slate-700 dark:text-slate-200">
                  {img.name}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Added Sections Preview */}
        {sections.length > 0 && (
          <div className="mb-8 p-4 bg-slate-50 dark:bg-black/20 rounded-xl border border-dashed border-slate-300 dark:border-dark-border">
            <h3 className="text-xs font-bold uppercase mb-2 text-slate-400">Secciones Agregadas:</h3>
            <ul className="space-y-2">
              {sections.map((s, idx) => (
                <li key={s.id} className="text-sm flex justify-between items-center text-slate-700 dark:text-slate-300 bg-white dark:bg-black/40 p-2 rounded border border-slate-100 dark:border-white/5">
                   <span>{idx + 1}. <strong>{s.title}</strong> <span className="text-xs opacity-60">({s.type})</span></span>
                   <button onClick={() => setSections(sections.filter(x => x.id !== s.id))} className="text-red-500 hover:text-red-400 font-bold px-2">×</button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Step 2: Add Section */}
        <div className="space-y-6 border-t border-slate-100 dark:border-white/10 pt-6">
           <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">2. Agregar Sección de Contenido</h3>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="relative group space-y-1">
                <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 ml-1">Título de Sección</label>
                <input 
                  className="w-full p-3 bg-slate-50 dark:bg-black/30 border border-slate-200 dark:border-dark-border rounded-lg text-slate-800 dark:text-white outline-none"
                  value={currentSectionTitle}
                  onChange={e => setCurrentSectionTitle(e.target.value)}
                  list="predefined-titles"
                />
                <datalist id="predefined-titles">
                   {PREDEFINED_SECTIONS.map(s => <option key={s} value={s} />)}
                </datalist>
             </div>

             <div className="space-y-1">
               <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 ml-1">Tipo de Contenido</label>
               <select 
                 className="w-full p-3 bg-slate-50 dark:bg-black/30 border border-slate-200 dark:border-dark-border rounded-lg text-slate-800 dark:text-white outline-none"
                 value={currentSectionType}
                 onChange={e => setCurrentSectionType(e.target.value as SectionType)}
               >
                 {SECTION_TYPES.map(t => <option key={t.type} value={t.type}>{t.label}</option>)}
               </select>
             </div>
           </div>

           {/* Dynamic Inputs based on Type */}
           <div className="bg-slate-50 dark:bg-black/20 p-4 rounded-xl border border-slate-200 dark:border-dark-border transition-all">
              
              {currentSectionType === 'TEXT' && (
                <textarea 
                  className="w-full h-32 p-3 bg-white dark:bg-black/40 border border-slate-200 dark:border-dark-border rounded-lg text-slate-800 dark:text-white font-mono text-sm focus:ring-2 focus:ring-[#0087fc] outline-none"
                  placeholder="Escribe el contenido del párrafo..."
                  value={textContent}
                  onChange={e => setTextContent(e.target.value)}
                />
              )}

              {currentSectionType === 'IMAGE' && (
                 <div className="space-y-3">
                    <p className="text-sm text-slate-500 dark:text-slate-400">Sube una imagen para esta sección:</p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e, 'section')}
                      className="block w-full text-sm text-slate-500 dark:text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-[#0076c7] dark:file:bg-white/10 dark:file:text-white"
                    />
                    {textContent && textContent.startsWith('data:image') && (
                       <img src={textContent} alt="Preview" className="h-32 rounded border border-slate-200 dark:border-white/20" />
                    )}
                    {/* Fallback for manual URL */}
                    <input
                      className="w-full p-2 mt-2 bg-white dark:bg-black/40 border border-slate-200 dark:border-dark-border rounded text-sm text-slate-800 dark:text-white"
                      placeholder="O pega una URL de imagen..."
                      value={textContent}
                      onChange={e => setTextContent(e.target.value)}
                    />
                 </div>
              )}

              {uploadedImages.length > 0 && (
                <div className="mt-4 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <select
                      value={selectedLibraryImage}
                      onChange={(e) => setSelectedLibraryImage(e.target.value)}
                      className="flex-1 p-2 bg-white dark:bg-black/40 border border-slate-200 dark:border-dark-border rounded-lg text-slate-800 dark:text-white"
                    >
                      <option value="">Selecciona una imagen subida</option>
                      {uploadedImages.map(img => (
                        <option key={img.name} value={img.name}>{img.name}</option>
                      ))}
                    </select>
                    <button
                      type="button"
                      onClick={() => {
                        const chosen = uploadedImages.find(img => img.name === selectedLibraryImage);
                        if (!chosen) return;
                        if (currentSectionType === 'IMAGE') {
                          setTextContent(chosen.dataUrl);
                        } else {
                          setTextContent(prev => prev ? `${prev}\n${chosen.name}` : chosen.name);
                        }
                      }}
                      disabled={!selectedLibraryImage}
                      className="px-4 py-2 rounded-lg bg-[#0087fc] text-white font-semibold text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Agregar Imágenes Subidas
                    </button>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Se insertará el archivo en secciones de imagen y el nombre en secciones de texto/brief.</p>
                </div>
              )}

              {currentSectionType === 'BRIEF' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.keys(INITIAL_BRIEF).map(key => (
                    <div key={key}>
                      <label className="text-[10px] font-bold text-slate-400 uppercase ml-1 mb-1 block">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </label>
                      <input 
                        className="w-full p-2 bg-white dark:bg-black/40 border border-slate-200 dark:border-dark-border rounded-lg text-slate-800 dark:text-white text-sm outline-none focus:border-[#0087fc]"
                        value={(briefContent as any)[key]}
                        onChange={e => setBriefContent({...briefContent, [key]: e.target.value})}
                      />
                    </div>
                  ))}
                </div>
              )}

              {currentSectionType === 'FLOWCHART' && (
                <div className="grid grid-cols-1 gap-4">
                  {Object.keys(INITIAL_FLOWCHART).map(key => (
                    <div key={key}>
                       <label className="text-[10px] font-bold text-slate-400 uppercase ml-1 mb-1 block">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </label>
                      <input 
                        className="w-full p-2 bg-white dark:bg-black/40 border border-slate-200 dark:border-dark-border rounded-lg text-slate-800 dark:text-white text-sm outline-none focus:border-[#0087fc]"
                        value={(flowchartContent as any)[key]}
                        onChange={e => setFlowchartContent({...flowchartContent, [key]: e.target.value})}
                      />
                    </div>
                  ))}
                </div>
              )}
              
              <button 
                onClick={handleAddSection}
                disabled={!currentSectionTitle}
                className="mt-6 w-full py-3 bg-slate-800 dark:bg-dark-highlight text-white dark:text-black rounded-xl font-bold hover:opacity-90 disabled:opacity-50 transition-all shadow-md"
              >
                + Agregar Sección
              </button>
           </div>
        </div>

        {/* Publish Action */}
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/20">
           {formError && (
             <p className="mb-4 text-sm text-red-500 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
               {formError}
             </p>
           )}
           <button
             onClick={handlePublish}
             disabled={!title || sections.length === 0 || !date}
             className="w-full py-4 bg-[#0087fc] text-white rounded-xl font-bold text-lg hover:bg-[#005e91] transition-all shadow-lg hover:shadow-xl hover:shadow-[#0087fc]/20 disabled:opacity-50 disabled:cursor-not-allowed"
           >
             Publicar Proyecto
           </button>
        </div>

      </div>
    </div>
  );
};

export default CPanelView;