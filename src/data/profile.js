export const profile = {
  name: "Md. Shahidul Islam Tashin",
  shortName: "Tashin",
  tagline: "PhD Applicant — AI for Healthcare",
  focus: ["Medical Imaging", "Explainable AI", "Deep Learning", "Clinical NLP"],
  pitch:
    "I work at the intersection of genetics, medicine, and machine learning — building models that clinicians can actually trust. My current research applies explainable deep learning to CT-based cancer diagnosis, and I'm seeking a PhD where I can push that work further.",
  email: "shahidul.du.geb@gmail.com",
  whatsapp: "+8801572104998",
  links: {
    github: "https://github.com/shahidul-tashin",
    linkedin: "https://www.linkedin.com/in/msi-tashin/",
    researchgate:
      "https://www.researchgate.net/profile/Md-Islam-Tashin",
  },
  stats: [
    { value: "4.00/4.00", label: "PMSCS CGPA (to date)" },
    { value: "7 yrs", label: "College-level teaching" },
    { value: "1", label: "Published paper" },
    { value: "2", label: "Degrees in Genetic Engineering" },
  ],
  currentProject: {
    title:
      "Explainable AI Framework for Gallbladder Cancer Diagnosis Using CT Scans",
    status: "Ongoing",
    caseId: "PROJ-2026-GBC",
    description:
      "An interdisciplinary project combining clinical CT imaging with radiology reports to build a diagnostic pipeline that is both accurate and interpretable. The goal is a model that flags gallbladder cancer from CT scans while producing explanations a radiologist can verify against the image and the written report — closing the trust gap that keeps black-box models out of the clinic.",
    stack: [
      "Deep Learning (CNN / segmentation)",
      "Explainable AI (Grad-CAM, SHAP-style attribution)",
      "Clinical NLP (radiology report parsing)",
      "Classical ML baselines",
    ],
    data: ["Clinical CT scan images", "Paired radiology reports"],
    themes: [
      "Medical imaging",
      "Explainable AI",
      "Healthcare AI deployment",
    ],
  },
  researchInterests: [
    {
      title: "Explainable AI in Medicine",
      detail:
        "Making deep learning diagnostic tools transparent enough for clinical adoption, not just accurate on a benchmark.",
    },
    {
      title: "Medical Image Analysis",
      detail:
        "CT, and other radiological modalities, for early detection of cancers and other high-stakes conditions.",
    },
    {
      title: "Clinical NLP",
      detail:
        "Extracting structured signal from unstructured radiology and pathology reports to complement imaging models.",
    },
    {
      title: "AI for Low-Resource Healthcare Settings",
      detail:
        "Bridging a genetics and biology background with modern ML to build tools suited to under-served clinical environments, informed by direct experience in Bangladesh.",
    },
  ],
  publications: [
    {
      title: "Prevalence of Colorblindness in Bangladeshi Young People",
      status: "Published",
      note: "Original research on the prevalence of color vision deficiency among young people in Bangladesh.",
    },
    {
      title:
        "Explainable AI Framework for Gallbladder Cancer Diagnosis Using CT Scans",
      status: "In progress",
      note: "Interdisciplinary research combining CT imaging, radiology reports, deep learning, and explainable AI. Manuscript in preparation.",
    },
  ],
  education: [
    {
      degree: "Professional Master's in Computer Science (PMSCS)",
      institution: "Jahangirnagar University",
      period: "In progress",
      detail: "CGPA 4.00/4.00 across 1st and 2nd semesters (completed)",
      current: true,
      semesters: [
        {
          label: "1st Semester",
          cgpa: "4.00 / 4.00",
          courses: [
            "Programming Languages",
            "Data Structures and Algorithms",
            "Data Communication",
            "Software Engineering",
            "Database Management",
          ],
        },
        {
          label: "2nd Semester",
          cgpa: "4.00 / 4.00",
          courses: [
            "Machine Learning",
            "Deep Learning",
            "Neuroinformatics",
            "Computational Intelligence",
          ],
        },
        {
          label: "3rd Semester",
          cgpa: "Ongoing",
          courses: [
            "Digital Image Processing",
            "Introduction to Data Science",
            "Computer Architecture",
            "Artificial Intelligence",
          ],
        },
      ],
    },
    {
      degree: "M.Sc. (Thesis) in Genetic Engineering and Biotechnology",
      institution: "University of Dhaka",
      period: "Completed 2017",
      detail: "CGPA 3.52 / 4.00",
    },
    {
      degree: "B.S. (Honours) in Genetic Engineering and Biotechnology",
      institution: "University of Dhaka",
      period: "Completed 2015",
      detail: "CGPA 2.96 / 4.00",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "",
      period: "2010",
      detail: "GPA 5.00",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "",
      period: "2008",
      detail: "GPA 5.00",
    },
  ],
  experience: [
    {
      role: "College-Level Lecturer",
      period: "7 years",
      detail:
        "Taught undergraduate-level courses, building a foundation in communicating complex scientific ideas clearly — a skill now applied to explaining AI model behavior to non-technical, clinical audiences.",
    },
  ],
};
