
export enum ViewState {
  HOME = 'HOME',
  PORTFOLIO = 'PORTFOLIO',
  CHATBOT = 'CHATBOT',
  CPANEL = 'CPANEL'
}

export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface Competency {
  name: string;
  percentage: number;
}

export interface DiscProfile {
  name: string;
  percentage: number;
}

// Portfolio Types
export type ProjectCategory = 'Estrategia' | 'Diseño' | 'Website' | 'Varios';
export type SectionType = 'TEXT' | 'BRIEF' | 'FLOWCHART' | 'IMAGE';
export type ProjectStatus = 'Real' | 'Ficticio' | 'Estudio de Caso';

export interface BriefData {
  antecedentes: string;
  historiaProducto: string;
  caracteristicas: string;
  beneficios: string;
  distribucion: string;
  target: string;
  posicionamiento: string;
  precio: string;
  medio: string;
  competencia: string;
}

export interface FlowchartData {
  objetivo: string;
  estrategiaMedios: string;
  presupuesto: string;
  medidas: string; // Cualitativas y cuantitativas
}

export interface ProjectSection {
  id: string;
  title: string; // e.g., "Introducción", "Ejecución", "Análisis"
  type: SectionType;
  content: string | BriefData | FlowchartData;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  status?: ProjectStatus; // New field
  tags: string[];
  thumbnailUrl: string; // URL or base64
  date: string;
  sections: ProjectSection[];
  isIdeaForge?: boolean; // For "Fraguas de ideas"
}