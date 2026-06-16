export const serviceTabs = [
  { id: "s01", num: "01", name: "Product Development & ID" },
  { id: "s02", num: "02", name: "Prototyping" },
  { id: "s03", num: "03", name: "Advanced CAD & Surfacing" },
] as const;

export const productDevCapabilities = [
  {
    name: "Form Language & Product Architecture",
    desc: "Silhouette, proportion, surface gesture, and spatial logic",
  },
  {
    name: "Ergonomics & Human Factors",
    desc: "Grip, reach, weight balance, and usability modeling",
  },
  {
    name: "CMF Direction",
    desc: "Color, material, and finish strategy tied to manufacturing",
  },
  {
    name: "Concept Sketching & Ideation",
    desc: "Broad exploration narrowed to a buildable direction",
  },
  {
    name: "CAD Design & DFM",
    desc: "Geometry built with manufacturing constraints baked in",
  },
  {
    name: "AI-Powered Visualization",
    desc: "Rapid concept visualization before committing to full CAD",
  },
];

export const productDevTags = [
  "Form Language",
  "Ergonomics",
  "CMF",
  "Sketching",
  "CAD Design",
  "DFM",
  "AI Visualization",
  "Product Architecture",
  "Line Extensions",
  "Redesigns",
];

export const designFlowSteps = [
  {
    num: "01",
    title: "Brief & Requirements",
    desc: "Product intent, market context, technical constraints",
  },
  {
    num: "02",
    title: "Concept Exploration",
    desc: "Sketches, AI renders, directional options",
  },
  {
    num: "03",
    title: "Direction Approval",
    desc: "One direction refined and approved for CAD",
  },
  {
    num: "04",
    title: "CAD + DFM",
    desc: "Parametric model built with manufacturing in mind",
  },
  {
    num: "05",
    title: "Final Files & Drawings",
    desc: "Production-ready package handed off",
  },
];

export const productDevBestFor = [
  "New consumer or hardware products from scratch",
  "Existing product redesigns and second-gen development",
  "Product line extensions and family architecture",
  "Founders who need a full design + engineering partner",
];

export const protoTypes = [
  {
    title: "Form Study Prototype",
    desc: "Rapid 3D printed models to validate size, proportion, and ergonomics. Used before any CAD refinement to check real-world feel.",
    tags: ["FDM", "SLA", "Form Check"],
    icon: "cube" as const,
  },
  {
    title: "Functional Prototype",
    desc: "Working prototypes that simulate the intended product behavior. Used for usability testing, investor demos, and mechanical validation.",
    tags: ["Mechanical", "Electronic", "User Test"],
    icon: "clock" as const,
  },
  {
    title: "3D Printed Molds",
    desc: "Low-cost printed molds for urethane casting or silicone parts. Bridge tooling between prototype and production without full injection mold cost.",
    tags: ["Urethane Cast", "Bridge Tooling"],
    icon: "mold" as const,
  },
  {
    title: "Digital Prototype",
    desc: "High-fidelity CAD renders and interactive models used for pre-production decision-making, presentations, and investor materials.",
    tags: ["CAD Render", "Animation", "Exploded View"],
    icon: "chart" as const,
  },
  {
    title: "Pre-Production Units",
    desc: "Low-run production units used for final testing, retail photography, early sales, and production line validation before full tooling commitment.",
    tags: ["Low-Run", "Production Test", "Pilot"],
    icon: "target" as const,
  },
  {
    title: "Test & Iteration Report",
    desc: "Documented test results, failure modes, and design revision recommendations. Every prototype build closes with a written report.",
    tags: ["Test Report", "Revision Rec", "Updated CAD"],
    icon: "check" as const,
  },
];

export const protoTags = [
  "3D Printing",
  "Printed Molds",
  "Pre-Production",
  "Physical Testing",
  "Digital Prototypes",
  "Low-Run Production",
];

export const cadCapabilities = [
  {
    label: "Modeling",
    title: "Parametric Design",
    desc: "History-based, fully editable CAD models with design intent built in. Changes propagate correctly throughout the assembly.",
  },
  {
    label: "Surfacing",
    title: "NURBS & Mesh",
    desc: "Non-uniform rational B-spline surfaces for smooth, mathematically precise geometry. Used for all premium exterior surfaces.",
  },
  {
    label: "Organic",
    title: "SubD Modeling",
    desc: "Subdivision surface modeling for complex organic shapes — handles, grips, biomorphic forms — that NURBS alone can't efficiently produce.",
  },
  {
    label: "Quality",
    title: "Class-A Finish",
    desc: "Curvature-continuous surface quality with zebra, isophote, and highlight analysis to verify optical smoothness before handoff.",
  },
  {
    label: "Output",
    title: "Rendering",
    desc: "Studio-quality product renders for marketing, investor decks, and pre-production approvals. Accurate material and lighting simulation.",
  },
  {
    label: "Review",
    title: "Full DFM Audit",
    desc: "Wall thickness, draft angles, undercuts, parting lines, sink marks, weld lines — a complete manufacturing readiness review with written report.",
  },
];

