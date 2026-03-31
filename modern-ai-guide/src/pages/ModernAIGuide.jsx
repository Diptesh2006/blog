import React, { useEffect } from 'react';
import { 
  Zap, Cpu, Database, 
  Search, ShieldCheck, 
  Repeat, ArrowRight, Layers,
  Terminal, Share2, Compass, Boxes
} from 'lucide-react';
import { cn } from '../utils/cn';
import NaturalCallout from '../components/GlassCard';
import Section from '../components/Section';
import CodeSnippet from '../components/CodeSnippet';
import FlowDiagram, { Node, Arrow } from '../components/FlowDiagram';
import Layout from '../components/Layout';

const ModernAIGuide = () => {
  const navLinks = [
    { id: 'hero', label: 'The Evolution' },
    { id: 'basics', label: 'Understanding LLMs' },
    { id: 'problem', label: 'The Core Problem' },
    { id: 'level1', label: 'Level 1: Stateless' },
    { id: 'level2', label: 'Level 2: RAG' },
    { id: 'level2-5', label: 'Level 2.5: RAG Spectrum' },
    { id: 'level3', label: 'Level 3: Tool Calling' },
    { id: 'level4', label: 'Level 4: Agentic' },
    { id: 'graphrag', label: 'GraphRAG' },
    { id: 'build-agent', label: 'Build Your Agent' },
    { id: 'react', label: 'ReAct Pattern' },
    { id: 'memory', label: 'Memory Systems' },
    { id: 'frameworks', label: 'LangChain vs Graph' },
    { id: 'multi-agent', label: 'Multi-Agent Systems' },
    { id: 'pipeline', label: 'The AI Pipeline' },
    { id: 'comparison', label: 'One Problem, 4 Systems' },
    { id: 'decision', label: 'When to Use What' },
    { id: 'casestudy', label: 'Travel Case Study' },
    { id: 'takeaway', label: 'Final Takeaway' },
    { id: 'resources', label: 'Recommended Resources' },
  ];

  return (
    <Layout pageLinks={navLinks}>
      <div className="max-w-4xl mx-auto px-10 lg:px-16 py-8 lg:py-12">
      <header id="hero" className="mb-4">
        <h1 className="leading-[1.1] tracking-[-0.04em] mb-6 text-gray-900 font-extrabold uppercase">
          AI Agents
        </h1>
        <p className="text-xl text-gray-400 font-medium leading-normal max-w-3xl">
          A practical, beginner-friendly guide to how <span className="highlight-llm">Modern AI</span> actually works. Decoupling <span className="highlight-llm">Reasoning</span> from <span className="highlight-tools">Execution</span>.
        </p>
        <div className="mt-2 border-l-4 border-blue-50 pl-6 py-2">
           <p className="text-gray-500 text-sm italic">
              When most people first encounter AI, they interact with something like ChatGPT. While impressive, it is only the starting point. Modern systems are not just answering questions—they are <span className="highlight-rag">Retrieving Information</span>, <span className="highlight-tools">Using Tools</span>, and taking multiple steps to complete a task.
           </p>
        </div>
      </header>

      {/* SECTION 1: BASICS */}
      <Section id="basics" title="Understanding a Basic LLM" subtitle="Predicting the Next Word.">
        <p>
          At its core, a large language model (<a href="https://huggingface.co/docs/transformers/main_classes/tokenizer" target="_blank" rel="noopener" className="highlight-llm">LLM</a>) works by predicting the next token in a sequence. It does not “know” facts like humans. Instead, it calculates <span className="highlight-llm">Probabilities</span> for possible next words based on numerical patterns.
        </p>
        <CodeSnippet title="Input: 'AI is'" code={`{
  "powerful": 0.6,
  "growing": 0.2,
  "dangerous": 0.1
}`} />
        <p>
          LMs are fundamentally <span className="highlight-llm">Probability Machines</span>, not perfectly reliable knowledge systems. This explains why they can sometimes generate different answers for the same prompt—a process often called hallucination.
        </p>
      </Section>

      {/* SECTION 2: THE PROBLEM */}
      <Section id="problem" title="The Core Problem" subtitle="Thinking vs. Doing.">
        <p>
          A basic LLM is limited. It does not have access to your <span className="highlight-rag">Private Data</span>, real-time info, or the ability to call <span className="highlight-tools">APIs</span>. Using an LLM alone is not enough for real applications.
        </p>
        <NaturalCallout className="border-gray-200 bg-gray-50/20 py-4 my-2">
           <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">Modern Shift</span>
           <p className="text-lg font-bold text-gray-900 mb-0 leading-tight">
              The <span className="highlight-llm">LLM</span> is used for <span className="highlight-llm">Thinking</span>, while <span className="highlight-tools">Code</span> is used for <span className="highlight-tools">Doing</span>.
           </p>
        </NaturalCallout>
      </Section>

      {/* LEVEL 1: STATELESS */}
      <Section id="level1" title="Level 1: Stateless LLM" subtitle="Direct Pattern Recognition.">
        <p>
          In this setup, you directly call the model. It has no memory and no connection to real-world context. While useful for creative drafting, it often guesses details.
        </p>
        <CodeSnippet title="Python Invocation" code={`response = llm.invoke("Write a trip plan")`} />
      </Section>

      {/* LEVEL 2: RAG DEEP DIVE */}
      <Section id="level2" title="Level 2: RAG Foundations" subtitle="Retrieval-Augmented Generation.">
        <p>
          To improve accuracy and relevance, we introduce <span className="highlight-rag">Retrieval</span>. Instead of relying only on the model’s internal (and potentially outdated) weights, we anchor the generation in external, verified <span className="highlight-rag">Context</span>.
        </p>
        
        <div className="my-8">
           <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">The Standard RAG Pipeline</h4>
           <FlowDiagram className="py-8 bg-gray-50/50 rounded-xl border border-gray-100">
              <Node icon={Database} label="Knowledge Base" sublabel="PDFs/Docs" color="gray" />
              <Arrow />
              <Node icon={Cpu} label="Embedding" sublabel="Vectorization" color="llm" />
              <Arrow />
              <Node icon={Layers} label="Vector Store" sublabel="Indexing" color="rag" />
              <Arrow />
              <Node icon={Search} label="Retrieval" sublabel="Query" color="tools" />
              <Arrow />
              <Node icon={Zap} label="LLM Gen" sublabel="Augmented" color="agents" />
           </FlowDiagram>
        </div>

        <NaturalCallout className="bg-green-50/20 border-green-100 py-6 my-6">
           <span className="text-[10px] font-black text-green-600 uppercase tracking-widest block mb-2">Theoretical Core</span>
           <p className="text-xl font-bold text-gray-900 mb-2 leading-tight">
              RAG solves the <span className="highlight-llm">Knowledge Cutoff</span> and <span className="highlight-rag">Hallucination</span> problems by providing "Ground Truth" at inference time.
           </p>
           <p className="text-xs text-gray-500 font-medium">
              By separating the LLM (Reasoning Engine) from the Knowledge (Data Source), we create systems that are verifiable and updateable without retraining.
           </p>
        </NaturalCallout>
      </Section>

      {/* LEVEL 2.5: THE RAG SPECTRUM */}
      <Section id="level2-5" title="The RAG Spectrum" subtitle="Vectored, Vectorless, and Graph-based Architectures.">
        <p className="text-sm text-gray-500 mb-8">
          Not all retrieval is the same. Depending on your data structure—be it messy PDFs, organized tables, or complex relationships—you need a specific "search" strategy.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 my-8">
           {/* VECTORED RAG */}
           <div className="p-6 border border-gray-100 bg-white shadow-sm flex flex-col h-full rounded-xl">
              <span className="text-[10px] font-black uppercase tracking-widest block mb-3 text-blue-600">Vectored RAG</span>
              <p className="text-sm font-bold text-gray-900 mb-4">Semantic Similarity Search</p>
              <div className="space-y-4 flex-grow">
                <p className="text-sm text-gray-600 leading-relaxed">
                  The most common type. It converts text into lists of numbers called <span className="highlight-llm">Vectors</span>. When you ask a question, the system finds text with "numbers" that are mathematically close to your query.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Best for large, unstructured datasets like a library of research papers where you need to find "similar" topics regardless of exact keywords.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-50 text-sm font-medium text-blue-500">
                Key: "Math-based similarity"
              </div>
           </div>

           {/* VECTORLESS RAG */}
           <div className="p-6 border border-gray-100 bg-white shadow-sm flex flex-col h-full rounded-xl">
              <span className="text-[10px] font-black uppercase tracking-widest block mb-3 text-green-600">Vectorless RAG</span>
              <p className="text-sm font-bold text-gray-900 mb-4">Structural Reasoning</p>
              <div className="space-y-4 flex-grow">
                <p className="text-sm text-gray-600 leading-relaxed">
                  Instead of using math vectors, this approach uses the LLM to navigate the <span className="highlight-rag">Document Structure</span>. It reads tables of contents, headings, and indexes just like a human would.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  It eliminates embedding costs and prevents "similarity traps" where the AI gets distracted by words that look similar but have different meanings in context.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-50 text-sm font-medium text-green-500">
                Key: "Navigation & Logic"
              </div>
           </div>

           {/* GRAPH-BASED RAG */}
           <div className="p-6 border border-gray-100 bg-white shadow-sm flex flex-col h-full rounded-xl">
              <span className="text-[10px] font-black uppercase tracking-widest block mb-3 text-purple-600">Graph-based RAG</span>
              <p className="text-sm font-bold text-gray-900 mb-4">Relational Traversal</p>
              <div className="space-y-4 flex-grow">
                <p className="text-sm text-gray-600 leading-relaxed">
                  The most advanced form. It extracts "Entities" (People, Places) and their <span className="highlight-agents">Relationships</span> to build a web of interconnected knowledge.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  If you ask "How does Project X affect Person Y?", a standard search might fail, but GraphRAG "walks" through the relationships to connect the dots across different files.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-50 text-sm font-medium text-purple-500">
                Key: "Connecting the Dots"
              </div>
           </div>
        </div>

        <div className="space-y-4 my-8">
           <h4 className="text-[11px] font-black uppercase tracking-widest text-gray-900">Beginner Decision Guide</h4>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { t: 'Vectored', d: 'Use when you have thousands of random documents and need general search.' },
                { t: 'Vectorless', d: 'Use for complex legal or technical manuals with deep hierarchical structures.' },
                { t: 'Graph-based', d: 'Use when connections between data points matter more than the text itself.' }
              ].map((tech, i) => (
                <div key={i} className="p-4 border border-gray-50 bg-gray-50/30 rounded-lg">
                   <span className="block text-sm font-bold text-gray-900 mb-1">{tech.t}</span>
                   <span className="text-sm text-gray-500 leading-relaxed block">{tech.d}</span>
                </div>
              ))}
           </div>
        </div>
      </Section>

      {/* LEVEL 3: TOOL CALLING */}
      <Section id="level3" title="Level 3: Tool Calling" subtitle="Interacting with the Real World.">
        <p>
          This allows the model to trigger <span className="highlight-tools">APIs</span> or functions. By binding a <a href="https://docs.pydantic.dev/" target="_blank" rel="noopener" className="highlight-tools">Pydantic Schema</a> to the model, we can receive structured data to execute actions.
        </p>
        <CodeSnippet title="Tool Binding Logic" code={`from pydantic import BaseModel, Field

class GetWeather(BaseModel):
    city: str = Field(description="The city name")

# Connection to model
llm_with_tools = llm.bind_tools([GetWeather])`} />
        <p>
          Tools enable <span className="highlight-tools">Action</span>. The model does not guess; it requests real data from a trusted source.
        </p>
      </Section>

      {/* LEVEL 4: AGENTIC */}
      <Section id="level4" title="Level 4: Agentic Systems" subtitle="Autonomous Loop Management.">
        <p>
          The system works in a loop. It takes a goal, decides steps, executes them, and evaluates results. This iterative <span className="highlight-agents">Orchestration</span> allows it to solve complex tasks independently.
        </p>
        <CodeSnippet title="Agent Loop Logic" code={`while not done:
    thought = llm.invoke(state) # Reasoning
    action = decide(thought)    # Step selection
    result = run(action)        # API execution
    state.append(result)        # Memory Update`} />
      </Section>

      {/* GRAPHRAG */}
      <Section id="graphrag" title="GraphRAG" subtitle="Navigating Hidden Connections.">
        <p>
          Standard RAG captures <span className="highlight-rag">Similarity</span>, but GraphRAG captures <span className="highlight-rag">Relationships</span>. By building a Knowledge Graph of entities and their links, we can answer global questions like "How do these two unrelated reports interact?".
        </p>
        <FlowDiagram className="py-6 border-y border-gray-50 my-4">
           <Node label="Extract Entities" color="llm" />
           <Arrow />
           <Node label="Map Relationships" color="rag" />
           <Arrow />
           <Node label="Build Communities" color="agents" />
           <Arrow />
           <Node label="Global Summary" color="llm" />
        </FlowDiagram>
      </Section>

      {/* BUILD YOUR AGENT */}
      <Section id="build-agent" title="Steps to Build Your Agent" subtitle="From Zero to Orchestration.">
        <p>Building an autonomous system requires a structured implementation path.</p>
        <div className="space-y-2 mt-4">
           {[
             { s: '01', t: 'Define Schema', d: 'Describe what your tools can actually do using Pydantic.', c: 'highlight-tools' },
             { s: '02', t: 'Binding', d: 'Connect your tool definitions to the LLMs "Thought" engine.', c: 'highlight-llm' },
             { s: '03', t: 'Control Loop', d: 'Implement a while loop (or LangGraph node) for iteration.', c: 'highlight-agents' },
             { s: '04', t: 'State Management', d: 'Design a system to track what the agent has learned.', c: 'highlight-rag' },
             { s: '05', t: 'Short-term Memory', d: 'Inject recent conversation history into every prompt.', c: 'highlight-llm' }
           ].map((item, i) => (
             <div key={i} className="flex gap-6 items-start py-2">
                <span className="text-[10px] font-black text-gray-200 mt-1">{item.s}</span>
                <div>
                   <span className={cn("text-xs font-black uppercase tracking-widest block", item.c)}>{item.t}</span>
                   <p className="text-[11px] text-gray-500 m-0">{item.d}</p>
                </div>
             </div>
           ))}
        </div>
      </Section>

      {/* SECTION 8: REACT */}
      <Section id="react" title="The ReAct Pattern" subtitle="Reason + Act.">
        <p>
          Intelligence comes not from one response, but from <span className="highlight-agents">Iteration</span>. The system alternates between thinking and doing in a continuous cycle.
        </p>
        <div className="flex gap-4 items-center p-4 border border-gray-100 bg-gray-50 uppercase font-black text-[10px] tracking-widest my-2">
           <span className="highlight-llm">Think</span>
           <ArrowRight className="w-3 h-3 text-gray-300" />
           <span className="highlight-tools">Act</span>
           <ArrowRight className="w-3 h-3 text-gray-300" />
           <span className="highlight-rag">Observe</span>
           <ArrowRight className="w-3 h-3 text-gray-300" />
           <span className="highlight-llm">Reflect</span>
           <ArrowRight className="w-3 h-3 text-gray-300" />
           <span className="highlight-agents">Repeat</span>
        </div>
      </Section>

      {/* SECTION 9: MEMORY */}
      <Section id="memory" title="Memory Systems" subtitle="Maintaining Context Over Time.">
        <p>
          <span className="highlight-llm">Short-term Memory</span> includes the current conversation (Message History). <span className="highlight-rag">Long-term Memory</span> stores persistent user data in <a href="https://www.pinecone.io/" target="_blank" rel="noopener" className="highlight-rag">Vector Databases</a>.
        </p>
        <div className="grid md:grid-cols-2 gap-4 my-4">
           <div>
              <h4 className="text-xs uppercase font-black mb-2 opacity-30">Short-Term</h4>
              <CodeSnippet code={`messages.append({"role": "user", "content": query})`} />
           </div>
           <div>
              <h4 className="text-xs uppercase font-black mb-2 opacity-30">Long-Term</h4>
              <CodeSnippet code={`vectorstore.add_documents(user_prefs)`} />
           </div>
        </div>
      </Section>

      {/* SECTION 10: FRAMEWORKS */}
      <Section id="frameworks" title="LangChain vs. LangGraph" subtitle="Blocks vs. Control.">
         <p>
            <a href="https://www.langchain.com" target="_blank" rel="noopener" className="highlight-llm">LangChain</a> is for connecting components like prompts and tools into simple pipelines. It provides the building blocks.
         </p>
         <p>
            <a href="https://langchain-ai.github.io/langgraph/" target="_blank" rel="noopener" className="highlight-agents">LangGraph</a> allows you to define workflows as <span className="highlight-agents">Cyclic Graphs</span> with nodes and edges. It provides total control over branching and retries.
         </p>
         <CodeSnippet title="Graph Definition" code={`graph.add_node("search", search_node)
graph.add_node("planner", planner_node)
graph.add_edge("search", "planner")`} />
      </Section>

      {/* SECTION 11: MULTI-AGENT */}
      <Section id="multi-agent" title="Multi-Agent Systems" subtitle="Scaling Complexity with CrewAI.">
         <p>
            As systems grow, a single agent may not be enough. <a href="https://www.crewai.com" target="_blank" rel="noopener" className="highlight-agents">CrewAI</a> allows multiple agents to collaborate, each with a specific role.
         </p>
         <CodeSnippet title="Collaborative Crew" code={`researcher = Agent(role="Researcher", goal="Find best places")
planner = Agent(role="Planner", goal="Create itinerary")

crew = Crew(agents=[researcher, planner], tasks=[t1, t2])
result = crew.run()`} />
      </Section>

      {/* SECTION 12: PIPELINE */}
      <Section id="pipeline" title="Putting It All Together" subtitle="The Modern AI Stack.">
         <div className="p-8 bg-gray-50 border border-gray-100 font-bold text-sm tracking-tight leading-relaxed">
            <span className="highlight-llm">Input</span> &rarr; 
            <span className="highlight-llm"> Reasoning</span> &rarr; 
            <span className="highlight-rag"> Retrieval</span> &rarr; 
            <span className="highlight-tools"> Tools</span> &rarr; 
            <span className="highlight-llm"> Memory</span> &rarr; 
            <span className="highlight-agents"> Orchestration</span> &rarr; 
            <span className="highlight-llm"> Output</span>
         </div>
      </Section>

      {/* SECTION 13: COMPARISON */}
      <Section id="comparison" title="One Problem, 4 Systems" subtitle="Comparing approaches to 'Plan a Trip'.">
         <div className="space-y-4 my-6">
            {[
              { l: 'Simple LLM', d: 'Guesses everything based on fixed training data.', c: 'highlight-llm' },
              { l: 'RAG System', d: 'Uses static travel documents for grounding.', c: 'highlight-rag' },
              { l: 'Tool System', d: 'Fetches live flight and weather data.', c: 'highlight-tools' },
              { l: 'Agent', d: 'Combines all of these and solves the problem step by step.', c: 'highlight-agents' }
            ].map((item, i) => (
              <div key={i} className="flex gap-10 items-start border-b border-gray-50 pb-4">
                 <span className={cn("text-sm font-black uppercase tracking-widest w-40", item.c)}>{item.l}</span>
                 <p className="text-sm text-gray-500 m-0">{item.d}</p>
              </div>
            ))}
         </div>
      </Section>

      {/* SECTION 14: DECISION MATRIX */}
      <Section id="decision" title="When to Use What">
         <div className="overflow-x-auto my-6">
            <table className="w-full text-left font-mono text-[10px]">
               <thead className="border-b-2 border-gray-900 uppercase font-black tracking-widest text-gray-400">
                  <tr>
                     <th className="py-2">Task</th>
                     <th className="py-2">Recommended Solution</th>
                  </tr>
               </thead>
               <tbody className="font-bold">
                  <tr className="border-b border-gray-50">
                     <td className="py-3">Writing or Summarizing</td>
                     <td className="py-3 highlight-llm">Simple LLM</td>
                  </tr>
                  <tr className="border-b border-gray-50">
                     <td className="py-3">Document-based Q&A</td>
                     <td className="py-3 highlight-rag">RAG</td>
                  </tr>
                  <tr className="border-b border-gray-50">
                     <td className="py-3">Real-time Data Fetching</td>
                     <td className="py-3 highlight-tools">Tools</td>
                  </tr>
                  <tr className="border-b border-gray-50">
                     <td className="py-3">Multi-step Tasks</td>
                     <td className="py-3 highlight-agents">Agents (LangGraph)</td>
                  </tr>
                  <tr className="border-b border-gray-50">
                     <td className="py-3">Team Collaboration</td>
                     <td className="py-3 highlight-agents">Multi-Agent (CrewAI)</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </Section>

      {/* SECTION 15: CASE STUDY */}
      <Section id="casestudy" title="Case Study: Travel Agent" subtitle="Practical autonomous orchestration.">
         <p>The <a href="https://github.com/Diptesh2006/Travel-Planning-Agent" target="_blank" rel="noopener" className="highlight-agents">Travel-Planning-Agent</a> is a concrete implementation of a Level 4 system. It uses an autonomous loop to orchestrate <a href="https://tavily.com" target="_blank" rel="noopener" className="highlight-tools">Tavily Search</a> for live flight data and <a href="https://open-meteo.com" target="_blank" rel="noopener" className="highlight-tools">Open-Meteo</a> for climate grounding. The agent continues searching and refining until it constructs a complete itinerary within user-defined budget and weather constraints.</p>
         <FlowDiagram className="py-4">
            <Node label="User Request" color="llm" />
            <Arrow />
            <Node icon={Search} label="Tavily API" color="tools" />
            <Arrow />
            <Node icon={Repeat} label="Planner Loop" color="agents" />
         </FlowDiagram>
      </Section>

      {/* SECTION 16: TAKEAWAY */}
      <Section id="takeaway" title="Final Takeaway">
         <div className="p-10 bg-gray-50 border border-gray-100 mt-10">
            <h3 className="text-4xl font-extrabold text-gray-900 tracking-tighter mb-8 leading-tight">
               From systems that generate <span className="highlight-llm">Text</span> to systems that perform <span className="highlight-agents">Tasks</span>.
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
               {[
                 { l: 'Prompting', d: 'Generates Text' },
                 { l: 'RAG', d: 'Adds Knowledge' },
                 { l: 'Tools', d: 'Performs Actions' },
                 { l: 'Agents', d: 'Manages Workflows' },
                 { l: 'Swarms', d: 'Scales Complexity' }
               ].map((t, i) => (
                 <div key={i} className="text-center">
                    <span className="block text-[9px] font-black uppercase text-gray-400 mb-1">{t.l}</span>
                    <span className="text-[11px] font-bold tracking-tight">{t.d}</span>
                 </div>
               ))}
            </div>
         </div>
      </Section>

      {/* SECTION 17: RESOURCES */}
      <Section id="resources" title="Recommended Resources" subtitle="Master the Evolution.">
         <div className="grid md:grid-cols-3 gap-8 my-10">
            <div>
               <h4 className="text-[10px] font-black uppercase highlight-llm mb-4">Official Documentation</h4>
               <ul className="space-y-1 text-sm font-medium">
                  <li><a href="https://langchain-ai.github.io/langgraph/" target="_blank" rel="noopener" className="hover:text-blue-600 transition-colors">LangGraph Docs</a></li>
                  <li><a href="https://www.crewai.com" target="_blank" rel="noopener" className="hover:text-blue-600 transition-colors">CrewAI Documentation</a></li>
                  <li><a href="https://docs.pydantic.dev/" target="_blank" rel="noopener" className="hover:text-blue-600 transition-colors">Pydantic Schema Docs</a></li>
                  <li><a href="https://groq.com" target="_blank" rel="noopener" className="hover:text-blue-600 transition-colors">Groq Inference SDK</a></li>
               </ul>
            </div>
            <div>
               <h4 className="text-[10px] font-black uppercase highlight-rag mb-4">Top Repositories</h4>
               <ul className="space-y-1 text-sm font-medium">
                  <li><a href="https://github.com/microsoft/ai-agents-for-beginners" target="_blank" rel="noopener" className="hover:text-green-600 transition-colors">Microsoft: Agents for Beginners</a></li>
                  <li><a href="https://github.com/Diptesh2006/500-AI-Agents-Projects" target="_blank" rel="noopener" className="hover:text-green-600 transition-colors">500+ AI Agent Use Cases</a></li>
                  <li><a href="https://github.com/Diptesh2006/Travel-Planning-Agent" target="_blank" rel="noopener" className="hover:text-green-600 transition-colors">Travel Planning Agent</a></li>
                  <li><a href="https://github.com/langchain-ai/langgraph" target="_blank" rel="noopener" className="hover:text-green-600 transition-colors">LangGraph Reference</a></li>
               </ul>
            </div>
            <div>
               <h4 className="text-[10px] font-black uppercase highlight-tools mb-4">Video & Courses</h4>
               <ul className="space-y-1 text-sm font-medium">
                  <li><a href="https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/" target="_blank" rel="noopener" className="hover:text-orange-600 transition-colors">DeepLearning.AI: LangGraph Course</a></li>
                  <li><a href="https://www.youtube.com/@AndrejKarpathy" target="_blank" rel="noopener" className="hover:text-orange-600 transition-colors">Andrej Karpathy: Intro to LLMs</a></li>
                  <li><a href="https://www.youtube.com/c/LangChain" target="_blank" rel="noopener" className="hover:text-orange-600 transition-colors">LangChain Official YouTube</a></li>
                  <li><a href="https://www.youtube.com/@GregKamradt" target="_blank" rel="noopener" className="hover:text-orange-600 transition-colors">Data Independent (Greg Kamradt)</a></li>
               </ul>
            </div>
         </div>
         <p className="text-gray-400 text-xs italic border-t border-gray-50 pt-8 mt-10">
            Foundations are built on curiosity. Explore these resources to deepen your understanding of the agentic shift.
         </p>
      </Section>

    </div>
    </Layout>
  );
};

export default ModernAIGuide;
