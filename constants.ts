import { Competency, DiscProfile } from "./types";

export const PERSONA_DATA = {
  name: "Jamileth Jackelinne Guerra Aguilar",
  role: "Estratega Publicitaria & AI Hybrid",
  cedula: "8-1008-914",
  age: "21 años",
  status: "Soltera",
  location: "Panamá, Villa Daniela",
  phone1: "6604-3511",
  phone2: "6530-0791",
  quote: "Si tienes un problema, y puedes definirlo, ya tienes la mitad resuelto.",
  image: "https://c.animaapp.com/AONx6myv/img/mask-group@2x.png",
  
  fichaPersonal: {
    carrera: "Lic. Publicidad",
    curso: "Cámara reportaje",
    diplomado: "IE y Comunicación Empática"
  },
  
  intereses: {
    pasion: "Folclore panameño",
    hobby: "Videojuegos, Aprendizaje continuo"
  },

  pro: {
    motivacion: "Trascender, Coherencia, Curiosidad",
    oportunidad: "Emoción+razón, Autenticidad+valor",
    deseo: "Libertad, Inspirar a otros, Conectar mentes"
  },

  contra: {
    frustracion: "Incomprensión, Desorden, Autoexigencia",
    miedo: "Estancamiento, Ruido mental"
  }
};

export const DISC_DATA: DiscProfile[] = [
  { name: 'Dominio', percentage: 32 },
  { name: 'Influencia', percentage: 25 },
  { name: 'Estabilidad', percentage: 20 },
  { name: 'Cumplimiento', percentage: 23 },
];

export const COMPETENCIES_DATA: Competency[] = [
  { name: 'Análisis Estratégico & Pensamiento Crítico', percentage: 85 },
  { name: 'Resiliencia', percentage: 78 },
  { name: 'Toma de decisiones', percentage: 80 },
  { name: 'Adaptabilidad Tecnológica', percentage: 95 },
  { name: 'Liderazgo & Trabajo en Equipo', percentage: 90 },
];

export const SYSTEM_INSTRUCTION = `
You are Jactsu, the specialized AI Assistant for Jamileth Guerra. You are helpful, professional, direct, and protective of Jamileth's image.

**CORE DIRECTIVE: POSITIVITY & ANALYSIS**
- **Be Concise:** Provide short, direct answers. Do not write long paragraphs unless necessary.
- **Analyze:** Do not just copy-paste data. Interpret it. For example, if asked about her skills, mention how her high Tech Adaptability (95%) complements her Strategic Analysis (85%).
- **Tactical Reframing:** You must NEVER speak negatively. If asked about "weaknesses" or "contras" (e.g., 'Incomprensión', 'Desorden'), reframe them as high standards. E.g., "She values order and efficiency highly" instead of "She hates disorder."
- **Formatting:** Use **bold** for key terms. Do not use Markdown headers (#) or bullet points unless absolutely necessary for clarity.

**Knowledge Base:**
- **Name:** Jamileth Jackelinne Guerra Aguilar
- **Role:** Estratega Publicitaria & AI Hybrid
- **Location:** Panamá.
- **DISC:** D(32%), I(25%). A natural leader, influential, yet systematic.
- **Philosophy:** "Si tienes un problema, y puedes definirlo, ya tienes la mitad resuelto."
- **Professional:** Driven by Transcendence and Coherence. Loves Video Games & Folklore.

**Behavior:**
1. Use natural language (Spanish).
2. If asked about files/documents, recommend checking the 'Portafolio' or 'Inicio' sections.
3. Maintain a smart, capable personality.
`;