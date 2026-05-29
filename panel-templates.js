window.getPanelTemplate = function(tech, accentRgb, accentHex) {
  const ambientBackgrounds = `
    <div class="tr-bg-grid" aria-hidden="true"></div>
    <div class="tr-bg-nebula" aria-hidden="true"></div>
    <canvas id="tr-bg-canvas" class="tr-bg-canvas" aria-hidden="true"></canvas>
    <div class="tr-scan-line" aria-hidden="true"></div>
    <div class="tr-scan-line tr-scan-line--2" aria-hidden="true"></div>
    <div class="tr-corner tr-corner--tl" aria-hidden="true"></div>
    <div class="tr-corner tr-corner--tr" aria-hidden="true"></div>
    <div class="tr-corner tr-corner--bl" aria-hidden="true"></div>
    <div class="tr-corner tr-corner--br" aria-hidden="true"></div>
    <div class="tr-glow-edge" aria-hidden="true"></div>
    <canvas id="tr-particles" class="tr-particles" aria-hidden="true"></canvas>
  `;

  const name = tech.name;
  
  if (name === 'React') {
    return ambientBackgrounds + `
      <div class="panel-react-core">
        <div class="react-top-bar">
          <span class="react-dot"></span> <span class="react-title">QUANTUM UI ENGINE</span>
        </div>
        <h3 id="tr-name" class="tr-name react-heading"></h3>
        <div class="tr-holo-viewport react-viewport" id="tr-holo-viewport">
          <canvas id="tr-holo-canvas" class="tr-holo-canvas"></canvas>
        </div>
        <p id="tr-desc" class="tr-desc react-desc"></p>
        <div class="tr-code-wrap react-code-wrap">
          <div class="tr-code-header">
            <span class="tr-code-tag" id="tr-code-tag"></span>
          </div>
          <div class="tr-code-body"><pre id="tr-code" class="tr-code"></pre></div>
        </div>
        <div class="tr-meta-grid" id="tr-meta-grid"></div>
        <div style="display:none;"><div id="tr-proficiency-bar"></div><span id="tr-proficiency-val"></span><canvas id="tr-wave"></canvas><div id="tr-compat-nodes"></div></div>
      </div>
    `;
  } else if (name === 'Next.js') {
    return ambientBackgrounds + `
      <div class="panel-nextjs-monolith">
        <div class="next-monolith-header">
          <span class="next-title">SSR ARCHITECTURE</span>
        </div>
        <h3 id="tr-name" class="tr-name next-heading"></h3>
        <div class="tr-holo-viewport next-viewport" id="tr-holo-viewport">
          <canvas id="tr-holo-canvas" class="tr-holo-canvas"></canvas>
          <div class="next-grid-overlay"></div>
        </div>
        <p id="tr-desc" class="tr-desc next-desc"></p>
        <div class="tr-code-wrap next-code-wrap">
          <div class="tr-code-header"><span class="tr-code-tag" id="tr-code-tag"></span></div>
          <div class="tr-code-body"><pre id="tr-code" class="tr-code"></pre></div>
        </div>
        <div class="tr-meta-grid" id="tr-meta-grid"></div>
        <div style="display:none;"><div id="tr-proficiency-bar"></div><span id="tr-proficiency-val"></span><canvas id="tr-wave"></canvas><div id="tr-compat-nodes"></div></div>
      </div>
    `;
  } else if (name === 'Three.js') {
    return ambientBackgrounds + `
      <div class="panel-threejs-prism">
        <h3 id="tr-name" class="tr-name three-heading"></h3>
        <div class="three-subtitle">WEBGL RENDERING CONTEXT</div>
        <div class="tr-holo-viewport three-viewport" id="tr-holo-viewport">
          <canvas id="tr-holo-canvas" class="tr-holo-canvas"></canvas>
        </div>
        <p id="tr-desc" class="tr-desc three-desc"></p>
        <div class="tr-code-wrap three-code-wrap">
          <div class="tr-code-body"><pre id="tr-code" class="tr-code"></pre></div>
        </div>
        <div class="tr-meta-grid" id="tr-meta-grid"></div>
        <div style="display:none;"><div id="tr-proficiency-bar"></div><span id="tr-proficiency-val"></span><canvas id="tr-wave"></canvas><div id="tr-compat-nodes"></div><span id="tr-code-tag"></span></div>
      </div>
    `;
  } else if (name === 'Framer Motion') {
    return ambientBackgrounds + `
      <div class="panel-framer-ribbon">
        <div class="framer-bar"><span>ELASTIC PHYSICS ENGINE</span></div>
        <h3 id="tr-name" class="tr-name framer-heading"></h3>
        <div class="tr-holo-viewport framer-viewport" id="tr-holo-viewport">
          <canvas id="tr-holo-canvas" class="tr-holo-canvas"></canvas>
        </div>
        <div class="tr-code-wrap framer-code-wrap">
          <div class="tr-code-header"><span class="tr-code-tag" id="tr-code-tag"></span></div>
          <div class="tr-code-body"><pre id="tr-code" class="tr-code"></pre></div>
        </div>
        <p id="tr-desc" class="tr-desc framer-desc"></p>
        <div class="tr-meta-grid" id="tr-meta-grid"></div>
        <div style="display:none;"><div id="tr-proficiency-bar"></div><span id="tr-proficiency-val"></span><canvas id="tr-wave"></canvas><div id="tr-compat-nodes"></div></div>
      </div>
    `;
  } else if (name === 'Python') {
    return ambientBackgrounds + `
      <div class="panel-python-neural">
        <div class="python-top-bar">[SYS.CORE.PYTHON]</div>
        <h3 id="tr-name" class="tr-name python-heading"></h3>
        <div class="tr-holo-viewport python-viewport" id="tr-holo-viewport">
          <canvas id="tr-holo-canvas" class="tr-holo-canvas"></canvas>
        </div>
        <p id="tr-desc" class="tr-desc python-desc"></p>
        <div class="tr-code-wrap python-code-wrap">
          <div class="tr-code-header"><span class="tr-code-tag" id="tr-code-tag"></span></div>
          <div class="tr-code-body"><pre id="tr-code" class="tr-code"></pre></div>
        </div>
        <div class="tr-meta-grid" id="tr-meta-grid"></div>
        <div style="display:none;"><div id="tr-proficiency-bar"></div><span id="tr-proficiency-val"></span><canvas id="tr-wave"></canvas><div id="tr-compat-nodes"></div></div>
      </div>
    `;
  } else if (name === 'TensorFlow') {
    return ambientBackgrounds + `
      <div class="panel-tf-molten">
        <h3 id="tr-name" class="tr-name tf-heading"></h3>
        <div class="tf-subtitle">TENSOR GRAPH EXECUTION</div>
        <div class="tr-holo-viewport tf-viewport" id="tr-holo-viewport">
          <canvas id="tr-holo-canvas" class="tr-holo-canvas"></canvas>
        </div>
        <p id="tr-desc" class="tr-desc tf-desc"></p>
        <div class="tr-code-wrap tf-code-wrap">
          <div class="tr-code-body"><pre id="tr-code" class="tr-code"></pre></div>
        </div>
        <div class="tr-meta-grid" id="tr-meta-grid"></div>
        <div style="display:none;"><div id="tr-proficiency-bar"></div><span id="tr-proficiency-val"></span><canvas id="tr-wave"></canvas><div id="tr-compat-nodes"></div><span id="tr-code-tag"></span></div>
      </div>
    `;
  } else if (name === 'PyTorch') {
    return ambientBackgrounds + `
      <div class="panel-pytorch-flame">
        <div class="pytorch-bar">DYNAMIC COMP GRAPH</div>
        <h3 id="tr-name" class="tr-name pytorch-heading"></h3>
        <div class="tr-holo-viewport pytorch-viewport" id="tr-holo-viewport">
          <canvas id="tr-holo-canvas" class="tr-holo-canvas"></canvas>
        </div>
        <p id="tr-desc" class="tr-desc pytorch-desc"></p>
        <div class="tr-code-wrap pytorch-code-wrap">
          <div class="tr-code-header"><span class="tr-code-tag" id="tr-code-tag"></span></div>
          <div class="tr-code-body"><pre id="tr-code" class="tr-code"></pre></div>
        </div>
        <div class="tr-meta-grid" id="tr-meta-grid"></div>
        <div style="display:none;"><div id="tr-proficiency-bar"></div><span id="tr-proficiency-val"></span><canvas id="tr-wave"></canvas><div id="tr-compat-nodes"></div></div>
      </div>
    `;
  } else if (name === 'Scikit-learn') {
    return ambientBackgrounds + `
      <div class="panel-sklearn-cluster">
        <h3 id="tr-name" class="tr-name sklearn-heading"></h3>
        <div class="tr-holo-viewport sklearn-viewport" id="tr-holo-viewport">
          <canvas id="tr-holo-canvas" class="tr-holo-canvas"></canvas>
        </div>
        <p id="tr-desc" class="tr-desc sklearn-desc"></p>
        <div class="tr-code-wrap sklearn-code-wrap">
          <div class="tr-code-body"><pre id="tr-code" class="tr-code"></pre></div>
        </div>
        <div class="tr-meta-grid" id="tr-meta-grid"></div>
        <div style="display:none;"><div id="tr-proficiency-bar"></div><span id="tr-proficiency-val"></span><canvas id="tr-wave"></canvas><div id="tr-compat-nodes"></div><span id="tr-code-tag"></span></div>
      </div>
    `;
  } else if (name === 'LangChain') {
    return ambientBackgrounds + `
      <div class="panel-langchain-pathways">
        <div class="langchain-top">LLM ORCHESTRATION</div>
        <h3 id="tr-name" class="tr-name langchain-heading"></h3>
        <div class="tr-holo-viewport langchain-viewport" id="tr-holo-viewport">
          <canvas id="tr-holo-canvas" class="tr-holo-canvas"></canvas>
        </div>
        <p id="tr-desc" class="tr-desc langchain-desc"></p>
        <div class="tr-code-wrap langchain-code-wrap">
          <div class="tr-code-header"><span class="tr-code-tag" id="tr-code-tag"></span></div>
          <div class="tr-code-body"><pre id="tr-code" class="tr-code"></pre></div>
        </div>
        <div class="tr-meta-grid" id="tr-meta-grid"></div>
        <div style="display:none;"><div id="tr-proficiency-bar"></div><span id="tr-proficiency-val"></span><canvas id="tr-wave"></canvas><div id="tr-compat-nodes"></div></div>
      </div>
    `;
  } else if (name === 'LlamaIndex') {
    return ambientBackgrounds + `
      <div class="panel-llamaindex-llama">
        <h3 id="tr-name" class="tr-name llama-heading"></h3>
        <div class="tr-holo-viewport llama-viewport" id="tr-holo-viewport">
          <canvas id="tr-holo-canvas" class="tr-holo-canvas"></canvas>
        </div>
        <p id="tr-desc" class="tr-desc llama-desc"></p>
        <div class="tr-code-wrap llama-code-wrap">
          <div class="tr-code-body"><pre id="tr-code" class="tr-code"></pre></div>
        </div>
        <div class="tr-meta-grid" id="tr-meta-grid"></div>
        <div style="display:none;"><div id="tr-proficiency-bar"></div><span id="tr-proficiency-val"></span><canvas id="tr-wave"></canvas><div id="tr-compat-nodes"></div><span id="tr-code-tag"></span></div>
      </div>
    `;
  } else if (name === 'OpenAI API') {
    return ambientBackgrounds + `
      <div class="panel-openai-brain">
        <div class="openai-top">INTELLIGENCE_NODE</div>
        <h3 id="tr-name" class="tr-name openai-heading"></h3>
        <div class="tr-holo-viewport openai-viewport" id="tr-holo-viewport">
          <canvas id="tr-holo-canvas" class="tr-holo-canvas"></canvas>
        </div>
        <p id="tr-desc" class="tr-desc openai-desc"></p>
        <div class="tr-code-wrap openai-code-wrap">
          <div class="tr-code-header"><span class="tr-code-tag" id="tr-code-tag"></span></div>
          <div class="tr-code-body"><pre id="tr-code" class="tr-code"></pre></div>
        </div>
        <div class="tr-meta-grid" id="tr-meta-grid"></div>
        <div style="display:none;"><div id="tr-proficiency-bar"></div><span id="tr-proficiency-val"></span><canvas id="tr-wave"></canvas><div id="tr-compat-nodes"></div></div>
      </div>
    `;
  } else if (name === 'Pinecone') {
    return ambientBackgrounds + `
      <div class="panel-pinecone-vector">
        <h3 id="tr-name" class="tr-name pinecone-heading"></h3>
        <div class="pinecone-subtitle">VECTOR DATABASE</div>
        <div class="tr-holo-viewport pinecone-viewport" id="tr-holo-viewport">
          <canvas id="tr-holo-canvas" class="tr-holo-canvas"></canvas>
        </div>
        <p id="tr-desc" class="tr-desc pinecone-desc"></p>
        <div class="tr-code-wrap pinecone-code-wrap">
          <div class="tr-code-body"><pre id="tr-code" class="tr-code"></pre></div>
        </div>
        <div class="tr-meta-grid" id="tr-meta-grid"></div>
        <div style="display:none;"><div id="tr-proficiency-bar"></div><span id="tr-proficiency-val"></span><canvas id="tr-wave"></canvas><div id="tr-compat-nodes"></div><span id="tr-code-tag"></span></div>
      </div>
    `;
  } else if (name === 'FastAPI') {
    return ambientBackgrounds + `
      <div class="panel-fastapi-lightning">
        <div class="fastapi-top">ASYNC API SERVER</div>
        <h3 id="tr-name" class="tr-name fastapi-heading"></h3>
        <div class="tr-holo-viewport fastapi-viewport" id="tr-holo-viewport">
          <canvas id="tr-holo-canvas" class="tr-holo-canvas"></canvas>
        </div>
        <p id="tr-desc" class="tr-desc fastapi-desc"></p>
        <div class="tr-code-wrap fastapi-code-wrap">
          <div class="tr-code-header"><span class="tr-code-tag" id="tr-code-tag"></span></div>
          <div class="tr-code-body"><pre id="tr-code" class="tr-code"></pre></div>
        </div>
        <div class="tr-meta-grid" id="tr-meta-grid"></div>
        <div style="display:none;"><div id="tr-proficiency-bar"></div><span id="tr-proficiency-val"></span><canvas id="tr-wave"></canvas><div id="tr-compat-nodes"></div></div>
      </div>
    `;
  } else if (name === 'Node.js') {
    return ambientBackgrounds + `
      <div class="panel-nodejs-hex">
        <h3 id="tr-name" class="tr-name nodejs-heading"></h3>
        <div class="nodejs-subtitle">V8 RUNTIME</div>
        <div class="tr-holo-viewport nodejs-viewport" id="tr-holo-viewport">
          <canvas id="tr-holo-canvas" class="tr-holo-canvas"></canvas>
        </div>
        <p id="tr-desc" class="tr-desc nodejs-desc"></p>
        <div class="tr-code-wrap nodejs-code-wrap">
          <div class="tr-code-body"><pre id="tr-code" class="tr-code"></pre></div>
        </div>
        <div class="tr-meta-grid" id="tr-meta-grid"></div>
        <div style="display:none;"><div id="tr-proficiency-bar"></div><span id="tr-proficiency-val"></span><canvas id="tr-wave"></canvas><div id="tr-compat-nodes"></div><span id="tr-code-tag"></span></div>
      </div>
    `;
  } else if (name === 'PostgreSQL') {
    return ambientBackgrounds + `
      <div class="panel-postgres-rings">
        <div class="postgres-top">RELATIONAL DATA STORE</div>
        <h3 id="tr-name" class="tr-name postgres-heading"></h3>
        <div class="tr-holo-viewport postgres-viewport" id="tr-holo-viewport">
          <canvas id="tr-holo-canvas" class="tr-holo-canvas"></canvas>
        </div>
        <p id="tr-desc" class="tr-desc postgres-desc"></p>
        <div class="tr-code-wrap postgres-code-wrap">
          <div class="tr-code-header"><span class="tr-code-tag" id="tr-code-tag"></span></div>
          <div class="tr-code-body"><pre id="tr-code" class="tr-code"></pre></div>
        </div>
        <div class="tr-meta-grid" id="tr-meta-grid"></div>
        <div style="display:none;"><div id="tr-proficiency-bar"></div><span id="tr-proficiency-val"></span><canvas id="tr-wave"></canvas><div id="tr-compat-nodes"></div></div>
      </div>
    `;
  } else if (name === 'Docker') {
    return ambientBackgrounds + `
      <div class="panel-docker-grid">
        <h3 id="tr-name" class="tr-name docker-heading"></h3>
        <div class="docker-subtitle">CONTAINER ENGINE</div>
        <div class="tr-holo-viewport docker-viewport" id="tr-holo-viewport">
          <canvas id="tr-holo-canvas" class="tr-holo-canvas"></canvas>
        </div>
        <p id="tr-desc" class="tr-desc docker-desc"></p>
        <div class="tr-code-wrap docker-code-wrap">
          <div class="tr-code-body"><pre id="tr-code" class="tr-code"></pre></div>
        </div>
        <div class="tr-meta-grid" id="tr-meta-grid"></div>
        <div style="display:none;"><div id="tr-proficiency-bar"></div><span id="tr-proficiency-val"></span><canvas id="tr-wave"></canvas><div id="tr-compat-nodes"></div><span id="tr-code-tag"></span></div>
      </div>
    `;
  } else if (name === 'Redis') {
    return ambientBackgrounds + `
      <div class="panel-redis-pulse">
        <div class="redis-top">IN-MEMORY CACHE</div>
        <h3 id="tr-name" class="tr-name redis-heading"></h3>
        <div class="tr-holo-viewport redis-viewport" id="tr-holo-viewport">
          <canvas id="tr-holo-canvas" class="tr-holo-canvas"></canvas>
        </div>
        <p id="tr-desc" class="tr-desc redis-desc"></p>
        <div class="tr-code-wrap redis-code-wrap">
          <div class="tr-code-header"><span class="tr-code-tag" id="tr-code-tag"></span></div>
          <div class="tr-code-body"><pre id="tr-code" class="tr-code"></pre></div>
        </div>
        <div class="tr-meta-grid" id="tr-meta-grid"></div>
        <div style="display:none;"><div id="tr-proficiency-bar"></div><span id="tr-proficiency-val"></span><canvas id="tr-wave"></canvas><div id="tr-compat-nodes"></div></div>
      </div>
    `;
  } else {
    // Fallback for others (e.g. Tailwind CSS, Vite, etc.)
    return ambientBackgrounds + `
      <div class="panel-default">
        <div class="default-top">
          <span class="default-cat">${tech.cat}</span>
        </div>
        <h3 id="tr-name" class="tr-name default-heading"></h3>
        <div class="tr-holo-viewport default-viewport" id="tr-holo-viewport">
          <canvas id="tr-holo-canvas" class="tr-holo-canvas"></canvas>
        </div>
        <p id="tr-desc" class="tr-desc default-desc"></p>
        <div class="tr-code-wrap default-code-wrap">
          <div class="tr-code-header"><span class="tr-code-tag" id="tr-code-tag"></span></div>
          <div class="tr-code-body"><pre id="tr-code" class="tr-code"></pre></div>
        </div>
        <div class="tr-meta-grid" id="tr-meta-grid"></div>
        <div style="display:none;"><div id="tr-proficiency-bar"></div><span id="tr-proficiency-val"></span><canvas id="tr-wave"></canvas><div id="tr-compat-nodes"></div></div>
      </div>
    `;
  }
};
