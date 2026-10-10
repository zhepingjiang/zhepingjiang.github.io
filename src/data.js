// All site content lives here. Edit this file to change the text on the page.

export const profile = {
  name: 'Zheping Jiang',
  title: 'Software Engineer',
  tagline: 'Java / Spring and full-stack web development',
  intro:
    'I have 5.5 years of experience building and scaling document-centric enterprise systems at Veeva Systems and IBM. Since 2025 I have been building distributed and data-intensive systems of my own, including a real-time movie recommender.',
  location: 'Toronto, Canada',
  email: 'zheping.jiang@gmail.com',
  github: 'https://github.com/zhepingjiang',
  // Leave empty to hide the button
  linkedin: 'https://www.linkedin.com/in/zheping-jiang/',
}

export const stats = [
  { value: '5.5 yrs', label: 'as a software engineer at Veeva Systems' },
  { value: '~500K', label: 'document versions customers publish each month through features I led' },
  { value: '5+', label: 'features led end to end at Veeva, in teams of 3–4 engineers' },
  { value: '3.80', label: 'GPA, Computer Engineering, University of Toronto' },
]

export const featured = {
  name: 'Cinemind',
  dates: 'Apr 2026 – Oct 2026',
  summary:
    'A Netflix-style movie recommender. It learns your taste from ratings overnight, then adjusts its suggestions seconds after you watch something new.',
  metrics: [
    { value: '9,730', label: 'movies' },
    { value: '700/s', label: 'view events handled' },
    { value: '130 → 41 ms', label: 'median response time of the slowest API call' },
    { value: '15% → 97%', label: 'search precision' },
  ],
  lanes: [
    {
      name: 'Offline',
      note: 'nightly',
      steps: ['100K ratings', 'SVD + KNN training', 'Blended ranking', 'PostgreSQL'],
    },
    {
      name: 'Nearline',
      note: 'seconds',
      steps: ['View events', 'Kafka', 'Flink sliding window', 'Fresh recommendations'],
    },
    {
      name: 'Online',
      note: 'per request',
      steps: ['React app', 'Spring Boot API', 'Merge offline + nearline', 'Ranked list'],
    },
  ],
  highlights: [
    {
      lead: 'Three recommendation paths.',
      text: 'Nightly offline training, near-real-time stream processing and online serving with a cold-start path for new users, running as 14 pods on Kubernetes.',
    },
    {
      lead: 'Real-time streaming.',
      text: 'View events flow through Kafka and Flink and refresh recommendations 13–32 s after each window; after a node is killed the job resumes from its checkpoint in 34 s.',
    },
    {
      lead: 'Measured performance work.',
      text: 'Used distributed tracing to find the slowest endpoint and rewrote its scoring as one SQL query, cutting p50 latency from 130 ms to 41 ms.',
    },
    {
      lead: 'Search that finds the right actor.',
      text: 'Raised actor-name search precision@5 from 15% to 97% over 100 test queries with Elasticsearch, at 13 ms p50.',
    },
    {
      lead: 'Load tested.',
      text: 'Handled 700 views/s at 19 ms p50, dropping 100% of duplicate views.',
    },
    {
      lead: 'Observable.',
      text: 'Prometheus and Grafana with 8 alert rules and 2 dashboards, plus OpenTelemetry tracing across 5 hops per request.',
    },
  ],
  tags: [
    'Java 21',
    'Spring Boot',
    'React',
    'TypeScript',
    'Python',
    'FastAPI',
    'scikit-surprise',
    'scikit-learn',
    'pandas',
    'PyArrow',
    'Kafka',
    'Flink',
    'Redis',
    'PostgreSQL',
    'Elasticsearch',
    'gRPC',
    'Kubernetes',
    'Prometheus',
    'Grafana',
    'OpenTelemetry',
  ],
  links: [{ label: 'View code', href: 'https://github.com/zhepingjiang/Movie-Recommendation-System' }],
}

