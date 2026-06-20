/* ============================================================
   DHANUSH KUMAR G — Project Data
   Single source of truth for every project on the site.
   Used by: projects.html (cards) and project-detail.html (full page)

   ──────────────────────────────────────────────────────────
   HOW TO ADD / EDIT A PROJECT
   ──────────────────────────────────────────────────────────
   1. Copy one of the objects below inside the PROJECTS array.
   2. Give it a unique "slug" (no spaces, used in the URL:
      project-detail.html?slug=your-slug).
   3. Set "engine" to "unreal", "unity", or "android" — this
      controls the badge color and the filter tab on the
      Projects page.
   4. "summary" is the short 2–3 line text shown on the card
      in the grid. "description" is an array of paragraphs —
      write as many as you like, this is the big write-up
      shown on the project's own page (story, systems,
      challenges, what you learned, your specific role, etc).
   5. "images": add as many as you want. Each one shows up in
      the gallery on the project's detail page. Put your image
      files in assets/images/ and reference them like
      "assets/images/myproject-01.jpg".
   6. "videos": add as many YouTube videos as you want. Each
      needs a "title" and the YouTube "id" (the part after
      ?v= in the URL, or after youtu.be/).
   7. "tags", "features", "role", "tools" are all optional —
      leave the array empty ([]) to hide that block.
   ============================================================ */

