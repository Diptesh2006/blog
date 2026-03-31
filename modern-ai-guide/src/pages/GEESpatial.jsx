import React from 'react';
import { 
  Globe, Cpu, Layers, 
  Map as MapIcon, Database, 
  Activity, BarChart3, Shield
} from 'lucide-react';
import Layout from '../components/Layout';
import Section from '../components/Section';
import CodeSnippet from '../components/CodeSnippet';
import NaturalCallout from '../components/GlassCard';
import FlowDiagram, { Node, Arrow } from '../components/FlowDiagram';

const GEESpatial = () => {
  const navLinks = [
    { id: 'foundations', label: 'GEE Foundations' },
    { id: 'client-server', label: 'Client vs Server' },
    { id: 'pipeline', label: 'Research Pipeline' },
    { id: 'methodology', label: '50m Grid Method' },
    { id: 'results', label: 'ML Risk Mapping' },
  ];

  return (
    <Layout pageLinks={navLinks}>
      <div className="max-w-4xl mx-auto px-10 lg:px-16 py-8 lg:py-12">
        <header id="hero" className="mb-4">
          <h1 className="leading-[1.1] tracking-[-0.04em] mb-4 text-gray-900 font-extrabold uppercase">
            Geospatial Risk Analytics
          </h1>
          <p className="text-xl text-gray-400 font-medium leading-normal max-w-3xl">
            Earth Observation & Machine Learning for Urban Safety. A deep dive into the <span className="highlight-tools">InGRASS 2025</span> research on Kolkata traffic risks.
          </p>
        </header>

        <Section id="foundations" title="GEE Foundations" subtitle="Planetary-Scale Computing.">
          <p>
            Google Earth Engine (GEE) represents a paradigm shift in environmental monitoring. It decouples <span className="highlight-llm">Data Storage</span> (petabytes of satellite imagery) from <span className="highlight-tools">Computation</span> (distributed Google servers).
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 my-6">
             <div className="p-4 border border-gray-100 bg-gray-50/30">
                <span className="text-[10px] font-black uppercase tracking-widest block mb-2 text-blue-500">The Data Catalog</span>
                <p className="text-[11px] text-gray-500 leading-tight">
                   Access to NASA's Landsat, Copernicus Sentinel, and MODIS datasets, pre-processed and ready for analysis without manual downloading.
                </p>
             </div>
             <div className="p-4 border border-gray-100 bg-gray-50/30">
                <span className="text-[10px] font-black uppercase tracking-widest block mb-1 text-orange-500">The API Surface</span>
                <p className="text-[11px] text-gray-500 leading-tight">
                   A JavaScript and Python interface that allows users to write simple scripts to trigger massive parallel operations on Google's Infrastructure.
                </p>
             </div>
          </div>

          <NaturalCallout className="bg-blue-50/20 border-blue-100 py-4 my-2">
             <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest block mb-1">Theoretical Core</span>
             <p className="text-sm font-bold text-gray-900 mb-0 leading-tight">
                GEE is not a database; it is a <span className="highlight-tools">Parallel Processing Engine</span>. It handles petabytes of satellite imagery using Google's distributed file system.
             </p>
          </NaturalCallout>
        </Section>

        <Section id="client-server" title="Client vs. Server Side" subtitle="Understanding Proxy Objects.">
          <p>
            This is the fundamental hurdle for GEE beginners. You write JavaScript, but you are not manipulating local data. You are creating <span className="highlight-llm">Execution Graphs</span>.
          </p>
          <CodeSnippet title="The Wrong Loop" code={`// This will FAIL for large datasets
for (var i=0; i<10; i++) {
  print(ee.Number(i)); // Sending 10 separate requests is inefficient
}`} />
          <p className="mt-4">
             The script you write is the "Client". The "Server" is where the actual math happens. When you call an <span className="highlight-tools">ee.*</span> function, you are just building a proxy reference to a future computation. This is known as <span className="highlight-llm">Lazy Evaluation</span>.
          </p>
        </Section>

        <Section id="pipeline" title="The InGRASS Pipeline" subtitle="From Raw Imagery to Risk Models.">
           <p className="mb-6">
              The <span className="highlight-tools">InGRASS 2025</span> methodology integrates multi-source geospatial data into a unified predictive framework.
           </p>
           <FlowDiagram className="py-10 bg-gray-50/50 rounded-2xl border border-gray-100 mb-8">
              <Node icon={Globe} label="Earth Observation" sublabel="Sentinel-2 / GEE" color="llm" />
              <Arrow />
              <Node icon={Layers} label="50m Grid Gen" sublabel="Spatial Unit" color="rag" />
              <Arrow />
              <Node icon={Database} label="POIs & Traffic" sublabel="Feature Engineering" color="tools" />
              <Arrow />
              <Node icon={Cpu} label="ML Training" sublabel="Random Forest / XGB" color="agents" />
              <Arrow />
              <Node icon={BarChart3} label="Risk Mapping" sublabel="Final Output" color="llm" />
           </FlowDiagram>
        </Section>

        <Section id="methodology" title="Grid-Based Methodology" subtitle="Spatial Feature Engineering at Scale.">
          <p>
            The urban landscape of Kolkata was divided into a uniform grid of <span className="highlight-rag">50m x 50m cells</span>. This resolution balances computational efficiency with the granular detail required for urban safety analysis.
          </p>
          <div className="grid md:grid-cols-2 gap-8 my-6">
             <div>
                <h4 className="text-[10px] font-black uppercase mb-2 opacity-40">Euclidean Distance Proxies</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                   Instead of raw counts, we calculate the minimum distance to critical POIs (Schools, Hospitals, Markets). These serve as continuous variables representing <span className="highlight-agents">Pedestrian Vulnerability</span>.
                </p>
             </div>
             <CodeSnippet title="Distance Reducer" code={`var distance = poi.distance({
  searchRadius: 1000, 
  maxError: 1
});
var grid_dist = grid.map(f => f.set({
  'dist': distance.reduceRegion(ee.Reducer.min())
}));`} />
          </div>
        </Section>

        <Section id="results" title="ML Integration & Results" subtitle="Random Forest Superiority.">
          <p>
            The research compared multiple regressors. While XGBoost provided fast inference, the <span className="highlight-llm">Random Forest Regressor</span> proved more robust against the spatial noise of accident data.
          </p>
          
          <div className="overflow-x-auto my-6">
             <table className="w-full text-left font-mono text-[10px]">
                <thead className="border-b-2 border-gray-900 uppercase font-black tracking-widest text-gray-400">
                   <tr>
                      <th className="py-2">Metric</th>
                      <th className="py-2">Random Forest</th>
                      <th className="py-2">XGBoost</th>
                   </tr>
                </thead>
                <tbody className="font-bold">
                   <tr className="border-b border-gray-50">
                      <td className="py-3">R² Score</td>
                      <td className="py-3 text-green-600">0.88</td>
                      <td className="py-3">0.81</td>
                   </tr>
                   <tr className="border-b border-gray-50">
                      <td className="py-3">NRMSE</td>
                      <td className="py-3 text-green-600">0.05</td>
                      <td className="py-3">0.04</td>
                   </tr>
                   <tr className="border-b border-gray-50">
                      <td className="py-3">Stability</td>
                      <td className="py-3 highlight-agents">High</td>
                      <td className="py-3 text-orange-500">Medium</td>
                   </tr>
                </tbody>
             </table>
          </div>

          <NaturalCallout className="bg-green-50/20 border-green-100 py-6 my-4">
             <span className="text-[10px] font-black text-green-600 uppercase tracking-widest block mb-2">Scientific Conclusion</span>
             <p className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                Transitioning from <span className="highlight-rag">Descriptive Blackspots</span> to <span className="highlight-agents">Predictive Risk Surfaces</span>.
             </p>
             <p className="text-xs text-gray-500 font-medium">
                By integrating GEE's planetary data with local accident records, we can forecast high-risk zones for 2023 with 88% variance explanation.
             </p>
          </NaturalCallout>
        </Section>
      </div>
    </Layout>
  );
};

export default GEESpatial;