export const projects = [
  {
    name: 'Community Property Management System',
    dates: 'Oct 2025 – Dec 2025',
    summary:
      'A web app for residential communities: newsletters, discussion boards, amenity booking and maintenance requests.',
    detail:
      'Planned and led the project from start to delivery, building most of the backend services and key frontend pages myself, including sign-in and role-based access.',
    tags: ['Java 21', 'Spring Boot', 'React', 'PostgreSQL', 'JWT', 'Google Cloud Storage'],
    links: [{ label: 'View code', href: 'https://github.com/zhepingjiang/Property-Management-System' }],
    wide: true,
  },
  {
    name: 'Accommodation Booking System',
    dates: 'Oct 2025',
    summary: 'A short-term rental platform where hosts list stays and guests search by location and book.',
    tags: ['Spring Boot', 'React', 'PostGIS', 'Google Cloud', 'AWS Amplify'],
    links: [{ label: 'View code', href: 'https://github.com/zhepingjiang/Staysbooking' }],
  },
  {
    name: 'MusicFlow',
    dates: 'Oct 2025',
    summary: 'An Android music streaming app with a feed, albums, favourites and playback.',
    tags: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Room', 'ExoPlayer'],
    links: [
      { label: 'Backend code', href: 'https://github.com/zhepingjiang/MySpotifyApp' },
      { label: 'Frontend code', href: 'https://github.com/zhepingjiang/MySpotifyApp-FE' },
    ],
  },
  {
    name: 'AiChat',
    dates: 'Sep 2025',
    summary: 'A chat assistant that answers questions using the documents you upload.',
    tags: ['React', 'Node.js', 'Express', 'OpenAI API', 'LangChain'],
    links: [{ label: 'View code', href: 'https://github.com/zhepingjiang/MyNextAI' }],
  },
  {
    name: 'Twitch Explorer',
    dates: 'Sep 2025',
    summary: 'Search Twitch streams, videos and clips, and get recommendations based on what you liked.',
    tags: ['Spring Boot', 'React', 'MySQL', 'AWS App Runner', 'Caffeine'],
    links: [
      { label: 'Backend code', href: 'https://github.com/zhepingjiang/TwitchPlus' },
      { label: 'Frontend code', href: 'https://github.com/zhepingjiang/TwitchPlus-FE' },
    ],
  },
  {
    name: 'Distributed Database',
    dates: 'Jan 2019 – Apr 2019',
    summary:
      'A key-value database that spreads data across many servers and keeps working when one fails.',
    tags: ['Java', 'Consistent Hashing', 'Replication', 'ZooKeeper'],
    links: [{ label: 'View code', href: 'https://github.com/MathewJiang/Distributed-Database' }],
  },
]

