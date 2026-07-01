/** Solution group metadata for hubs, breadcrumbs, and cards. */
export const SOLUTION_GROUPS = {
  'quantum-setups': {
    slug: 'quantum-setups',
    label: 'Quantum Set-Ups',
    hubTitle: 'Quantum Set-Ups',
    hubDesc: 'Integrated quantum demonstration and research systems.',
  },
  'training-kits': {
    slug: 'training-kits',
    label: 'Training Kits',
    hubTitle: 'Training & Education Kits',
    hubDesc: 'Hands-on photonics and quantum education kits.',
  },
  'state-of-the-art-setups': {
    slug: 'state-of-the-art-setups',
    label: 'State of the Art Setups',
    hubTitle: 'State of the Art Setups',
    hubDesc:
      'Advanced turnkey ultrafast and photonics systems — regenerative delay lines, supercontinuum sources, laser systems, and custom assemblies.',
  },
};

export function solutionGroupLabel(slug) {
  return SOLUTION_GROUPS[slug]?.label || 'Solutions';
}

export function solutionGroupHubPath(slug) {
  return `solutions/${slug}.html`;
}

export function solutionGroupHubUrl(slug, base = '') {
  return `${base}${solutionGroupHubPath(slug)}`;
}
