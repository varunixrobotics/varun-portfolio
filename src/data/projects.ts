/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project } from "../types";

export const ProjectsData: Project[] = [
  {
    id: "nexus-valkyrie",
    title: "Nexus-9 Valkyrie",
    category: "Robotics",
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
    category: "Drones",
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
    category: "Robotics",
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
    category: "Robotics",
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
  },
  {
    id: "aether-kernel",
    title: "Aether-OS Kernel",
    category: "Software Projects",
    subtitle: "Real-Time Operating System for Cybernetic Hardware",
    shortDesc: "A high-performance microkernel RTOS featuring a lock-free scheduler, sub-nanosecond interrupt response, and secure process isolation.",
    description: "Aether-OS is a state-of-the-art microkernel designed from the ground up for critical robotics, drones, and neural interfaces. It eliminates traditional operating system overhead by utilizing compile-time memory guarantees and an advanced lock-free execution queue, achieving unmatched predictability and speed under heavy multi-sensor processing loads.",
    imageFallbackGradient: "from-emerald-950 via-slate-900 to-cyber-blue/20",
    stats: [
      { name: "Core Latency", value: "< 0.8 Microseconds" },
      { name: "Code Footprint", value: "48 KB Compiled" },
      { name: "Max Processes", value: "65,536 Concurrent" },
      { name: "Memory Overhead", value: "< 0.2% Total RAM" }
    ],
    techTags: ["Rust/Assembly", "Microkernel RTOS", "Lock-free Scheduler", "Memory Isolation"],
    specs: [
      "Zero-copy message passing architecture for ultra-fast inter-process communication.",
      "Dynamic memory pooling preventing runtime fragmentation and memory leaks.",
      "Hardware-enforced capability-based security model for device driver sandboxing.",
      "Integrated real-time telemetry tracing engine running at system level."
    ],
    blueprintText: "AETHER_OS.KERNEL // BOOT_VER_1.4\n================================\nMEM_RESERVE: OK [48 KB]\nSCHEDULER_INIT: LOCK_FREE_ACTIVE\nINTERRUPT_VECTOR: CALIBRATED [<0.8us]\nSANDBOX_ISOLATION: SECURED\nSTATUS: RUNNING [NO_ERRORS]"
  },
  {
    id: "sol-rescue-swarm",
    title: "Project Sol-Rescue",
    category: "Hackathons",
    subtitle: "Autonomous Search & Rescue Micro-Swarm",
    shortDesc: "A deployable mesh-networked micro-drone swarm developed in 48 hours for localizing survival signatures in collapsed structures.",
    description: "Winner of the Global Cyber-Robotics Hackathon 2026, Project Sol-Rescue showcases rapid prototyping of autonomous swarm behaviors. Utilizing off-the-shelf ultra-lightweight carbon parts, the micro-drones form an ad-hoc local mesh network that coordinates searches without external GPS or active internet connections, sharing telemetry to construct a 3D volumetric map of disaster areas.",
    imageFallbackGradient: "from-orange-950 via-slate-900 to-cyber-purple/20",
    stats: [
      { name: "Hackathon Time", value: "48 Hours Build" },
      { name: "Swarm Size", value: "8 Cooperating Units" },
      { name: "Mesh Bandwidth", value: "120 Mbps Peer-to-Peer" },
      { name: "Target Detection", value: "98.6% Accuracy" }
    ],
    techTags: ["Mesh Networking", "Edge AI Mapping", "Rapid Prototyping", "Cooperative Control"],
    specs: [
      "Distributed SLAM mapping algorithm operating across the active drone fleet.",
      "Thermal signature detection engine using quantized edge-computed neural nets.",
      "Decentralized consensus protocol for dynamic sector allocation.",
      "Ultra-lightweight 3D printed carbon-reinforced skeleton."
    ],
    blueprintText: "SOL_RESCUE.SWARM // HACKATHON_PROJECT\n=====================================\nBUILD_DURATION: 48_HOURS [COMPLETE]\nSWARM_UNITS: 8_ACTIVE // CONNECTED\nMESH_BANDWIDTH: 120_MBPS_OK\nTARGET_LIDAR: ENGAGED [3D_GRID]\nDECENTRALIZED_CONSENSUS: STABLE"
  }
];
