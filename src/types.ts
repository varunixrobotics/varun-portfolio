/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ProjectStat {
  name: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  shortDesc: string;
  description: string;
  imageFallbackGradient: string; // fallback high tech CSS gradients if images aren't present
  stats: ProjectStat[];
  techTags: string[];
  specs: string[];
  blueprintText: string;
}
