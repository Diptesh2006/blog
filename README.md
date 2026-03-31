# AI Agents: Technical Portal

An ultra-dense, multi-page technical portal explaining the architecture of modern AI systems and providing from-scratch implementations for LLMs, Diffusion Models, and Geospatial Analysis.

## Features
- **Multi-Page Routing**: Dedicated deep-dives for AI Evolution, Transformers, DDPMs, and GEE Spatial analysis.
- **Natural Density**: Ultra-tight typography (0.125rem spacing) for maximum information density.
- **Colour-Coded Accents**: Concept-based highlighting system (highlight-llm, highlight-rag, etc.) instead of traditional bolding.
- **Technical Visuals**: Custom-built architectural diagrams using Lucide icons and Tailwind.
- **Educational Flow**: Deep-dives into the RAG Spectrum, GraphRAG, and Agentic Orchestration.

## Tech Stack
- **React 19** & **React Router 7**
- **Vite 8**
- **Tailwind CSS 4**
- **Lucide React** & **Framer Motion**

## Structure
- `src/pages/ModernAIGuide.jsx`: The core 16-section evolution guide.
- `src/pages/LLMScratch.jsx`: Implementing a Decoder-only Transformer in PyTorch.
- `src/pages/DDPMScratch.jsx`: Denoising Diffusion Probabilistic Models math and U-Net logic.
- `src/pages/GEESpatial.jsx`: Google Earth Engine patterns for planetary-scale data.

## Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

## Deployment to GitHub Pages

1. **Install gh-pages**:
   ```bash
   npm install gh-pages --save-dev
   ```

2. **Update `vite.config.js`**:
   Add `base: '/repo-name/'` to the config.

3. **Deploy Script**:
   Ensure `predeploy` and `deploy` are in `package.json`.