export const experience = [
  {
    role: 'Software Engineer',
    company: 'Veeva Systems',
    team: 'Regulatory Information Management — Core Team',
    dates: 'Apr 2022 – Jun 2025',
    location: 'Toronto',
    bullets: [
      {
        lead: 'Designed and led multi-link publishing.',
        text: 'Wrote the implementation design and led development of multi-link publishing (links, anchors, bookmarks, annotations) in a pipeline where customers such as Roche and Eli Lilly publish ~500K document versions and ~10M document links per month.',
      },
      {
        lead: 'Coordinated two teams.',
        text: 'Volunteered as coordinator between my team and a second team with overlapping features: ran a weekly sync with product managers, engineering managers and QA, tracked what each side needed from the other with committed dates, and balanced competing priorities.',
      },
      {
        lead: 'Owned features end to end.',
        text: 'Led 5+ features in teams of 3–4 engineers, from design document through implementation and release.',
      },
      {
        lead: 'Mentored and reviewed.',
        text: 'Mentored an intern and a newly hired intermediate engineer, gave feedback in other engineers’ design reviews, and reviewed code regularly.',
      },
      {
        lead: 'Kept customers unblocked.',
        text: 'Diagnosed and resolved critical production issues the same day they were reported, protecting customers’ regulatory submission deadlines.',
      },
      {
        lead: 'Built Active Dossier generation.',
        text: 'Ranked documents by version and relationship against health-authority criteria for customers with ~80K interrelated documents.',
      },
      {
        lead: 'Designed PDF merge.',
        text: 'Wrote the technical design and implementation plan.',
      },
    ],
  },
  {
    role: 'Associate Software Engineer',
    company: 'Veeva Systems',
    team: 'Regulatory Information Management — Submission Publishing',
    dates: 'Nov 2019 – Apr 2022',
    location: 'Toronto',
    bullets: [
      {
        lead: 'Regional submission support.',
        text: 'Built features that auto-generate region-specific regulatory documents for 5+ countries and regions, during a surge of COVID-driven requests.',
      },
      {
        lead: 'Simplified a core workflow.',
        text: 'Built a web page that assembles submission documents by extracting data from documents and user input, replacing manual steps.',
      },
      {
        lead: 'Customer issue resolution.',
        text: 'Investigated customer-reported issues and applied controlled data fixes under change management.',
      },
    ],
  },
  {
    role: 'Software Developer Intern',
    company: 'IBM',
    team: 'Mainframes',
    dates: 'May 2017 – Aug 2018',
    location: 'Markham',
    bullets: [
      {
        lead: 'Code coverage tooling.',
        text: 'Built an exporter that packages code coverage results into one importable file, fixing a long-standing customer problem with fragmented output.',
      },
      {
        lead: 'Global usability.',
        text: 'Added language switching across 14 languages.',
      },
    ],
  },
  {
    role: 'Research Assistant',
    company: 'University of Toronto',
    team: 'Automatic bug reproduction in distributed systems',
    dates: 'May 2016 – Aug 2016',
    location: 'Toronto',
    bullets: [
      {
        lead: 'Failure reproduction from logs.',
        text: 'Helped build a tool that reproduces real failures in HDFS, HBase and Cassandra from production logs alone, cutting reproduction time from months to hours.',
      },
    ],
  },
]

export const education = {
  school: 'University of Toronto',
  degree: 'B.A.Sc. in Computer Engineering, with Honours',
  year: '2019',
  notes: 'CGPA 3.80 / 4.00 · Dean’s List every semester',
}

export const skills = [
  { group: 'Languages', items: ['Java', 'Python', 'TypeScript', 'JavaScript', 'SQL', 'Kotlin', 'C/C++'] },
  {
    group: 'Backend',
    items: ['Spring Boot', 'Spring Security (JWT)', 'Spring Data JPA', 'Hibernate', 'REST', 'gRPC', 'Protocol Buffers (Protobuf)', 'FastAPI', 'Gradle'],
  },
  {
    group: 'Databases and storage',
    items: ['PostgreSQL', 'MySQL', 'Redis', 'Flyway', 'S3 / MinIO', 'Google Cloud Storage', 'Parquet'],
  },
  { group: 'Streaming and search', items: ['Kafka', 'Flink', 'Elasticsearch', 'Caffeine'] },
  { group: 'Machine learning', items: ['scikit-learn', 'scikit-surprise', 'pandas', 'PyArrow'] },
  { group: 'Frontend', items: ['React', 'React Router', 'Vite', 'Tailwind CSS', 'Ant Design'] },
  {
    group: 'Cloud and infrastructure',
    items: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes (CronJob, Operators)', 'minikube', 'Kustomize', 'Nginx', 'Certbot', 'Linux', 'CI/CD'],
  },
  { group: 'Testing', items: ['JUnit', 'Flink test utilities', 'pytest'] },
  { group: 'Observability', items: ['OpenTelemetry', 'Prometheus', 'Grafana', 'Grafana Tempo', 'Micrometer'] },
]
