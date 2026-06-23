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
    slug: "RPG Combat Framework",
    featured: true,
    engine: "unreal",
    engineLabel: "Unreal Engine 5",
    type: "Hobby",
    year: "2025",
    duration: "2 months (solo)",
    title: "RPG Combat Framework",
    summary: "Developed a modular third-person RPG combat framework in Unreal Engine 5 featuring melee combat, dodge rolling, assassination mechanics, equipment management, bow combat, and dynamic target lock-on systems.",
    description: [
      "RPG Combat Framework is a third-person action RPG prototype developed in Unreal Engine 5 using C++ and Blueprints, created to showcase modern combat mechanics and gameplay programming techniques. The project focuses on delivering responsive character control, fluid combat interactions, and a scalable gameplay architecture suitable for RPG and action-adventure games.",

"The core gameplay revolves around a modular combat system featuring melee attacks, dodge rolling, and stealth assassination mechanics. Combat actions are driven by animation montages and state-based logic, allowing attacks, movement, and defensive actions to blend naturally while maintaining responsiveness and player control.",

"A complete equipment and weapon framework was implemented to support weapon equipping, swapping, and future expansion. The project also includes a fully functional bow system with aiming, projectile spawning, and ranged combat mechanics, demonstrating both close-range and long-range combat gameplay within the same framework.",

"To improve combat flow and player awareness, a dynamic target lock system was developed that allows players to focus on nearby enemies during encounters. The lock-on system works seamlessly with movement, camera rotation, melee combat, and ranged attacks, creating a more polished and engaging combat experience.",

"The project was built with scalability in mind using Gameplay Tags, Actor Components, Enhanced Input, and modular C++ architecture. Through developing this framework, I gained valuable experience designing interconnected gameplay systems, character mechanics, and reusable game architecture that can serve as the foundation for larger RPG projects."
    ],
    features: [
       "Melee Combat System",
  "Roll & Dodge Mechanics",
  "Stealth Assassination System",
  "Equipment & Weapon Management",
  "Bow Combat System",
  "Projectile-Based Ranged Attacks",
  "Target Lock-On System",
  "Animation-Driven Combat",
  "Enhanced Input Integration",
  "Gameplay Tag-Based Architecture",
  "Modular Component System",
  "Scalable RPG Framework"
    ],
    role: "Solo developer — design, Blueprint/C++ programming, level design, lighting, sound implementation",
    tools: ["Unreal Engine 5", "Blueprints", "C++", "Behaviour Trees", "Niagara VFX", "Unreal Insights"],
    tags: ["UE5", "Blueprints", "AI Behaviour Tree", "Horror", "FPS", "C++"],
    images: [
      { src: "resources/images/AssasniationRPG.png", caption: "Assasination" },
      { src: "resources/images/RPG_COmbat.png", caption: "RPG - Combat System" },
      { src: "resources/images/AttackSystemScreenShot.png", caption: "RPG - Combat System - Blueprint" },
      { src: "resources/images/RPG_Equipment.png", caption: "RPG - Equipment" },
      { src: "RPGPortfolioVideo.mp4", caption: "RPG - Equipment" }
    ],
    videos: [
      { title: "RPG_GameplayDemo", id: "EK4sD8bh5Q0" },
      { title: "AI Behaviour Breakdown", id: "RjDO6IQrNww" },
      { title: "Lighting & VFX Reel", id: "RjDO6IQrNww" }
    ],
    links: {
      demo: "https://youtu.be/EK4sD8bh5Q0",
      github: "https://github.com/yourusername/horror-fps"
    }
  },

  // ════════════════════════════════════════════════════════
  // UNREAL #2
  // ════════════════════════════════════════════════════════
  {
    slug: "C++SpatialInventoryFramework",
    featured: true,
    engine: "unreal",
    engineLabel: "Unreal Engine 5",
    type: "Adv. Diploma",
    year: "2024",
    duration: "3 days",
    title: "C++ Spatial Inventory Framework",
    summary: "Developed a Resident Evil-style spatial inventory system in Unreal Engine 5 using C++, featuring drag-and-drop item management, item rotation, discard functionality, and grid-based placement validation.",
    description: [
     "Spatial Inventory System is a grid-based inventory framework developed in Unreal Engine 5 using C++, inspired by the inventory mechanics found in classic survival horror games such as Resident Evil. The project focuses on efficient item management, inventory organization, and responsive user interactions.",

"The system allows items of different sizes to occupy multiple grid cells, creating meaningful inventory management decisions. Players can drag and drop items freely within the inventory while the system validates placement and prevents overlapping items.",

"A complete item rotation feature was implemented, allowing players to rotate items in real time to optimize available storage space. The inventory dynamically recalculates occupied slots and updates the user interface whenever items are moved or rotated.",

"Additional functionality includes item discarding, inventory refreshing, grid occupancy tracking, and data-driven item support. The architecture was designed to handle a wide variety of item shapes and sizes while maintaining performance and usability.",

"The project was built with scalability in mind, making it easy to extend with future features such as equipment slots, loot containers, crafting systems, item stacking, and save/load functionality. Through this project, I gained valuable experience in UI programming, data structures, grid-based algorithms, and Unreal Engine C++ development."
    ],
    features: [
      "Grid-Based Spatial Inventory",
  "Drag & Drop Item Management",
  "Item Rotation System",
  "Discard Item Functionality",
  "Dynamic Slot Occupancy Validation",
  "Item Placement Checking",
  "Configurable Item Sizes",
  "Inventory UI Integration",
  "Data-Driven Item Support",
  "Modular C++ Architecture",
  "Container & Loot System Ready",
  "Crafting System Ready"
    ],
    role: "⚙️ Gameplay Systems Programmer",
    tools: ["Unreal Engine 5", "C++", "UMG"],
    tags: ["UE5", "C++", "Inventory", "UI", "Gameplay Systems"],
    images: [
      { src: "resources/images/SPTIALINVENTOPRY01.png", caption: "🔥 Spatial inventory" },
      { src: "resources/images/SPATIALINVEOTRY02.png", caption: "🔥 can rotate" },
      { src: "resources/images/sPATIALINVE03.png", caption: "🔥 c++code" }
    ],
    videos: [
      { title: "Spatial Inventory System Showcase", id: "GuNfgHttk58" },
      { title: "Walkthrough / Dev Commentary", id: "RjDO6IQrNww" }
    ],
    links: {
      demo: "https://youtu.be/GuNfgHttk58",
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
