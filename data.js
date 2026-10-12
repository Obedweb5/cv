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
    links: [
      { label: "LinkedIn", url: "https://linkedin.com/in/your-profile" },
      { label: "GitHub", url: "https://github.com/your-username" }
    ]
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
      pdf: "cvs/technical-cv.pdf", // put the PDF in the cvs folder, or set to "" to hide the button
      experience: [
        {
          role: "Software Developer",
          org: "Company Name",
          dates: "2022 to Present",
          bullets: [
            "Describe one result you achieved, with a number if you can.",
            "Describe another responsibility or project you led."
          ]
        },
        {
          role: "Junior Developer",
          org: "Another Company",
          dates: "2020 to 2022",
          bullets: ["What you built or improved in this role."]
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
      education: [
        { title: "BSc Computer Science", org: "University Name", dates: "2016 to 2020" }
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
      pdf: "cvs/management-cv.pdf",
      experience: [
        {
          role: "Project Coordinator",
          org: "Company Name",
          dates: "2021 to Present",
          bullets: ["Delivered a project on time and within budget.", "Managed a team of a given size."]
        }
      ],
      projects: [],
      education: [
        { title: "Certificate in Project Management", org: "Institute Name", dates: "2021" }
      ],
      skills: [{ group: "Core", items: ["Planning", "Stakeholder communication", "Budgeting"] }]
    }
  ]
};
