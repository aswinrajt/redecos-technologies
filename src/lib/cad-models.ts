import type { CadModelData } from '@/components/cad-model-card';
import corePlateImg from '@/assets/images/cad-core-plate-assembly.png';
import explodedMouldImg from '@/assets/images/cad-exploded-mould-assembly.png';
import unscrewingMouldImg from '@/assets/images/cad-unscrewing-mould-assembly.png';

export const corePlateModel: CadModelData = {
  id: 'core-plate-assembly',
  image: corePlateImg,
  badge: '3D SOLID CAD · CORE TOOLING',
  tagline: 'PARAMETRIC SOLID MODEL',
  title: 'Precision Core Plate Assembly',
  subtitle: 'MP1859 103 Core Plate with Exploded Inserts & Cooling Circuits',
  description:
    'Fully detailed 3D solid model of a precision core plate featuring hardened slide inserts, lifters, water lines, and explicit manufacturing color-coding to ensure zero errors on the shop floor.',
  projectId: 'PROJECT REF: MP1859-103',
  width: 893,
  height: 537,
  specs: [
    { label: 'Modeling Environment', value: '100% 3D Solid CAD' },
    { label: 'Cooling Circuits', value: 'IN7 to IN12 + M15 Ports' },
    { label: 'Component Detailing', value: 'Exploded Lifters & Inserts' },
    { label: 'Color Coding', value: 'Blue (Parting) / Red (Shut-off)' },
  ],
  features: [
    'Standardized color coding for parting surfaces and matching areas',
    'Integrated water cooling circuits labeled directly on the tool plate (IN7–IN12)',
    'Exploded slide inserts and lifters designed for seamless maintenance',
    'Poka-yoke assembly markings and datum identification for CNC machining',
  ],
};

export const explodedMouldModel: CadModelData = {
  id: 'exploded-mould-stack',
  image: explodedMouldImg,
  badge: 'TOOLING KINEMATICS · FULL STACK',
  tagline: 'MULTI-CAVITY INJECTION TOOL',
  title: 'Exploded Injection Mould Assembly',
  subtitle: 'EGG TRAY 290 × 290 mm Mould Tool with Molded Part Correlation',
  description:
    'Complete exploded kinematic stack demonstrating all plates, guide pillars, multi-cavity inserts, cooling lines, and ejection components synchronized directly with the final moulded part.',
  projectId: 'PROJECT REF: EGG-TRAY-290',
  width: 958,
  height: 621,
  specs: [
    { label: 'Tool Dimensions', value: '290 × 290 mm Stack' },
    { label: 'Kinematics', value: 'Full Exploded Assembly' },
    { label: 'Component Type', value: 'Thin-Wall Packaging Tool' },
    { label: 'Standard Elements', value: 'Hasco / DME Guide Stack' },
  ],
  features: [
    'Exploded assembly views ensuring error-free customer concept approval',
    'Complete correlation between final molded part geometry and cavity steel',
    'Synchronized multi-tier ejection system and robust guide pillar stack',
    'Shopfloor-ready Bill of Materials (BOM) with hardness and finish callouts',
  ],
};

export const unscrewingMouldModel: CadModelData = {
  id: 'unscrewing-mould-assembly',
  image: unscrewingMouldImg,
  badge: 'MECHANISM DESIGN · ROTARY DRIVE',
  tagline: 'HYDRAULIC UNSCREWING TOOLING',
  title: '2-Cavity Unscrewing Mould Tool',
  subtitle: 'Automated Thread Unscrewing with Top Hydraulic Motor Drive',
  description:
    'High-complexity mechanical action tooling designed for threaded engine oil caps. Features an integrated hydraulic motor with synchronized gear rack and pinion drive to unscrew internal threads during mould opening.',
  projectId: 'PROJECT REF: UNSCR-CAP-02',
  width: 925,
  height: 515,
  specs: [
    { label: 'Mechanism', value: 'Hydraulic Motor Drive' },
    { label: 'Cavity Count', value: '2-Cavity High Output' },
    { label: 'Product Type', value: 'Threaded "ENGINE OIL" Cap' },
    { label: 'Cooling & Ejection', value: 'Split Core/Cavity Circuits' },
  ],
  features: [
    'High-precision rotating core mechanism for automated cycle unscrewing',
    'Top-mounted hydraulic drive motor with rack-and-pinion transmission',
    'Split cavity construction with dedicated conformal water cooling circuits',
    'Zero-defect thread release verified through solid CAD kinematic simulation',
  ],
};

export const cadModels: readonly [CadModelData, CadModelData, CadModelData] = [
  corePlateModel,
  explodedMouldModel,
  unscrewingMouldModel,
] as const;
