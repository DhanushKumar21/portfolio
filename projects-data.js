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
      { title: "RPG_GameplayDemo", id: "EK4sD8bh5Q0" }
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
    slug: "spatial-inventory-system",
    featured: true,
    engine: "unreal",
    engineLabel: "Unreal Engine 5",
    type: "Adv. Diploma",
    year: "2025",
    duration: "10 days",
    title: "C++ Spatial Inventory Framework",
    summary: "Developed a Resident Evil-inspired spatial inventory system in Unreal Engine 5 using C++, featuring grid-based item placement, drag-and-drop interactions, item rotation, discard functionality, and dynamic inventory validation.",
    description: [
    "Bow Combat System is a modular ranged combat framework developed in Unreal Engine 5 using C++, designed to provide responsive and immersive archery gameplay. The system focuses on creating a complete bow workflow from equipping and drawing the bow to aiming and firing projectiles.",

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
      { title: "Spatial Inventory System Showcase", id: "GuNfgHttk58" }
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
   slug: "bow-combat-system",
    featured: true,
    engine: "unreal",
    engineLabel: "Unreal Engine 5",
    type: "Adv. Diploma",
    year: "2024",
    duration: "15 days",
    title: "Bow Combat System",
    summary:"Developed a modular bow combat system in Unreal Engine 5 using C++, featuring bow equipping, arrow spawning, aiming, projectile shooting, and animation blueprint-driven aim blending.",
    description: [
     "Bow Combat System is a modular ranged combat framework developed in Unreal Engine 5 using C++, designed to provide responsive and immersive archery gameplay. The system focuses on creating a complete bow workflow from equipping and drawing the bow to aiming and firing projectiles.",

"The framework includes dynamic bow spawning and attachment, arrow creation, projectile launching, and damage-ready shooting mechanics. Players can seamlessly equip the bow, enter aiming mode, draw the string, and release arrows with smooth gameplay transitions.",

"A custom aiming system was implemented to support precise ranged combat while maintaining fluid character movement and camera control. The bow mechanics were integrated directly into the character's gameplay architecture, allowing easy expansion for future weapon and ability systems.",

"To enhance visual quality and player feedback, an Animation Blueprint-based aim blending system was created. Blend spaces and animation layers were used to smoothly transition between idle, movement, aiming, and shooting states, resulting in natural character animations during combat.",

"The project was built with scalability and maintainability in mind using modular C++ components, animation-driven gameplay logic, and reusable systems. Through this project, I gained valuable experience with character animation systems, projectile mechanics, gameplay programming, and Unreal Engine combat architecture."
    ],
    features: [
  "Bow Equip System",
  "Arrow Spawning",
  "Projectile Shooting",
  "Bow Draw Mechanics",
  "Aim Mode System",
  "Animation Blueprint Integration",
  "Aim Blend Space",
  "Character Animation Layering",
  "Bow Attachment System",
  "Modular C++ Architecture",
  "Ranged Combat Framework",
  "Gameplay Component Design"
],
   role: "🏹 Gameplay Systems Programmer",

tools: ["Unreal Engine 5", "C++", "Animation Blueprints", "Blend Spaces"],

tags: ["UE5", "C++", "Bow System", "Animation Blueprint", "Combat System"],
    images: [
      { src: "resources/images/Bow1.png", caption: "Bow Idle" },
      { src: "resources/images/Bow2.png", caption: "BowAim" },
       { src: "resources/images/Bow3.png", caption: "Arrow" }
    ],
    videos: [
      { 
  title: "Bow Combat System Showcase",
  id: "p4Zy10yXP8w"} 
    ],
    links: {
      demo: "https://youtu.be/p4Zy10yXP8w?si=PJftzGsRwaJs7zzz",
      github: "https://github.com/yourusername/project3"
    }
  },

  // ════════════════════════════════════════════════════════
  // UNREAL #4
  // ════════════════════════════════════════════════════════
  {
    slug: "gameplay-event-manager",
    featured: true,
    engine: "unreal",
    engineLabel: "Unreal Engine 5",
    type: "Adv. Diploma",
    year: "2023",
    duration: "—",
   title: "Gameplay Event Manager",
    summary:"Developed a data-driven gameplay event management system in Unreal Engine 5 using C++, Gameplay Tags, and Data Assets, featuring event conditions, prerequisites, progression tracking, and story-driven gameplay orchestration.",
    description: [
     "Gameplay Event Manager is a data-driven progression framework developed in Unreal Engine 5 using C++, designed to control story flow, gameplay progression, objectives, and world state changes through a centralized event system. The project was created to simplify the management of complex gameplay sequences without hardcoded dependencies between systems.",

"The framework uses Gameplay Tags to identify and trigger events while Data Assets store event definitions, requirements, rewards, and execution rules. This approach allows designers to create and modify gameplay events without changing code, making the system highly scalable and content-friendly.",

"A flexible prerequisite system was implemented to ensure events only become available when specific conditions are met. Events can require the completion of other events, possession of items, objective completion, gameplay tag checks, or custom gameplay conditions before they can be triggered.",

"The system supports event broadcasting, event listening, progression tracking, and conditional execution, allowing gameplay systems, AI, objectives, dialogue, UI, and world interactions to react dynamically to player actions. This enables the creation of branching storylines and interconnected gameplay sequences using a unified architecture.",

"The project was built with modularity and maintainability in mind using Gameplay Tags, Primary Data Assets, delegates, and subsystem-based architecture. Through developing this framework, I gained valuable experience designing scalable gameplay architecture, event-driven programming, progression systems, and narrative gameplay tools in Unreal Engine."
    ],
   features: [
  "Data-Driven Event System",
  "Gameplay Tag Integration",
  "Primary Data Asset Support",
  "Event Prerequisite System",
  "Conditional Event Execution",
  "Story Progression Management",
  "Objective Integration",
  "Event Broadcasting & Listening",
  "Delegate-Based Architecture",
  "World State Management",
  "Subsystem-Based Framework",
  "Designer-Friendly Workflow"
],
    role: "⚙️ Gameplay Systems Programmer",

tools: [
  "Unreal Engine 5",
  "C++",
  "Gameplay Tags",
  "Primary Data Assets",
  "Delegates",
  "Subsystems"
],

tags: [
  "UE5",
  "C++",
  "Gameplay Tags",
  "Event Manager",
  "Data Driven Design",
  "Gameplay Systems"
],
    images: [
      { src: "resources/images/Event3.png", caption: "Event Manager output" },
      { src: "resources/images/Event2.png", caption: "Event Manager DataAsset" },
       { src: "resources/images/Event1.png", caption: "Register Events " }
    ],
    videos: [
      {
  title: "Gameplay Event Manager Showcase",
  id: "x8xmp9-Tx4A"
}
    ],
    links: {
      demo: "https://youtu.be/x8xmp9-Tx4A?si=b706fx_PjcEhdXAq",
      github: "https://github.com/yourusername/project4"
    }
  },

   //Unreal - 5 
 {
    slug: "objective-quest-manager",
    featured: true,
    engine: "unreal",
    engineLabel: "Unreal Engine 5",
    type: "Adv. Diploma",
    year: "2023",
    duration: "—",
  title: "Objective & Quest Manager",
    summary:"Developed a data-driven objective and quest management system in Unreal Engine 5 using C++, Gameplay Tags, and Data Tables, featuring main quests, side quests, automatic progression tracking, and real-time UI updates.",
    description: [
     "Objective & Quest Manager is a data-driven progression framework developed in Unreal Engine 5 using C++, designed to handle quest flow, objective tracking, and player progression through a centralized management system. The framework was built to support both linear and branching quest structures while maintaining scalability and ease of content creation.",

"The system utilizes Data Tables to define quest information, objectives, rewards, descriptions, and progression requirements. This allows designers to create and modify quests without changing code, enabling a flexible workflow for story and gameplay development.",

"A Gameplay Tag-driven objective system was implemented to automatically track player actions and update quest progress. Objectives can be completed through interactions, item collection, combat events, exploration milestones, or custom gameplay events, allowing seamless integration with other gameplay systems.",

"The framework supports both Main Quests and Side Quests, including nested objectives and prerequisite conditions. Side quests can be unlocked dynamically based on player progression, while quest dependencies ensure objectives become available only when appropriate conditions are satisfied.",

"A complete UI integration layer was developed featuring Quest Journal, Main Quest Tracker, Side Quest Tracker, and automatic objective updates. The user interface reacts in real time to quest progression, displaying new objectives, completed tasks, and active quest information without requiring manual updates.",

"The project was built using modular C++ architecture, Gameplay Tags, Data Tables, delegates, and event-driven programming principles. Through this project, I gained valuable experience designing scalable progression systems, UI-driven gameplay workflows, quest architecture, and narrative gameplay tools within Unreal Engine."
    ],
  features: [
  "Objective Management System",
  "Quest Progression Framework",
  "Main Quest Support",
  "Side Quest Support",
  "Nested Objective System",
  "Data Table Driven Quests",
  "Gameplay Tag Integration",
  "Quest Prerequisite System",
  "Automatic Progress Tracking",
  "Real-Time UI Updates",
  "Quest Journal Interface",
  "Event-Driven Architecture",
  "Delegate-Based Communication",
  "Modular C++ Framework"
],
    role: "📖 Gameplay Systems Programmer",

tools: [
  "Unreal Engine 5",
  "C++",
  "Gameplay Tags",
  "Data Tables",
  "UMG",
  "Delegates"
],

tags: [
  "UE5",
  "C++",
  "Quest System",
  "Objective Manager",
  "Gameplay Tags",
  "UI Programming"
],
    images: [
      { src: "resources/images/Quest1.png", caption: "Quest Tab UI" },
      { src: "resources/images/Quest2.png", caption: "Fuse Box Hold To Repair" },
       { src: "resources/images/Quest3.png", caption: " Gas Fill Hold" },
       { src: "resources/images/Quest4.png", caption: "Skill Test Generator On " },
       { src: "resources/images/Quest5.png", caption: " Code " }
    ],
    videos: [
      {
  title: "Objective & Quest Manager Showcase",
  id: "I5irKhXgk8g"

}
    ],
    links: {
      demo: "https://youtu.be/I5irKhXgk8g?si=UoG7U9TNsAjxKXWE",
      github: "https://github.com/yourusername/project4"
    }
  },

   //Unreal 6
   {
   slug: "objective-quest-manager",
    featured: true,
    engine: "unreal",
    engineLabel: "Unreal Engine 5",
    type: "Adv. Diploma",
    year: "2025",
    duration: "One Week",
 title: "Advanced Weapon & Shooting System",
    summary:"Developed a modular weapon and shooting framework in Unreal Engine 5 using C++, featuring ADS, reload systems, weapon-specific animations, surface-based impact effects, Data Asset-driven weapon configuration, and advanced combat feedback systems.",
    description: [
     "Advanced Weapon & Shooting System is a modular first and third-person combat framework developed in Unreal Engine 5 using C++, designed to provide realistic and responsive firearm gameplay. The system focuses on delivering high-quality combat feedback through weapon handling, animation blending, visual effects, and data-driven weapon customization.",

"The framework supports multiple weapon types including pistols, rifles, and shotguns, each with unique firing behavior, reload mechanics, animations, sound effects, projectile settings, and gameplay configurations. Weapon data is managed through Data Assets, allowing designers to create and modify weapons without changing code.",

"A complete aiming system was implemented featuring Aim Down Sights (ADS), smooth camera transitions, weapon sway, sprint interruptions, and animation blueprint integration. Character movement, aiming, firing, reloading, and sprinting states blend seamlessly to create polished and immersive combat interactions.",

"The combat feedback system includes surface-based impact detection that spawns different Niagara effects, decals, hit sounds, and particles depending on the material hit, including human targets, concrete, metal, wood, and environmental surfaces. A location-based damage system was also implemented, allowing headshots to deal increased damage while maintaining support for body and limb damage.",

"Additional features include automatic reloading, weapon-specific reload animations, footstep audio systems for walking and sprinting, dynamic muzzle effects, shell ejection effects, and weapon-specific visual and audio feedback. These systems work together to create a highly responsive and satisfying shooting experience.",

"The project was built using modular C++ architecture, Animation Blueprints, Data Assets, Niagara VFX, and event-driven gameplay systems. Through this project, I gained valuable experience in weapon architecture, animation programming, gameplay feedback systems, combat design, and scalable Unreal Engine development."
    ],
  features: [
  "Weapon Framework",
  "Pistol Support",
  "Rifle Support",
  "Shotgun Support",
  "Aim Down Sights (ADS)",
  "Smooth Aim Blending",
  "Weapon Reload System",
  "Weapon-Specific Reload Animations",
  "Automatic Reload",
  "Gun Sprint System",
  "Data Asset Driven Weapons",
  "Weapon Mesh Configuration",
  "Weapon SFX Configuration",
  "Weapon VFX Configuration",
  "Niagara Muzzle Effects",
  "Surface-Based Impact Effects",
  "Human Hit Reactions",
  "Concrete Impact Effects",
  "Metal Impact Effects",
  "Headshot Damage System",
  "Location-Based Damage",
  "Footstep Audio System",
  "Sprint Footstep Variations",
  "Animation Blueprint Integration",
  "Combat Feedback Framework"
],
    role: "🔫 Gameplay Systems Programmer",

tools: [
  "Unreal Engine 5",
  "C++",
  "Animation Blueprints",
  "Niagara VFX",
  "Data Assets",
  "Gameplay Tags"
],

tags: [
  "UE5",
  "C++",
  "Weapon System",
  "FPS",
  "Combat System",
  "Niagara",
  "Animation Blueprint"
],
    images: [
      { src: "resources/images/Shoot1.png", caption: "Shoot" },
      { src: "resources/images/Shoot2.png", caption: "Hit Effect" },
       { src: "resources/images/Shoot3.png", caption: " Sprint with Gun , Blend" },
       { src: "resources/images/Shoot4.png", caption: "Aim Down Sight " },
       { src: "resources/images/Shoot5.png", caption: " Reload " },
        { src: "resources/images/Shoot6.png", caption: " Code " }
    ],
    videos: [
      {
  title: "Advanced Weapon System Showcase",
  id: "3AM3jN_7NoI"
}
    ],
    links: {
      demo: "https://youtu.be/3AM3jN_7NoI?si=4j5bvPQKKJ8cm5Ok",
      github: "https://github.com/yourusername/project4"
    }
  },
  // ════════════════════════════════════════════════════════
  // UNITY #1 — NEW
  // ════════════════════════════════════════════════════════
  {
    slug: "2d-platformer-combat-framework",
    featured: false,
    engine: "unity",
    engineLabel: "Unity",
    type: "Personal Project",
    year: "2024",
    duration: "—",
    title: "2D Platformer Combat Framework",
    summary: "Developed a feature-rich 2D platformer framework in Unity using C#, featuring melee and ranged combat, diverse enemy AI archetypes, boss encounters, environmental traps, and a complete health and damage system.",
    description: ["2D Platformer Combat Framework is a side-scrolling action platformer developed in Unity using C#, designed to showcase combat systems, enemy AI behaviors, environmental hazards, and gameplay architecture. The project focuses on creating engaging combat encounters through a variety of enemy types and player abilities.",

"The combat system supports both melee and projectile-based attacks, allowing players to engage enemies at different ranges while maintaining responsive movement and platforming controls. Hit detection, damage handling, knockback effects, and combat feedback systems were implemented to create satisfying gameplay interactions.",

"A diverse enemy AI framework was developed featuring multiple enemy archetypes, including melee fighters, archers, berserkers, summoners, and boss enemies. Each enemy type utilizes unique behavior patterns and attack logic, creating varied combat scenarios that challenge player decision-making and positioning.",

"The project also includes environmental hazards such as spikes, falling boulders, and trap-based obstacles that interact with the health system and level design. These hazards were integrated alongside enemy encounters to create dynamic gameplay challenges and reinforce platforming mechanics.",

"The framework was built using a modular component-based architecture, making it easy to add new enemies, abilities, weapons, and gameplay features. Through this project, I gained valuable experience in AI behavior design, combat systems, health management, gameplay programming, and Unity development using C#."
    ],
   features: [
  "2D Platformer Movement",
  "Melee Combat System",
  "Projectile Combat System",
  "Health & Damage System",
  "Enemy AI Framework",
  "Melee Enemy AI",
  "Archer Enemy AI",
  "Berserker Enemy AI",
  "Summoner Enemy AI",
  "Boss Enemy System",
  "Spike Trap System",
  "Boulder Trap System",
  "Knockback & Hit Reactions",
  "Modular C# Architecture",
  "Component-Based Design"
],
    role: "🎮 Gameplay Programmer",

tools: [
  "Unity",
  "C#",
  "Animator",
  "2D Physics",
  "Tilemap System"
],

tags: [
  "Unity",
  "C#",
  "2D Platformer",
  "Enemy AI",
  "Combat System",
  "Boss AI"
],
    images: [
      { src: "resources/images/Unity1.png", caption: "Gameplay" },
      { src: "resources/images/Unity2.png", caption: "Gameplay" },
      { src: "resources/images/Unity3.png", caption: "Gameplay" }
    ],
    videos: [
      {
  title: "2D Platformer Gameplay Showcase",
  id: "WanUH7N-EAk"
}
    ],
    links: {
      demo: "https://youtu.be/WanUH7N-EAk?si=_7msuLZuzqNbHp60",
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