const PROJECTS = [

  // ════════════════════════════════════════════════════════
  // FEATURED — Unreal Engine
  // ════════════════════════════════════════════════════════
  {
    slug: "horror-fps-survive-the-dark",
    featured: true,
    engine: "unreal",
    engineLabel: "Unreal Engine 5",
    type: "Adv. Diploma — Final Project",
    year: "2024",
    duration: "4 months (solo)",
    title: "Horror FPS — Survive the Dark",
    summary: "A first-person psychological horror game built in Unreal Engine 5, with dynamic AI enemy behaviour, atmospheric lighting, and fully voiced environmental storytelling.",
    description: [
      "Survive the Dark is a single-player psychological horror FPS built from the ground up in Unreal Engine 5 as my final project for the Advanced Diploma in Design & Game Development. The brief I set myself was simple to state and hard to execute: build dread out of systems, not jump-scares alone. The player wakes up in an abandoned research facility with no memory of how they got there, and has to navigate dark, claustrophobic corridors while an unseen presence — the Warden — hunts them using sound and sight.",
      "The core of the project is the AI. I built the Warden using Unreal's Behaviour Tree and Blackboard system, layered with a custom 'suspicion' meter that rises and falls based on the player's noise output, light exposure, and proximity. Rather than a binary 'seen / not seen' state machine, the Warden has four behavioural states — Idle, Suspicious, Searching, and Hunting — each with different patrol logic, line-of-sight cones, and audio cues, so the tension escalates gradually instead of snapping straight to a chase.",
      "Lighting and sound design carry most of the horror. I built a dynamic lighting rig where every light source in the level can be shot out, knocked over, or run out of battery, permanently changing how a room reads on a second pass through it. Environmental storytelling — audio logs, scattered notes, staged crime scenes — was placed using a custom Blueprint actor that lets me drop a 'story beat' anywhere in the level and have it trigger contextually rather than on a fixed timeline.",
      "The biggest technical challenge was performance: dense fog volumes, dynamic shadows, and Niagara particle effects for dust and embers all stacked up fast on mid-range hardware. I spent a significant chunk of the project profiling in Unreal Insights and converting several real-time shadow casters to baked lighting with light-mass importance volumes, which got the frame time down to a stable 60fps without losing the atmosphere.",
      "This project taught me how to think about horror as a design problem rather than a content problem — the scares come from systems the player can almost-but-not-quite predict, not from scripted shocks."
    ],
    features: [
      "Custom Behaviour Tree AI with 4 escalating threat states",
      "Dynamic, destructible lighting that permanently alters room read",
      "Noise-propagation system tied to player movement and actions",
      "Contextual environmental storytelling via reusable Blueprint actor",
      "Save/checkpoint system with persistent world state"
    ],
    role: "Solo developer — design, Blueprint/C++ programming, level design, lighting, sound implementation",
    tools: ["Unreal Engine 5", "Blueprints", "C++", "Behaviour Trees", "Niagara VFX", "Unreal Insights"],
    tags: ["UE5", "Blueprints", "AI Behaviour Tree", "Horror", "FPS", "C++"],
    images: [
      { src: "assets/images/horror-fps-01.jpg", caption: "Facility corridor — dynamic shadow lighting rig" },
      { src: "assets/images/horror-fps-02.jpg", caption: "Warden AI in 'Searching' state, mid-patrol" },
      { src: "assets/images/horror-fps-03.jpg", caption: "Environmental storytelling — staged crime scene prop set" },
      { src: "assets/images/horror-fps-04.jpg", caption: "Behaviour Tree graph for the Warden's threat-state logic" },
      { src: "assets/images/horror-fps-05.jpg", caption: "Niagara dust and ember particle pass" },
      { src: "assets/images/horror-fps-06.jpg", caption: "Final boss arena — destructible light sources" }
    ],
    videos: [
      { title: "Full Gameplay Demo (8 min)", id: "RjDO6IQrNww" },
      { title: "AI Behaviour Breakdown", id: "RjDO6IQrNww" },
      { title: "Lighting & VFX Reel", id: "RjDO6IQrNww" }
    ],
    links: {
      demo: "https://www.youtube.com/embed/RjDO6IQrNww?si=WqgNN8OtnXmXbuFM",
      github: "https://github.com/yourusername/horror-fps"
    }
  },

  // ════════════════════════════════════════════════════════
  // UNREAL #2
  // ════════════════════════════════════════════════════════
  {
    slug: "unreal-project-2",
    featured: false,
    engine: "unreal",
    engineLabel: "Unreal Engine 5",
    type: "Adv. Diploma",
    year: "2024",
    duration: "—",
    title: "Project Title 2",
    summary: "Describe your second Unreal Engine project here in 2–3 sentences. Mention the genre, key mechanics, and what you built.",
    description: [
      "🔥 Replace this with the full story of the project: what the brief or idea was, what genre it sits in, and what the player actually does moment to moment.",
      "🔥 Add a paragraph about the systems you built — combat, movement, puzzle logic, procedural generation, whatever was core to this project — and how you implemented them in Blueprint or C++.",
      "🔥 Add a paragraph about the hardest problem you solved and how you solved it. This is the part that shows real engineering thinking, so be specific about the 'before' and 'after'.",
      "🔥 Close with what you learned or what you'd do differently next time."
    ],
    features: [
      "🔥 Feature one",
      "🔥 Feature two",
      "🔥 Feature three"
    ],
    role: "🔥 Your role on this project",
    tools: ["Unreal Engine 5", "Blueprints"],
    tags: ["UE5", "Blueprints"],
    images: [
      { src: "assets/images/project2-01.jpg", caption: "🔥 Caption for image 1" },
      { src: "assets/images/project2-02.jpg", caption: "🔥 Caption for image 2" },
      { src: "assets/images/project2-03.jpg", caption: "🔥 Caption for image 3" }
    ],
    videos: [
      { title: "Gameplay Demo", id: "RjDO6IQrNww" },
      { title: "Walkthrough / Dev Commentary", id: "RjDO6IQrNww" }
    ],
    links: {
      demo: "https://www.youtube.com/embed/RjDO6IQrNww?si=WqgNN8OtnXmXbuFM",
      github: "https://github.com/yourusername/project2"
    }
  },

  // ════════════════════════════════════════════════════════
  // UNREAL #3
  // ════════════════════════════════════════════════════════
  {
    slug: "unreal-project-3",
    featured: false,
    engine: "unreal",
    engineLabel: "Unreal Engine 5",
    type: "Adv. Diploma",
    year: "2023",
    duration: "—",
    title: "Project Title 3",
    summary: "Describe your third Unreal Engine project here. What genre, what systems did you design, what was the key challenge you solved?",
    description: [
      "🔥 Replace with the full project write-up — same structure as above: concept, systems, biggest challenge, takeaway.",
      "🔥 Paragraph two.",
      "🔥 Paragraph three."
    ],
    features: ["🔥 Feature one", "🔥 Feature two"],
    role: "🔥 Your role on this project",
    tools: ["Unreal Engine 5", "C++", "Level Design"],
    tags: ["UE5", "C++", "Level Design"],
    images: [
      { src: "assets/images/project3-01.jpg", caption: "🔥 Caption for image 1" },
      { src: "assets/images/project3-02.jpg", caption: "🔥 Caption for image 2" }
    ],
    videos: [
      { title: "Gameplay Demo", id: "RjDO6IQrNww" },
      { title: "Walkthrough / Dev Commentary", id: "RjDO6IQrNww" }
    ],
    links: {
      demo: "https://www.youtube.com/embed/RjDO6IQrNww?si=WqgNN8OtnXmXbuFM",
      github: "https://github.com/yourusername/project3"
    }
  },

  // ════════════════════════════════════════════════════════
  // UNREAL #4
  // ════════════════════════════════════════════════════════
  {
    slug: "unreal-project-4",
    featured: false,
    engine: "unreal",
    engineLabel: "Unreal Engine 5",
    type: "Adv. Diploma",
    year: "2023",
    duration: "—",
    title: "Project Title 4",
    summary: "Describe your fourth Unreal Engine project here. Highlight any unique systems, visual effects, or gameplay loops you created.",
    description: [
      "🔥 Replace with the full project write-up.",
      "🔥 Paragraph two.",
      "🔥 Paragraph three."
    ],
    features: ["🔥 Feature one", "🔥 Feature two"],
    role: "🔥 Your role on this project",
    tools: ["Unreal Engine 5", "Niagara VFX"],
    tags: ["UE5", "Niagara VFX", "Game Design"],
    images: [
      { src: "assets/images/project4-01.jpg", caption: "🔥 Caption for image 1" },
      { src: "assets/images/project4-02.jpg", caption: "🔥 Caption for image 2" }
    ],
    videos: [
      { title: "Gameplay Demo", id: "RjDO6IQrNww" },
      { title: "Walkthrough / Dev Commentary", id: "RjDO6IQrNww" }
    ],
    links: {
      demo: "https://www.youtube.com/embed/RjDO6IQrNww?si=WqgNN8OtnXmXbuFM",
      github: "https://github.com/yourusername/project4"
    }
  },

  // ════════════════════════════════════════════════════════
  // UNITY #1 — NEW
  // ════════════════════════════════════════════════════════
  {
    slug: "unity-project-1",
    featured: false,
    engine: "unity",
    engineLabel: "Unity",
    type: "Personal Project",
    year: "2024",
    duration: "—",
    title: "Unity Project — Title Here",
    summary: "Describe your Unity project here. What genre, what's the core loop, and what made you choose Unity over Unreal for this one?",
    description: [
      "🔥 Replace with the full story: what this project is, why you built it in Unity specifically (2D pipeline, lighter weight, faster iteration, mobile target, etc), and what the player does.",
      "🔥 Paragraph on the systems you built — C# scripts, the component architecture, any custom editor tools, physics, animation state machines (Animator/Mecanim), etc.",
      "🔥 Paragraph on the hardest problem and how you solved it.",
      "🔥 What you learned, and how this complements your Unreal Engine work."
    ],
    features: ["🔥 Feature one", "🔥 Feature two", "🔥 Feature three"],
    role: "🔥 Your role on this project",
    tools: ["Unity", "C#", "Animator", "2D Physics"],
    tags: ["Unity", "C#"],
    images: [
      { src: "assets/images/unity1-01.jpg", caption: "🔥 Caption for image 1" },
      { src: "assets/images/unity1-02.jpg", caption: "🔥 Caption for image 2" },
      { src: "assets/images/unity1-03.jpg", caption: "🔥 Caption for image 3" }
    ],
    videos: [
      { title: "Gameplay Demo", id: "RjDO6IQrNww" },
      { title: "Walkthrough / Dev Commentary", id: "RjDO6IQrNww" }
    ],
    links: {
      demo: "https://www.youtube.com/embed/RjDO6IQrNww?si=WqgNN8OtnXmXbuFM",
      github: "https://github.com/yourusername/unity-project-1"
    }
  },

  // ════════════════════════════════════════════════════════
  // UNITY #2 — NEW
  // ════════════════════════════════════════════════════════
  {
    slug: "unity-project-2",
    featured: false,
    engine: "unity",
    engineLabel: "Unity",
    type: "Personal Project",
    year: "2024",
    duration: "—",
    title: "Unity Project 2 — Title Here",
    summary: "Describe your second Unity project here. If you only have one Unity project right now, delete this object from the array.",
    description: [
      "🔥 Replace with the full project write-up.",
      "🔥 Paragraph two.",
      "🔥 Paragraph three."
    ],
    features: ["🔥 Feature one", "🔥 Feature two"],
    role: "🔥 Your role on this project",
    tools: ["Unity", "C#"],
    tags: ["Unity", "C#"],
    images: [
      { src: "assets/images/unity2-01.jpg", caption: "🔥 Caption for image 1" },
      { src: "assets/images/unity2-02.jpg", caption: "🔥 Caption for image 2" }
    ],
    videos: [
      { title: "Gameplay Demo", id: "RjDO6IQrNww" },
      { title: "Walkthrough / Dev Commentary", id: "RjDO6IQrNww" }
    ],
    links: {
      demo: "https://www.youtube.com/embed/RjDO6IQrNww?si=WqgNN8OtnXmXbuFM",
      github: "https://github.com/yourusername/unity-project-2"
    }
  },

  // ════════════════════════════════════════════════════════
  // ANDROID #1
  // ════════════════════════════════════════════════════════
  {
    slug: "android-app-1",
    featured: false,
    engine: "android",
    engineLabel: "Android",
    type: "Diploma",
    year: "2022",
    duration: "—",
    title: "Android App — Title Here",
    summary: "Describe your Android application. What does it do, who is it for, what backend/APIs does it use, and what was the biggest challenge?",
    description: [
      "🔥 Replace with the full story: what problem the app solves, who it's for, and what the core user flow looks like.",
      "🔥 Paragraph on the architecture — Activities/Fragments, how data flows, what backend (Firebase, REST API, SQLite) you used and why.",
      "🔥 Paragraph on the hardest problem you solved — e.g. offline sync, a tricky UI state, performance on low-end devices — and how you solved it.",
      "🔥 What you learned, and what you'd improve with more time."
    ],
    features: ["🔥 Feature one", "🔥 Feature two", "🔥 Feature three"],
    role: "🔥 Your role on this project",
    tools: ["Java", "Android Studio", "Firebase"],
    tags: ["Java", "Firebase", "Android Studio"],
    images: [
      { src: "assets/images/android1-01.jpg", caption: "🔥 Home screen" },
      { src: "assets/images/android1-02.jpg", caption: "🔥 Core feature screen" },
      { src: "assets/images/android1-03.jpg", caption: "🔥 Settings / profile screen" }
    ],
    videos: [
      { title: "App Walkthrough", id: "RjDO6IQrNww" },
      { title: "Feature Deep-Dive", id: "RjDO6IQrNww" }
    ],
    links: {
      demo: "https://www.youtube.com/embed/RjDO6IQrNww?si=WqgNN8OtnXmXbuFM",
      github: "https://github.com/yourusername/android-app"
    }
  },

  // ════════════════════════════════════════════════════════
  // ANDROID #2
  // ════════════════════════════════════════════════════════
  {
    slug: "android-app-2",
    featured: false,
    engine: "android",
    engineLabel: "Android",
    type: "Diploma",
    year: "2022",
    duration: "—",
    title: "Android App 2 — Title Here",
    summary: "Describe your second Android application here. If you only have one Android project, delete this object from the array.",
    description: [
      "🔥 Replace with the full project write-up.",
      "🔥 Paragraph two.",
      "🔥 Paragraph three."
    ],
    features: ["🔥 Feature one", "🔥 Feature two"],
    role: "🔥 Your role on this project",
    tools: ["Java", "XML", "SQLite"],
    tags: ["Java", "XML", "SQLite"],
    images: [
      { src: "assets/images/android2-01.jpg", caption: "🔥 Caption for image 1" },
      { src: "assets/images/android2-02.jpg", caption: "🔥 Caption for image 2" }
    ],
    videos: [
      { title: "App Walkthrough", id: "RjDO6IQrNww" },
      { title: "Feature Deep-Dive", id: "RjDO6IQrNww" }
    ],
    links: {
      demo: "https://www.youtube.com/embed/RjDO6IQrNww?si=WqgNN8OtnXmXbuFM",
      github: "#"
    }
  }

];

// Helper used by both pages — safe even if engine label changes later
function getProjectBySlug(slug) {
  return PROJECTS.find(p => p.slug === slug) || null;
}