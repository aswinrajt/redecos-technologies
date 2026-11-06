import automotiveImg from '@/assets/images/automotive-unscrewing-mould.png';
import appliancesImg from '@/assets/images/CONSUMER GOODS_1.PNG';
import generalEnggImg from '@/assets/images/GEN.ENGG_1.PNG';
import commercialImg from '@/assets/images/TEXTILE-1_MOULD.PNG';
import precisionToolingImg from '@/assets/images/PRECISION TOOLING-1.PNG';
import plasticMouldingImg from '@/assets/images/plastic-moulding-tooling.png';

export interface IndustryItem {
  id: string;
  number: string;
  category: string;
  title: string;
  image: string;
  imageAlt: string;
  description: string;
  tags: readonly string[];
}

export const industriesData: readonly IndustryItem[] = [
  {
    id: 'automotive',
    number: '01',
    category: 'AUTOMOTIVE & OEM',
    title: 'Automotive & Automobile',
    image: automotiveImg,
    imageAlt: 'Automotive engine oil cap hydraulic unscrewing injection mould assembly and threaded component tooling',
    description:
      'Precision tooling and 3D CAD modeling for automotive powertrain, engine oil caps, interior trims, HVAC louvers, and under-the-hood structural plastic components.',
    tags: ['Engine Oil Unscrewing Moulds', 'Hydraulic Rotary Drive', 'Class-A Surfacing', 'Under-Hood Tooling'],
  },
  {
    id: 'appliances',
    number: '02',
    category: 'CONSUMER & WHITE GOODS',
    title: 'Appliances',
    image: appliancesImg,
    imageAlt: 'Consumer appliance enclosure CAD model with parting line detailing',
    description:
      'High-aesthetic plastic housings, snap-fit assemblies, and ergonomic enclosures designed with strict parting-line and surface-finish controls.',
    tags: ['Appliance Housings', 'Snap-Fit Engineering', 'High-Gloss Finish', 'Multi-Slider Moulds'],
  },
  {
    id: 'general-engineering',
    number: '03',
    category: 'INDUSTRIAL MECHANISMS',
    title: 'General Engineering',
    image: generalEnggImg,
    imageAlt: 'General engineering mechanism housing tooling layout',
    description:
      'Heavy-duty plastic components, structural mechanism housings, fluid-handling valves, and precision mechanical brackets engineered for rigorous duty cycles.',
    tags: ['Mechanism Casings', 'Structural Brackets', 'Fluid Dynamics', 'Engineering Resins'],
  },
  {
    id: 'commercial',
    number: '04',
    category: 'COMMERCIAL & TEXTILE',
    title: 'Commercial Applications',
    image: commercialImg,
    imageAlt: 'Precision commercial equipment and textile machinery mould assembly',
    description:
      'Specialized mould designs for commercial equipment and high-speed textile machinery components, engineered for dynamic balance, low wear, and long mold life.',
    tags: ['Textile Machinery Parts', 'Commercial Casings', 'Dynamic Balance', 'Wear Resistance'],
  },
  {
    id: 'precision-tooling',
    number: '05',
    category: 'HIGH-PRECISION TOOLING',
    title: 'Precision Tooling',
    image: precisionToolingImg,
    imageAlt: 'Multi-cavity precision tooling core and cavity plates with slider mechanisms',
    description:
      'Multi-cavity production tooling, hydraulic cylinder cores, unscrewing mechanisms, and micro-tolerance steel inserts engineered down to shop-floor precision.',
    tags: ['Multi-Cavity Tooling', 'Unscrewing Moulds', 'Hydraulic Cores', 'Micron Tolerances'],
  },
  {
    id: 'plastic-moulding',
    number: '06',
    category: 'PRODUCTION MOULDING',
    title: 'Plastic Moulding',
    image: plasticMouldingImg,
    imageAlt: 'Complete 3D injection mould tool assembly with mould base, slider mechanisms, and core/cavity inserts',
    description:
    'Complete mould base detailing, cooling layout optimization, ejector grid engineering, and full 2D/3D manufacturing drawings tailored to shop-floor CNC machining.',
    tags: ['Mould Base Detailing', 'Cooling Circuit Optimization', 'Slider Mechanisms', 'EDM & WEDM Drawings'],
  },
] as const;

