// All personal content lives here. Image paths are relative to public/.
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
export const profile = {
  name: "Dina Prastuti",
  image: "/images/profile/profil.webp",
  contactImage: "/images/profile/imgct.webp",
  summary:
    "An Information Systems graduate from Universitas Musamus, interested in exploring data, finding meaningful patterns, and building thoughtful machine learning solutions.",
  email: "dinaprastu0410@gmail.com",
  linkedin: "https://www.linkedin.com/in/dinaprastuti",
  github: "https://github.com/Drkyaho",
  closing: "Have a challenge to share? I'm all ears.",
};
export const navigation = [
  "Home",
  "About Me",
  "Experience",
  "Projects",
  "Awards",
  "Certificates",
  "Contact",
];
export const sectionIds = [
  "home",
  "about",
  "experience",
  "projects",
  "awards",
  "certificates",
  "contact",
];
export const education = [
  {
    type: "FORMAL EDUCATION",
    title: "Information Systems",
    place: "Universitas Musamus",
    period: "Sep 2022 - Jul 2026",
    detail: "Bachelor of Computer Science (S.Kom) · GPA: 3.88/4.00",
    description:
      "Relavant Coursework : Statistics, Data Mining, Data Warehousing and OLAP, Decision Support Systems, Intelligent Systems",
  },
  {
    type: "STUDENT EXCHANGE",
    title: "Merdeka Student Exchange Batch 4",
    place: "Universitas Amikom Purwokerto",
    period: "Feb – Jul 2024 ",
    detail: "Pursuing a degree in Informatics and Information Technology",
    description:
      "Participated in an inbound student program, collaborating with students from diverse backgrounds",
  },
  {
    type: "PROFESSIONAL LEARNING",
    title: "Machine Learning Engineer",
    place: "Coding Camp powered by DBS Foundation 2025",
    period: "Feb – Jul 2025",
    detail:
      "Completed coursework in Python, SQL, Git/GitHub, Data Analysis, Data Processing, Data Visualization, Machine Learning, and Deep Learning.",
    description:
      "Participated in hands-on learning activities, AI training, capstone project development, and soft skills training.",
  },
];
export const thesis = {
  title:
    "Image-Based Classification of Indonesian Sign Language (BISINDO) Alphabet Using Convolutional Neural Networks (CNN): Model Development and Evaluation",
  description:
    "Developed a deep learning model to classify BISINDO alphabet gestures, addressing visual similarities between hand signs and improving recognition accuracy and model reliability.",
  methodology: "CNN Transfer Learning, MobileNetV2, Data Augmentation, and Fine-tuning",
  technologies: "Python, TensorFlow, Keras, MediaPipe, Flask.",
  outcome:
    "Achieved 84.90% test accuracy and 0.85 Macro F1-score, with improved generalization and confidence calibration (ECE: 0.0690)",
  url: "",
};
export const hardSkills = [
  "Data Analysis",
  "Data Processing",
  "Exploratory Data Analysis",
  "Data Visualization",
  "Statistical Analysis",
  "Machine Learning",
  "Deep Learning",
  "Computer Vision Fundamentals",
  "Python",
  "SQL Fundamentals",
  "Microsoft Excel",
];
export const softSkills = [
  "Analytical Thinking",
  "Problem Solving",
  "Critical Thinking",
  "Communication",
  "Team Collaboration",
  "Adaptability",
  "Attention to Detail",
];
export const tools = [
  ["Python", "python"],
  ["Microsoft Excel", "excel"],
  ["Looker Studio", "looker"],
  ["Jupyter Notebook", "jupyter"],
  ["Google Colab", "googlecolab"],
  ["VS Code", "vscode"],
  ["GitHub", "github"],
  ["Streamlit", "streamlit"],
  ["TensorFlow", "tensorflow"],
  ["Keras", "keras"],
  ["Scikit-learn", "scikitlearn"],
  ["Pandas", "pandas"],
  ["Matplotlib", "matplotlib"],
];
export const badges = [
  {
    name: "Google Analytics Certification",
    issuer: "Google Skillshop",
    image: "/images/Badge/GAS.png",
    url: "https://skillshop.credential.net/28eeadf0-1103-4409-afa6-4176a471689a#acc.mZAKqgPd",
  },
  {
    name: "Introduction to Modern AI",
    issuer: "Cisco Networking Academy",
    image: "/images/Badge/Intro_AI.png",
    url: "https://www.credly.com/badges/631e4338-53e9-45f6-80d1-fe7cfced3a99/public_url",
  },
  {
    name: "Core Generative AI Skills",
    issuer: "Cisco Networking Academy",
    image: "/images/Badge/Core_AI.png",
    url: "https://www.credly.com/badges/479a461d-6dff-495a-a677-74733332c38f/public_url",
  },
  {
    name: "Introduction to Data Science",
    issuer: "Cisco Networking Academy",
    image: "/images/Badge/intro_DS.png",
    url: "https://www.credly.com/badges/fb7264ed-877d-45b1-862e-ce5c5d739ce9/public_url",
  },
];
export const work = [
  {
    title: "Teaching Assistant",
    company: "Universitas Musamus",
    period: "Mar – Jul 2026",
    description:
      "Taught introductory Python, guided 23 students in programming practicums, and evaluated assignments and examinations.",
    images: [
      "/images/expwork/ta01.webp",
      "/images/expwork/ta02.webp",
    ],
  },
  {
    title: "Research Assistant",
    company: "Universitas Musamus",
    period: "Sep 2025 – Jan 2026",
    description:
      "Annotated 933 aquatic weed images across three classes, performed quality checks, and supported field research documentation.",
    images: [
      "/images/expwork/ra01.webp",
      "/images/expwork/ra02.webp",
    ],
  },
  {
    title: "Administrative & Creative Intern",
    company: "PT Indo Traktors Papua",
    period: "May – Jun 2025",
    description:
      "Managed administrative records, proposed an Odoo-based CRM system, and produced two promotional videos.",
    images: [
      "/images/expwork/pkl01.webp",
      "/images/expwork/pkl02.webp",
    ],
  },
];
export const organizations = [
  {
    name: "Information Systems Student Association (HIMASI)",
    role: "Staff of Public Relations Media",
    period: "Mar 2023 – Jan 2025",
    description:
      "Supported event publications, documentation, and budgeting, organized Microsoft Word and Excel training, and led a high-school poster design competition.",
    images: [
    "/images/Experience/IMG22.webp",
    "/images/Experience/humas.webp",
    "/images/Experience/IMGH.webp",
  ],
    captions: [
      "Class of 2022 Executive Board",
      "Public Relations Division",
      "Division Programs",
    ],
  },
  {
    name: "UKMI Al-Kamil Universitas Musamus",
    role: "Staff of Islamic Women's Affairs Division",
    period: "Nov 2022 – Feb 2024",
    description:
      "Created social media content, supported the Fun for Muslimah program, documented social service activities, and participated in mosque cleaning initiatives.",
    images: [
    "/images/Experience/alkamil1.webp",
    "/images/Experience/alkamil3.webp",
    "/images/Experience/alkamil2.webp",
  ],
    captions: [
      "UKMI Al - Kamil Activities",
      "Fun for Muslimah Program",
      "Social Service Activities",
    ],
  },
];
export const projects = [
  {
    category: "DATA ANALYTICS",
    title: "Bike Sharing Analysis",
    additionalDescription:
  "PROBLEM & OBJECTIVE\n" +
  "Explore how seasonal, calendar, and weather conditions relate to bike rental demand and identify patterns that can support operational planning.\n\n" +

  "DATASET\n" +
  "Capital Bikeshare historical data (2011–2012), consisting of 731 daily records and 17,379 hourly records, sourced from the UCI Machine Learning Repository.\n\n" +

  "METHODOLOGY & KEY FINDINGS\n" +
  "Performed data assessment, data cleaning, descriptive statistics, exploratory data analysis (EDA), and data visualization. Summer recorded the highest average daily rentals, while Winter had the lowest. Working days showed slightly higher demand than non-working days, while holidays and poor weather conditions were associated with lower rentals. These patterns can help inform bicycle availability planning.", // Add optional project context here.
    description:
      "Analyzed 18,110 Capital Bikeshare rental records using Python to explore seasonal and daily demand patterns, identifying Fall as the peak rental season and lower demand on holidays.",
    tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    skills: ["Data cleaning", "EDA", "Data visualization", "Trend analysis"],
    image: "/images/project/da.png",
    github: "https://github.com/Drkyaho/bike-sharing-data-analysis.git",
  },
  {
    category: "DATA ENGINEERING",
    title: "ETL Pipeline",
    additionalDescription:
  "PROBLEM & OBJECTIVE\n" +
  "Build a simple ETL pipeline using modular programming principles to automate product data extraction, transformation, and storage through web scraping.\n\n" +

  "DATASET\n" +
  "Product data collected through web scraping from 50 web pages and stored in a structured CSV file (products.csv).\n\n" +

  "METHODOLOGY & KEY FINDINGS\n" +
  "Implemented an ETL workflow consisting of data extraction, cleaning and transformation, and loading. Organized the pipeline into modular Python scripts and implemented unit tests for each process using Pytest. Achieved 93% overall test coverage.", // Add optional project context here.
    description:
      "Built a modular ETL pipeline to extract product data from 50 web pages, perform data cleaning and validation, and store results in CSV format, achieving 93% unit test coverage.",
    tools: ["Python", "Pandas", "BeautifulSoup", "Requests", "Pytest"],
    skills: ["ETL", "Web scraping", "Data processing", "Unit testing"],
    image: "/images/project/etl.png",
    github:
      "https://github.com/Drkyaho/machine-learning-projects/tree/1b6e4fbcd780bd8f68aa4da6222793ea91476ff9/Membangun-ETL-Pipeline-Sederhana",
  },
  {
    category: "MACHINE LEARNING",
    title: "Exploring Patterns Through Machine Learning",
    additionalDescription:
  "PROBLEM & OBJECTIVE\n" +
  "Apply machine learning to predict loan approval, analyze banking transaction patterns, and classify sentiment in mobile game reviews.\n\n" +

  "DATASET\n" +
  "Used three datasets: Financial Risk for Loan Approval (20,000 records, 36 features), Bank Transaction (2,512 unlabeled records), and Block Blast reviews (20,640 cleaned reviews).\n\n" +

  "METHODOLOGY & KEY FINDINGS\n" +
  "Applied data preprocessing, feature selection, SMOTE, Logistic Regression, Random Forest, K-Means clustering, and NLP techniques such as TF-IDF and N-grams. Loan Approval achieved 96.30% accuracy with Logistic Regression. Banking transaction clustering improved its Silhouette Score from 0.32 to 0.51, while Random Forest achieved 96.94% accuracy in predicting cluster assignments. For sentiment analysis, Random Forest achieved 93.75% testing accuracy.",
    description:
      "Developed machine learning solutions across three projects: loan approval prediction using 20,000 applicant records (96.3% accuracy, 0.9948 ROC-AUC), bank transaction clustering and classification (96.94% accuracy), and sentiment analysis of 20,640 Block Blast reviews (93.75% test accuracy).",
    tools: ["Python", "Pandas", "NumPy", "Scikit-learn", "NLTK", "Sastrawi"],
    skills: [
      "Classification",
      "K-Means clustering",
      "Sentiment analysis",
      "Feature engineering",
      "Model evaluation",
    ],
    image: "/images/project/lbs.webp",
    github:
      "https://github.com/Drkyaho/machine-learning-projects/tree/2ed85a913ebfe664383ec1c0f853ea320022c94f/Predictive-Analytics",
  },
  {
    category: "DEEP LEARNING & COMPUTER VISION",
    title: "Image Classification Projects",
    additionalDescription:
  "PROBLEM & OBJECTIVE\n" +
  "Build deep learning models to classify butterfly and moth species and identify plant diseases from images.\n\n" +

  "DATASET\n" +
  "Used two Kaggle datasets covering 100 butterfly and moth species and 16 plant disease classes across chili, corn, rice, and tomato.\n\n" +

  "METHODOLOGY & KEY FINDINGS\n" +
  "Developed image classification models using MobileNetV2 transfer learning and a custom CNN architecture. Applied image preprocessing, augmentation, Batch Normalization, Dropout, and training callbacks such as EarlyStopping, ModelCheckpoint, and ReduceLROnPlateau. The butterfly and moth classifier achieved 97.00% testing accuracy. The trained models were exported into TensorFlow SavedModel and TensorFlow Lite formats, with TensorFlow.js export also implemented for the plant disease model.", // Add optional project context here.
    description:
      "Developed CNN models using MobileNetV2 and transfer learning to classify 100 butterfly and moth species across 13,594 images, achieving 97% test accuracy, and 16 plant disease categories across 17,049 images. Converted models into TensorFlow Lite and TensorFlow.js formats for deployment.",
    tools: ["Python", "TensorFlow", "Keras", "MobileNetV2", "TensorFlow Lite"],
    skills: [
      "Deep learning",
      "Computer vision",
      "Image preprocessing",
      "Data augmentation",
      "Model deployment",
    ],
    image: "/images/project/flyplant.webp",
    github:
      "https://github.com/Drkyaho/machine-learning-projects/tree/2ed85a913ebfe664383ec1c0f853ea320022c94f/Image-Classification-Project%3A-Butterfly-%26-Moths-(100-Species)",
  },
];
export const awards = [
  {
    title: "Bronze Awardee",
    institution: "Universitas Brawijaya",
    year: "2023",
    description: "National Scientific Writing Competition (LKTIN)",
  },
  {
    title: "Second Place Honorable Mention",
    institution: "Faculty of Engineering, Universitas Halu Oleo",
    year: "2022",
    description: "National Scientific Writing Competition (LKTIN)",
  },
];
export type Credential = {
  title: string;
  issuer: string;
  date: string;
  category: string;
  image: string;
  id?: string;
  url?: string;
  description?: string;
};
export const awardImages: Credential[] = [
  {
  title: "Bronze Award Certificate",
  issuer: "Universitas Brawijaya",
  date: "September 2023",
  category: "Award",
  image: "/images/Awards/awards23.webp",
},
{
  title: "Second Place Honorable Mention Certificate",
  issuer: "Faculty of Engineering, Universitas Halu Oleo",
  date: "December 2022",
  category: "Award",
  image: "/images/Awards/awards22.webp",
},
{
  title: "Best Poster Certificate",
  issuer: "Faculty of Engineering, Universitas Halu Oleo",
  date: "December 2022",
  category: "Award",
  image: "/images/Awards/bestposter.webp",
},
{
  title: "Certificate of Participation",
  issuer: "PERFORMANCE PertaMC",
  date: "February 2025",
  category: "Competition",
  image: "/images/Awards/peserta.webp",
},
];
export const certificates: Credential[] = [
  {
  title: "Belajar Analisis Data dengan Python",
  issuer: "Dicoding Indonesia",
  date: "Mar 2025",
  category: "Data Analytics",
  image: "/images/sertifikat/da01.webp",
  id: "",
  url: "https://www.dicoding.com/certificates/53XED1R99PRN",
},
{
  title: "Belajar Dasar Visualisasi Data",
  issuer: "Dicoding Indonesia",
  date: "Feb 2025",
  category: "Data Analytics",
  image: "/images/sertifikat/da02.webp",
  id: "",
  url: "https://www.dicoding.com/certificates/GRX5349K3Z0M",
},
{
  title: "Belajar Dasar Structured Query Language (SQL)",
  issuer: "Dicoding Indonesia",
  date: "Feb 2025",
  category: "Data Analytics",
  image: "/images/sertifikat/da03.webp",
  id: "",
  url: "https://www.dicoding.com/certificates/81P2LLWKNZOY",
},
{
  title: "Intro to Data Analytics",
  issuer: "RevoU",
  date: "Oct 2024",
  category: "Data Analytics",
  image: "/images/sertifikat/da04.webp",
},
{
  title: "Data Visualization",
  issuer: "MySkill x Deloitte",
  date: "Aug 2024",
  category: "Data Analytics",
  image: "/images/sertifikat/da05.webp",
},
{
  title: "Microsoft Excel - Pivot Table",
  issuer: "MySkill x Deloitte",
  date: "Sep 2024",
  category: "Data Analytics",
  image: "/images/sertifikat/da06.webp",
},
  {
    title: "Introduction to Data Science",
    issuer: "Cisco Networking Academy",
    date: "Nov 2026",
    category: "Data Science",
    image: "/images/sertifikat/ds01.webp",
  },
  {
    title: "Belajar Machine Learning untuk Pemula",
    issuer: "Dicoding Indonesia",
    date: "Apr 2025",
    category: "Machine Learning",
    image: "/images/sertifikat/ml01.webp",
    id: "",
    url: "https://www.dicoding.com/certificates/4EXGV8059XRL",
  },
  {
    title: "Belajar Pengembangan Machine Learning",
    issuer: "Dicoding Indonesia",
    date: "Apr 2025",
    category: "Machine Learning",
    image: "/images/sertifikat/ml02.webp",
    id: "",
    url: "https://www.dicoding.com/certificates/1OP82E9QVPQK",
  },
  {
    title: "Machine Learning Terapan",
    issuer: "Dicoding Indonesia",
    date: "May 2025",
    category: "Machine Learning",
    image: "/images/sertifikat/ml03.webp",
    id: "",
    url: "https://www.dicoding.com/certificates/6RPNRLN09X2M",
  },
  {
    title: "Belajar Fundamental Pemrosesan Data",
    issuer: "Dicoding Indonesia",
    date: "May 2025",
    category: "Machine Learning",
    image: "/images/sertifikat/ml04.webp",
    id: "",
    url: "https://www.dicoding.com/certificates/NVP75DMEOXR0",
  },
  {
    title: "Google Analytics Certification (2026)",
    issuer: "Google Digital Academy (Skillshop)",
    date: "Oct 2026",
    category: "Professional Development",
    image: "/images/sertifikat/gac.webp",
    id: "",
    url: "https://skillshop.credential.net/28eeadf0-1103-4409-afa6-4176a471689a#acc.mZAKqgPd",
  },
  {
    title: "English for Business Communication",
    issuer: "The British Institute",
    date: "Jun 2025",
    category: "Professional Development",
    image: "/images/sertifikat/engb.webp",
  },
  {
    title: "Belajar Dasar Git dengan GitHub",
    issuer: "Dicoding Indonesia",
    date: "Jun 2025",
    category: "Professional Development",
    image: "/images/sertifikat/github.webp",
    id: "",
    url: "https://www.dicoding.com/certificates/07Z638NVRZQR",
  },
  {
    title: "Core Generative Al Skills",
    issuer: "Cisco Networking Academy",
    date: "Nov 2026",
    category: "Professional Development",
    image: "/images/sertifikat/coreai.webp",
  },
  {
    title: "Introduction to Modern Al",
    issuer: "Cisco Networking Academy",
    date: "Nov 2026",
    category: "Professional Development",
    image: "/images/sertifikat/intromai.webp",
  },
];
