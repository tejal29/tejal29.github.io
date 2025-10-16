import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './components/Layout';
import Home from './pages/Home';
import MathCorner from './pages/Mathcorner';
import Projects from './pages/Projects';

// Create a client
const queryClient = new QueryClient();

// Placeholder components for missing pages

const Resources = () => (
  <div className="min-h-screen py-12 bg-gradient-to-b from-orange-50 via-amber-50 to-yellow-50">
    <div className="max-w-4xl mx-auto px-6">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">About</h1>
        <p className="text-xl text-gray-600">Learn more about my background, skills, and experience as a software developer.</p>
      </div>
      
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
        <div className="text-center mb-8">
          <div className="w-32 h-32 mx-auto mb-6">
            <img 
              src="/src/profile.jpeg" 
              alt="Tejal Desai" 
              className="w-full h-full rounded-full object-cover border-4 border-orange-200 shadow-lg"
            />
          </div>
          <h2 className="text-3xl font-bold mb-4">Tejal Desai</h2>
          <p className="text-xl text-gray-600 mb-6">Software Engineer | EdTech Builder | Mentor</p>
        </div>
        
        <div className="prose max-w-none mb-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Hi, I'm Tejal — a software developer and educator passionate about making learning more accessible, creative, and fun. After years of experience at Google, where I led infrastructure and developer tooling projects, I decided to bring my skills to the world of education.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            My passion for teaching was sparked through open-source mentoring. Over four years, I supported aspiring software engineers — both within Google and through programs like Outreachy — especially those from underrepresented backgrounds. That experience made me realize how much I enjoy guiding others and eventually inspired me to start working with kids.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I'm the creator of <a href="https://brickmasterai.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-semibold">BrickMaster AI</a>, a full-stack platform that combines generative AI and LEGO building to teach architecture and STEM concepts to children aged 7–13. What began as a weekend project with my own child has grown into an interactive learning tool that sparks creativity and curiosity.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I also tutor elementary and middle school students in Scratch and Python, designing personalized lessons that make programming feel approachable and rewarding. Whether I'm coding a backend system or helping a young learner write their first loop, I believe in the power of curiosity and project-based learning to unlock potential.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Let's build something meaningful together.
          </p>
        </div>
        
        <div className="flex justify-center">
          <a 
            href="https://www.linkedin.com/in/tejalmdesai/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
            </svg>
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout currentPageName="Home">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/MathCorner" element={<MathCorner />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Resources" element={<Resources />} />
          </Routes>
        </Layout>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
