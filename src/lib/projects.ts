/**
 * Project showcase slides. To use real photos, put the image in src/assets,
 * import it here and set `image` (e.g. image: automotiveMould). Slides without
 * an image show a simple placeholder.
 */
export type ProjectSlide = { title: string; category: string; image?: string };

export const projectSlides: ProjectSlide[] = [
  { title: 'Automotive interior trim mould', category: 'PRECISION MOULD DESIGN' },
  { title: 'Appliance housing — DFM review', category: 'DESIGN FOR MANUFACTURABILITY' },
  { title: 'Multi-cavity production tool', category: '3D MOULD ASSEMBLY' },
  { title: 'Reverse-engineered component', category: 'PRODUCT DESIGN' },
];
