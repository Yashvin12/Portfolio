/* ===================================================================
   TECH ECOSYSTEM — Cinematic Neural OS  v5.0
   All-domain coverage · Holographic panel · Unique visuals per tech
   =================================================================== */
'use strict';

window.initTechUniverse = (function () {

  /* ─────────────────────────────────────────────────────────────────
     COMPREHENSIVE TECH DATA — 10 domains represented equally
  ───────────────────────────────────────────────────────────────── */
  const TECH_DATA = [
    // ─── FRONTEND ENGINEERING (0-5) ───
    { name: 'React',          cat: 'Frontend',    color: 0x61dafb, accent: '#61dafb', accentRgb: '97,218,251',
      years: '2y', projects: '8+', role: 'Core',   proficiency: 88,
      code: 'const [state, setState] =\n  useState(null);\nuseEffect(() => {\n  setState(fetch(api));\n}, []);',
      desc: 'Declarative UI library with virtual DOM diffing & component composition.',
      holoType: 'atom',
      connects: ['Next.js', 'Framer Motion', 'Three.js', 'Vite'] },

    { name: 'Next.js',        cat: 'Frontend',    color: 0xffffff, accent: '#ffffff', accentRgb: '255,255,255',
      years: '1y', projects: '4+', role: 'Full-Stack', proficiency: 82,
      code: 'export default function Page()\n  { return <main />; }\nexport async function getServerSideProps()\n  { return { props: {} }; }',
      desc: 'Full-stack React framework with SSR, SSG, and edge-optimized routing.',
      holoType: 'grid',
      connects: ['React', 'Vercel', 'Tailwind CSS', 'PostgreSQL'] },

    { name: 'Three.js',       cat: '3D Web',      color: 0xff6040, accent: '#ff6040', accentRgb: '255,96,64',
      years: '1y', projects: '5+', role: 'Creative', proficiency: 84,
      code: 'const scene = new THREE.Scene();\nconst renderer = new\n  THREE.WebGLRenderer({\n    antialias: true });\nrenderer.setPixelRatio(DPR);',
      desc: '3D graphics engine for WebGL — enabling immersive browser experiences.',
      holoType: 'prism',
      connects: ['WebGL', 'Framer Motion', 'React', 'GSAP'] },

    { name: 'Framer Motion',  cat: 'Creative Dev', color: 0xff0055, accent: '#ff4488', accentRgb: '255,68,136',
      years: '1y', projects: '6+', role: 'Animation', proficiency: 85,
      code: '<motion.div\n  initial={{ opacity: 0 }}\n  animate={{ opacity: 1 }}\n  transition={{\n    spring: { damping: 20 }}}/>',
      desc: 'Production-grade React animation library with spring physics & gestures.',
      holoType: 'ribbon',
      connects: ['React', 'Next.js', 'Three.js'] },

    { name: 'Tailwind CSS',   cat: 'Frontend',    color: 0x06b6d4, accent: '#06b6d4', accentRgb: '6,182,212',
      years: '1y', projects: '7+', role: 'Styling', proficiency: 83,
      code: 'className=\n  "flex items-center\n  gap-4 p-6\n  rounded-2xl\n  bg-surface/80\n  backdrop-blur-xl"',
      desc: 'Utility-first CSS framework enabling rapid, consistent UI construction.',
      holoType: 'wave',
      connects: ['React', 'Next.js', 'Vite'] },

    { name: 'Vite',           cat: 'Frontend',    color: 0x646cff, accent: '#646cff', accentRgb: '100,108,255',
      years: '1y', projects: '6+', role: 'Tooling', proficiency: 80,
      code: 'export default defineConfig({\n  plugins: [react()],\n  build: {\n    rollupOptions: {}\n  }\n})',
      desc: 'Next-generation frontend build tool with native ES module HMR.',
      holoType: 'lightning',
      connects: ['React', 'Tailwind CSS', 'TypeScript'] },

    // ─── AI / ML (6-10) ───
    { name: 'Python',         cat: 'AI / ML',     color: 0x3776ab, accent: '#818cf8', accentRgb: '129,140,248',
      years: '2y', projects: '12+', role: 'Core',  proficiency: 91,
      code: 'def train_model(X, y):\n  model = Sequential([\n    Dense(128, "relu"),\n    Dense(1, "sigmoid")\n  ])\n  model.fit(X, y)',
      desc: 'The backbone of AI engineering — expressive, powerful, and universal.',
      holoType: 'serpent',
      connects: ['TensorFlow', 'PyTorch', 'FastAPI', 'Scikit-learn'] },

    { name: 'TensorFlow',     cat: 'AI / ML',     color: 0xff6f00, accent: '#f59e0b', accentRgb: '245,158,11',
      years: '2y', projects: '5+', role: 'Deep Learning', proficiency: 80,
      code: 'model = tf.keras.Sequential([\n  tf.keras.layers.Dense(\n    128, activation="relu"),\n  tf.keras.layers.Dropout(0.2)\n])\nmodel.compile("adam", "mse")',
      desc: 'Google\'s end-to-end ML platform for building and deploying neural networks.',
      holoType: 'tensor',
      connects: ['Python', 'Keras', 'NumPy', 'CUDA'] },

    { name: 'PyTorch',        cat: 'AI / ML',     color: 0xee4c2c, accent: '#f87171', accentRgb: '248,113,113',
      years: '1y', projects: '3+', role: 'Research',  proficiency: 75,
      code: 'class Net(nn.Module):\n  def forward(self, x):\n    return F.relu(\n      self.fc1(x))\n\nloss.backward()\noptimizer.step()',
      desc: 'Dynamic computation graphs for fast ML research and production deployment.',
      holoType: 'flame',
      connects: ['Python', 'CUDA', 'HuggingFace'] },

    { name: 'Scikit-learn',   cat: 'AI / ML',     color: 0xf89939, accent: '#fb923c', accentRgb: '251,146,60',
      years: '2y', projects: '6+', role: 'Classical ML', proficiency: 87,
      code: 'clf = RandomForestClassifier(\n  n_estimators=200,\n  max_depth=8)\nclf.fit(X_train, y_train)\nacc = clf.score(X_test, y_test)',
      desc: 'Industry-standard classical ML — from regression to ensemble methods.',
      holoType: 'forest',
      connects: ['Python', 'NumPy', 'Pandas', 'SciPy'] },

    { name: 'OpenCV',         cat: 'AI / ML',     color: 0x5c3ee8, accent: '#a78bfa', accentRgb: '167,139,250',
      years: '1y', projects: '3+', role: 'Vision',  proficiency: 72,
      code: 'frame = cv2.imread("input.jpg")\ngray = cv2.cvtColor(\n  frame, cv2.COLOR_BGR2GRAY)\nfaces = detector.detectMultiScale(\n  gray, 1.3, 5)',
      desc: 'Real-time computer vision library powering detection and image processing.',
      holoType: 'eye',
      connects: ['Python', 'NumPy', 'PyTorch'] },

    // ─── RAG SYSTEMS / LLM (11-15) ───
    { name: 'LangChain',      cat: 'RAG Systems',  color: 0x1c9432, accent: '#4ade80', accentRgb: '74,222,128',
      years: '1y', projects: '4+', role: 'Orchestration', proficiency: 88,
      code: 'chain = (\n  RunnablePassthrough()\n  | prompt\n  | llm\n  | StrOutputParser()\n)\nresult = chain.invoke(query)',
      desc: 'LLM orchestration framework — the neural backbone of RAG pipelines.',
      holoType: 'chain',
      connects: ['OpenAI API', 'Pinecone', 'Python', 'LlamaIndex'] },

    { name: 'LlamaIndex',     cat: 'RAG Systems',  color: 0x7b5ea7, accent: '#c084fc', accentRgb: '192,132,252',
      years: '1y', projects: '3+', role: 'Indexing', proficiency: 83,
      code: 'index = VectorStoreIndex\n  .from_documents(\n    docs,\n    service_context=ctx)\nquery_engine = index\n  .as_query_engine()',
      desc: 'Document indexing and RAG framework for intelligent data retrieval.',
      holoType: 'llama',
      connects: ['LangChain', 'OpenAI API', 'Pinecone', 'Python'] },

    { name: 'HuggingFace',    cat: 'RAG Systems',  color: 0xffd21e, accent: '#fde68a', accentRgb: '253,230,138',
      years: '1y', projects: '4+', role: 'Models Hub', proficiency: 78,
      code: 'pipe = pipeline(\n  "text-generation",\n  model="meta-llama/Llama-2-7b",\n  device_map="auto")\nout = pipe(prompt, max_new_tokens=256)',
      desc: 'Open-source AI model hub with 350,000+ models for every modality.',
      holoType: 'hub',
      connects: ['PyTorch', 'Python', 'LangChain'] },

    { name: 'Pinecone',       cat: 'RAG Systems',  color: 0x1cc88a, accent: '#34d399', accentRgb: '52,211,153',
      years: '1y', projects: '3+', role: 'Vector DB', proficiency: 80,
      code: 'index.upsert(vectors=[\n  (id, embedding, metadata)\n  for id, embedding, metadata\n  in zip(ids, embeddings, meta)\n])\nresults = index.query(\n  vector=q_emb, top_k=10)',
      desc: 'Serverless vector database for lightning-fast semantic similarity search.',
      holoType: 'vector',
      connects: ['LangChain', 'OpenAI API', 'LlamaIndex'] },

    { name: 'OpenAI API',     cat: 'RAG Systems',  color: 0x10a37f, accent: '#6ee7b7', accentRgb: '110,231,183',
      years: '1y', projects: '6+', role: 'Intelligence', proficiency: 92,
      code: 'response = client\n  .chat.completions.create(\n  model="gpt-4o",\n  messages=[\n    {"role": "system",\n     "content": system_prompt},\n    {"role": "user",\n     "content": user_msg}\n  ])',
      desc: 'GPT-4, DALL·E, and Whisper APIs — powering next-gen AI applications.',
      holoType: 'brain',
      connects: ['LangChain', 'Python', 'LlamaIndex', 'Pinecone'] },

    // ─── FULL STACK / BACKEND (16-19) ───
    { name: 'FastAPI',        cat: 'Backend',      color: 0x009688, accent: '#10b981', accentRgb: '16,185,129',
      years: '1y', projects: '5+', role: 'API Layer', proficiency: 87,
      code: '@app.post("/predict")\nasync def predict(\n  req: PredictRequest,\n  db: AsyncSession = Depends(get_db)\n) -> PredictResponse:\n  result = await model.run(req.input)\n  return PredictResponse(result)',
      desc: 'Modern async Python API framework — blazing fast with automatic OpenAPI docs.',
      holoType: 'server',
      connects: ['Python', 'PostgreSQL', 'Docker', 'Redis'] },

    { name: 'Node.js',        cat: 'Backend',      color: 0x339933, accent: '#22c55e', accentRgb: '34,197,94',
      years: '1y', projects: '4+', role: 'Runtime', proficiency: 80,
      code: 'const app = express();\napp.use(cors());\napp.get("/health",\n  async (req, res) => {\n    res.json({ status: "ok",\n               uptime: process.uptime() });\n  });',
      desc: 'JavaScript server runtime enabling full-stack JS development at scale.',
      holoType: 'node',
      connects: ['React', 'MongoDB', 'Redis', 'REST APIs'] },

    { name: 'TypeScript',     cat: 'Full Stack',   color: 0x3178c6, accent: '#60a5fa', accentRgb: '96,165,250',
      years: '1y', projects: '6+', role: 'Type Safety', proficiency: 82,
      code: 'interface APIResponse<T> {\n  data: T;\n  status: number;\n  timestamp: string;\n}\nasync function fetchData<T>(\n  url: string\n): Promise<APIResponse<T>>',
      desc: 'Typed JavaScript superset eliminating runtime errors at compile time.',
      holoType: 'typed',
      connects: ['React', 'Next.js', 'Node.js', 'Vite'] },

    { name: 'REST APIs',      cat: 'Backend',      color: 0xff4785, accent: '#ff4785', accentRgb: '255,71,133',
      years: '2y', projects: '10+', role: 'Integration', proficiency: 90,
      code: 'const res = await fetch(\n  "/api/v1/completions",\n  { method: "POST",\n    headers: {\n      "Authorization":\n        `Bearer ${token}`\n    },\n    body: JSON.stringify(payload) })',
      desc: 'RESTful API design, authentication flows, and third-party integrations.',
      holoType: 'api',
      connects: ['FastAPI', 'Node.js', 'React', 'Docker'] },

    // ─── DATABASES (19-23) ───
    { name: 'PostgreSQL',     cat: 'Databases',    color: 0x336791, accent: '#60a5fa', accentRgb: '96,165,250',
      years: '1y', projects: '5+', role: 'Relational', proficiency: 82,
      code: 'SELECT e.id, e.embedding,\n  1 - (e.vec <=> $1::vector)\n  AS similarity\nFROM embeddings e\nWHERE e.namespace = $2\nORDER BY similarity DESC\nLIMIT $3',
      desc: 'Advanced relational DB with pgvector for hybrid semantic-SQL search.',
      holoType: 'cylinders',
      connects: ['FastAPI', 'Supabase', 'Python', 'pgvector'] },

    { name: 'MongoDB',        cat: 'Databases',    color: 0x47a248, accent: '#4ade80', accentRgb: '74,222,128',
      years: '1y', projects: '4+', role: 'Document DB', proficiency: 79,
      code: 'db.embeddings.aggregate([\n  { $vectorSearch: {\n      queryVector: embedding,\n      path: "embedding",\n      numCandidates: 150,\n      limit: 10 }\n  }\n])',
      desc: 'Flexible document database with Atlas Vector Search for AI workloads.',
      holoType: 'vault',
      connects: ['Node.js', 'Python', 'LangChain'] },

    { name: 'Supabase',       cat: 'Databases',    color: 0x3ecf8e, accent: '#3ecf8e', accentRgb: '62,207,142',
      years: '1y', projects: '4+', role: 'BaaS', proficiency: 85,
      code: 'const { data, error } =\n  await supabase\n    .from("profiles")\n    .select("*, posts(*)")\n    .eq("id", userId)\n    .single()',
      desc: 'Open-source Firebase alternative with realtime subscriptions and edge functions.',
      holoType: 'bolt',
      connects: ['PostgreSQL', 'Next.js', 'React', 'REST APIs'] },

    { name: 'Redis',          cat: 'Databases',    color: 0xdc382d, accent: '#f87171', accentRgb: '248,113,113',
      years: '1y', projects: '3+', role: 'Cache / Queue', proficiency: 74,
      code: 'await redis.set(\n  `cache:${userId}`,\n  JSON.stringify(data),\n  "EX", 3600\n);\nawait redis.lpush(\n  "job_queue", JSON.stringify(job));',
      desc: 'In-memory data store for caching, pub/sub, and task queue management.',
      holoType: 'rings',
      connects: ['FastAPI', 'Node.js', 'Docker', 'PostgreSQL'] },

    { name: 'pgvector',       cat: 'RAG Systems',  color: 0x336791, accent: '#818cf8', accentRgb: '129,140,248',
      years: '1y', projects: '3+', role: 'Vector Search', proficiency: 78,
      code: 'CREATE INDEX ON embeddings\n  USING ivfflat\n  (embedding vector_cosine_ops)\n  WITH (lists = 100);\n\nSELECT * FROM embeddings\n  ORDER BY embedding <=> $1\n  LIMIT 20',
      desc: 'PostgreSQL extension enabling high-dimensional vector similarity search.',
      holoType: 'graph',
      connects: ['PostgreSQL', 'LangChain', 'OpenAI API', 'LlamaIndex'] },

    // ─── CLOUD / DEVOPS (24-28) ───
    { name: 'Docker',         cat: 'Cloud / DevOps', color: 0x2496ed, accent: '#38bdf8', accentRgb: '56,189,248',
      years: '1y', projects: '5+', role: 'Containers', proficiency: 78,
      code: 'FROM python:3.11-slim\nWORKDIR /app\nCOPY requirements.txt .\nRUN pip install --no-cache-dir -r req.txt\nCOPY . .\nCMD ["uvicorn", "main:app",\n     "--host", "0.0.0.0"]',
      desc: 'Container platform ensuring consistent environments from dev to production.',
      holoType: 'containers',
      connects: ['AWS', 'FastAPI', 'Node.js', 'Redis'] },

    { name: 'AWS',            cat: 'Cloud / DevOps', color: 0xff9900, accent: '#ffb347', accentRgb: '255,179,71',
      years: '1y', projects: '3+', role: 'Cloud', proficiency: 72,
      code: 'aws ecs create-service \\\n  --cluster production \\\n  --service-name api-service \\\n  --task-definition api:12 \\\n  --desired-count 3 \\\n  --launch-type FARGATE',
      desc: 'Amazon Web Services — S3, EC2, ECS, Lambda, and RDS for production scale.',
      holoType: 'cloud',
      connects: ['Docker', 'FastAPI', 'PostgreSQL', 'Redis'] },

    { name: 'Vercel',         cat: 'Cloud / DevOps', color: 0xffffff, accent: '#e2e8f0', accentRgb: '226,232,240',
      years: '1y', projects: '6+', role: 'Edge Deploy', proficiency: 88,
      code: '// vercel.json\n{\n  "functions": {\n    "api/**": {\n      "maxDuration": 30\n    }\n  },\n  "regions": ["iad1", "sin1"]\n}',
      desc: 'Edge-optimized deployment platform with zero-config CI/CD for Next.js.',
      holoType: 'edge',
      connects: ['Next.js', 'React', 'PostgreSQL', 'Supabase'] },

    { name: 'Git / GitHub',   cat: 'Cloud / DevOps', color: 0xf05032, accent: '#f97316', accentRgb: '249,115,22',
      years: '2y', projects: '20+', role: 'Version Ctrl', proficiency: 90,
      code: 'git commit -m "feat: add\n  vector search endpoint"\ngit push origin main\n\n# GitHub Actions CI\nruns-on: ubuntu-latest\nsteps:\n  - uses: actions/checkout@v4',
      desc: 'Distributed version control and CI/CD workflows powering modern development.',
      holoType: 'branch',
      connects: ['Docker', 'Vercel', 'AWS', 'Node.js'] },

    // ─── INTERACTIVE UI / 3D WEB (28-30) ───
    { name: 'WebGL / GLSL',   cat: '3D Web',      color: 0xff3366, accent: '#f43f5e', accentRgb: '244,63,94',
      years: '1y', projects: '4+', role: 'GPU Shaders', proficiency: 76,
      code: 'void main() {\n  vec2 uv = vUv * 2.0 - 1.0;\n  float d = length(uv);\n  float ring = sin(d * 20.0\n    - uTime * 1.5) * 0.5 + 0.5;\n  gl_FragColor = vec4(\n    uColor * ring, ring);\n}',
      desc: 'Raw GPU programming — GLSL fragment/vertex shaders for cinematic web visuals.',
      holoType: 'shader',
      connects: ['Three.js', 'WebGPU', 'React'] },

    { name: 'Chart.js',       cat: 'Interactive UI', color: 0xff6384, accent: '#fb7185', accentRgb: '251,113,133',
      years: '1y', projects: '4+', role: 'Data Viz', proficiency: 82,
      code: 'new Chart(ctx, {\n  type: "radar",\n  data: {\n    labels: skills,\n    datasets: [{\n      data: proficiency,\n      borderColor: accent,\n      backgroundColor:\n        accent + "20"\n    }]\n  }\n})',
      desc: 'Responsive charting library for beautiful interactive data visualizations.',
      holoType: 'charts',
      connects: ['React', 'JavaScript', 'REST APIs'] },
  ];

  /* ─────────────────────────────────────────────────────────────────
     CATEGORY COLOR MAP
  ───────────────────────────────────────────────────────────────── */
  const CAT_COLORS = {
    'Frontend':      { h: 0x00d4ff, glow: 'rgba(0,212,255,',   label: '#00d4ff',  dark: '#001a25',  rgb: '0,212,255' },
    '3D Web':        { h: 0xa855f7, glow: 'rgba(168,85,247,',  label: '#a855f7',  dark: '#140019',  rgb: '168,85,247' },
    'Creative Dev':  { h: 0xff4488, glow: 'rgba(255,68,136,',  label: '#ff4488',  dark: '#200010',  rgb: '255,68,136' },
    'AI / ML':       { h: 0x8b5cf6, glow: 'rgba(139,92,246,',  label: '#8b5cf6',  dark: '#0d0020',  rgb: '139,92,246' },
    'RAG Systems':   { h: 0x10b981, glow: 'rgba(16,185,129,',  label: '#10b981',  dark: '#001810',  rgb: '16,185,129' },
    'Backend':       { h: 0x22c55e, glow: 'rgba(34,197,94,',   label: '#22c55e',  dark: '#001800',  rgb: '34,197,94' },
    'Full Stack':    { h: 0x60a5fa, glow: 'rgba(96,165,250,',  label: '#60a5fa',  dark: '#000f2e',  rgb: '96,165,250' },
    'Databases':     { h: 0x3b82f6, glow: 'rgba(59,130,246,',  label: '#3b82f6',  dark: '#000f2e',  rgb: '59,130,246' },
    'Cloud / DevOps':{ h: 0xf59e0b, glow: 'rgba(245,158,11,',  label: '#f59e0b',  dark: '#1e1000',  rgb: '245,158,11' },
    'Interactive UI':{ h: 0xfb7185, glow: 'rgba(251,113,133,', label: '#fb7185',  dark: '#200010',  rgb: '251,113,133' },
  };

  /* ─────────────────────────────────────────────────────────────────
     SPATIAL 3D POSITIONS — hand-crafted for multi-domain coverage
  ───────────────────────────────────────────────────────────────── */
  const SPATIAL_POSITIONS = [
    // Frontend (left cluster, near-ground)
    new THREE.Vector3(-8,  3.5,  7.0),   // React
    new THREE.Vector3(-11, -1.0, 5.0),   // Next.js
    new THREE.Vector3(-5,  0.5,  6.5),   // Three.js
    new THREE.Vector3(-9, -4.5,  3.5),   // Framer Motion
    new THREE.Vector3(-4, -2.5,  5.5),   // Tailwind CSS
    new THREE.Vector3(-12, 2.5,  2.5),   // Vite
    // AI / ML (center, mid-ground)
    new THREE.Vector3( 1,  5.5,  2.5),   // Python
    new THREE.Vector3( 6,  2.0,  1.0),   // TensorFlow
    new THREE.Vector3( 3, -3.0,  1.5),   // PyTorch
    new THREE.Vector3( 8, -5.0,  2.5),   // Scikit-learn
    new THREE.Vector3( 0,  0.0, -1.0),   // OpenCV
    // RAG / LLM (right, deep layer)
    new THREE.Vector3(13,  4.0, -2.5),   // LangChain
    new THREE.Vector3(16, -1.5, -5.0),   // LlamaIndex
    new THREE.Vector3(11,  1.5, -3.5),   // HuggingFace
    new THREE.Vector3(14, -5.0, -2.0),   // Pinecone
    new THREE.Vector3( 9,  6.0, -5.5),   // OpenAI API
    // Backend (center-right, mid layer)
    new THREE.Vector3( 5, -7.5, -0.5),   // FastAPI
    new THREE.Vector3(-1, -6.0,  0.5),   // Node.js
    new THREE.Vector3( 3,  3.5, -2.0),   // TypeScript
    new THREE.Vector3(-2,  2.0,  4.0),   // REST APIs
    // Databases (lower right, deep)
    new THREE.Vector3(11,  7.5, -7.0),   // PostgreSQL
    new THREE.Vector3(17,  3.5, -7.5),   // MongoDB
    new THREE.Vector3( 8,  5.0, -4.5),   // Supabase
    new THREE.Vector3(18,  0.5, -4.5),   // Redis
    new THREE.Vector3(15, -4.0, -6.0),   // pgvector
    // Cloud / DevOps (far right)
    new THREE.Vector3(19, -6.0, -3.5),   // Docker
    new THREE.Vector3(21,  2.0, -5.5),   // AWS
    new THREE.Vector3(20, -2.0, -1.5),   // Vercel
    new THREE.Vector3(17,  6.0, -2.5),   // Git / GitHub
    // Interactive UI / 3D
    new THREE.Vector3(-6,  6.0,  4.0),   // WebGL / GLSL
    new THREE.Vector3(-3,  7.0,  1.5),   // Chart.js
  ];

  /* ─────────────────────────────────────────────────────────────────
     TECH THEMES, STATS, AND MOTION PROFILES
  ───────────────────────────────────────────────────────────────── */
  const TECH_PROFILE = {
    'React': {
      accent: '#48c8ff',
      accentRgb: '72,200,255',
      panelFx: 'plasma',
      waveform: 'sine',
      stats: [
        { label: 'Experience', value: '2y', icon: 'EXP' },
        { label: 'Components', value: '160+', icon: 'CMP' },
        { label: 'Hooks', value: '42', icon: 'HKS' },
        { label: 'Proficiency', value: '88%', icon: 'PRO' },
        { label: 'Projects', value: '8+', icon: 'PRJ' },
        { label: 'Status', value: 'LIVE', icon: 'STS', live: true },
      ],
      motion: { bobSpeed: 0.38, bobAmp: 0.16, rotSpeed: 0.18 },
    },
    'Next.js': {
      accent: '#ffffff',
      accentRgb: '255,255,255',
      accent2: '#3b82f6',
      accent3: '#0b0f1a',
      panelFx: 'crystal',
      waveform: 'pulse',
      stats: [
        { label: 'Experience', value: '1y', icon: 'EXP' },
        { label: 'Routes', value: '24', icon: 'RTS' },
        { label: 'Edge Fn', value: '12', icon: 'EDG' },
        { label: 'Proficiency', value: '82%', icon: 'PRO' },
        { label: 'Projects', value: '4+', icon: 'PRJ' },
        { label: 'Status', value: 'PROD', icon: 'STS', live: true },
      ],
      motion: { bobSpeed: 0.32, bobAmp: 0.12, rotSpeed: 0.12 },
    },
    'Three.js': {
      color: 0x8b5cf6,
      accent: '#a855f7',
      accentRgb: '168,85,247',
      panelFx: 'prism',
      waveform: 'orbit',
      stats: [
        { label: 'Experience', value: '1y', icon: 'EXP' },
        { label: 'Shaders', value: '28', icon: 'SHD' },
        { label: 'Scenes', value: '14', icon: 'SCN' },
        { label: 'Proficiency', value: '84%', icon: 'PRO' },
        { label: 'Projects', value: '5+', icon: 'PRJ' },
        { label: 'Status', value: 'LIVE', icon: 'STS', live: true },
      ],
      motion: { bobSpeed: 0.42, bobAmp: 0.18, rotSpeed: 0.22 },
    },
    'Framer Motion': {
      accent: '#f472b6',
      accentRgb: '244,114,182',
      panelFx: 'ribbon',
      waveform: 'ribbon',
      stats: [
        { label: 'Experience', value: '1y', icon: 'EXP' },
        { label: 'Transitions', value: '120+', icon: 'TRN' },
        { label: 'Gestures', value: '34', icon: 'GST' },
        { label: 'Proficiency', value: '85%', icon: 'PRO' },
        { label: 'Projects', value: '6+', icon: 'PRJ' },
        { label: 'Status', value: 'LIVE', icon: 'STS', live: true },
      ],
      motion: { bobSpeed: 0.5, bobAmp: 0.2, rotSpeed: 0.24 },
    },
    'Python': {
      accent: '#facc15',
      accentRgb: '250,204,21',
      accent2: '#3b82f6',
      panelFx: 'matrix',
      waveform: 'matrix',
      stats: [
        { label: 'Experience', value: '2y', icon: 'EXP' },
        { label: 'Pipelines', value: '18', icon: 'PIP' },
        { label: 'Models', value: '12', icon: 'MDL' },
        { label: 'Proficiency', value: '91%', icon: 'PRO' },
        { label: 'Projects', value: '12+', icon: 'PRJ' },
        { label: 'Status', value: 'CORE', icon: 'STS', live: true },
      ],
      motion: { bobSpeed: 0.34, bobAmp: 0.15, rotSpeed: 0.16 },
    },
    'TensorFlow': {
      accent: '#f59e0b',
      accentRgb: '245,158,11',
      panelFx: 'forge',
      waveform: 'pulse',
      stats: [
        { label: 'Experience', value: '2y', icon: 'EXP' },
        { label: 'Models', value: '9', icon: 'MDL' },
        { label: 'Accuracy', value: '96%', icon: 'ACC' },
        { label: 'Proficiency', value: '80%', icon: 'PRO' },
        { label: 'Projects', value: '5+', icon: 'PRJ' },
        { label: 'Status', value: 'TRAIN', icon: 'STS', live: true },
      ],
      motion: { bobSpeed: 0.36, bobAmp: 0.17, rotSpeed: 0.19 },
    },
    'PyTorch': {
      accent: '#f97316',
      accentRgb: '249,115,22',
      panelFx: 'forge',
      waveform: 'spike',
      stats: [
        { label: 'Experience', value: '1y', icon: 'EXP' },
        { label: 'Experiments', value: '32', icon: 'EXP' },
        { label: 'Throughput', value: '1.2k/s', icon: 'TPS' },
        { label: 'Proficiency', value: '75%', icon: 'PRO' },
        { label: 'Projects', value: '3+', icon: 'PRJ' },
        { label: 'Status', value: 'LAB', icon: 'STS' },
      ],
      motion: { bobSpeed: 0.46, bobAmp: 0.2, rotSpeed: 0.2 },
    },
    'Scikit-learn': {
      accent: '#fbbf24',
      accentRgb: '251,191,36',
      panelFx: 'calm',
      waveform: 'sine',
      stats: [
        { label: 'Experience', value: '2y', icon: 'EXP' },
        { label: 'Pipelines', value: '14', icon: 'PIP' },
        { label: 'Accuracy', value: '94%', icon: 'ACC' },
        { label: 'Proficiency', value: '87%', icon: 'PRO' },
        { label: 'Projects', value: '6+', icon: 'PRJ' },
        { label: 'Status', value: 'PROD', icon: 'STS', live: true },
      ],
      motion: { bobSpeed: 0.3, bobAmp: 0.14, rotSpeed: 0.14 },
    },
    'LangChain': {
      accent: '#4ade80',
      accentRgb: '74,222,128',
      panelFx: 'neon',
      waveform: 'chain',
      stats: [
        { label: 'Experience', value: '1y', icon: 'EXP' },
        { label: 'Chains', value: '46', icon: 'CHN' },
        { label: 'RAG Pipes', value: '12', icon: 'RAG' },
        { label: 'Proficiency', value: '88%', icon: 'PRO' },
        { label: 'Projects', value: '4+', icon: 'PRJ' },
        { label: 'Status', value: 'LIVE', icon: 'STS', live: true },
      ],
      motion: { bobSpeed: 0.4, bobAmp: 0.16, rotSpeed: 0.18 },
    },
    'LlamaIndex': {
      accent: '#c084fc',
      accentRgb: '192,132,252',
      panelFx: 'prism',
      waveform: 'orbit',
      stats: [
        { label: 'Experience', value: '1y', icon: 'EXP' },
        { label: 'Indexes', value: '18', icon: 'IDX' },
        { label: 'Chunk Size', value: '512', icon: 'CHK' },
        { label: 'Proficiency', value: '83%', icon: 'PRO' },
        { label: 'Projects', value: '3+', icon: 'PRJ' },
        { label: 'Status', value: 'LIVE', icon: 'STS', live: true },
      ],
      motion: { bobSpeed: 0.33, bobAmp: 0.15, rotSpeed: 0.16 },
    },
    'OpenAI API': {
      accent: '#6ee7b7',
      accentRgb: '110,231,183',
      accent2: '#ffffff',
      panelFx: 'neon',
      waveform: 'pulse',
      stats: [
        { label: 'Experience', value: '1y', icon: 'EXP' },
        { label: 'Tokens', value: '2.4M', icon: 'TKN' },
        { label: 'Latency', value: '220ms', icon: 'LAT' },
        { label: 'Proficiency', value: '92%', icon: 'PRO' },
        { label: 'Projects', value: '6+', icon: 'PRJ' },
        { label: 'Status', value: 'PROD', icon: 'STS', live: true },
      ],
      motion: { bobSpeed: 0.37, bobAmp: 0.16, rotSpeed: 0.18 },
    },
    'Pinecone': {
      accent: '#34d399',
      accentRgb: '52,211,153',
      panelFx: 'plasma',
      waveform: 'orbit',
      stats: [
        { label: 'Experience', value: '1y', icon: 'EXP' },
        { label: 'Vectors', value: '1.2M', icon: 'VEC' },
        { label: 'Recall', value: '96%', icon: 'RCL' },
        { label: 'Proficiency', value: '80%', icon: 'PRO' },
        { label: 'Projects', value: '3+', icon: 'PRJ' },
        { label: 'Status', value: 'LIVE', icon: 'STS', live: true },
      ],
      motion: { bobSpeed: 0.35, bobAmp: 0.15, rotSpeed: 0.16 },
    },
    'FastAPI': {
      accent: '#22d3ee',
      accentRgb: '34,211,238',
      panelFx: 'neon',
      waveform: 'pulse',
      stats: [
        { label: 'Experience', value: '1y', icon: 'EXP' },
        { label: 'APIs', value: '28', icon: 'API' },
        { label: 'P95 Lat', value: '45ms', icon: 'LAT' },
        { label: 'Proficiency', value: '87%', icon: 'PRO' },
        { label: 'Projects', value: '5+', icon: 'PRJ' },
        { label: 'Status', value: 'PROD', icon: 'STS', live: true },
      ],
      motion: { bobSpeed: 0.34, bobAmp: 0.14, rotSpeed: 0.14 },
    },
    'Node.js': {
      accent: '#22c55e',
      accentRgb: '34,197,94',
      panelFx: 'neon',
      waveform: 'spike',
      stats: [
        { label: 'Experience', value: '1y', icon: 'EXP' },
        { label: 'Services', value: '16', icon: 'SRV' },
        { label: 'Throughput', value: '900/s', icon: 'TPS' },
        { label: 'Proficiency', value: '80%', icon: 'PRO' },
        { label: 'Projects', value: '4+', icon: 'PRJ' },
        { label: 'Status', value: 'PROD', icon: 'STS', live: true },
      ],
      motion: { bobSpeed: 0.33, bobAmp: 0.14, rotSpeed: 0.15 },
    },
    'PostgreSQL': {
      accent: '#60a5fa',
      accentRgb: '96,165,250',
      accent2: '#cbd5e1',
      panelFx: 'crystal',
      waveform: 'sine',
      stats: [
        { label: 'Experience', value: '1y', icon: 'EXP' },
        { label: 'Queries', value: '120ms', icon: 'QRY' },
        { label: 'Scale', value: '650GB', icon: 'SCL' },
        { label: 'Proficiency', value: '82%', icon: 'PRO' },
        { label: 'Projects', value: '5+', icon: 'PRJ' },
        { label: 'Status', value: 'PROD', icon: 'STS', live: true },
      ],
      motion: { bobSpeed: 0.3, bobAmp: 0.13, rotSpeed: 0.12 },
    },
    'Docker': {
      accent: '#38bdf8',
      accentRgb: '56,189,248',
      panelFx: 'plasma',
      waveform: 'pulse',
      stats: [
        { label: 'Experience', value: '1y', icon: 'EXP' },
        { label: 'Images', value: '40', icon: 'IMG' },
        { label: 'Deploys', value: '60', icon: 'DEP' },
        { label: 'Proficiency', value: '78%', icon: 'PRO' },
        { label: 'Projects', value: '5+', icon: 'PRJ' },
        { label: 'Status', value: 'SHIP', icon: 'STS', live: true },
      ],
      motion: { bobSpeed: 0.34, bobAmp: 0.14, rotSpeed: 0.15 },
    },
    'Redis': {
      accent: '#f87171',
      accentRgb: '248,113,113',
      panelFx: 'forge',
      waveform: 'spike',
      stats: [
        { label: 'Experience', value: '1y', icon: 'EXP' },
        { label: 'Cache Hit', value: '97%', icon: 'HIT' },
        { label: 'Latency', value: '9ms', icon: 'LAT' },
        { label: 'Proficiency', value: '74%', icon: 'PRO' },
        { label: 'Projects', value: '3+', icon: 'PRJ' },
        { label: 'Status', value: 'LIVE', icon: 'STS', live: true },
      ],
      motion: { bobSpeed: 0.4, bobAmp: 0.16, rotSpeed: 0.18 },
    },
  };

  const PANEL_FX_PRESETS = {
    plasma:  { gridSize: 26, gridOpacity: 0.82, gridSpeed: 10, nebulaSpeed: 6,  scanSpeed: 2.2 },
    crystal: { gridSize: 34, gridOpacity: 0.58, gridSpeed: 14, nebulaSpeed: 8,  scanSpeed: 2.8 },
    prism:   { gridSize: 30, gridOpacity: 0.68, gridSpeed: 12, nebulaSpeed: 7,  scanSpeed: 2.4 },
    ribbon:  { gridSize: 22, gridOpacity: 0.62, gridSpeed: 9,  nebulaSpeed: 6,  scanSpeed: 2.1 },
    matrix:  { gridSize: 18, gridOpacity: 0.55, gridSpeed: 8,  nebulaSpeed: 5.6,scanSpeed: 1.9 },
    forge:   { gridSize: 28, gridOpacity: 0.75, gridSpeed: 11, nebulaSpeed: 6.8,scanSpeed: 2.3 },
    neon:    { gridSize: 32, gridOpacity: 0.64, gridSpeed: 13, nebulaSpeed: 9,  scanSpeed: 2.6 },
    calm:    { gridSize: 36, gridOpacity: 0.6,  gridSpeed: 16, nebulaSpeed: 10, scanSpeed: 2.9 },
  };
  const PANEL_FX_KEYS = Object.keys(PANEL_FX_PRESETS);

  const CATEGORY_METRICS = {
    'Frontend': [
      { label: 'Components', min: 120, max: 420, unit: '+', icon: 'CMP' },
      { label: 'UI Systems', min: 3, max: 12, unit: '',  icon: 'SYS' },
      { label: 'Render FPS', min: 55, max: 120, unit: 'fps', icon: 'FPS' },
    ],
    '3D Web': [
      { label: 'Shaders', min: 12, max: 60, unit: '', icon: 'SHD' },
      { label: 'Scenes',  min: 5,  max: 26, unit: '', icon: 'SCN' },
      { label: 'GPU Pass',min: 3,  max: 12, unit: '', icon: 'GPU' },
    ],
    'Creative Dev': [
      { label: 'Transitions', min: 40, max: 160, unit: '+', icon: 'TRN' },
      { label: 'Gestures',    min: 12, max: 60,  unit: '',  icon: 'GST' },
      { label: 'Timelines',   min: 8,  max: 32,  unit: '',  icon: 'TLN' },
    ],
    'AI / ML': [
      { label: 'Models',   min: 6,  max: 22, unit: '',  icon: 'MDL' },
      { label: 'Accuracy', min: 86, max: 98, unit: '%', icon: 'ACC' },
      { label: 'Pipelines',min: 3,  max: 14, unit: '',  icon: 'PIP' },
    ],
    'RAG Systems': [
      { label: 'Vectors', min: 100, max: 900, unit: 'k', icon: 'VEC' },
      { label: 'Recall',  min: 85,  max: 99,  unit: '%', icon: 'RCL' },
      { label: 'Latency', min: 120, max: 480, unit: 'ms', icon: 'LAT' },
    ],
    'Backend': [
      { label: 'APIs Built', min: 12, max: 60, unit: '',  icon: 'API' },
      { label: 'Latency',    min: 20, max: 90, unit: 'ms',icon: 'LAT' },
      { label: 'Throughput', min: 300, max: 1200, unit: '/s', icon: 'TPS' },
    ],
    'Full Stack': [
      { label: 'Services', min: 6, max: 20, unit: '', icon: 'SRV' },
      { label: 'Deploys',  min: 15, max: 70, unit: '', icon: 'DEP' },
      { label: 'Coverage', min: 70, max: 96, unit: '%', icon: 'COV' },
    ],
    'Databases': [
      { label: 'Queries', min: 50, max: 220, unit: 'ms', icon: 'QRY' },
      { label: 'Scale',   min: 50, max: 900, unit: 'GB', icon: 'SCL' },
      { label: 'Indexes', min: 8,  max: 36,  unit: '',   icon: 'IDX' },
    ],
    'Cloud / DevOps': [
      { label: 'Pipelines', min: 6,  max: 24,  unit: '',  icon: 'CIC' },
      { label: 'Deploys',   min: 20, max: 120, unit: '',  icon: 'DEP' },
      { label: 'Uptime',    min: 98, max: 100, unit: '%', icon: 'UPT' },
    ],
    'Interactive UI': [
      { label: 'Charts',     min: 10, max: 60, unit: '',  icon: 'CHT' },
      { label: 'Dashboards', min: 3,  max: 14, unit: '',  icon: 'DSH' },
      { label: 'Latency',    min: 16, max: 45, unit: 'ms', icon: 'LAT' },
    ],
    'Default': [
      { label: 'Throughput', min: 200, max: 900, unit: '/s', icon: 'TPS' },
      { label: 'Signal',     min: 60,  max: 99,  unit: '%',  icon: 'SIG' },
      { label: 'Uptime',     min: 96,  max: 100, unit: '%',  icon: 'UPT' },
    ],
  };

  const STATUS_BY_CAT = {
    'Frontend': ['LIVE', 'STABLE', 'ACTIVE'],
    '3D Web': ['LIVE', 'REALTIME', 'ACTIVE'],
    'Creative Dev': ['LIVE', 'KINETIC', 'ACTIVE'],
    'AI / ML': ['TRAIN', 'ACTIVE', 'R&D'],
    'RAG Systems': ['LIVE', 'INDEX', 'ACTIVE'],
    'Backend': ['PROD', 'LIVE', 'CORE'],
    'Full Stack': ['PROD', 'CORE', 'ACTIVE'],
    'Databases': ['PROD', 'STABLE', 'SYNC'],
    'Cloud / DevOps': ['SHIP', 'PROD', 'ACTIVE'],
    'Interactive UI': ['LIVE', 'ACTIVE', 'SYNC'],
    'Default': ['ACTIVE'],
  };

  const WAVEFORMS = ['sine', 'pulse', 'ribbon', 'matrix', 'orbit', 'spike'];

  function clamp(val, min, max) {
    return Math.min(max, Math.max(min, val));
  }

  function hashString(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) {
      h = (h << 5) - h + str.charCodeAt(i);
      h |= 0;
    }
    return Math.abs(h);
  }

  function seeded(seed) {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  }

  function hexToRgb(hex) {
    const clean = hex.replace('#', '');
    const bigint = parseInt(clean, 16);
    return {
      r: (bigint >> 16) & 255,
      g: (bigint >> 8) & 255,
      b: bigint & 255,
    };
  }

  function hexToRgbString(hex) {
    const { r, g, b } = hexToRgb(hex);
    return `${r},${g},${b}`;
  }

  function rgbToHsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0;
    const l = (max + min) / 2;
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    return { h, s, l };
  }

  function hslToHex(h, s, l) {
    let r, g, b;
    if (s === 0) {
      r = g = b = l;
    } else {
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1/6) return p + (q - p) * 6 * t;
        if (t < 1/2) return q;
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      };
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }
    const toHex = v => Math.round(v * 255).toString(16).padStart(2, '0');
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }

  function deriveAccents(accentHex, seed) {
    const rgb = hexToRgb(accentHex);
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    const shiftA = ((seed % 50) - 25) / 360;
    const shiftB = (((seed >> 3) % 60) - 30) / 360;
    const accent2 = hslToHex((hsl.h + shiftA + 1) % 1, clamp(hsl.s + 0.12, 0, 1), clamp(hsl.l + 0.08, 0, 1));
    const accent3 = hslToHex((hsl.h + shiftB + 1) % 1, clamp(hsl.s + 0.08, 0, 1), clamp(hsl.l - 0.06, 0, 1));
    return {
      accent2,
      accent3,
      accentRgb2: hexToRgbString(accent2),
      accentRgb3: hexToRgbString(accent3),
    };
  }

  function buildMotion(tech, seed) {
    const r1 = seeded(seed * 0.91 + 1);
    const r2 = seeded(seed * 1.23 + 2);
    const r3 = seeded(seed * 1.77 + 3);
    const r4 = seeded(seed * 2.11 + 4);
    const catBoost = tech.cat === '3D Web' || tech.cat === 'Creative Dev' ? 1.25 : 1.0;
    return {
      phase:  r1 * Math.PI * 2,
      phaseX: r2 * Math.PI * 2,
      phaseZ: r3 * Math.PI * 2,
      bobSpeed: (0.22 + r1 * 0.48) * catBoost,
      bobAmp:   (0.08 + r2 * 0.16) * catBoost,
      rotSpeed: (r3 - 0.5) * 0.28,
      wobble:   0.2 + r4 * 0.4,
    };
  }

  function pickMetric(tech, seed) {
    const list = CATEGORY_METRICS[tech.cat] || CATEGORY_METRICS.Default;
    return list[seed % list.length];
  }

  function formatMetric(metric, seed) {
    const val = Math.round(metric.min + seeded(seed * 1.7) * (metric.max - metric.min));
    if (metric.unit) return `${val}${metric.unit}`;
    return `${val}`;
  }

  function makeModuleId(seed) {
    const a = (seed % 4096).toString(16).toUpperCase().padStart(3, '0');
    const b = ((seed >> 4) % 4096).toString(16).toUpperCase().padStart(3, '0');
    return `MX-${a}${b}`;
  }

  function pickStatus(tech, seed) {
    const list = STATUS_BY_CAT[tech.cat] || STATUS_BY_CAT.Default;
    return list[seed % list.length];
  }

  function buildStats(tech, seed) {
    const stats = [
      { label: 'Experience', value: tech.years || '—', icon: 'EXP' },
      { label: 'Projects', value: tech.projects || '—', icon: 'PRJ' },
    ];
    if (typeof tech.proficiency === 'number') {
      stats.push({ label: 'Proficiency', value: `${tech.proficiency}%`, icon: 'PRO' });
    }
    const metric = pickMetric(tech, seed);
    stats.push({ label: metric.label, value: formatMetric(metric, seed + 11), icon: metric.icon });
    stats.push({ label: 'Module ID', value: makeModuleId(seed), icon: 'MID' });
    const status = pickStatus(tech, seed);
    stats.push({
      label: 'Status',
      value: status,
      icon: 'STS',
      live: status === 'LIVE' || status === 'ACTIVE' || status === 'PROD',
    });
    return stats.slice(0, 6);
  }

  function applyStatDefaults(stats, tech, seed) {
    const labels = new Set(stats.map(s => s.label.toLowerCase()));
    if (!labels.has('module id')) {
      stats.push({ label: 'Module ID', value: makeModuleId(seed), icon: 'MID' });
    }
    if (!labels.has('status')) {
      const status = pickStatus(tech, seed);
      stats.push({
        label: 'Status',
        value: status,
        icon: 'STS',
        live: status === 'LIVE' || status === 'ACTIVE' || status === 'PROD',
      });
    }
    const keep = new Set(['experience', 'projects', 'proficiency', 'status', 'module id']);
    while (stats.length > 6) {
      const idx = stats.findIndex(s => !keep.has(s.label.toLowerCase()));
      if (idx >= 0) stats.splice(idx, 1);
      else stats.pop();
    }
    return stats;
  }

  function buildProfile(tech) {
    const seed = hashString(tech.name);
    const override = TECH_PROFILE[tech.name] || {};
    const accent = override.accent || tech.accent || '#61dafb';
    const accentRgb = override.accentRgb || tech.accentRgb || hexToRgbString(accent);
    const accents = deriveAccents(accent, seed);
    const accent2 = override.accent2 || accents.accent2;
    const accent3 = override.accent3 || accents.accent3;
    const accentRgb2 = override.accentRgb2 || accents.accentRgb2;
    const accentRgb3 = override.accentRgb3 || accents.accentRgb3;
    const stats = applyStatDefaults(override.stats ? [...override.stats] : buildStats(tech, seed), tech, seed);
    const waveform = override.waveform || WAVEFORMS[seed % WAVEFORMS.length];
    const panelFx = override.panelFx || PANEL_FX_KEYS[seed % PANEL_FX_KEYS.length];
    const motion = { ...buildMotion(tech, seed), ...override.motion };
    const holoLabel = override.holoLabel || `${(tech.holoType || 'holo').toUpperCase()} CORE`;
    return {
      seed,
      accent,
      accentRgb,
      accent2,
      accent3,
      accentRgb2,
      accentRgb3,
      stats,
      waveform,
      panelFx,
      motion,
      holoLabel,
      color: override.color,
    };
  }

  TECH_DATA.forEach(tech => {
    const profile = buildProfile(tech);
    tech.profile = profile;
    tech.accent = profile.accent;
    tech.accentRgb = profile.accentRgb;
    tech.accent2 = profile.accent2;
    tech.accent3 = profile.accent3;
    tech.accentRgb2 = profile.accentRgb2;
    tech.accentRgb3 = profile.accentRgb3;
    tech.panelFx = profile.panelFx;
    tech.waveform = profile.waveform;
    tech.stats = profile.stats;
    tech.motion = profile.motion;
    tech.holoLabel = profile.holoLabel;
    if (profile.color !== undefined) tech.color = profile.color;
  });

  /* ─────────────────────────────────────────────────────────────────
     GLSL SHADERS
  ───────────────────────────────────────────────────────────────── */
  const entityVert = /* glsl */`
    uniform float uTime;
    uniform float uPulse;
    uniform float uSelected;
    varying vec3 vNormal;
    varying vec3 vPos;
    varying vec2 vUv;
    varying float vDisplace;

    vec3 hash3(vec3 p) {
      p = vec3(dot(p,vec3(127.1,311.7,74.7)),
               dot(p,vec3(269.5,183.3,246.1)),
               dot(p,vec3(113.5,271.9,124.6)));
      return -1.0+2.0*fract(sin(p)*43758.5453123);
    }
    float noise(vec3 p) {
      vec3 i=floor(p), f=fract(p), u=f*f*(3.0-2.0*f);
      return mix(mix(mix(dot(hash3(i),f),dot(hash3(i+vec3(1,0,0)),f-vec3(1,0,0)),u.x),
                     mix(dot(hash3(i+vec3(0,1,0)),f-vec3(0,1,0)),dot(hash3(i+vec3(1,1,0)),f-vec3(1,1,0)),u.x),u.y),
                 mix(mix(dot(hash3(i+vec3(0,0,1)),f-vec3(0,0,1)),dot(hash3(i+vec3(1,0,1)),f-vec3(1,0,1)),u.x),
                     mix(dot(hash3(i+vec3(0,1,1)),f-vec3(0,1,1)),dot(hash3(i+vec3(1,1,1)),f-vec3(1,1,1)),u.x),u.y),u.z);
    }

    void main() {
      vNormal = normalMatrix * normal;
      vUv = uv;
      float n  = noise(position * 2.5 + uTime * 0.20) * 0.13;
      float n2 = noise(position * 5.0 - uTime * 0.14) * 0.07;
      float sel  = uSelected * 0.8;
      float disp = (n + n2) * uPulse * (1.0 + sel);
      float warp = sin((position.y + uTime * 0.6) * 6.0) * 0.02 * uSelected;
      vDisplace  = disp;
      vPos = position + normal * disp + vec3(warp, 0.0, 0.0);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(vPos, 1.0);
    }
  `;

  const holoFrag = /* glsl */`
    uniform float uTime;
    uniform vec3  uColor;
    uniform float uPulse;
    uniform float uSelected;
    varying vec3  vNormal;
    varying vec3  vPos;
    varying vec2  vUv;
    varying float vDisplace;

    void main() {
      vec3 n = normalize(vNormal);
      vec2 uv = vUv;
      float glitch = (sin((uv.y + uTime * 0.8) * 120.0) * 0.5 + 0.5) * uSelected;
      uv.x += (glitch - 0.5) * 0.03;
      float fresnel = pow(1.0 - abs(dot(n, vec3(0.0, 0.0, 1.0))), 2.0);
      float iri  = sin(uv.x * 22.0 + uTime * 2.8) * 0.5 + 0.5;
      float scan = sin(uv.y * 150.0 - uTime * 5.0) * 0.5 + 0.5;
      float grid = step(0.92, sin(uv.x * 12.0)) + step(0.92, sin(uv.y * 20.0));
      float edge = smoothstep(0.0, 0.12, uv.x) * smoothstep(1.0, 0.88, uv.x)
                 * smoothstep(0.0, 0.10, uv.y) * smoothstep(1.0, 0.90, uv.y);
      vec3 colA = uColor;
      vec3 colB = vec3(0.7, 0.15, 1.0);
      vec3 col = mix(colA, colB, iri * 0.45 + fresnel * 0.35);
      col += col * scan * 0.07;
      col += vec3(fresnel) * uColor * 0.7;
      col += uColor * grid * 0.3 * (1.0 + uSelected);
      float pulse = sin(uTime * 2.0) * 0.5 + 0.5;
      float alpha = (0.5 + vDisplace * 2.5 + iri * 0.18 + pulse * 0.12 * uPulse) * edge;
      alpha = mix(alpha, alpha * 1.5, uSelected);
      gl_FragColor = vec4(col, clamp(alpha, 0.0, 1.0));
    }
  `;

  const neuralFrag = /* glsl */`
    uniform float uTime;
    uniform vec3  uColor;
    uniform float uPulse;
    uniform float uSelected;
    varying vec3  vNormal;
    varying vec3  vPos;
    varying float vDisplace;

    void main() {
      vec3 n = normalize(vNormal);
      float fresnel = pow(1.0 - abs(dot(n, vec3(0.0,0.0,1.0))), 3.0);
      float pulse  = sin(uTime * 2.8 + length(vPos) * 3.5) * 0.5 + 0.5;
      float energy = sin(uTime * 1.5 - vPos.y * 5.0) * 0.5 + 0.5;
      float nerve  = step(0.88, sin(vPos.x * 10.0 + uTime) * sin(vPos.y * 8.0 - uTime * 0.8));
      vec3 baseCol = uColor;
      vec3 rimCol  = vec3(0.55, 0.25, 1.0);
      vec3 coreCol = vec3(1.0, 0.85, 1.0);
      vec3 col = mix(baseCol, rimCol, fresnel);
      col = mix(col, coreCol, energy * 0.25 * uPulse);
      col += rimCol * fresnel * 1.4 * uPulse;
      col += baseCol * pulse * 0.3 * uPulse;
      col += uColor * nerve * (0.5 + uSelected * 0.5);
      float alpha = 0.72 + fresnel * 0.28 + vDisplace * 1.8 + uSelected * 0.15;
      gl_FragColor = vec4(col, clamp(alpha, 0.0, 1.0));
    }
  `;

  const vectorFrag = /* glsl */`
    uniform float uTime;
    uniform vec3  uColor;
    uniform float uPulse;
    uniform float uSelected;
    varying vec3  vNormal;
    varying vec3  vPos;
    varying vec2  vUv;
    varying float vDisplace;

    void main() {
      vec3 n = normalize(vNormal);
      float lat  = vUv.y;
      float lon  = vUv.x;
      float grid = step(0.95, sin(lat * 20.0)) + step(0.95, sin(lon * 38.0));
      float flow = sin(vPos.x * 5.0 + uTime * 2.5) * sin(vPos.y * 4.0 - uTime * 1.8) * 0.5 + 0.5;
      float embed = sin(vPos.x * 12.0 - uTime * 3.0) * 0.5 + 0.5;
      float fresnel = pow(1.0 - abs(dot(n, vec3(0.0,0.0,1.0))), 2.5);
      vec3 col = uColor * (grid * 0.9 + flow * 0.35 + fresnel * 0.7 + embed * 0.2 * uPulse);
      col += uColor * uPulse * 0.5;
      col += uColor * uSelected * (grid + embed) * 0.4;
      float alpha = (grid * 0.85 + flow * 0.28 + fresnel * 0.55 + embed * 0.1) * 0.88;
      gl_FragColor = vec4(col, clamp(alpha, 0.0, 1.0));
    }
  `;

  const dbFrag = /* glsl */`
    uniform float uTime;
    uniform vec3  uColor;
    uniform float uPulse;
    uniform float uSelected;
    varying vec3  vNormal;
    varying vec3  vPos;
    varying float vDisplace;

    void main() {
      vec3 n = normalize(vNormal);
      float fresnel = pow(1.0 - abs(dot(n, vec3(0.0,0.0,1.0))), 2.0);
      float seg   = step(0.92, sin(vPos.y * 10.0 + uTime * 1.5));
      float pulse = sin(uTime * 2.2 + vPos.y * 6.0) * 0.5 + 0.5;
      float ring  = step(0.96, sin(length(vPos.xz) * 14.0 - uTime * 2.0));
      vec3 col = uColor * (seg * 1.3 + pulse * 0.6 * uPulse + fresnel * 0.9 + ring * 0.5);
      col += uColor * uSelected * (seg + ring) * 0.5;
      float alpha = seg * 0.88 + fresnel * 0.65 + pulse * 0.35 * uPulse + ring * 0.4;
      gl_FragColor = vec4(col, clamp(alpha, 0.0, 1.0));
    }
  `;

  const backendFrag = /* glsl */`
    uniform float uTime;
    uniform vec3  uColor;
    uniform float uPulse;
    uniform float uSelected;
    varying vec2  vUv;
    varying vec3  vPos;

    void main() {
      vec2 g = fract(vUv * 12.0) - 0.5;
      float line = min(abs(g.x), abs(g.y));
      float glow = smoothstep(0.49, 0.44, line);
      float isect = smoothstep(0.05, 0.0, length(fract(vUv * 12.0) - 0.5));
      float flow  = sin(vUv.y * 3.14 * 6.0 - uTime * 3.0) * 0.5 + 0.5;
      float scan  = sin(vUv.x * 50.0 + uTime * 1.5) * 0.5 + 0.5;
      float pulse = sin(uTime * 1.8) * 0.5 + 0.5;
      vec3 col = uColor * (glow * 0.7 + isect * (1.2 + pulse * 0.6) + flow * 0.25 + scan * glow * 0.2);
      col += uColor * uSelected * (glow + isect) * 0.6;
      float dist  = length(vUv - 0.5) * 2.0;
      float fog   = smoothstep(1.0, 0.1, dist);
      float alpha = (glow * 0.5 + isect * 0.9 + flow * glow * 0.35) * fog;
      gl_FragColor = vec4(col, clamp(alpha * (0.7 + uPulse * 0.3), 0.0, 1.0));
    }
  `;

  const devopsFrag = /* glsl */`
    uniform float uTime;
    uniform vec3  uColor;
    uniform float uPulse;
    uniform float uSelected;
    varying vec3  vNormal;
    varying vec3  vPos;
    varying float vDisplace;

    void main() {
      vec3 n = normalize(vNormal);
      float fresnel = pow(1.0 - abs(dot(n, vec3(0.0,0.0,1.0))), 2.2);
      float edge = step(0.85, abs(dot(n, vec3(1.0,0.0,0.0))) + abs(dot(n, vec3(0.0,1.0,0.0))));
      float pulse = sin(uTime * 2.2 + length(vPos) * 4.0) * 0.5 + 0.5;
      float energy = sin(uTime * 0.8 - vPos.y * 3.0) * 0.5 + 0.5;
      vec3 col = uColor * (fresnel * 1.2 + edge * 0.6 + pulse * 0.4 * uPulse + energy * 0.3);
      col += uColor * uSelected * (edge + fresnel) * 0.5;
      float alpha = fresnel * 0.7 + edge * 0.5 + pulse * 0.3 + uSelected * 0.2;
      gl_FragColor = vec4(col, clamp(alpha, 0.0, 1.0));
    }
  `;

  const sharedVert = /* glsl */`
    varying vec2 vUv;
    varying vec3 vPos;
    void main() {
      vUv = uv;
      vPos = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const streamFrag = /* glsl */`
    uniform float uTime;
    uniform float uDash;
    uniform vec3  uColor;
    uniform float uOpacity;
    varying vec2  vUv;

    void main() {
      float dashed = sin(vUv.x * 32.0 - uTime * 6.0 + uDash) * 0.5 + 0.5;
      dashed = pow(dashed, 5.0);
      float glow  = 1.0 - abs(vUv.y - 0.5) * 2.0;
      glow = pow(glow, 1.8);
      float alpha = dashed * glow * uOpacity;
      gl_FragColor = vec4(uColor * (1.0 + dashed * 0.6), alpha);
    }
  `;

  const waveFrag = /* glsl */`
    uniform float uTime;
    varying vec2 vUv;

    float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
    float noise(vec2 p) {
      vec2 i = floor(p), f = fract(p);
      vec2 u = f*f*(3.0-2.0*f);
      return mix(mix(hash(i), hash(i+vec2(1,0)), u.x),
                 mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), u.x), u.y);
    }

    void main() {
      vec2 uv = vUv * 2.0 - 1.0;
      float d = length(uv);
      float ring1 = sin(d * 20.0 - uTime * 1.4) * 0.5 + 0.5;
      float ring2 = sin(d * 32.0 - uTime * 0.9 + 1.57) * 0.5 + 0.5;
      float rings = pow(ring1, 4.5) * pow(1.0 - d, 2.2) * 0.28
                  + pow(ring2, 5.5) * pow(1.0 - d, 3.0) * 0.14;
      float n1 = noise(uv * 3.5 + uTime * 0.09);
      float n2 = noise(uv * 7.0 - uTime * 0.06);
      float nebula = (n1 * 0.55 + n2 * 0.45) * pow(1.0 - d, 1.4) * 0.18;
      float stars = step(0.984, noise(vUv * 140.0)) * 0.5;
      float stars2 = step(0.990, noise(vUv * 80.0 + 7.3)) * 0.35;
      vec3 col1 = vec3(0.08, 0.01, 0.22);
      vec3 col2 = vec3(0.0, 0.12, 0.30);
      vec3 col = mix(col1, col2, n1);
      col += vec3(0.35, 0.72, 1.0) * rings;
      col += vec3(0.7, 0.9, 1.0) * stars;
      col += vec3(0.8, 0.5, 1.0) * stars2;
      col += vec3(0.15, 0.03, 0.45) * nebula;
      float alpha = clamp(rings * 1.2 + nebula * 0.6 + stars + stars2, 0.0, 1.0);
      gl_FragColor = vec4(col, alpha * 0.9);
    }
  `;

  /* ─────────────────────────────────────────────────────────────────
     SPRING PHYSICS
  ───────────────────────────────────────────────────────────────── */
  function makeSpring(value, stiffness = 180, damping = 22) {
    return { value, velocity: 0, target: value, stiffness, damping };
  }
  function tickSpring(spring, dt) {
    const force = (spring.target - spring.value) * spring.stiffness;
    spring.velocity += force * dt;
    spring.velocity *= Math.max(0, 1 - spring.damping * dt);
    spring.value += spring.velocity * dt;
    return spring.value;
  }
  function lerpClamped(a, b, t) {
    return a + (b - a) * Math.min(Math.max(t, 0), 1);
  }

  /* ═════════════════════════════════════════════════════════════════
     HOLOGRAPHIC VISUAL RENDERER — unique per tech category
  ═════════════════════════════════════════════════════════════════ */
  let holoRAF = null;
  let holoTime = 0;
  let holoCursorX = 0.5;
  let holoCursorY = 0.5;
  let currentHoloType = '';

  function startHoloCanvas(tech, accentHex, accentRgb) {
    const canvas = document.getElementById('tr-holo-canvas');
    const glowEl = document.getElementById('tr-holo-glow');
    const labelEl = document.getElementById('tr-holo-label');
    if (!canvas) return;

    if (holoRAF) cancelAnimationFrame(holoRAF);
    currentHoloType = tech.holoType;

    const W = canvas.width  = canvas.offsetWidth  || 400;
    const H = canvas.height = canvas.offsetHeight || 185;
    const ctx = canvas.getContext('2d');
    holoTime = 0;

    // Update glow color
    if (glowEl) glowEl.style.background = `radial-gradient(circle at 50% 50%, rgba(${accentRgb},0.18) 0%, transparent 70%)`;
    if (labelEl) {
      const labelText = tech.holoLabel || tech.holoType || 'Holographic Model';
      labelEl.textContent = labelText.toUpperCase() + ' SYSTEM';
    }

    const rgb = hexToRgb(accentHex.length === 7 ? accentHex : '#61dafb');
    const R = rgb.r, G = rgb.g, B = rgb.b;
    const cx = W/2, cy = H/2;

    function draw() {
      holoRAF = requestAnimationFrame(draw);
      holoTime += 0.016;
      ctx.clearRect(0, 0, W, H);
      const t = holoTime;
      const mx = holoCursorX * W, my = holoCursorY * H;
      const type = currentHoloType;

      if (type === 'atom') {
        // React atom — orbiting rings
        ctx.save();
        const numRings = 3;
        for (let r = 0; r < numRings; r++) {
          const angle = (r / numRings) * Math.PI + t * 0.4;
          const a = Math.cos(angle), b = Math.sin(angle);
          const rx = 80, ry = 28;
          ctx.save();
          ctx.translate(cx, cy);
          ctx.rotate(angle);
          ctx.beginPath();
          ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
          const alpha = 0.4 + 0.3 * Math.sin(t * 1.5 + r * 2.1);
          ctx.strokeStyle = `rgba(${R},${G},${B},${alpha})`;
          ctx.lineWidth = 1.5;
          ctx.shadowBlur = 10;
          ctx.shadowColor = accentHex;
          ctx.stroke();
          // electron
          const ex = Math.cos(t * 2 + r * 2.1) * rx;
          const ey = Math.sin(t * 2 + r * 2.1) * ry;
          ctx.beginPath();
          ctx.arc(ex, ey, 4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${R},${G},${B},0.9)`;
          ctx.shadowBlur = 16;
          ctx.fill();
          ctx.restore();
        }
        // core
        ctx.beginPath();
        ctx.arc(cx, cy, 10 + Math.sin(t*2)*2, 0, Math.PI * 2);
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 12);
        grad.addColorStop(0, `rgba(255,255,255,0.9)`);
        grad.addColorStop(1, `rgba(${R},${G},${B},0.4)`);
        ctx.fillStyle = grad;
        ctx.shadowBlur = 30;
        ctx.shadowColor = accentHex;
        ctx.fill();
        ctx.restore();

      } else if (type === 'prism' || type === 'grid') {
        // Wireframe rotating polygon / 3D grid
        ctx.save();
        ctx.translate(cx + (mx - cx) * 0.04, cy + (my - cy) * 0.04);
        const sides = type === 'prism' ? 6 : 4;
        const R3D = 55;
        for (let layer = -1; layer <= 1; layer++) {
          const z = layer * 30;
          const scale = 1 - z * 0.004;
          const vy = layer * 20 * Math.cos(t * 0.3);
          for (let i = 0; i < sides; i++) {
            const a1 = (i / sides) * Math.PI * 2 + t * 0.5;
            const a2 = ((i + 1) / sides) * Math.PI * 2 + t * 0.5;
            const x1 = Math.cos(a1) * R3D * scale, y1 = Math.sin(a1) * R3D * scale + vy;
            const x2 = Math.cos(a2) * R3D * scale, y2 = Math.sin(a2) * R3D * scale + vy;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = `rgba(${R},${G},${B},${0.5 + layer * 0.1})`;
            ctx.lineWidth = 1.5;
            ctx.shadowBlur = 8;
            ctx.shadowColor = accentHex;
            ctx.stroke();
            if (layer < 1) {
              const nx1 = Math.cos(a1) * R3D * (1 + (layer+1)*0.04), ny1 = Math.sin(a1) * R3D * (1 + (layer+1)*0.04);
              ctx.beginPath();
              ctx.moveTo(x1, y1);
              ctx.lineTo(nx1, ny1 + 20);
              ctx.strokeStyle = `rgba(${R},${G},${B},0.2)`;
              ctx.stroke();
            }
          }
        }
        ctx.restore();

      } else if (type === 'ribbon' || type === 'wave') {
        // Animated sine wave ribbons
        for (let band = 0; band < 4; band++) {
          ctx.beginPath();
          const offsetY = cy + (band - 1.5) * 22;
          const phase = t * (0.8 + band * 0.3) + band * 0.8;
          const amp = 18 + band * 8;
          for (let x = 0; x <= W; x += 2) {
            const y = offsetY + Math.sin((x / W) * Math.PI * 4 + phase) * amp
                    + Math.sin((x / W) * Math.PI * 7 + phase * 0.6) * amp * 0.3;
            x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
          }
          const alpha = 0.2 + 0.5 * Math.sin(t + band);
          ctx.strokeStyle = `rgba(${R},${G},${B},${alpha})`;
          ctx.lineWidth = 2;
          ctx.shadowBlur = 10;
          ctx.shadowColor = accentHex;
          ctx.stroke();
        }

      } else if (type === 'lightning') {
        // Vite-style lightning bolt
        ctx.save();
        ctx.translate(cx, cy);
        const scale = 0.9 + 0.06 * Math.sin(t * 3);
        ctx.scale(scale, scale);
        ctx.beginPath();
        ctx.moveTo(15, -50);
        ctx.lineTo(-5, -2);
        ctx.lineTo(8, -2);
        ctx.lineTo(-15, 50);
        ctx.lineTo(5, 5);
        ctx.lineTo(-8, 5);
        ctx.closePath();
        const grad = ctx.createLinearGradient(0, -50, 0, 50);
        grad.addColorStop(0, `rgba(${R},${G},${B},0.9)`);
        grad.addColorStop(1, `rgba(${R},${G},${B},0.2)`);
        ctx.fillStyle = grad;
        ctx.shadowBlur = 30;
        ctx.shadowColor = accentHex;
        ctx.fill();
        ctx.restore();

      } else if (type === 'serpent') {
        // Python serpent energy coils
        for (let i = 0; i < 3; i++) {
          ctx.beginPath();
          const phase = t * 1.2 + i * 2.1;
          for (let x = 0; x <= W; x += 3) {
            const normX = x / W;
            const y = cy + Math.sin(normX * Math.PI * 3 + phase) * (30 + i * 8)
                    + Math.cos(normX * Math.PI * 5 - phase * 0.7) * 12;
            x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
          }
          ctx.strokeStyle = `rgba(${R},${G},${B},${0.35 + i * 0.15})`;
          ctx.lineWidth = 3 - i * 0.5;
          ctx.shadowBlur = 15;
          ctx.shadowColor = accentHex;
          ctx.stroke();
        }
        // glowing head
        const headX = cx + Math.cos(t * 0.5) * 40;
        const headY = cy + Math.sin(t * 0.5) * 25;
        const headGrad = ctx.createRadialGradient(headX, headY, 0, headX, headY, 16);
        headGrad.addColorStop(0, `rgba(255,255,255,0.9)`);
        headGrad.addColorStop(1, `rgba(${R},${G},${B},0)`);
        ctx.beginPath();
        ctx.arc(headX, headY, 8, 0, Math.PI * 2);
        ctx.fillStyle = headGrad;
        ctx.fill();

      } else if (type === 'tensor') {
        // TensorFlow tensor crystal grid
        ctx.save();
        const gSize = 5;
        const spacing = 24;
        const startX = cx - (gSize - 1) * spacing / 2;
        const startY = cy - (gSize - 1) * spacing / 2;
        for (let r = 0; r < gSize; r++) {
          for (let c = 0; c < gSize; c++) {
            const px = startX + c * spacing;
            const py = startY + r * spacing;
            const phase = t * 2 + (r + c) * 0.5;
            const pulse = 0.5 + 0.5 * Math.sin(phase);
            const size = 3 + pulse * 3;
            ctx.beginPath();
            ctx.arc(px, py, size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${R},${G},${B},${0.3 + pulse * 0.5})`;
            ctx.shadowBlur = 10 * pulse;
            ctx.shadowColor = accentHex;
            ctx.fill();
            if (c < gSize - 1) {
              ctx.beginPath();
              ctx.moveTo(px, py);
              ctx.lineTo(px + spacing, py);
              ctx.strokeStyle = `rgba(${R},${G},${B},${0.15 + pulse * 0.15})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
            if (r < gSize - 1) {
              ctx.beginPath();
              ctx.moveTo(px, py);
              ctx.lineTo(px, py + spacing);
              ctx.strokeStyle = `rgba(${R},${G},${B},${0.15 + pulse * 0.15})`;
              ctx.stroke();
            }
          }
        }
        ctx.restore();

      } else if (type === 'flame') {
        // PyTorch flame
        ctx.save();
        ctx.translate(cx, cy + 20);
        for (let layer = 0; layer < 5; layer++) {
          const flameH = 60 + layer * 10;
          const flameW = 30 - layer * 4;
          const flameY = -layer * 12 + Math.sin(t * 2 + layer) * 5;
          const alpha = 0.7 - layer * 0.12;
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.bezierCurveTo(-flameW, -flameH * 0.4, -flameW * 0.8, -flameH * 0.8, 0, -flameH + flameY);
          ctx.bezierCurveTo(flameW * 0.8, -flameH * 0.8, flameW, -flameH * 0.4, 0, 0);
          const grad = ctx.createLinearGradient(0, 0, 0, -flameH);
          grad.addColorStop(0, `rgba(${R},${G},${B},${alpha})`);
          grad.addColorStop(1, 'rgba(255,255,200,0.8)');
          ctx.fillStyle = grad;
          ctx.shadowBlur = 20;
          ctx.shadowColor = accentHex;
          ctx.fill();
        }
        ctx.restore();

      } else if (type === 'eye') {
        // OpenCV eye / detection
        ctx.save();
        ctx.translate(cx, cy);
        // Eye outline
        ctx.beginPath();
        ctx.ellipse(0, 0, 70, 35, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${R},${G},${B},0.6)`;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 12;
        ctx.shadowColor = accentHex;
        ctx.stroke();
        // Iris
        const irisR = 20 + Math.sin(t) * 2;
        ctx.beginPath();
        ctx.arc(0, 0, irisR, 0, Math.PI * 2);
        const irisGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, irisR);
        irisGrad.addColorStop(0, 'rgba(255,255,255,0.8)');
        irisGrad.addColorStop(0.4, `rgba(${R},${G},${B},0.8)`);
        irisGrad.addColorStop(1, `rgba(${R},${G},${B},0.2)`);
        ctx.fillStyle = irisGrad;
        ctx.fill();
        // Scan lines
        for (let l = -3; l <= 3; l++) {
          const lY = l * 10 + Math.sin(t * 2) * 3;
          ctx.beginPath();
          ctx.moveTo(-70, lY);
          ctx.lineTo(70, lY);
          ctx.strokeStyle = `rgba(${R},${G},${B},0.1)`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
        // Detection box (corner brackets)
        const bSize = 90;
        const bLen = 16;
        [[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([sx,sy]) => {
          const bx = sx * bSize/2, by = sy * bSize/2;
          ctx.beginPath();
          ctx.moveTo(bx - sx * bLen, by);
          ctx.lineTo(bx, by);
          ctx.lineTo(bx, by - sy * bLen);
          ctx.strokeStyle = `rgba(${R},${G},${B},0.8)`;
          ctx.lineWidth = 2;
          ctx.stroke();
        });
        ctx.restore();

      } else if (type === 'chain') {
        // LangChain connected chain links
        ctx.save();
        ctx.translate(cx, cy);
        const numLinks = 4;
        const linkW = 30, linkH = 16, gap = 8;
        const totalW = numLinks * (linkW + gap) - gap;
        const startX = -totalW / 2;
        for (let i = 0; i < numLinks; i++) {
          const lx = startX + i * (linkW + gap);
          const pulse = 0.5 + 0.5 * Math.sin(t * 2 + i * 0.8);
          ctx.beginPath();
          ctx.ellipse(lx + linkW/2, 0, linkW/2, linkH/2, 0, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${R},${G},${B},${0.4 + pulse * 0.5})`;
          ctx.lineWidth = 3;
          ctx.shadowBlur = 12 * pulse;
          ctx.shadowColor = accentHex;
          ctx.stroke();
          // energy flow on chain
          if (i < numLinks - 1) {
            const progress = (t * 0.6 + i * 0.25) % 1;
            const ex = lx + linkW + gap * progress;
            ctx.beginPath();
            ctx.arc(ex, 0, 3, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${R},${G},${B},0.9)`;
            ctx.shadowBlur = 14;
            ctx.fill();
          }
        }
        ctx.restore();

      } else if (type === 'llama') {
        // LlamaIndex polygonal star
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(t * 0.3);
        const points = 7;
        const outerR = 60, innerR = 28;
        ctx.beginPath();
        for (let i = 0; i < points * 2; i++) {
          const r = i % 2 === 0 ? outerR : innerR;
          const a = (i / (points * 2)) * Math.PI * 2 - Math.PI / 2;
          i === 0 ? ctx.moveTo(Math.cos(a) * r, Math.sin(a) * r)
                  : ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
        }
        ctx.closePath();
        const starGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, outerR);
        starGrad.addColorStop(0, `rgba(${R},${G},${B},0.5)`);
        starGrad.addColorStop(1, `rgba(${R},${G},${B},0.05)`);
        ctx.fillStyle = starGrad;
        ctx.strokeStyle = `rgba(${R},${G},${B},0.8)`;
        ctx.lineWidth = 1.5;
        ctx.shadowBlur = 20;
        ctx.shadowColor = accentHex;
        ctx.fill();
        ctx.stroke();
        ctx.restore();

      } else if (type === 'vector') {
        // Pinecone vector space dots
        ctx.save();
        const dotCount = 40;
        for (let i = 0; i < dotCount; i++) {
          const seed = i * 137.5 * Math.PI / 180;
          const r = 20 + (i / dotCount) * 65;
          const angle = seed + t * 0.2;
          const px = cx + Math.cos(angle) * r;
          const py = cy + Math.sin(angle) * r;
          const pulse = 0.4 + 0.6 * Math.sin(t * 3 + i * 0.4);
          ctx.beginPath();
          ctx.arc(px, py, 2 + pulse * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${R},${G},${B},${0.3 + pulse * 0.5})`;
          ctx.shadowBlur = 8 * pulse;
          ctx.shadowColor = accentHex;
          ctx.fill();
          // connection to center
          if (r < 50) {
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(px, py);
            ctx.strokeStyle = `rgba(${R},${G},${B},0.1)`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
        // center
        ctx.beginPath();
        ctx.arc(cx, cy, 8, 0, Math.PI * 2);
        const cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, 8);
        cg.addColorStop(0, 'rgba(255,255,255,0.9)');
        cg.addColorStop(1, `rgba(${R},${G},${B},0)`);
        ctx.fillStyle = cg;
        ctx.fill();
        ctx.restore();

      } else if (type === 'brain') {
        // OpenAI neural brain pulsations
        ctx.save();
        ctx.translate(cx, cy);
        const numRings = 5;
        for (let r = 0; r < numRings; r++) {
          const ringR = (r + 1) * 15;
          const phase = t * 1.5 - r * 0.4;
          const alpha = (0.6 - r * 0.1) * (0.5 + 0.5 * Math.sin(phase));
          ctx.beginPath();
          ctx.arc(0, 0, ringR, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${R},${G},${B},${alpha})`;
          ctx.lineWidth = r === 0 ? 2 : 1;
          ctx.shadowBlur = 14 - r * 2;
          ctx.shadowColor = accentHex;
          ctx.stroke();
        }
        // neural paths
        for (let i = 0; i < 8; i++) {
          const a = (i / 8) * Math.PI * 2 + t * 0.15;
          const len = 40 + Math.sin(t * 2 + i) * 15;
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(Math.cos(a) * len, Math.sin(a) * len);
          ctx.strokeStyle = `rgba(${R},${G},${B},0.25)`;
          ctx.lineWidth = 1;
          ctx.stroke();
          // synapse
          const sx = Math.cos(a) * len, sy = Math.sin(a) * len;
          const sp = 0.5 + 0.5 * Math.sin(t * 3 + i);
          ctx.beginPath();
          ctx.arc(sx, sy, 3 + sp * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${R},${G},${B},${0.4 + sp * 0.5})`;
          ctx.fill();
        }
        ctx.restore();

      } else if (type === 'server') {
        // FastAPI server monolith
        ctx.save();
        ctx.translate(cx, cy - 20);
        const racks = 4;
        for (let r = 0; r < racks; r++) {
          const ry = r * 22 - 30;
          const pulse = 0.5 + 0.5 * Math.sin(t * 2 + r * 0.7);
          // rack body
          ctx.fillStyle = `rgba(${R},${G},${B},0.08)`;
          ctx.strokeStyle = `rgba(${R},${G},${B},${0.3 + pulse * 0.3})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.roundRect(-55, ry, 110, 16, 3);
          ctx.fill();
          ctx.stroke();
          // activity light
          ctx.beginPath();
          ctx.arc(-45, ry + 8, 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${R},${G},${B},${0.6 + pulse * 0.4})`;
          ctx.shadowBlur = 8 * pulse;
          ctx.shadowColor = accentHex;
          ctx.fill();
          // data bars
          for (let b = 0; b < 5; b++) {
            const barH = (4 + b * 2) * pulse;
            ctx.beginPath();
            ctx.roundRect(-30 + b * 16, ry + 8 - barH/2, 8, barH, 1);
            ctx.fillStyle = `rgba(${R},${G},${B},${0.2 + pulse * 0.4})`;
            ctx.fill();
          }
        }
        ctx.restore();

      } else if (type === 'node') {
        // Node.js node network
        ctx.save();
        const nodes = [
          {x:0, y:0}, {x:-50, y:-30}, {x:50, y:-30},
          {x:-50, y:30}, {x:50, y:30}, {x:0, y:-60}, {x:0, y:60}
        ];
        nodes.forEach((n, i) => {
          n.ox = cx + n.x;
          n.oy = cy + n.y;
          // connections
          nodes.forEach((m, j) => {
            if (j <= i) return;
            const dist = Math.sqrt((n.x-m.x)**2 + (n.y-m.y)**2);
            if (dist < 80) {
              const flow = (t * 0.5 + i * 0.3) % 1;
              ctx.beginPath();
              ctx.moveTo(n.ox, n.oy);
              ctx.lineTo(cx + m.x, cy + m.y);
              ctx.strokeStyle = `rgba(${R},${G},${B},0.15)`;
              ctx.lineWidth = 1;
              ctx.stroke();
              // flowing dot
              ctx.beginPath();
              ctx.arc(n.ox + (cx + m.x - n.ox) * flow, n.oy + (cy + m.y - n.oy) * flow, 2.5, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(${R},${G},${B},0.7)`;
              ctx.fill();
            }
          });
          // node dot
          const pulse = 0.5 + 0.5 * Math.sin(t * 2 + i * 0.8);
          ctx.beginPath();
          ctx.arc(n.ox, n.oy, 5 + pulse * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${R},${G},${B},${0.4 + pulse * 0.5})`;
          ctx.shadowBlur = 12 * pulse;
          ctx.shadowColor = accentHex;
          ctx.fill();
        });
        ctx.restore();

      } else if (type === 'cylinders') {
        // PostgreSQL stacked cylinders
        ctx.save();
        const numDiscs = 5;
        const discH = 10;
        const discRX = 55, discRY = 12;
        for (let d = numDiscs - 1; d >= 0; d--) {
          const dy = cy - 25 + d * discH * 2.2;
          const pulse = 0.5 + 0.5 * Math.sin(t * 1.5 + d * 0.5);
          // cylinder body
          ctx.beginPath();
          ctx.moveTo(cx - discRX, dy);
          ctx.lineTo(cx - discRX, dy + discH);
          ctx.ellipse(cx, dy + discH, discRX, discRY, 0, Math.PI, 0);
          ctx.lineTo(cx + discRX, dy);
          ctx.ellipse(cx, dy, discRX, discRY, 0, 0, Math.PI, true);
          ctx.closePath();
          ctx.fillStyle = `rgba(${R},${G},${B},${0.06 + pulse * 0.06})`;
          ctx.fill();
          ctx.strokeStyle = `rgba(${R},${G},${B},${0.4 + pulse * 0.3})`;
          ctx.lineWidth = 1;
          ctx.stroke();
          // top ellipse
          ctx.beginPath();
          ctx.ellipse(cx, dy, discRX, discRY, 0, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${R},${G},${B},${0.6 + pulse * 0.4})`;
          ctx.stroke();
        }
        ctx.restore();

      } else if (type === 'vault') {
        // MongoDB rotating sphere vault
        ctx.save();
        ctx.translate(cx, cy);
        const sphereR = 50;
        ctx.beginPath();
        ctx.arc(0, 0, sphereR, 0, Math.PI * 2);
        const sGrad = ctx.createRadialGradient(-10, -10, 0, 0, 0, sphereR);
        sGrad.addColorStop(0, `rgba(${R},${G},${B},0.2)`);
        sGrad.addColorStop(1, `rgba(${R},${G},${B},0.02)`);
        ctx.fillStyle = sGrad;
        ctx.fill();
        // latitude rings
        for (let la = -3; la <= 3; la++) {
          const ry2 = la * (sphereR / 3.5);
          const rx2 = Math.sqrt(Math.max(0, sphereR * sphereR - ry2 * ry2));
          ctx.beginPath();
          ctx.ellipse(0, ry2, rx2, rx2 * 0.25 * Math.abs(Math.cos(la * 0.8)), 0, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${R},${G},${B},${0.2 + 0.2 * Math.sin(t * 1.5 + la)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
        // longitude arcs rotating
        for (let lo = 0; lo < 4; lo++) {
          const angle = (lo / 4) * Math.PI + t * 0.4;
          ctx.save();
          ctx.rotate(angle);
          ctx.beginPath();
          ctx.ellipse(0, 0, 8, sphereR, 0, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${R},${G},${B},0.3)`;
          ctx.stroke();
          ctx.restore();
        }
        ctx.restore();

      } else if (type === 'bolt') {
        // Supabase lightning bolt / realtime flash
        ctx.save();
        ctx.translate(cx, cy);
        // bolt
        const bScale = 0.95 + 0.05 * Math.sin(t * 4);
        ctx.scale(bScale, bScale);
        ctx.beginPath();
        ctx.moveTo(18, -55);
        ctx.lineTo(-6, -2);
        ctx.lineTo(10, -2);
        ctx.lineTo(-18, 55);
        ctx.lineTo(6, 3);
        ctx.lineTo(-10, 3);
        ctx.closePath();
        const bGrad = ctx.createLinearGradient(0, -55, 0, 55);
        bGrad.addColorStop(0, `rgba(${R},${G},${B},0.95)`);
        bGrad.addColorStop(1, `rgba(${R},${G},${B},0.3)`);
        ctx.fillStyle = bGrad;
        ctx.shadowBlur = 25 + 10 * Math.sin(t * 3);
        ctx.shadowColor = accentHex;
        ctx.fill();
        // concentric pulse rings
        for (let r = 0; r < 3; r++) {
          const rr = (20 + r * 25) * (0.6 + 0.4 * Math.sin(t * 2 - r * 0.6));
          ctx.beginPath();
          ctx.arc(0, 0, rr, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${R},${G},${B},${0.15 - r * 0.04})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
        ctx.restore();

      } else if (type === 'rings') {
        // Redis concentric data rings
        ctx.save();
        ctx.translate(cx, cy);
        const numR = 5;
        for (let r = 0; r < numR; r++) {
          ctx.save();
          ctx.rotate(t * (r % 2 === 0 ? 1 : -1) * (0.3 + r * 0.1));
          const rr = 18 + r * 14;
          ctx.beginPath();
          ctx.arc(0, 0, rr, 0, Math.PI * (1.4 + r * 0.12));
          ctx.strokeStyle = `rgba(${R},${G},${B},${0.7 - r * 0.1})`;
          ctx.lineWidth = 2 - r * 0.2;
          ctx.shadowBlur = 8;
          ctx.shadowColor = accentHex;
          ctx.stroke();
          ctx.restore();
        }
        // pulsing center
        ctx.beginPath();
        ctx.arc(0, 0, 8 + Math.sin(t * 3) * 3, 0, Math.PI * 2);
        const cg2 = ctx.createRadialGradient(0, 0, 0, 0, 0, 11);
        cg2.addColorStop(0, 'rgba(255,255,255,0.9)');
        cg2.addColorStop(1, `rgba(${R},${G},${B},0)`);
        ctx.fillStyle = cg2;
        ctx.fill();
        ctx.restore();

      } else if (type === 'graph') {
        // pgvector graph nodes
        ctx.save();
        const gNodes = 9;
        const gPositions = Array.from({length: gNodes}, (_, i) => {
          const a = (i / gNodes) * Math.PI * 2;
          const r = 40 + (i % 3) * 20;
          return {x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r};
        });
        // edges
        gPositions.forEach((n, i) => {
          gPositions.forEach((m, j) => {
            if (j <= i || Math.random() > 0.5) return;
            const d = Math.sqrt((n.x-m.x)**2 + (n.y-m.y)**2);
            if (d > 100) return;
            const flow = (t * 0.4 + i * 0.15) % 1;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.strokeStyle = `rgba(${R},${G},${B},0.15)`;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(n.x + (m.x - n.x) * flow, n.y + (m.y - n.y) * flow, 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${R},${G},${B},0.8)`;
            ctx.fill();
          });
        });
        gPositions.forEach((n, i) => {
          const p = 0.5 + 0.5 * Math.sin(t * 2 + i * 0.7);
          ctx.beginPath();
          ctx.arc(n.x, n.y, 5 + p * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${R},${G},${B},${0.5 + p * 0.4})`;
          ctx.shadowBlur = 10 * p;
          ctx.shadowColor = accentHex;
          ctx.fill();
        });
        ctx.restore();

      } else if (type === 'containers') {
        // Docker containers stacked
        ctx.save();
        ctx.translate(cx - 45, cy - 40);
        const cols = 2, rows = 3;
        const cW = 48, cH = 32, gap = 6;
        let ci = 0;
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const px = c * (cW + gap);
            const py = r * (cH + gap);
            const pulse = 0.5 + 0.5 * Math.sin(t * 1.5 + ci * 0.6);
            ctx.beginPath();
            ctx.roundRect(px, py, cW, cH, 4);
            ctx.fillStyle = `rgba(${R},${G},${B},${0.06 + pulse * 0.06})`;
            ctx.fill();
            ctx.strokeStyle = `rgba(${R},${G},${B},${0.4 + pulse * 0.4})`;
            ctx.lineWidth = 1.5;
            ctx.stroke();
            // status dot
            ctx.beginPath();
            ctx.arc(px + 8, py + 8, 3, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${R},${G},${B},${0.7 + pulse * 0.3})`;
            ctx.shadowBlur = 6 * pulse;
            ctx.shadowColor = accentHex;
            ctx.fill();
            ci++;
          }
        }
        ctx.restore();

      } else if (type === 'cloud') {
        // AWS cloud shape
        ctx.save();
        ctx.translate(cx, cy);
        const cloudScale = 0.9 + 0.05 * Math.sin(t);
        ctx.scale(cloudScale, cloudScale);
        // Cloud body (simplified bezier cloud)
        ctx.beginPath();
        ctx.arc(-30, 0, 28, Math.PI * 0.4, Math.PI * 1.6);
        ctx.arc(0, -15, 22, Math.PI * 1.1, Math.PI * 0.1);
        ctx.arc(30, 5, 22, Math.PI * 1.4, 0);
        ctx.arc(15, 20, 20, 0, Math.PI);
        ctx.arc(-15, 20, 20, 0, Math.PI);
        ctx.closePath();
        ctx.fillStyle = `rgba(${R},${G},${B},0.12)`;
        ctx.fill();
        ctx.strokeStyle = `rgba(${R},${G},${B},0.5)`;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 14;
        ctx.shadowColor = accentHex;
        ctx.stroke();
        // data streams falling
        for (let d = 0; d < 4; d++) {
          const dx = -30 + d * 20;
          const dy = 20 + ((t * 50 + d * 30) % 40);
          ctx.beginPath();
          ctx.arc(dx, dy, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${R},${G},${B},0.7)`;
          ctx.fill();
        }
        ctx.restore();

      } else if (type === 'edge') {
        // Vercel edge topology — triangular
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(t * 0.2);
        const pts = [];
        for (let i = 0; i < 3; i++) {
          const a = (i / 3) * Math.PI * 2 - Math.PI / 2;
          pts.push({ x: Math.cos(a) * 55, y: Math.sin(a) * 55 });
        }
        ctx.beginPath();
        pts.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
        ctx.closePath();
        ctx.strokeStyle = `rgba(${R},${G},${B},0.5)`;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 12;
        ctx.shadowColor = accentHex;
        ctx.stroke();
        pts.forEach((p, i) => {
          const pulse = 0.5 + 0.5 * Math.sin(t * 2 + i * 2.1);
          ctx.beginPath();
          ctx.arc(p.x, p.y, 6 + pulse * 4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${R},${G},${B},${0.5 + pulse * 0.4})`;
          ctx.shadowBlur = 14 * pulse;
          ctx.fill();
          // edge to center
          const flow = (t * 0.7 + i * 0.33) % 1;
          ctx.beginPath();
          ctx.arc(p.x * (1 - flow), p.y * (1 - flow), 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${R},${G},${B},0.8)`;
          ctx.fill();
        });
        ctx.restore();

      } else if (type === 'branch') {
        // Git branch tree
        ctx.save();
        ctx.translate(cx, cy + 40);
        const branchColor = `rgba(${R},${G},${B}`;
        // main branch (vertical)
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -80);
        ctx.strokeStyle = `${branchColor},0.6)`;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 8;
        ctx.shadowColor = accentHex;
        ctx.stroke();
        // feature branches
        [[-35, -30], [35, -50]].forEach(([bx, by], bi) => {
          ctx.beginPath();
          ctx.moveTo(0, by + 15);
          ctx.bezierCurveTo(0, by, bx * 0.5, by - 5, bx, by);
          ctx.lineTo(bx, by - 20);
          ctx.strokeStyle = `${branchColor},${0.4 + bi * 0.15})`;
          ctx.stroke();
          // commits
          [0, -15, -30].forEach((cy2, ci) => {
            const px2 = ci === 0 ? 0 : (ci < 3 ? 0 : bx);
            const py2 = ci === 0 ? by + 15 : by + cy2;
            ctx.beginPath();
            ctx.arc(ci < 2 ? 0 : bx, by - ci * 15, 5, 0, Math.PI * 2);
            const pulse = 0.5 + 0.5 * Math.sin(t * 2 + ci * 0.7 + bi);
            ctx.fillStyle = `${branchColor},${0.5 + pulse * 0.4})`;
            ctx.shadowBlur = 8 * pulse;
            ctx.fill();
          });
        });
        // commits on main
        for (let c = 0; c <= 5; c++) {
          const pulse = 0.5 + 0.5 * Math.sin(t * 2 + c * 0.5);
          ctx.beginPath();
          ctx.arc(0, -c * 16, 5, 0, Math.PI * 2);
          ctx.fillStyle = `${branchColor},${0.6 + pulse * 0.4})`;
          ctx.shadowBlur = 10 * pulse;
          ctx.fill();
        }
        ctx.restore();

      } else if (type === 'shader') {
        // WebGL/GLSL shader preview — rainbow gradient field
        for (let y = 0; y < H; y += 4) {
          for (let x = 0; x < W; x += 4) {
            const uv_x = x / W * 2 - 1, uv_y = y / H * 2 - 1;
            const d = Math.sqrt(uv_x * uv_x + uv_y * uv_y);
            const ring = Math.sin(d * 20 - t * 3) * 0.5 + 0.5;
            const hue = (t * 50 + d * 100 + uv_x * 60) % 360;
            const alpha = ring * 0.3;
            if (alpha > 0.05) {
              ctx.beginPath();
              ctx.fillStyle = `hsla(${hue}, 80%, 60%, ${alpha})`;
              ctx.fillRect(x, y, 4, 4);
            }
          }
        }

      } else if (type === 'charts') {
        // Chart.js - animated radar chart
        ctx.save();
        ctx.translate(cx, cy);
        const axes = 6;
        const maxR = 55;
        // grid lines
        for (let g = 1; g <= 4; g++) {
          const gr = (g / 4) * maxR;
          ctx.beginPath();
          for (let a = 0; a < axes; a++) {
            const angle = (a / axes) * Math.PI * 2 - Math.PI / 2;
            const px3 = Math.cos(angle) * gr, py3 = Math.sin(angle) * gr;
            a === 0 ? ctx.moveTo(px3, py3) : ctx.lineTo(px3, py3);
          }
          ctx.closePath();
          ctx.strokeStyle = `rgba(${R},${G},${B},0.1)`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
        // axes
        for (let a = 0; a < axes; a++) {
          const angle = (a / axes) * Math.PI * 2 - Math.PI / 2;
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(Math.cos(angle) * maxR, Math.sin(angle) * maxR);
          ctx.strokeStyle = `rgba(${R},${G},${B},0.15)`;
          ctx.stroke();
        }
        // data polygon
        const values = [0.85, 0.7, 0.9, 0.65, 0.8, 0.75].map((v, i) =>
          v + 0.1 * Math.sin(t * 1.5 + i * 1.0)
        );
        ctx.beginPath();
        values.forEach((v, i) => {
          const angle = (i / axes) * Math.PI * 2 - Math.PI / 2;
          const r = v * maxR;
          const px4 = Math.cos(angle) * r, py4 = Math.sin(angle) * r;
          i === 0 ? ctx.moveTo(px4, py4) : ctx.lineTo(px4, py4);
        });
        ctx.closePath();
        ctx.fillStyle = `rgba(${R},${G},${B},0.15)`;
        ctx.fill();
        ctx.strokeStyle = `rgba(${R},${G},${B},0.7)`;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 10;
        ctx.shadowColor = accentHex;
        ctx.stroke();
        ctx.restore();

      } else if (type === 'typed') {
        // TypeScript - type annotations flowing
        ctx.save();
        const lines = [
          'interface', 'type', 'string', 'number',
          'boolean', 'Promise<T>', 'Record<K,V>', 'async',
        ];
        lines.forEach((word, i) => {
          const x = (i % 3) * 110 + 30;
          const y = Math.floor(i / 3) * 36 + 40;
          const phase = t * 1.2 + i * 0.5;
          const alpha = 0.3 + 0.4 * Math.sin(phase);
          ctx.font = 'bold 13px "JetBrains Mono", monospace';
          ctx.fillStyle = `rgba(${R},${G},${B},${alpha})`;
          ctx.shadowBlur = 6;
          ctx.shadowColor = accentHex;
          ctx.fillText(word, x, y + 40);
        });
        ctx.restore();

      } else if (type === 'api') {
        // REST API - HTTP method badges
        ctx.save();
        const methods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];
        const colors = ['#22c55e', '#60a5fa', '#f59e0b', '#f87171', '#a78bfa'];
        methods.forEach((method, i) => {
          const mx2 = (i % 3) * 110 + 30;
          const my2 = Math.floor(i / 3) * 50 + 25;
          const pulse = 0.5 + 0.5 * Math.sin(t * 2 + i * 0.7);
          const col2 = colors[i];
          ctx.fillStyle = col2 + '22';
          ctx.strokeStyle = col2;
          ctx.lineWidth = 1.5;
          ctx.shadowBlur = 6 * pulse;
          ctx.shadowColor = col2;
          ctx.beginPath();
          ctx.roundRect(mx2, my2, 90, 28, 5);
          ctx.fill();
          ctx.stroke();
          ctx.font = 'bold 11px "JetBrains Mono", monospace';
          ctx.fillStyle = col2;
          ctx.shadowBlur = 0;
          ctx.fillText(method, mx2 + 12, my2 + 18);
        });
        ctx.restore();

      } else if (type === 'hub') {
        // HuggingFace hub - radiating nodes
        ctx.save();
        ctx.translate(cx, cy);
        const numSpokes = 8;
        for (let s = 0; s < numSpokes; s++) {
          const a = (s / numSpokes) * Math.PI * 2 + t * 0.3;
          const len = 45 + Math.sin(t * 2 + s) * 10;
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(Math.cos(a) * len, Math.sin(a) * len);
          ctx.strokeStyle = `rgba(${R},${G},${B},0.3)`;
          ctx.lineWidth = 1;
          ctx.stroke();
          const pulse = 0.5 + 0.5 * Math.sin(t * 2.5 + s * 0.8);
          ctx.beginPath();
          ctx.arc(Math.cos(a) * len, Math.sin(a) * len, 5 + pulse * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${R},${G},${B},${0.5 + pulse * 0.4})`;
          ctx.shadowBlur = 10 * pulse;
          ctx.shadowColor = accentHex;
          ctx.fill();
        }
        // center hub
        ctx.beginPath();
        ctx.arc(0, 0, 14, 0, Math.PI * 2);
        const hg = ctx.createRadialGradient(0, 0, 0, 0, 0, 14);
        hg.addColorStop(0, 'rgba(255,255,255,0.95)');
        hg.addColorStop(1, `rgba(${R},${G},${B},0.3)`);
        ctx.fillStyle = hg;
        ctx.fill();
        ctx.restore();

      } else if (type === 'forest') {
        // Scikit-learn random forest trees
        ctx.save();
        const trees = 4;
        for (let tree = 0; tree < trees; tree++) {
          const tx = 30 + tree * 90;
          const ty = H - 20;
          const pulse = 0.5 + 0.5 * Math.sin(t * 1.5 + tree * 0.8);
          // trunk
          ctx.fillStyle = `rgba(${R},${G},${B},0.4)`;
          ctx.fillRect(tx - 4, ty - 30, 8, 30);
          // layers
          for (let l = 0; l < 3; l++) {
            const lW = 30 - l * 6;
            const lH = 22 - l * 2;
            const lY = ty - 35 - l * 18;
            ctx.beginPath();
            ctx.moveTo(tx, lY - lH);
            ctx.lineTo(tx + lW, lY);
            ctx.lineTo(tx - lW, lY);
            ctx.closePath();
            ctx.fillStyle = `rgba(${R},${G},${B},${0.25 + pulse * 0.25 - l * 0.05})`;
            ctx.shadowBlur = 8 * pulse;
            ctx.shadowColor = accentHex;
            ctx.fill();
            ctx.strokeStyle = `rgba(${R},${G},${B},0.5)`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
        ctx.restore();

      } else {
        // Default — pulsing rings
        ctx.save();
        ctx.translate(cx, cy);
        for (let r = 0; r < 4; r++) {
          const rr = (r + 1) * 18;
          const pulse = 0.5 + 0.5 * Math.sin(t * 1.8 - r * 0.5);
          ctx.beginPath();
          ctx.arc(0, 0, rr, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${R},${G},${B},${0.6 - r * 0.1})`;
          ctx.lineWidth = 2 - r * 0.3;
          ctx.shadowBlur = 10 * pulse;
          ctx.shadowColor = accentHex;
          ctx.stroke();
        }
        ctx.restore();
      }
    }
    draw();
  }

  function stopHoloCanvas() {
    if (holoRAF) { cancelAnimationFrame(holoRAF); holoRAF = null; }
  }

  /* ─────────────────────────────────────────────────────────────────
     MAIN INIT
  ───────────────────────────────────────────────────────────────── */
  function initTechUniverse() {
    const section = document.getElementById('techstack');
    const canvas  = document.getElementById('techstack-canvas');
    if (!section || !canvas || !window.THREE) return;

    const isLowEnd = navigator.hardwareConcurrency <= 4 || /Mobile|Android/i.test(navigator.userAgent);
    const DPR      = Math.min(window.devicePixelRatio, isLowEnd ? 1 : 2);
    const PARTICLE_COUNT = isLowEnd ? 800 : 2500;

    /* ── Renderer ── */
    const renderer = new THREE.WebGLRenderer({
      canvas, antialias: !isLowEnd,
      alpha: true, powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(DPR);
    renderer.setClearColor(0x020408, 1);
    renderer.toneMapping    = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.4;

    /* ── Scene ── */
    const scene = new THREE.Scene();
    scene.fog   = new THREE.FogExp2(0x020408, 0.036);
    const ecosystem = new THREE.Group();
    scene.add(ecosystem);

    /* ── Camera ── */
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 300);
    camera.position.set(3, -1.5, 40);

    const camSpring = {
      x: makeSpring(3,   80, 16),
      y: makeSpring(-1.5, 80, 16),
      z: makeSpring(40,  60, 14),
    };
    const camLookAt = { x: makeSpring(1, 60, 14), y: makeSpring(-0.5, 60, 14), z: makeSpring(0) };

    const ecoRot = {
      x: makeSpring(0, 90, 18),
      y: makeSpring(0, 90, 18),
      z: makeSpring(0, 90, 18),
    };

    /* ── Postprocessing ── */
    let composer = null;
    let bloomPass = null;
    let bokehPass = null;
    if (THREE.EffectComposer && THREE.RenderPass && THREE.UnrealBloomPass) {
      try {
        composer = new THREE.EffectComposer(renderer);
        composer.addPass(new THREE.RenderPass(scene, camera));
        if (THREE.BokehPass && !isLowEnd) {
          bokehPass = new THREE.BokehPass(scene, camera, {
            focus: 22.0,
            aperture: 0.0006,
            maxblur: 0.008,
          });
          bokehPass.enabled = false;
          composer.addPass(bokehPass);
        }
        bloomPass = new THREE.UnrealBloomPass(
          new THREE.Vector2(window.innerWidth, window.innerHeight),
          isLowEnd ? 0.9 : 1.8, 0.42, 0.60
        );
        composer.addPass(bloomPass);
      } catch (e) { composer = null; }
    }

    /* ── Lights ── */
    scene.add(new THREE.AmbientLight(0x06041a, 4));
    const keyLight  = new THREE.PointLight(0x7c5cf4, 18, 90);
    keyLight.position.set(0, 12, 18); scene.add(keyLight);
    const fillLight = new THREE.PointLight(0x00d4ff, 8, 80);
    fillLight.position.set(-20, -8, 12); scene.add(fillLight);
    const rimLight  = new THREE.PointLight(0xff6b9d, 5, 60);
    rimLight.position.set(20, 8, -10); scene.add(rimLight);
    const backLight = new THREE.PointLight(0x10b981, 4, 70);
    backLight.position.set(0, -12, -16); scene.add(backLight);
    const cursorLight = new THREE.PointLight(0x00d4ff, 6, 35);
    scene.add(cursorLight);

    /* ── State ── */
    const clock    = new THREE.Clock();
    const mouse3D  = new THREE.Vector2(0.05, -0.05);
    const raycaster = new THREE.Raycaster();
    let hoveredIdx = -1;
    let selectedIdx = -1;
    let currentHoverIdx = -1;
    let animFrameId = null;
    let entryProgress = 0;

    const globalUniforms = { uTime: { value: 0 }, uPulse: { value: 1.0 } };
    const bloomStrengthSpring = makeSpring(isLowEnd ? 0.9 : 1.8, 120, 16);
    const bokehFocusSpring = makeSpring(22, 90, 14);
    const bokehApertureSpring = makeSpring(0.0006, 120, 18);
    const bokehBlurSpring = makeSpring(0.006, 120, 18);

    /* ── Background wave plane ── */
    const bgMat = new THREE.ShaderMaterial({
      vertexShader: sharedVert, fragmentShader: waveFrag,
      uniforms: { uTime: globalUniforms.uTime },
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    });
    const bgPlane = new THREE.Mesh(new THREE.PlaneGeometry(140, 80, 1, 1), bgMat);
    bgPlane.position.set(0, 0, -28); scene.add(bgPlane);

    /* ── Star field ── */
    [
      { count: isLowEnd ? 600 : 2000,  spread: 100, size: 0.05, opacity: 0.55, color: 0xffffff, z: -18 },
      { count: isLowEnd ? 300 : 800,   spread: 80,  size: 0.035, opacity: 0.35, color: 0xbbccff, z: -14 },
    ].forEach(cfg => {
      const pos = new Float32Array(cfg.count * 3);
      for (let i = 0; i < cfg.count; i++) {
        pos[i*3]   = (Math.random() - 0.5) * cfg.spread;
        pos[i*3+1] = (Math.random() - 0.5) * cfg.spread * 0.5;
        pos[i*3+2] = cfg.z - Math.random() * 12;
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      scene.add(new THREE.Points(geo, new THREE.PointsMaterial({
        color: cfg.color, size: cfg.size, transparent: true, opacity: cfg.opacity, sizeAttenuation: true,
      })));
    });

    /* ── Ambient dust layers ── */
    const dustLayers = [];
    [
      { count: PARTICLE_COUNT,             color: 0x3a1080, size: 0.055, opacity: 0.45, spread: 50, zBias: -2  },
      { count: Math.floor(PARTICLE_COUNT*.35), color: 0x001a44, size: 0.038, opacity: 0.28, spread: 38, zBias: -8  },
    ].forEach(cfg => {
      const pos = new Float32Array(cfg.count * 3);
      for (let i = 0; i < cfg.count; i++) {
        pos[i*3]   = (Math.random() - 0.5) * cfg.spread;
        pos[i*3+1] = (Math.random() - 0.5) * cfg.spread * 0.5;
        pos[i*3+2] = (Math.random() - 0.5) * cfg.spread * 0.35 + cfg.zBias;
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      const pts = new THREE.Points(geo, new THREE.PointsMaterial({
        color: cfg.color, size: cfg.size, transparent: true, opacity: cfg.opacity, sizeAttenuation: true,
      }));
      scene.add(pts);
      dustLayers.push({ pts, speed: 0.003 + Math.random() * 0.005 });
    });

    /* ── Neural web background ── */
    const neuralWebNodes = [];
    const nwCount = isLowEnd ? 8 : 16;
    for (let i = 0; i < nwCount; i++) {
      neuralWebNodes.push(new THREE.Vector3(
        (Math.random() - 0.5) * 60, (Math.random() - 0.5) * 30, -15 - Math.random() * 15
      ));
    }
    for (let a = 0; a < neuralWebNodes.length; a++) {
      for (let b = a + 1; b < neuralWebNodes.length; b++) {
        if (neuralWebNodes[a].distanceTo(neuralWebNodes[b]) < 26) {
          const mid = neuralWebNodes[a].clone().add(neuralWebNodes[b]).multiplyScalar(0.5);
          mid.y += (Math.random() - 0.5) * 8;
          const curve = new THREE.QuadraticBezierCurve3(neuralWebNodes[a], mid, neuralWebNodes[b]);
          const pts   = curve.getPoints(28);
          const geo   = new THREE.BufferGeometry().setFromPoints(pts);
          scene.add(new THREE.Line(geo, new THREE.LineBasicMaterial({
            color: Math.random() < 0.5 ? 0x3b82f6 : 0x7c5cf4,
            transparent: true, opacity: 0.04 + Math.random() * 0.05,
          })));
        }
      }
    }

    /* ═══════════════════════════════════════════
       TECH ENTITIES — one per tech in TECH_DATA
    ═══════════════════════════════════════════ */
    const entities  = [];
    const hitMeshes = [];

    TECH_DATA.forEach((tech, i) => {
      const pos      = SPATIAL_POSITIONS[i] || new THREE.Vector3(
        (Math.random() - 0.5) * 22, (Math.random() - 0.5) * 12, (Math.random() - 0.5) * 8
      );
      const cat      = tech.cat;
      const catColor = CAT_COLORS[cat] || CAT_COLORS['Backend'];
      const col      = new THREE.Color(tech.color);
      const depthScale = 1.0 + Math.max(0, (pos.z + 8) / 12) * 0.35;

      const uPulse    = { value: 1.0 };
      const uSelected = { value: 0.0 };
      const uniBlock  = {
        uTime: globalUniforms.uTime, uPulse, uSelected,
        uColor: { value: col.clone() },
      };

      let mesh;
      const baseSize = 0.85 * depthScale;

      if (cat === 'Frontend' || cat === 'Interactive UI') {
        const geo = new THREE.PlaneGeometry(baseSize * 2.0, baseSize * 1.25, 32, 20);
        const mat = new THREE.ShaderMaterial({
          vertexShader: entityVert, fragmentShader: holoFrag,
          uniforms: uniBlock,
          transparent: true, side: THREE.DoubleSide,
          depthWrite: false, blending: THREE.AdditiveBlending,
        });
        mesh = new THREE.Mesh(geo, mat);
        mesh.add(new THREE.LineSegments(
          new THREE.EdgesGeometry(new THREE.PlaneGeometry(baseSize * 2.05, baseSize * 1.3)),
          new THREE.LineBasicMaterial({ color: catColor.h, transparent: true, opacity: 0.5 })
        ));

      } else if (cat === 'AI / ML') {
        const geo = new THREE.IcosahedronGeometry(baseSize * 0.88, isLowEnd ? 1 : 2);
        const mat = new THREE.ShaderMaterial({
          vertexShader: entityVert, fragmentShader: neuralFrag,
          uniforms: uniBlock, transparent: true,
        });
        mesh = new THREE.Mesh(geo, mat);
        mesh.add(new THREE.LineSegments(
          new THREE.EdgesGeometry(geo),
          new THREE.LineBasicMaterial({ color: catColor.h, transparent: true, opacity: 0.4 })
        ));
        const rGeo = new THREE.TorusGeometry(baseSize * 1.5, 0.015, 6, 48);
        mesh.add(new THREE.Mesh(rGeo, new THREE.MeshBasicMaterial({ color: catColor.h, transparent: true, opacity: 0.2 })));

      } else if (cat === 'RAG Systems') {
        const geo = new THREE.SphereGeometry(baseSize * 0.85, 32, 16);
        const mat = new THREE.ShaderMaterial({
          vertexShader: entityVert, fragmentShader: vectorFrag,
          uniforms: uniBlock, transparent: true,
          depthWrite: false, blending: THREE.AdditiveBlending,
        });
        mesh = new THREE.Mesh(geo, mat);
        const swarmN = isLowEnd ? 50 : 90;
        const sPos = new Float32Array(swarmN * 3);
        for (let j = 0; j < swarmN; j++) {
          const a = Math.random() * Math.PI * 2;
          const r = baseSize * (0.95 + Math.random() * 0.7);
          const b = (Math.random() - 0.5) * Math.PI;
          sPos[j*3] = r * Math.cos(a) * Math.cos(b);
          sPos[j*3+1] = r * Math.sin(b);
          sPos[j*3+2] = r * Math.sin(a) * Math.cos(b);
        }
        const sGeo = new THREE.BufferGeometry();
        sGeo.setAttribute('position', new THREE.BufferAttribute(sPos, 3));
        mesh.add(new THREE.Points(sGeo, new THREE.PointsMaterial({
          color: catColor.h, size: 0.05, transparent: true, opacity: 0.7, sizeAttenuation: true,
        })));

      } else if (cat === 'Databases') {
        const grp = new THREE.Group();
        [0.5, 0.76, 1.02].forEach((r, ri) => {
          const tGeo = new THREE.TorusGeometry(r * depthScale, 0.04 * depthScale, 12, 72);
          const t2 = new THREE.Mesh(tGeo, new THREE.ShaderMaterial({
            vertexShader: entityVert, fragmentShader: dbFrag,
            uniforms: { ...uniBlock }, transparent: true, side: THREE.DoubleSide,
          }));
          if (ri === 1) t2.rotation.x = Math.PI / 3;
          if (ri === 2) { t2.rotation.x = Math.PI / 5; t2.rotation.y = Math.PI / 4; }
          grp.add(t2);
        });
        const cGeo = new THREE.CylinderGeometry(0.18 * depthScale, 0.22 * depthScale, 0.5 * depthScale, 12);
        grp.add(new THREE.Mesh(cGeo, new THREE.MeshBasicMaterial({ color: catColor.h, transparent: true, opacity: 0.7 })));
        mesh = grp;

      } else if (cat === 'Backend' || cat === 'Full Stack') {
        const geo = new THREE.BoxGeometry(baseSize * 1.4, baseSize * 1.8, baseSize * 0.35, 1, 1, 1);
        const mat = new THREE.ShaderMaterial({
          vertexShader: sharedVert, fragmentShader: backendFrag,
          uniforms: { ...uniBlock }, transparent: true, side: THREE.DoubleSide,
          depthWrite: false, blending: THREE.AdditiveBlending,
        });
        mesh = new THREE.Mesh(geo, mat);
        mesh.add(new THREE.LineSegments(
          new THREE.EdgesGeometry(geo),
          new THREE.LineBasicMaterial({ color: catColor.h, transparent: true, opacity: 0.5 })
        ));

      } else if (cat === '3D Web' || cat === 'Creative Dev') {
        // Dodecahedron for 3D/creative
        const geo = new THREE.DodecahedronGeometry(baseSize * 0.85, 0);
        const mat = new THREE.ShaderMaterial({
          vertexShader: entityVert, fragmentShader: holoFrag,
          uniforms: uniBlock, transparent: true, side: THREE.DoubleSide,
          blending: THREE.AdditiveBlending,
        });
        mesh = new THREE.Mesh(geo, mat);
        mesh.add(new THREE.LineSegments(
          new THREE.EdgesGeometry(geo),
          new THREE.LineBasicMaterial({ color: catColor.h, transparent: true, opacity: 0.6 })
        ));

      } else {
        // Cloud/DevOps — octahedron
        const geo = new THREE.OctahedronGeometry(baseSize * 0.9, isLowEnd ? 0 : 1);
        const mat = new THREE.ShaderMaterial({
          vertexShader: entityVert, fragmentShader: devopsFrag,
          uniforms: { ...uniBlock }, transparent: true, side: THREE.DoubleSide,
        });
        mesh = new THREE.Mesh(geo, mat);
        mesh.add(new THREE.LineSegments(
          new THREE.EdgesGeometry(new THREE.OctahedronGeometry(baseSize * 0.9, 0)),
          new THREE.LineBasicMaterial({ color: catColor.h, transparent: true, opacity: 0.55 })
        ));
      }

      mesh.position.copy(pos);
      const motion = tech.motion || {};
      const seed = {
        phase:  motion.phase  ?? (Math.random() * Math.PI * 2),
        bobSpeed: motion.bobSpeed ?? (0.28 + Math.random() * 0.3),
        bobAmp:   motion.bobAmp   ?? (0.10 + Math.random() * 0.12),
        rotSpeed: motion.rotSpeed ?? ((Math.random() - 0.5) * 0.22),
        phaseX:   motion.phaseX   ?? (Math.random() * Math.PI * 2),
        phaseZ:   motion.phaseZ   ?? (Math.random() * Math.PI * 2),
        wobble:   motion.wobble   ?? (0.25 + Math.random() * 0.3),
      };
      const scaleSpring = makeSpring(1, 200, 20);
      mesh.userData = { ...tech, index: i, restPos: pos.clone(), catColor, seed, uPulse, uSelected };
      ecosystem.add(mesh);

      const hitGeo  = new THREE.SphereGeometry(1.4 * depthScale, 6, 6);
      const hitMesh = new THREE.Mesh(hitGeo, new THREE.MeshBasicMaterial({ visible: false }));
      hitMesh.position.copy(pos);
      hitMesh.userData = { entityMesh: mesh, tech, catColor, index: i };
      ecosystem.add(hitMesh);
      hitMeshes.push(hitMesh);

      entities.push({
        mesh, hitMesh, tech, catColor, uPulse, uSelected,
        restPos: pos.clone(),
        vel: new THREE.Vector3(),
        scaleSpring, seed, depthScale,
        opacityTarget: 1,
      });
    });

    /* ── Connection streams ── */
    const streams = [];
    const CONNECTIONS = [
      [0,1],[0,3],[1,4],[0,2],[5,4],       // Frontend
      [6,7],[6,8],[6,9],[6,10],             // AI/ML
      [11,12],[11,14],[11,15],[12,14],[14,15], // RAG
      [16,19],[17,19],[18,19],              // Backend
      [19,20],[20,22],[21,23],              // DBs
      [24,25],[24,26],[27,24],              // DevOps
      [6,16],[6,11],[15,11],[16,20],        // Cross
      [0,29],[2,29],                        // 3D Web
    ];
    CONNECTIONS.forEach(([a, b]) => {
      if (a >= entities.length || b >= entities.length) return;
      const posA = entities[a].restPos, posB = entities[b].restPos;
      const mid  = posA.clone().add(posB).multiplyScalar(0.5);
      mid.y += (Math.random() - 0.5) * 5; mid.z += (Math.random() - 0.5) * 3;
      const curve   = new THREE.QuadraticBezierCurve3(posA, mid, posB);
      const tubeGeo = new THREE.TubeGeometry(curve, 28, 0.015, 4, false);
      const tubeMat = new THREE.ShaderMaterial({
        vertexShader: sharedVert, fragmentShader: streamFrag,
        uniforms: {
          uTime:    globalUniforms.uTime,
          uDash:    { value: Math.random() * Math.PI * 2 },
          uOpacity: { value: 0 },
          uColor:   { value: new THREE.Color(CAT_COLORS[entities[a].tech.cat]?.h || 0x7c5cf4) },
        },
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      });
      const tube = new THREE.Mesh(tubeGeo, tubeMat);
      tube.visible = false;
      tube.userData = { opacityTarget: 0, connected: [a, b] };
      ecosystem.add(tube);
      streams.push(tube);
    });

    /* ── Convergence particles ── */
    const CONV_N  = isLowEnd ? 60 : 130;
    const convPos = new Float32Array(CONV_N * 3);
    const convGeo = new THREE.BufferGeometry();
    convGeo.setAttribute('position', new THREE.BufferAttribute(convPos, 3));
    const convMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.07, transparent: true, opacity: 0, sizeAttenuation: true });
    const convPts = new THREE.Points(convGeo, convMat);
    ecosystem.add(convPts);
    const convData = Array.from({ length: CONV_N }, () => ({
      origin: new THREE.Vector3((Math.random()-.5)*28, (Math.random()-.5)*16, (Math.random()-.5)*10),
      target: new THREE.Vector3(), speed: 0.012 + Math.random() * 0.016, t: Math.random(),
    }));
    let convOpacitySpring = makeSpring(0, 120, 18);

    /* ── Focus ring + orbital particles ── */
    const focusGroup = new THREE.Group();
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xffffff, transparent: true, opacity: 0,
      blending: THREE.AdditiveBlending, depthWrite: false,
    });
    const ringMat2 = ringMat.clone();
    ringMat2.opacity = 0;
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.6, 0.03, 12, 96), ringMat);
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(2.3, 0.012, 12, 128), ringMat2);
    ring2.rotation.x = Math.PI / 2;
    focusGroup.add(ring, ring2);

    const orbitCount = isLowEnd ? 80 : 140;
    const orbitPos = new Float32Array(orbitCount * 3);
    for (let i = 0; i < orbitCount; i++) {
      const ang = (i / orbitCount) * Math.PI * 2;
      const rad = 1.8 + Math.random() * 0.6;
      const y = (Math.random() - 0.5) * 0.2;
      orbitPos[i*3] = Math.cos(ang) * rad;
      orbitPos[i*3+1] = y;
      orbitPos[i*3+2] = Math.sin(ang) * rad;
    }
    const orbitGeo = new THREE.BufferGeometry();
    orbitGeo.setAttribute('position', new THREE.BufferAttribute(orbitPos, 3));
    const orbitMat = new THREE.PointsMaterial({
      color: 0xffffff, size: 0.045,
      transparent: true, opacity: 0,
      blending: THREE.AdditiveBlending, depthWrite: false,
    });
    const orbitPts = new THREE.Points(orbitGeo, orbitMat);
    focusGroup.add(orbitPts);
    focusGroup.visible = false;
    ecosystem.add(focusGroup);

    /* ═══════════════════════════════════════════════════════
       DETAIL PANEL — spring-driven, holographic, 7 sections
    ═══════════════════════════════════════════════════════ */
    const panel        = document.getElementById('tech-reveal');
    const panelName    = document.getElementById('tr-name');
    const panelCat     = document.getElementById('tr-cat');
    const panelCode    = document.getElementById('tr-code');
    const panelCodeTag = document.getElementById('tr-code-tag');
    const panelDesc    = document.getElementById('tr-desc');
    const panelWave    = document.getElementById('tr-wave');
    const panelProf    = document.getElementById('tr-proficiency-bar');
    const panelProfLbl = document.getElementById('tr-proficiency-val');
    const panelParts   = document.getElementById('tr-particles');
    const panelMetaGrid = document.getElementById('tr-meta-grid');
    const panelCompat   = document.getElementById('tr-compat-nodes');

    let panelOpacitySpring = makeSpring(0, 140, 20);
    let panelXSpring       = makeSpring(60, 160, 22);
    let panelTiltSpring    = makeSpring(-8, 160, 22);
    let panelZSpring       = makeSpring(-30, 160, 22);
    let panelVisible = false;

    /* ── Panel floating particles ── */
    let panelParticleRAF = null;
    function startPanelParticles(accentHex) {
      if (!panelParts) return;
      const ctx = panelParts.getContext('2d');
      const W = panelParts.width  = panelParts.offsetWidth  || 440;
      const H = panelParts.height = panelParts.offsetHeight || 600;
      const dots = Array.from({ length: 35 }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random()-.5) * 0.3, vy: (Math.random()-.5) * 0.25,
        r: 0.8 + Math.random() * 1.8,
        alpha: 0.05 + Math.random() * 0.25,
      }));
      if (panelParticleRAF) cancelAnimationFrame(panelParticleRAF);
      function drawP() {
        ctx.clearRect(0, 0, W, H);
        dots.forEach(d => {
          d.x += d.vx; d.y += d.vy;
          if (d.x < 0) d.x = W; if (d.x > W) d.x = 0;
          if (d.y < 0) d.y = H; if (d.y > H) d.y = 0;
          ctx.beginPath();
          ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
          ctx.fillStyle = accentHex + Math.round(d.alpha * 255).toString(16).padStart(2,'0');
          ctx.fill();
        });
        panelParticleRAF = requestAnimationFrame(drawP);
      }
      drawP();
    }
    function stopPanelParticles() {
      if (panelParticleRAF) { cancelAnimationFrame(panelParticleRAF); panelParticleRAF = null; }
    }

    /* ── Live waveform ── */
    let wavePhase = 0, waveRAF = null, waveAccent = '#00d4ff';
    function startWave(tech, accentHex) {
      waveAccent = accentHex;
      if (!panelWave) return;
      if (waveRAF) cancelAnimationFrame(waveRAF);
      const mode = tech.waveform || 'sine';
      function drawWave() {
        const ctx = panelWave.getContext('2d');
        const W = panelWave.width  = panelWave.offsetWidth || 400;
        const H = panelWave.height = panelWave.offsetHeight || 48;
        ctx.clearRect(0, 0, W, H);
        wavePhase += 0.04;
        const grad = ctx.createLinearGradient(0, 0, W, 0);
        grad.addColorStop(0, 'transparent');
        grad.addColorStop(0.15, accentHex + '99');
        grad.addColorStop(0.85, accentHex + '99');
        grad.addColorStop(1, 'transparent');
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.8;
        ctx.shadowBlur = 8; ctx.shadowColor = accentHex;

        const steps = 120;
        const prof = (tech.proficiency || 80) / 100;
        const baseAmp = H * (0.18 + prof * 0.18);

        if (mode === 'matrix') {
          const cols = 48;
          for (let i = 0; i < cols; i++) {
            const seed = i * 0.42 + wavePhase * 1.4;
            const amp = (0.2 + Math.abs(Math.sin(seed)) * 0.8) * baseAmp * 1.2;
            const x = (i / (cols - 1)) * W;
            ctx.beginPath();
            ctx.moveTo(x, H * 0.5 - amp * 0.5);
            ctx.lineTo(x, H * 0.5 + amp * 0.5);
            ctx.stroke();
          }
        } else {
          ctx.beginPath();
          for (let i = 0; i <= steps; i++) {
            const x = (i / steps) * W;
            const p = (i / steps) * Math.PI * 6;
            let y = H / 2;
            if (mode === 'pulse') {
              y += Math.sin(p + wavePhase) * baseAmp * 1.15;
              y += Math.sin(p * 2.4 + wavePhase * 1.2) * baseAmp * 0.22;
            } else if (mode === 'ribbon') {
              y += Math.sin(p + wavePhase * 1.4) * baseAmp * 0.7;
              y += Math.sin(p * 1.6 + wavePhase * 0.6) * baseAmp * 0.6;
            } else if (mode === 'orbit') {
              y += Math.sin(p + wavePhase) * baseAmp * 0.6;
              y += Math.cos(p * 0.6 + wavePhase * 1.1) * baseAmp * 0.6;
            } else if (mode === 'spike') {
              const s = Math.sin(p + wavePhase * 1.4);
              y += Math.sign(s) * Math.pow(Math.abs(s), 3) * baseAmp * 1.2;
            } else if (mode === 'chain') {
              y += Math.sin(p + wavePhase) * baseAmp * 0.6;
              y += Math.sign(Math.sin(p * 0.9 + wavePhase * 1.2)) * baseAmp * 0.2;
            } else {
              y += Math.sin(p + wavePhase) * baseAmp;
              y += Math.sin(p * 1.618 + wavePhase * 0.7) * baseAmp * 0.4;
              y += Math.sin(p * 0.382 + wavePhase * 0.4) * baseAmp * 0.2;
            }
            i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
          }
          ctx.stroke();
        }

        ctx.strokeStyle = accentHex + '30';
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let i = 0; i <= steps; i++) {
          const x = (i / steps) * W;
          const p = (i / steps) * Math.PI * 10;
          const y = H/2 + Math.sin(p - wavePhase * 1.3) * H * 0.1;
          i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
        waveRAF = requestAnimationFrame(drawWave);
      }
      drawWave();
    }
    function stopWave() { if (waveRAF) { cancelAnimationFrame(waveRAF); waveRAF = null; } }

    /* ── Name letter animation ── */
    function animateName(name) {
      if (!panelName) return;
      panelName.innerHTML = '';
      [...name].forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00a0' : char;
        span.style.cssText = `
          display:inline-block;
          opacity:0;
          transform:translateY(14px) rotateX(-50deg);
          transition:opacity 0.4s ${i * 0.038}s, transform 0.4s ${i * 0.038}s cubic-bezier(0.16,1,0.3,1);
        `;
        panelName.appendChild(span);
        requestAnimationFrame(() => requestAnimationFrame(() => {
          span.style.opacity = '1';
          span.style.transform = 'translateY(0) rotateX(0deg)';
        }));
      });
    }

    /* ── Typing code animation ── */
    let codeTypingRAF = null;
    function animateCode(code, accentHex, accentRgb) {
      if (!panelCode) return;
      if (codeTypingRAF) clearTimeout(codeTypingRAF);
      panelCode.textContent = '';
      panelCode.style.color = accentHex;
      panelCode.style.textShadow = `0 0 10px rgba(${accentRgb},0.6)`;
      let idx = 0;
      function type() {
        if (idx < code.length) {
          panelCode.textContent += code[idx++];
          codeTypingRAF = setTimeout(type, 18 + Math.random() * 12);
        }
      }
      type();
    }

    /* ── Proficiency animation ── */
    function animateProficiency(val, accentHex) {
      if (!panelProf) return;
      panelProf.style.background = `linear-gradient(to right, ${accentHex}, ${accentHex}80)`;
      panelProf.style.boxShadow  = `0 0 14px ${accentHex}`;
      panelProf.style.width = '0%';
      requestAnimationFrame(() => requestAnimationFrame(() => {
        panelProf.style.width = val + '%';
      }));
      if (panelProfLbl) panelProfLbl.textContent = val + '%';
    }

    /* ── Compatibility nodes ── */
    function renderCompatNodes(connects, accentHex) {
      if (!panelCompat) return;
      panelCompat.innerHTML = '';
      (connects || []).forEach((name, i) => {
        const el = document.createElement('span');
        el.className = 'tr-compat-node';
        el.textContent = name;
        el.style.animationDelay = `${i * 80}ms`;
        el.style.borderColor = accentHex + '44';
        el.style.color = accentHex;
        el.style.background = accentHex + '0d';
        panelCompat.appendChild(el);
      });
    }

    /* ── Stats grid ── */
    function renderMetaGrid(stats, accentHex, accentRgb) {
      if (!panelMetaGrid) return;
      panelMetaGrid.innerHTML = '';
      (stats || []).slice(0, 6).forEach((stat, i) => {
        const card = document.createElement('div');
        card.className = 'tr-meta-card' + (stat.live ? ' tr-meta-card--live' : '');
        card.style.animationDelay = `${i * 70}ms`;
        if (stat.live) {
          card.style.borderColor = 'rgba(16,185,129,0.35)';
          card.style.background = 'rgba(16,185,129,0.06)';
        } else {
          card.style.borderColor = `rgba(${accentRgb},0.18)`;
          card.style.background = `rgba(${accentRgb},0.04)`;
        }
        const icon = stat.icon || 'STAT';
        const value = stat.value || '—';
        const label = stat.label || 'Metric';
        card.innerHTML = `
          <div class="tr-meta-icon">${icon}</div>
          <span class="tr-meta-val">${value}</span>
          <span class="tr-meta-lbl">${label}</span>
        `;
        panelMetaGrid.appendChild(card);
      });
    }

    /* ── Open / close panel ── */
    function openPanel(tech, catColor, locked) {
      const accent    = tech.accent    || catColor.label;
      const accentRgb = tech.accentRgb || catColor.rgb || '97,218,251';
      const accent2   = tech.accent2   || accent;
      const accent3   = tech.accent3   || accent;
      const accentRgb2 = tech.accentRgb2 || accentRgb;
      const accentRgb3 = tech.accentRgb3 || accentRgb;
      const fxPreset = PANEL_FX_PRESETS[tech.panelFx] || PANEL_FX_PRESETS.plasma;
      panelVisible = true;

      /* Hide the first-use hint bar */
      const hintEl = document.querySelector('.ts-node-hint');
      if (hintEl) hintEl.style.opacity = '0';

      if (panel) {
        panel.style.setProperty('--accent',     accent);
        panel.style.setProperty('--accent-rgb', accentRgb);
        panel.style.setProperty('--accent-dark', catColor.dark);
        panel.style.setProperty('--accent-2',   accent2);
        panel.style.setProperty('--accent-3',   accent3);
        panel.style.setProperty('--accent-rgb-2', accentRgb2);
        panel.style.setProperty('--accent-rgb-3', accentRgb3);
        panel.style.setProperty('--grid-size', `${fxPreset.gridSize}px`);
        panel.style.setProperty('--grid-opacity', fxPreset.gridOpacity);
        panel.style.setProperty('--grid-speed', `${fxPreset.gridSpeed}s`);
        panel.style.setProperty('--nebula-speed', `${fxPreset.nebulaSpeed}s`);
        panel.style.setProperty('--scan-speed', `${fxPreset.scanSpeed}s`);
        panel.style.borderLeftColor = accent;
        panel.dataset.tech = tech.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
        panel.dataset.fx = tech.panelFx || 'plasma';
        panel.classList.add('is-open');

        /* Hover = subtle glow, Locked = deep volumetric glow */
        panel.style.boxShadow = locked ? `
          0 0 0 1px rgba(255,255,255,.04),
          inset 0 1px 0 rgba(255,255,255,.08),
          0 40px 100px rgba(0,0,0,.90),
          -8px 0 80px rgba(${accentRgb},.18),
          -2px 0 30px rgba(${accentRgb},.35),
          0 0 120px rgba(${accentRgb},.08)
        ` : `
          0 0 0 1px rgba(255,255,255,.03),
          inset 0 1px 0 rgba(255,255,255,.06),
          0 32px 80px rgba(0,0,0,.80),
          -5px 0 50px rgba(${accentRgb},.10),
          -1px 0 20px rgba(${accentRgb},.20),
          0 0 80px rgba(${accentRgb},.04)
        `;
      }

      animateName(tech.name);
      if (panelCat)      { panelCat.textContent = tech.cat; }
      if (panelDesc)     panelDesc.textContent = tech.desc;
      if (panelCodeTag)  panelCodeTag.textContent = `// ${tech.name.toLowerCase().replace(/[\s\/.]/g, '_')}.module`;

      renderMetaGrid(tech.stats, accent, accentRgb);

      panelOpacitySpring.target = 1;
      panelXSpring.target       = 0;

      animateCode(tech.code || '', accent, accentRgb);
      animateProficiency(tech.proficiency || 80, accent);
      startWave(tech, accent);
      startPanelParticles(accent);
      startHoloCanvas(tech, accent, accentRgb);
      renderCompatNodes(tech.connects, accent);
    }

    function closePanel() {
      panelVisible = false;
      panelOpacitySpring.target = 0;
      panelXSpring.target       = 60;
      if (panel) panel.classList.remove('is-open');
      stopWave(); stopPanelParticles(); stopHoloCanvas();
      if (codeTypingRAF) clearTimeout(codeTypingRAF);
    }

    /* ═══════════════════════════════════════════════════════════════
       CINEMATIC 3D INTERACTION SYSTEM v2.0
       Hover → node zooms forward + camera reacts + panel opens
       Click → locks selection
    ═══════════════════════════════════════════════════════════════ */

    let idleResetTimeout = null;
    let isHoverLocked = false; // true when user has clicked to lock

    /* ── Depth-of-field fog state ── */
    const normalFogDensity  = 0.036;
    const hoveredFogDensity = 0.055;
    const selectedFogDensity = 0.072;

    function clearIdleReset() {
      if (idleResetTimeout) { clearTimeout(idleResetTimeout); idleResetTimeout = null; }
    }

    function scheduleIdleReset() {
      if (idleResetTimeout || isHoverLocked) return;
      idleResetTimeout = setTimeout(() => {
        idleResetTimeout = null;
        if (!isHoverLocked && currentHoverIdx === -1) resetEcosystem();
      }, 2200);
    }

    function resetEcosystem() {
      clearIdleReset();
      isHoverLocked = false;
      selectedIdx = -1;
      hoveredIdx = -1;
      camSpring.x.target = 1.5; camSpring.y.target = -0.8; camSpring.z.target = 26;
      camLookAt.x.target = 1;   camLookAt.y.target = -0.5;
      ecoRot.x.target = 0; ecoRot.y.target = 0; ecoRot.z.target = 0;
      scene.fog = new THREE.FogExp2(0x020408, normalFogDensity);
      entities.forEach(e => { e.scaleSpring.target = 1; e.opacityTarget = 1; e.uSelected.value = 0; });
      streams.forEach(s => { s.userData.opacityTarget = 0; });
      convOpacitySpring.target = 0;
      fillLight.intensity = 8;
      canvas.style.cursor = 'default';
      bloomStrengthSpring.target = isLowEnd ? 0.9 : 1.8;
      bokehFocusSpring.target = 22;
      bokehApertureSpring.target = 0.0006;
      bokehBlurSpring.target = 0.006;
      if (bokehPass) bokehPass.enabled = false;
      if (focusGroup) focusGroup.visible = false;
      closePanel();
    }

    function activateNode(idx, locked) {
      clearIdleReset();
      hoveredIdx = idx;
      isHoverLocked = !!locked;
      if (locked) selectedIdx = idx;

      const ent = entities[idx];
      const targetPos = ent.restPos;

      /* ── Camera cinematic push toward node ── */
      const pushStrength  = locked ? 0.48 : 0.28;
      const depthPull     = locked ? 14 : 10;
      camSpring.x.target  = targetPos.x * pushStrength + 1.0;
      camSpring.y.target  = targetPos.y * (pushStrength * 0.6) - 0.4;
      camSpring.z.target  = Math.max(12, targetPos.z + depthPull + (locked ? 3 : 5));
      camLookAt.x.target  = targetPos.x * (locked ? 0.58 : 0.42);
      camLookAt.y.target  = targetPos.y * (locked ? 0.48 : 0.32);

      /* ── Ecosystem rotates toward the active node ── */
      ecoRot.y.target = -targetPos.x * (locked ? 0.03 : 0.02);
      ecoRot.x.target =  targetPos.y * (locked ? 0.02 : 0.015);
      ecoRot.z.target =  locked ? -targetPos.x * 0.006 : 0;

      /* ── Depth-of-field fog tightens ── */
      scene.fog = new THREE.FogExp2(0x020408, locked ? selectedFogDensity : hoveredFogDensity);

      /* ── Entity scale/opacity states ── */
      entities.forEach((e, i) => {
        if (i === idx) {
          /* Selected node zooms FORWARD in 3D and intensifies */
          e.scaleSpring.target = locked ? 2.2 : 1.6;
          e.opacityTarget      = 1;
          e.uSelected.value    = locked ? 1 : 0.6;
        } else {
          const dist3d = e.restPos.distanceTo(targetPos);
          const isNear = dist3d < 9;
          if (isNear && !locked) {
            /* Nearby nodes subtly push away on hover */
            e.scaleSpring.target = 0.75;
            e.opacityTarget      = 0.45;
          } else {
            e.scaleSpring.target = locked ? 0.45 : 0.8;
            e.opacityTarget      = locked ? 0.18 : 0.5;
          }
          e.uSelected.value = 0;
        }
      });

      /* ── Connection streams illuminate ── */
      streams.forEach(s => {
        const [a, b] = s.userData.connected;
        const connected = (a === idx || b === idx);
        s.userData.opacityTarget = connected ? (locked ? 1.0 : 0.7) : 0.0;
      });

      /* ── Convergence particles ── */
      if (locked) {
        convData.forEach(c => {
          c.target.copy(ent.restPos).add(new THREE.Vector3(
            (Math.random()-.5)*.6, (Math.random()-.5)*.6, (Math.random()-.5)*.6
          ));
          c.t = 0;
        });
        convOpacitySpring.target = 0.9;
        convMat.color.set(ent.tech.color);
        fillLight.intensity = 2;
      } else {
        convOpacitySpring.target = 0.3;
        convMat.color.set(ent.tech.color);
        fillLight.intensity = 5;
      }

      bloomStrengthSpring.target = isLowEnd ? (locked ? 1.3 : 1.05) : (locked ? 2.5 : 2.1);
      bokehApertureSpring.target = locked ? 0.0012 : 0.0008;
      bokehBlurSpring.target = locked ? 0.012 : 0.008;

      /* ── Open panel (hover or click) ── */
      openPanel(ent.tech, ent.catColor, locked);
      canvas.style.cursor = 'pointer';
    }

    function deactivateNode() {
      if (isHoverLocked) return; // locked by click — don't deactivate on mouse-leave
      scheduleIdleReset();
    }

    function deselectAll() {
      resetEcosystem();
    }

    /* ── Events ── */
    let screenX = 0, screenY = 0;

    window.addEventListener('mousemove', e => {
      screenX = e.clientX;
      screenY = e.clientY;
      const nx =  (screenX / window.innerWidth)  * 2 - 1;
      const ny = -(screenY / window.innerHeight) * 2 + 1;
      mouse3D.set(nx, ny);
      holoCursorX = screenX / window.innerWidth;
      holoCursorY = screenY / window.innerHeight;
      cursorLight.position.set(nx * 20, ny * 12, 14);
    }, { passive: true });

    canvas.addEventListener('click', e => {
      clearIdleReset();
      raycaster.setFromCamera(mouse3D, camera);
      const hits = raycaster.intersectObjects(hitMeshes);
      if (hits.length > 0) {
        const idx = hits[0].object.userData.index;
        if (isHoverLocked && selectedIdx === idx) {
          /* Click same node again → unlock/deselect */
          isHoverLocked = false;
          selectedIdx   = -1;
          /* Re-activate as plain hover if still under cursor */
          activateNode(idx, false);
        } else {
          activateNode(idx, true);
        }
      } else {
        deselectAll();
      }
    });

    window.addEventListener('keydown', e => { if (e.key === 'Escape') deselectAll(); });

    /* ── Physics ── */
    function updatePhysics(t, dt) {
      raycaster.setFromCamera(mouse3D, camera);
      const hits = raycaster.intersectObjects(hitMeshes);
      currentHoverIdx = hits.length > 0 ? hits[0].object.userData.index : -1;

      /* Cinematic hover detection — only update if not locked by click */
      if (!isHoverLocked) {
        if (currentHoverIdx >= 0 && currentHoverIdx !== hoveredIdx) {
          activateNode(currentHoverIdx, false);
        } else if (currentHoverIdx === -1 && hoveredIdx >= 0) {
          deactivateNode();
        }
      }

      canvas.style.cursor = currentHoverIdx >= 0 ? 'pointer' : 'default';

      const mouseWorld = new THREE.Vector3(mouse3D.x * 20, mouse3D.y * 12, 0);
      const activeIdx = isHoverLocked ? selectedIdx : hoveredIdx;
      const activeEnt = activeIdx >= 0 ? entities[activeIdx] : null;
      const activeLocked = isHoverLocked && selectedIdx >= 0;

      entities.forEach((e, i) => {
        const s = tickSpring(e.scaleSpring, dt);
        e.mesh.scale.setScalar(Math.max(0.01, s));

        const isActive   = i === hoveredIdx;
        const isSelected = i === selectedIdx && isHoverLocked;
        const sd = e.seed;
        const ph = sd.phase + t * sd.bobSpeed;
        const activeBoost = isSelected ? 1.6 : (isActive ? 1.25 : 1.0);
        const bobY = Math.sin(ph) * sd.bobAmp * activeBoost + Math.sin(ph * 1.618 + 0.8) * sd.bobAmp * 0.35;
        const bobX = Math.cos(ph * 0.73 + sd.phaseX) * sd.bobAmp * 0.25;
        const bobZ = Math.sin(ph * 0.51 + sd.phaseZ) * sd.bobAmp * 0.15;

        /* ── 3D FORWARD ZOOM: hovered node flies toward camera ── */
        /* The node’s Z restPos is its world position;
           we shift it FORWARD (toward camera = +Z) by a spring-driven offset */
        const zShift = isSelected ? 4.2 : (isActive ? 2.6 : 0.0);
        if (!e._zSpring) e._zSpring = makeSpring(0, 120, 18);
        e._zSpring.target = zShift;
        const zOff = tickSpring(e._zSpring, dt);

        if (activeEnt && i !== activeIdx) {
          const away = e.mesh.position.clone().sub(activeEnt.mesh.position);
          const dist = away.length();
          const repelRadius = activeLocked ? 10.5 : 8.0;
          if (dist < repelRadius) {
            const force = away.normalize().multiplyScalar((1 - dist / repelRadius) * (activeLocked ? 6.0 : 3.5));
            e.vel.add(force.multiplyScalar(dt));
          }
        }

        if (!isActive && !isSelected) {
          const diff = e.mesh.position.clone().sub(mouseWorld);
          const dist = diff.length();
          if (dist < 7.0) {
            const force = diff.normalize().multiplyScalar((1 - dist / 7.0) * 4.0);
            e.vel.add(force.multiplyScalar(dt));
          }
        }

        const toTarget = new THREE.Vector3(
          e.restPos.x + bobX,
          e.restPos.y + bobY,
          e.restPos.z + bobZ + zOff        /* <-- forward Z shift here */
        ).sub(e.mesh.position);
        e.vel.add(toTarget.multiplyScalar(2.6 * dt));
        e.vel.multiplyScalar(1 - 6.0 * dt);
        e.mesh.position.add(e.vel.clone().multiplyScalar(dt));
        e.hitMesh.position.copy(e.mesh.position);

        /* ── Rotation speed ramps up when hovered/selected ── */
        const rotBoost = isSelected ? 3.5 : (isActive ? 2.2 : 1.0);
        const cat = e.tech.cat;
        if (cat === 'Frontend' || cat === 'Interactive UI') {
          e.mesh.rotation.y = Math.sin(t * 0.26 * rotBoost + i * 0.8) * 0.42 + Math.sin(t * 0.1) * 0.1;
          e.mesh.rotation.x = Math.sin(t * 0.18 * rotBoost + i * 0.5) * 0.18;
        } else if (cat === 'AI / ML') {
          e.mesh.rotation.x += dt * (sd.rotSpeed * 0.85 + 0.12) * rotBoost;
          e.mesh.rotation.y += dt * (sd.rotSpeed * 0.65 + 0.08) * rotBoost;
          if (e.mesh.children && e.mesh.children[2]) e.mesh.children[2].rotation.z += dt * 0.4 * rotBoost;
        } else if (cat === 'RAG Systems') {
          e.mesh.rotation.y += dt * 0.18 * rotBoost;
          e.mesh.rotation.x = Math.sin(t * 0.25 * rotBoost + i) * 0.2;
        } else if (cat === 'Databases') {
          e.mesh.children && e.mesh.children.forEach((child, ci) => {
            if (child.isPoints) return;
            const speeds = [0.35, -0.22, 0.18];
            child.rotation.z += dt * (speeds[ci] || 0.15) * rotBoost;
            child.rotation.x += dt * ([0, 0.12, -0.08][ci] || 0) * rotBoost;
          });
        } else if (cat === 'Backend' || cat === 'Full Stack') {
          e.mesh.rotation.x = Math.sin(t * 0.15 * rotBoost + i * 0.7) * 0.22;
          e.mesh.rotation.y = Math.sin(t * 0.2  * rotBoost + i * 0.5) * 0.22;
        } else if (cat === '3D Web' || cat === 'Creative Dev') {
          e.mesh.rotation.x += dt * sd.rotSpeed * 0.9 * rotBoost;
          e.mesh.rotation.y += dt * sd.rotSpeed * 1.1 * rotBoost;
          e.mesh.rotation.z += dt * sd.rotSpeed * 0.4 * rotBoost;
        } else {
          e.mesh.rotation.x += dt * sd.rotSpeed * 0.7 * rotBoost;
          e.mesh.rotation.y += dt * sd.rotSpeed * 0.9 * rotBoost;
        }

        /* ── Pulse: full when active or selected, dimmed otherwise ── */
        const targetPulse = isSelected ? 1.6 : (isActive ? 1.25 : (activeIdx >= 0 ? 0.2 : 1.0));
        e.uPulse.value += (targetPulse - e.uPulse.value) * 0.06;
      });

      streams.forEach(s => {
        const cur = s.material.uniforms.uOpacity.value;
        const op  = cur + (s.userData.opacityTarget - cur) * 0.09;
        s.material.uniforms.uOpacity.value = op;
        s.visible = op > 0.008;
      });

      const cop = tickSpring(convOpacitySpring, dt);
      convMat.opacity = Math.max(0, cop);
      if (cop > 0.01 && selectedIdx >= 0) {
        convData.forEach((c, ci) => {
          c.t = Math.min(c.t + dt * c.speed * 28, 1);
          const eased = c.t < .5 ? 2*c.t*c.t : 1 - Math.pow(-2*c.t+2,2)/2;
          const p = c.origin.clone().lerp(c.target, eased);
          convPos[ci*3] = p.x; convPos[ci*3+1] = p.y; convPos[ci*3+2] = p.z;
          if (c.t >= 1) {
            c.t = 0;
            c.origin.set((Math.random()-.5)*30, (Math.random()-.5)*18, (Math.random()-.5)*12);
          }
        });
        convGeo.attributes.position.needsUpdate = true;
      }
    }

    /* ── Render loop ── */
    function tick() {
      animFrameId = requestAnimationFrame(tick);
      const t  = clock.getElapsedTime();
      const dt = Math.min(clock.getDelta(), 0.05);
      globalUniforms.uTime.value = t;

      entryProgress = Math.min(1, t / 3.5);
      if (entryProgress < 1 && hoveredIdx === -1 && !isHoverLocked) {
        camSpring.z.target = lerpClamped(40, 26, entryProgress);
        camSpring.x.target = lerpClamped(3, 1.5, entryProgress);
        camSpring.y.target = lerpClamped(-1.5, -0.8, entryProgress);
      }

      /* ── Idle camera drift — suppressed during hover/selection ── */
      if (hoveredIdx === -1 && !isHoverLocked && entryProgress >= 1) {
        const driftT = t * 0.15;
        camSpring.x.target = mouse3D.x * 2.6 + Math.sin(driftT * 0.7) * 0.9;
        camSpring.y.target = mouse3D.y * 1.5 + Math.cos(driftT * 0.5) * 0.5;
        camSpring.z.target = 26 + Math.sin(driftT * 0.38) * 1.6;
        camLookAt.x.target = mouse3D.x * 1.4 + 1;
        camLookAt.y.target = mouse3D.y * 0.75 - 0.5;
      }

      const cx = tickSpring(camSpring.x, dt);
      const cy = tickSpring(camSpring.y, dt);
      const cz = tickSpring(camSpring.z, dt);
      camera.position.set(cx, cy, cz);
      const lx = tickSpring(camLookAt.x, dt);
      const ly = tickSpring(camLookAt.y, dt);
      camera.lookAt(lx, ly, 0);

      ecosystem.rotation.x = tickSpring(ecoRot.x, dt);
      ecosystem.rotation.y = tickSpring(ecoRot.y, dt);
      ecosystem.rotation.z = tickSpring(ecoRot.z, dt);

      /* ── Cinematic camera effects on hover/selection ── */
      const isActive = hoveredIdx >= 0 || isHoverLocked;
      /* FOV narrows for telephoto depth effect when a node is active */
      const targetFOV = isHoverLocked ? 38 : (hoveredIdx >= 0 ? 42 : 45);
      camera.fov += (targetFOV - camera.fov) * 0.04;
      camera.updateProjectionMatrix();

      /* Camera roll: tilts subtly toward the active node for parallax */
      const rollTarget = isActive
        ? (hoveredIdx >= 0 ? (entities[hoveredIdx]?.restPos.x || 0) : 0) * 0.003
        : Math.sin(t * 0.22) * 0.016;
      if (!camera._roll) camera._roll = 0;
      camera._roll += (rollTarget - camera._roll) * 0.05;
      camera.rotation.z = camera._roll;

      /* Bloom boost when node is active */
      if (bloomPass) {
        bloomPass.strength = tickSpring(bloomStrengthSpring, dt);
      }

      keyLight.position.x  = Math.sin(t * 0.20) * 15 + 2;
      keyLight.position.y  = Math.cos(t * 0.16) * 10 + 5;
      fillLight.position.x = Math.cos(t * 0.15) * 18;
      fillLight.position.y = Math.sin(t * 0.12) * 10 - 4;
      rimLight.position.x  = Math.sin(t * 0.26 + 2.1) * 14;
      rimLight.position.z  = Math.cos(t * 0.20) * 10 - 6;

      dustLayers.forEach((d, di) => {
        d.pts.rotation.y += dt * d.speed * (di % 2 === 0 ? 1 : -1);
        d.pts.rotation.x += dt * d.speed * 0.35;
      });

      bgPlane.position.z = -28 + Math.sin(t * 0.28) * 0.8;
      updatePhysics(t, dt);

      const focusIdx = isHoverLocked ? selectedIdx : hoveredIdx;
      const focusEnt = focusIdx >= 0 ? entities[focusIdx] : null;
      if (focusEnt) {
        focusGroup.visible = true;
        focusGroup.position.copy(focusEnt.mesh.position);
        const focusColor = new THREE.Color(focusEnt.tech.color);
        ring.material.color.copy(focusColor);
        ring2.material.color.copy(focusColor);
        orbitPts.material.color.copy(focusColor);
        const focusScale = focusEnt.depthScale * (isHoverLocked ? 1.45 : 1.15);
        focusGroup.scale.setScalar(focusScale);
        const pulse = 0.6 + Math.sin(t * 3.2) * 0.2;
        ring.scale.setScalar(1 + pulse * 0.1);
        ring2.scale.setScalar(1.15 + pulse * 0.2);
        ring.material.opacity += ((isHoverLocked ? 0.7 : 0.45) - ring.material.opacity) * 0.08;
        ring2.material.opacity += ((isHoverLocked ? 0.35 : 0.2) - ring2.material.opacity) * 0.08;
        orbitPts.material.opacity += ((isHoverLocked ? 0.55 : 0.35) - orbitPts.material.opacity) * 0.08;
        focusGroup.rotation.y += dt * (isHoverLocked ? 1.2 : 0.7);
        focusGroup.rotation.x += dt * (isHoverLocked ? 0.6 : 0.4);
      } else if (focusGroup.visible) {
        ring.material.opacity *= 0.85;
        ring2.material.opacity *= 0.85;
        orbitPts.material.opacity *= 0.85;
        if (ring.material.opacity < 0.02) focusGroup.visible = false;
      }

      if (bokehPass) {
        if (focusEnt) {
          bokehPass.enabled = true;
          const dist = camera.position.distanceTo(focusEnt.mesh.position);
          bokehFocusSpring.target = clamp(dist - (isHoverLocked ? 2.5 : 1.2), 8, 60);
        } else {
          bokehPass.enabled = false;
          bokehFocusSpring.target = 22;
        }
        if (bokehPass.materialBokeh && bokehPass.materialBokeh.uniforms) {
          bokehPass.materialBokeh.uniforms.focus.value = tickSpring(bokehFocusSpring, dt);
          bokehPass.materialBokeh.uniforms.aperture.value = tickSpring(bokehApertureSpring, dt);
          bokehPass.materialBokeh.uniforms.maxblur.value = tickSpring(bokehBlurSpring, dt);
        }
      }

      if (panel) {
        const op = tickSpring(panelOpacitySpring, dt);
        const px = tickSpring(panelXSpring, dt);
        /* Scale spring: panel "pops" in from slightly smaller */
        if (!panelOpacitySpring._scaleSpring) panelOpacitySpring._scaleSpring = makeSpring(0.92, 200, 22);
        panelOpacitySpring._scaleSpring.target = panelVisible ? 1.0 : 0.92;
        const sc = tickSpring(panelOpacitySpring._scaleSpring, dt);
        panelTiltSpring.target = panelVisible ? (-6 + mouse3D.x * -6) : -12;
        panelZSpring.target = panelVisible ? (isHoverLocked ? 24 : 16) : -30;
        const tilt = tickSpring(panelTiltSpring, dt);
        const pz = tickSpring(panelZSpring, dt);
        panel.style.opacity   = Math.max(0, Math.min(1, op)).toFixed(3);
        panel.style.transform = `translateY(-50%) translateX(${px.toFixed(2)}px) translateZ(${pz.toFixed(2)}px) rotateY(${tilt.toFixed(2)}deg) scale(${sc.toFixed(4)})`;
        panel.style.pointerEvents = op > 0.1 ? 'auto' : 'none';
        panel.style.transformOrigin = 'right center';
      }

      if (composer) composer.render();
      else renderer.render(scene, camera);
    }

    tick();

    /* ── Scroll trigger ── */
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.create({
        trigger: '#techstack', start: 'top bottom', end: 'bottom top',
        onUpdate(self) {
          const p = self.progress;
          if (p < 0.88) { camera.fov = 45 + p * 10; camera.updateProjectionMatrix(); }
          if (bloomPass && hoveredIdx === -1 && !isHoverLocked) {
            bloomStrengthSpring.target = 1.6 + Math.sin(p * Math.PI) * 0.8;
          }
        },
      });
    }

    /* ── Resize ── */
    window.addEventListener('resize', () => {
      const W = window.innerWidth, H = window.innerHeight;
      camera.aspect = W / H;
      camera.updateProjectionMatrix();
      renderer.setSize(W, H);
      if (composer) composer.setSize(W, H);
    });

    return function destroy() {
      if (animFrameId) cancelAnimationFrame(animFrameId);
      stopWave(); stopPanelParticles(); stopHoloCanvas();
      renderer.dispose();
    };
  }

  return initTechUniverse;
})();
