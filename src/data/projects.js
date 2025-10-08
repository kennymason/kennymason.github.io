export const projects = [
  {
    id: 1,
    title: "FENSight",
    category: "ai",
    type: "ML Model",
    description: "Chessboard Image to FEN Converter",
    summary: "FENSight is an intelligent tool that converts 2D chessboard images into Forsyth-Edwards Notation (FEN). At its core, a convolutional neural network trained to accurately identify chess pieces of any color or style, analyzing each square individually. Once classified, the program generates the corresponding FEN string, enabling seamless integration with chess engines, analysis tools, and digital chess applications.",
    logo: "/projects/fensight/logo.png",
    images: [
      "/projects/fensight/LDA_3D.png",
      "/projects/fensight/LDA.png",
      "/projects/fensight/LDA_Heatmap.png",
      "/projects/fensight/Confusion_Matrix.png",
    ],
    tags: ["Machine Learning", "Deep Learning", "Python", "Convolutional Neural Networks", "Classification"],
    links: {
      github: "https://github.com/kennymason/fen-sight",
    },
  },
  {
    id: 2,
    title: "KlipQ",
    category: "app",
    type: "macOS App",
    description: "Clipboard Manager for macOS",
    summary: "KlipQ is a lightweight clipboard manager for macOS that keeps track of your most recent 9 copy items. Accessible from a menubar icon, it lets you quickly view, select, and paste items from your copy history, retaining their original formatting. Keyboard shortcuts and “Next/Previous Item” navigation make switching between clipboard entries fast and seamless. KlipQ runs automatically, monitoring your Mac's pasteboard, so you can manage your clipboard efficiently without disrupting your workflow.",
    logo: "/projects/klipq/logo.png",
    images: [
      "/projects/klipq/app-view.png",
    ],
    tags: ["Desktop App", "Swift", "macOS App"],
    links: {
      github: "https://github.com/kennymason/KlipQ",
    }
  },
  {
    id: 3,
    title: "Daily Notes Manager",
    category: "plugin",
    type: "Obsidian Plugin",
    description: "Enhance and customize your Daily Notes",
    summary: "Daily Notes Manager is a lightweight plugin for Obsidian designed to streamline daily note-taking with targeted automation. It allows users to insert links to previous notes, archive older notes, rollover unfinished tasks, and much more. The plugin also supports dynamic embeddable text, all while keeping setup simple and flexible. Daily Notes Manager provides focused functionality for users seeking precise, automated daily note workflows.",
    logo: "/projects/daily-notes-manager/logo.png",
    images: [
      "/projects/daily-notes-manager/app-view.png",
    ],
    tags: ["Obsidian", "Plugin", "TypeScript"],
    links: {
      github: "https://github.com/kennymason/daily-notes-manager",
    }
  },
  {
    id: 4,
    title: "Gruvfox",
    category: "plugin",
    type: "Firefox Theme",
    description: "Firefox Theme with a Twist",
    summary: "Gruvfox is a dark browser theme for Firefox that takes inspiration from the popular Gruvbox palette, and introduces a unique feature: a private-browsing-only mode called \“Sly Gruvfox.\” By modifying customizable browser files userChrome.css and userContent.css, it achieves styling flexibility that standard Firefox themes cannot, allowing different rules for normal and private windows. The repository includes both a full-profile and private-window-only setup for easy installation.",
    logo: "/projects/gruvfox/logo.png",
    images: [
      "/projects/gruvfox/app-view.png",
    ],
    tags: ["Firefox", "Browser Theme", "CSS"],
    links: {
      github: "https://github.com/kennymason/discrete-gruvfox",
    }
  },
  {
    id: 5,
    title: "Door Aura",
    category: "tinkering",
    type: "Do-Not-Disturb Display",
    description: "A Fully Customizable Do-Not-Disturb Display",
    summary: "Working remotely comes with a few challenges, especially when you don't live alone. I wanted a way to indicate my availability without anyone ever having to knock on my door. The concept is simple; a small LCD outside the door displays a status that I control via IR remote from my desk. I also included an RGB backlight, so color can change depending on the status. Green for \"enter,\" red for \"don't.\" Yellow means I'm on a call. Door Aura allows for any number of custom presets, each customizable with a variety of settings.",
    logo: "/projects/door-aura/logo.png",
    images: [
      "/projects/door-aura/photo.jpg",
    ],
    tags: ["Arduino", "Python", "Hardware"],
    links: {
      github: "https://github.com/kennymason/project-aura",
    }
  }
];
