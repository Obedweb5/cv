/* ============================================================
   EDIT THIS FILE ONLY.
   Everything on the site comes from here. Replace the sample
   text with your own details. Add, remove or reorder CVs freely.
   ============================================================ */
window.PORTFOLIO = {
  profile: {
    name: "Obed Ondara",
    title: "OBED TECH ENTERPRISE LIM",
    location: "Nairobi, Kenya",
    email: "techobed4@gmail.com",

    // Shown in the sidebar
    age: "Add your age",
    from: "Add your home area, e.g. Rongo, Migori County",

    links: [
      { label: "LinkedIn", url: "https://linkedin.com/in/your-profile" },
      { label: "GitHub", url: "https://github.com/your-username" }
    ],

    // Education is shared by all your CVs, oldest first.
    // "result" is your main mark or grade. "grades" is an optional list of subject results.
    education: [
      {
        title: "Primary school",
        org: "Name of your primary school",
        dates: "Year to Year",
        result: "KCPE: add your marks, e.g. 380 out of 500",
        grades: []
      },
      {
        title: "Secondary school",
        org: "Name of your secondary school",
        dates: "Year to Year",
        result: "KCSE: add your mean grade, e.g. B plain",
        grades: ["Mathematics: add grade", "English: add grade", "Kiswahili: add grade"]
      },
      {
        title: "University",
        org: "Name of your university",
        course: "Name of the course you are studying",
        dates: "Year to Present",
        result: "Current result: add your grade or GPA",
        grades: ["Year 1: add result", "Year 2: add result"]
      }
    ],

    hobbies: ["Add a hobby", "Add another hobby", "Add a third hobby"]
  },

  // Each entry in "cvs" is one version of your CV.
  // "id" becomes the shareable link: yoursite.vercel.app/#technical
  cvs: [
    {
      id: "technical",
      label: "Technical CV",
      blurb: "For developer and engineering roles",
      headline: "Software developer who ships reliable web products",
      summary:
        "Write 2 to 4 sentences here: who you are, what you do best, and the kind of work you want next.",
      pdf: "", // add a PDF to the cvs folder, then set this to "cvs/technical-cv.pdf" to show the download button
      experience: [
        {
          role: "Software Developer",
          org: "Company Name",
          dates: "2022 to Present",
          bullets: [
            "Describe one result you achieved, with a number if you can.",
            "Describe another responsibility or project you led."
          ]
        }
      ],
      projects: [
        {
          name: "Project name",
          description: "One sentence on what it does and why it matters.",
          url: "https://example.com",
          tags: ["JavaScript", "Node.js"]
        }
      ],
      skills: [
        { group: "Languages", items: ["JavaScript", "Python", "SQL"] },
        { group: "Tools", items: ["Git", "Docker", "Vercel"] }
      ]
    },

    {
      id: "management",
      label: "Project Management CV",
      blurb: "For coordination and leadership roles",
      headline: "Project coordinator who keeps teams and deadlines aligned",
      summary:
        "A second version of your CV, written for a different kind of role. Reuse what fits and change the rest.",
      pdf: "",
      experience: [
        {
          role: "Project Coordinator",
          org: "Company Name",
          dates: "2021 to Present",
          bullets: ["Delivered a project on time and within budget.", "Managed a team of a given size."]
        }
      ],
      projects: [],
      skills: [{ group: "Core", items: ["Planning", "Stakeholder communication", "Budgeting"] }]
    }
  ]
};