export const cadTags = [
  "Parametric",
  "NURBS",
  "SubD Organic",
  "Class-A",
  "Rendering",
  "DFM Review",
  "Mesh Modeling",
  "Technical Drawings",
];

export const cadBestFor = [
  "Teams with existing CAD that needs surfacing quality",
  "Products with organic or compound-curved surfaces",
  "OEM or premium consumer products requiring Class-A",
  "Pre-production DFM audit before tooling submission",
];

export const classAGrades = [
  {
    grade: "Class A",
    desc: "Curvature-continuous. Required for automotive, premium consumer, and any high-gloss finish. What we deliver.",
    variant: "a" as const,
  },
  {
    grade: "Class B",
    desc: "Tangent-continuous. Acceptable for most industrial products and textured finishes.",
    variant: "b" as const,
  },
  {
    grade: "Class C",
    desc: "Positional only. Visible seams and reflective breaks. Not suitable for visible consumer surfaces.",
    variant: "c" as const,
  },
];

export const serviceMatrix = [
  {
    client: "Founder with an idea, no files",
    sub: "Starting from scratch",
    productDev: "primary" as const,
    prototyping: "partial" as const,
    cad: "none" as const,
  },
  {
    client: "Founder with sketches or renders",
    sub: "Has direction, needs CAD + DFM",
    productDev: "primary" as const,
    prototyping: "primary" as const,
    cad: "partial" as const,
  },
  {
    client: "Team with CAD, needs surfacing",
    sub: "Files exist, quality isn't there yet",
    productDev: "none" as const,
    prototyping: "none" as const,
    cad: "primary" as const,
  },
  {
    client: "Team ready to prototype",
    sub: "CAD approved, needs physical build",
    productDev: "none" as const,
    prototyping: "primary" as const,
    cad: "none" as const,
  },
  {
    client: "Pre-production DFM review needed",
    sub: "Going to tooling, want a second opinion",
    productDev: "none" as const,
    prototyping: "none" as const,
    cad: "primary" as const,
  },
  {
    client: "Full development partner needed",
    sub: "Idea → handoff, end to end",
    productDev: "primary" as const,
    prototyping: "primary" as const,
    cad: "primary" as const,
  },
];

export const addons = [
  {
    title: "AI Concept Visualization",
    desc: "Rapid AI-generated product concepts for early-stage direction setting and stakeholder alignment — before committing to CAD.",
    icon: "grid" as const,
  },
  {
    title: "Product Rendering",
    desc: "Studio-quality renders from CAD for marketing, investor decks, and pre-production approvals. Accurate material and lighting simulation.",
    icon: "star" as const,
  },
  {
    title: "Exploded View Drawings",
    desc: "Assembly exploded views and technical illustration for manuals, patent applications, and manufacturing documentation.",
    icon: "home" as const,
  },
  {
    title: "BOM & Spec Documentation",
    desc: "Bill of materials, component specifications, and manufacturing notes packaged for handoff to suppliers and contract manufacturers.",
    icon: "clock" as const,
  },
];

export const faqs = [
  {
    q: "Can I hire you for just one service without the others?",
    a: "Yes — all three services are available as standalone engagements. If you already have industrial design done and just need CAD and surfacing, we can scope exactly that. If you have production-ready CAD and just need prototypes built, same thing. We scope around what you actually need, not what fills a package.",
  },
  {
    q: "What software do you work in?",
    a: "We work across SolidWorks, Rhino 3D, KeyShot, and Fusion 360 depending on the project requirements. For organic surfacing we use Rhino + T-Splines or SubD workflows. Final deliverables can be exported in STEP, IGES, STL, or native formats depending on what your manufacturer or next vendor needs.",
  },
  {
    q: "Do you work with products in any category?",
    a: "Generally yes — consumer electronics, lifestyle products, hardware, tools, medical devices, and beyond. The design and engineering fundamentals apply across categories. We'll flag upfront if a project requires specialized domain knowledge we don't have, rather than pretend.",
  },
  {
    q: "How long does a typical engagement take?",
    a: "It depends heavily on product complexity and scope. A focused Sprint (single deliverable) can be 1–3 weeks. A full Project from concept through manufacturing handoff typically runs 8–20 weeks depending on the number of prototype iterations and revision cycles. We'll give you a timeline estimate in the proposal — and flag when scope changes affect it.",
  },
  {
    q: "What do you need from me to get started?",
    a: "As little as an idea and 30 minutes of your time. If you have existing files, references, or research, bring them — but they're not required. We'll ask the right questions to understand the product, the market, the constraints, and what success looks like. Everything else we can build from there.",
  },
  {
    q: "Do you help with finding manufacturers?",
    a: "Yes — as part of Phase 5 (Manufacturing & Production) on the How We Work track, or as an add-on to any CAD/prototyping engagement. We help identify and vet manufacturers, prepare RFQ packages, review tooling quotes, and stay engaged through first-article inspection. We don't disappear at the file handoff.",
  },
];
