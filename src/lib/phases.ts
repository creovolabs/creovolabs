export type Phase = {
  num: string;
  tag: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  note?: string;
  standalone?: boolean;
};

export const phases: Phase[] = [
  {
    num: "01",
    tag: "Consultation & Planning",
    title: "Understand the idea. Build the plan.",
    tagline:
      "We figure out what you're building, what it costs, and how to get there before a single file is opened.",
    description:
      "Before anything gets designed or built, we need to understand what you're actually trying to make — and whether the plan makes sense. This phase is about alignment, clarity, and de-risking the investment ahead. We'll dig into your product idea, your market, your constraints, and your goals. You'll leave with a clear picture of what the development process looks like and what it'll cost.",
    deliverables: [
      "Product brief & requirements doc",
      "Market & competitive landscape",
      "Technical feasibility assessment",
      "Budget estimate by phase",
      "Development roadmap",
      "Risk & dependency review",
    ],
    note: "This phase is the foundation. Clients who skip it often discover mid-build that something fundamental wasn't thought through. We recommend starting here — even if you think you already know what you want.",
  },
  {
    num: "02",
    tag: "Product Design & Engineering",
    title: "From concept to production-ready geometry.",
    tagline:
      "Industrial design, advanced CAD, surfacing, and DFM — the full design and engineering pass.",
    description:
      "This is where the product takes shape. We develop the form language, work through ergonomics and CMF direction, translate the approved concept into precise CAD geometry, and build in manufacturing constraints from the start. The output isn't concept art — it's geometry a manufacturer can actually work from.",
    deliverables: [
      "Industrial design concepts & sketches",
      "CMF direction (color, material, finish)",
      "Approved concept renderings",
      "Full parametric CAD model",
      "Class-A or production surface finish",
      "Technical drawings & spec sheets",
      "DFM review report",
      "BOM (bill of materials) draft",
    ],
    note: "If you already have design direction or partial CAD, we can scope this phase around what's missing — you don't need to redo work that's already solid.",
  },
  {
    num: "03",
    tag: "Prototyping & Testing",
    title: "Build it. Break it. Fix it. Repeat.",
    tagline:
      "Physical validation before you commit to tooling — the phase that saves you from expensive surprises.",
    description:
      "A prototype is how you find out what the model didn't tell you. We produce physical builds at whatever fidelity the validation requires — from rough form studies to functional pre-production units — and use the results to refine the design before any tooling investment is made.",
    deliverables: [
      "3D printed form study prototype",
      "Functional prototype (if applicable)",
      "3D printed tooling / molds (low-run)",
      "Pre-production units",
      "Test report & failure documentation",
      "Design revision recommendations",
      "Updated CAD reflecting changes",
    ],
    note: "The number of prototype iterations depends on complexity. We'll scope this clearly upfront — and flag when additional rounds are needed rather than billing for them without warning.",
  },
  {
    num: "04",
    tag: "Branding & Product Identity",
    title: "What the product is called. How it looks. What it says.",
    tagline:
      "Name, logo, packaging, and visual identity — built around the product, not bolted on after.",
    description:
      "A product without a clear identity is harder to sell, harder to remember, and harder to trust. This phase builds the brand layer: naming, visual identity, packaging design, and the language used to talk about the product in the market. It can be done in parallel with Phase 2 or 3, or as a standalone engagement.",
    deliverables: [
      "Product name & naming rationale",
      "Logo design (primary + variants)",
      "Brand color & type system",
      "Packaging design (dieline + render)",
      "Brand voice & messaging guide",
      "Brand usage guidelines doc",
    ],
    standalone: true,
  },
  {
    num: "05",
    tag: "Manufacturing & Production",
    title: "From files to factory floor.",
    tagline:
      "Manufacturer selection, production prep, and hands-on support through first article and beyond.",
    description:
      "Getting to production-ready CAD is not the same as getting to production. This phase bridges that gap: we prepare the complete manufacturing package, help identify and evaluate manufacturers, and stay engaged through first-article inspection and production ramp. You don't get dropped at the handoff.",
    deliverables: [
      "Production-ready file package",
      "Manufacturer shortlist & vetting",
      "RFQ documentation",
      "Tooling review & approval support",
      "First-article inspection (FAI) review",
      "Production QC checklist",
      "Ongoing manufacturing liaison",
    ],
    note: "This phase is most valuable when you've done Phases 2 and 3 with us — we already know every detail of the product and can represent it accurately to manufacturers. But we can scope a standalone manufacturing support engagement if needed.",
  },
];

export const paymentSteps = [
  {
    step: "Step 01",
    title: "Choose a phase",
    description:
      "Pick the phase that matches where you are. We'll confirm scope and deliverables together.",
  },
  {
    step: "Step 02",
    title: "Get a fixed quote",
    description:
      "We send a scoped proposal with a fixed price for that phase. No hourly ambiguity.",
  },
  {
    step: "Step 03",
    title: "We deliver",
    description:
      "You receive every deliverable listed in the scope. Work is reviewed and approved before we close.",
  },
  {
    step: "Step 04",
    title: "Decide what's next",
    description:
      "Continue to the next phase, pause, or stop. Entirely your call — no obligation either way.",
  },
];

export const philosophyPills = [
  {
    title: "Start at any phase",
    description:
      "Already have a design? Jump straight to CAD. Have CAD? Go straight to prototyping.",
    icon: "plus",
  },
  {
    title: "Stop at any phase",
    description:
      "Maybe Phase 1 is all you need right now. No pressure, no lock-in. Pick it back up when you're ready.",
    icon: "check",
  },
  {
    title: "Each phase stands alone",
    description:
      "Every phase delivers something real and usable — not a stepping stone to another invoice.",
    icon: "clock",
  },
] as const;
