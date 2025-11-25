// Datos simulados de Transmilenio

export interface Station {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  lines: string[];
}

export interface Route {
  id: string;
  number: string;
  name: string;
  startStation: string;
  endStation: string;
  stops: number;
  distance: string;
  estimatedTime: string;
  lines: string[];
  type: 'trunk' | 'feeder' | 'complementary';
  status: 'operational' | 'delayed' | 'closed';
}

export interface Transmilineio {
  lines: Line[];
}

export interface Line {
  id: string;
  name: string;
  color: string;
  stations: string[];
}

export const stations: Station[] = [
  {
    id: 'cll100',
    name: 'Calle 100',
    latitude: 4.7356,
    longitude: -74.0447,
    lines: ['K', 'H'],
  },
  {
    id: 'cll76',
    name: 'Calle 76',
    latitude: 4.7221,
    longitude: -74.0543,
    lines: ['A', 'B', 'D'],
  },
  {
    id: 'carreras7',
    name: 'Carrera 7',
    latitude: 4.7114,
    longitude: -74.0102,
    lines: ['C', 'F'],
  },
  {
    id: 'centro',
    name: 'Centro',
    latitude: 4.7169,
    longitude: -74.0745,
    lines: ['A', 'D'],
  },
  {
    id: 'suba',
    name: 'Suba',
    latitude: 4.8152,
    longitude: -74.0663,
    lines: ['B', 'G'],
  },
  {
    id: 'americas',
    name: 'Américas',
    latitude: 4.8263,
    longitude: -74.1289,
    lines: ['H', 'K', 'L'],
  },
  {
    id: 'candelaria',
    name: 'La Candelaria',
    latitude: 4.7142,
    longitude: -74.0862,
    lines: ['A', 'C'],
  },
  {
    id: 'usme',
    name: 'USME',
    latitude: 4.5856,
    longitude: -74.1395,
    lines: ['D'],
  },
];

export const routes: Route[] = [
  {
    id: 'ruta1',
    number: 'K05',
    name: 'Calle 100 - Aeropuerto',
    startStation: 'Calle 100',
    endStation: 'Aeropuerto',
    stops: 25,
    distance: '18.5 km',
    estimatedTime: '45 min',
    lines: ['K'],
    type: 'trunk',
    status: 'operational',
  },
  {
    id: 'ruta2',
    number: 'A01',
    name: 'Centro - Usaquén',
    startStation: 'Centro',
    endStation: 'Usaquén',
    stops: 18,
    distance: '12.3 km',
    estimatedTime: '35 min',
    lines: ['A'],
    type: 'trunk',
    status: 'operational',
  },
  {
    id: 'ruta3',
    number: 'B10',
    name: 'Suba - Patio Bonito',
    startStation: 'Suba',
    endStation: 'Patio Bonito',
    stops: 32,
    distance: '21.5 km',
    estimatedTime: '55 min',
    lines: ['B'],
    type: 'trunk',
    status: 'delayed',
  },
  {
    id: 'ruta4',
    number: 'D22',
    name: 'Centro - USME',
    startStation: 'Centro',
    endStation: 'USME',
    stops: 28,
    distance: '19.8 km',
    estimatedTime: '50 min',
    lines: ['D'],
    type: 'trunk',
    status: 'operational',
  },
  {
    id: 'ruta5',
    number: 'H06',
    name: 'Américas - Calle 100',
    startStation: 'Américas',
    endStation: 'Calle 100',
    stops: 22,
    distance: '15.2 km',
    estimatedTime: '40 min',
    lines: ['H'],
    type: 'trunk',
    status: 'operational',
  },
];

export const lines: Line[] = [
  {
    id: 'lineA',
    name: 'Línea A',
    color: '#FF6B6B',
    stations: ['Centro', 'Calle 76', 'La Candelaria', 'Usaquén'],
  },
  {
    id: 'lineB',
    name: 'Línea B',
    color: '#4ECDC4',
    stations: ['Suba', 'Centro', 'Patio Bonito'],
  },
  {
    id: 'lineC',
    name: 'Línea C',
    color: '#FFE66D',
    stations: ['La Candelaria', 'Carrera 7', 'Centro'],
  },
  {
    id: 'lineD',
    name: 'Línea D',
    color: '#95E1D3',
    stations: ['Centro', 'Calle 76', 'USME'],
  },
  {
    id: 'lineK',
    name: 'Línea K',
    color: '#F38181',
    stations: ['Calle 100', 'Américas', 'Aeropuerto'],
  },
];

export const alerts = [
  {
    id: 'alert1',
    title: 'Operación especial - Línea B',
    description: 'Se informan cambios en la ruta por trabajos de mantenimiento',
    type: 'warning' as const,
    timestamp: '2024-01-15T10:30:00Z',
    affectedLines: ['B'],
  },
  {
    id: 'alert2',
    title: 'Cierre temporal - Calle 76',
    description: 'Estación cerrada por mantenimiento preventivo. Use estación alternativa.',
    type: 'danger' as const,
    timestamp: '2024-01-15T08:45:00Z',
    affectedLines: ['A', 'D'],
  },
  {
    id: 'alert3',
    title: 'Nuevo servicio complementario',
    description: 'Nueva ruta complementaria disponible en la zona de Suba',
    type: 'info' as const,
    timestamp: '2024-01-14T15:20:00Z',
    affectedLines: ['B'],
  },
];
