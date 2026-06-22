/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project } from "../types";

export const ProjectsData: Project[] = [
  {
    id: "nexus-valkyrie",
    title: "Nexus-9 Valkyrie",
    category: "Bipedal Humanoid Class",
    subtitle: "Tactical Explorer & Extreme Terrain Responder",
    shortDesc: "A bipedal humanoid robotics system engineered for autonomous deep-reconnaissance, high-payload transport, and swift evacuation in extreme environments.",
    description: "The Nexus-9 Valkyrie represents Varunix Robotics' flagship achievement in cybernetic human-mimetic layout. Operating on a proprietary quantum neural mesh, the Valkyrie adapts in real-time to shifting gravel, tectonic tremors, and sub-zero temperatures. It features hydraulic load amplifiers integrated into the lower chassis, providing swift acceleration upwards of 18 km/h while balancing payloads exceeding twice its core mass.",
    imageFallbackGradient: "from-cyan-950 via-slate-900 to-cyber-blue/20",
    stats: [
      { name: "Core Processor", value: "Q-Mesh Neural System v4" },
      { name: "Actuator Torque", value: "850 Nm Peak" },
      { name: "Degree of Freedom", value: "48 Active DoF" },
      { name: "Power Reserve", value: "72 Hrs Fusion-Cell" }
    ],
    techTags: ["Quantum Mesh", "Hydraulic Feedback", "Autonomous SLAM", "Titanium-Alloy Skeleton"],
    specs: [
      "Dynamic Balance Control utilizing custom micro-gyroscope clusters ticking at 4000Hz.",
      "Oculometric targeting & scanning deck with multi-spectrum LiDAR receivers.",
      "Dual-hand dexterity modules equipped with tactile baroreceptors registering 0.05 mN shifts.",
      "Sub-ambient carbon-nanotube radiator cooling for noiseless silent locomotion."
    ],
    blueprintText: "VALKYRIE.SYS // MODULE_09\n=========================\nINIT_SEQUENCE: SUCCESS\nTORQUE_CALIBRATION: OK [850 Nm]\nGYRO_FEEDBACK_LOOP: ACTIVE [4000Hz]\nSENSORY_GRID: CONNECTED [LiDAR_ACTIVE]\nCOGNITIVE_OVERLAY: COMMENCING SYNCHRONOUS BOOT"
  },
  {
    id: "kronos-drone",
    title: "Kronos-X Quad-Rotor",
    category: "Aerospace Vector Class",
    subtitle: "High-Speed Autonomous Transport & Cargo Platform",
    shortDesc: "A multi-vector aerial cargo vessel equipped with multi-axis vector thrusters, storm-stabilizing wings, and magnetic docking interfaces.",
    description: "Built to disrupt high-frequency metropolitan delivery and remote high-altitude resupply logistics, the Kronos-X stands as an unbeatable force in aerospace vector engineering. Its variable-geometry carbon fiber rotors auto-pitch up to 45 degrees, allowing it to traverse sheer wind currents, convective storms, and electromagnetic interference zones. When docked, it links into automated energy hubs to achieve a complete recharge in less than 120 seconds.",
    imageFallbackGradient: "from-cyber-purple/30 via-slate-900 to-purple-950",
    stats: [
      { name: "Max Lift Payload", value: "245 kg" },
      { name: "Turbine Velocity", value: "14,500 RPM" },
      { name: "Navigational Drift", value: "< 1.5 cm Vectoring" },
      { name: "Egress Velocity", value: "145 km/h" }
    ],
    techTags: ["Vector Thrusters", "Acoustic Noise Dampening", "Mag-Safe Cargo Dock", "Wind-Shedding Composites"],
    specs: [
      "Quaternary redundant altitude controllers with laser altimeter fail-safes.",
      "Rotor-blade acoustic resonators offsetting standard high-frequency whine by 90%.",
      "Dynamic magnetic tethering system for touchless high-payload retrieval.",
      "Storm-sensing AI prediction matrix adjusting rotor velocities 200 times per second."
    ],
    blueprintText: "KRONOS_AIR.CFG // SYS_V3\n=========================\nROTOR_A0: UNLOCKED [14500 RPM]\nLASER_ALTIMETER: CALIBRATED\nMAG_SAFE_TETHER: STANDEY\nSTABILIZER_VECTORS: AUTOPITCH_TRUE\nALERT: STORM_SENSE_MATRIX_ONLINE"
  },
  {
    id: "aegis-sentry",
    title: "Aegis Sentinel Mk.V",
    category: "Autonomous Ground Sentry",
    subtitle: "Intellectual Tactical Perimeter Guard & Shield Core",
    shortDesc: "All-terrain defensive armor crawler utilizing non-lethal mesh nets, sonic deterrents, and energy deflection shields.",
    description: "The Aegis Sentinel Mk.V is designed to operate in high-risk zones, providing impenetrable security perimeters for diplomatic installations, bio-vaults, and active rocket pads. Moving on a robust twelve-axis carbon crawler system, it negotiates vertical walls and gravel blockages with ease. Behind its armored plates lies a high-energy pulse shield generator that deflects physical debris and high-voltage static discharges.",
    imageFallbackGradient: "from-purple-950 via-slate-900 to-cyan-950/40",
    stats: [
      { name: "Crawler Footing", value: "12-Axis Independent" },
      { name: "Deflector Power", value: "3.2 GW Nanosecond Pulse" },
      { name: "Acoustic Disturber", value: "135 dB Directed Beam" },
      { name: "Sentry Range", value: "1.2 km Omnidirectional" }
    ],
    techTags: ["Impact Deflection Shield", "Armored Micro-Crawler", "Directed Acoustic Array", "Intruder Path Tracker"],
    specs: [
      "Ultra-hard synthetic sapphire lenses covering full 360-degree thermographic sensors.",
      "Deployable electrostatic field generator producing defensive perimeter fields.",
      "Twelve heavy-tension shock pistons with active hydraulic damping for steep climbing.",
      "Automated mesh capsule launcher designed for non-damaging capture protocols."
    ],
    blueprintText: "AEGIS_ARMOR.CORE // VERSION_5.20\n=================================\nPULSE_DEFLECTOR: STANDBY [3.2 GW]\nCRAWLER_MOTORS: IN_SYNC [12-AXIS]\nTHERMAL_SCAN: CONSTANT [RESOLUTION_HIGH]\nSONIC_ARRAY_READY: TRUE\nSTATUS: CLEAR_PERIMETER"
  },
  {
    id: "orion-surgical",
    title: "Orion-V Surgical Arm",
    category: "Precision Medical Robotics",
    subtitle: "Synaptic-Integrated Sub-Millimeter Precision Arm",
    shortDesc: "A multi-jointed surgical arm utilizing real-time bio-feedback loop trackers, magnetic joints, and sub-micron steady-state holds.",
    description: "Reinventing micro-surgery, the Orion-V Surgical Core connects directly to neural-link bio-feedback processors, scaling down a surgeon's manual gestures by a factor of 1000. It compensates for minute human finger tremors entirely via micro-magnetic joints. The arm functions in complete autonomy during simple suturing or vascular mapping operations, with active AI monitoring that halts any vector movement if cardiac metrics fluctuate unexpectedly.",
    imageFallbackGradient: "from-blue-950 via-slate-900 to-cyber-blue/30",
    stats: [
      { name: "Motion Precision", value: "< 0.1 Microns" },
      { name: "Synaptic Delay", value: "0.2 Milliseconds" },
      { name: "Joint Degrees", value: "7-Joint Magnetic Axis" },
      { name: "Biometric Scans", value: "12,000 Hertz Feedback" }
    ],
    techTags: ["Sub-Micron Precision", "Electromagnetic Axis", "Tremor Cancelling", "Synaptic Integration Module"],
    specs: [
      "Magnetic joint collars with frictionless liquid bearing support.",
      "Synaptic receiver bands capturing human muscular planning signals directly.",
      "Co-axial micro-LiDAR scanners measuring surface contours down to the cellular scale.",
      "Pico-injector surgical modules constructed from bio-compatible titanium alloys."
    ],
    blueprintText: "ORION_MED.DRV // PROTOCOL_NEURAL\n=================================\nTREMOR_OFFSET_FILTER: HIGH [100%]\nBIO_SCAN: STEADY [12000Hz]\nMAGNETIC_JOINTS: STABILIZED_SUB_MICRON\nPICO_INJECTORS: NOMINAL\nSYSTEM_FEEDBACK: ENGAGED [SURGEON_MUTUAL]"
  }
];
