import { Timeline } from './components/Timeline';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Awards from './components/Awards';
import { InfiniteMovingCards } from './components/ui/infinite-moving-cards';
import { WobbleCard } from './components/ui/wobble-card';
import './index.css';

// Import local images
import enrichifyImage from './assets/enrichify.png';
import researchImage from './assets/analyzing_dynamical.png';
import nexstepImage from './assets/nexstep.png';
import credaImage from './assets/creda.png';
import showpilotImage from './assets/showpilot.png';

function App() {
  const timelineData = [
    {
      title: "2025",
      content: (
        <div className="space-y-2">
          <p className="font-medium">DuckDB | Open Source Contributor</p>
          <p className="text-sm text-neutral-400">Oct. 2025 - Present</p>
          <p className="text-sm text-neutral-400">C++, SQL, Database Internals, Git</p>
          <p className="text-sm text-neutral-400">Debugged catalog errors on column constraints; modified C++ schema validation and wrote SQL logic regression tests</p>
          <p className="text-sm text-neutral-400">Collaborated with core maintainers—merged PRs and improved constraint handling in catalog, parser, and planner</p>
          <div className="mt-2">
            <a href="https://github.com/duckdb/duckdb" target="_blank" rel="noopener noreferrer">
              <img src="/duckdb/duckdb.svg" alt="DuckDB Logo" className="w-32 hover:opacity-80 transition-opacity cursor-pointer" />
            </a>
          </div>

          <p className="font-medium mt-4">Research Analyst at University of Texas at Austin</p>
          <p className="text-sm text-neutral-400">Apr 2025 - Present</p>
          <p className="text-sm text-neutral-400">Worked with Dr. Justin Hart in Autonomous Robots Lab, focusing on reinforcement learning and computer vision algorithms</p>
          <p className="text-sm text-neutral-400">Developing AI/ML models to improve human-robot interaction, scene understanding, and decision-making</p>

          <p className="font-medium mt-4">Aerodynamics Engineer at Longhorn Racing (Formula SAE)</p>
          <p className="text-sm text-neutral-400">Sept. 2025 - Present</p>
          <p className="text-sm text-neutral-400">Designing and optimizing aerodynamic components for UT Austin's Formula SAE race car</p>
          <p className="text-sm text-neutral-400">Using CFD analysis and wind tunnel testing to improve downforce and reduce drag</p>
          <div className="mt-2 grid grid-cols-3 gap-2">
            <img src="/lhr_aero_car.png" alt="Longhorn Racing Car" className="rounded-lg w-full h-48 object-cover" />
            <img src="/lhr_aero_shell.png" alt="Longhorn Racing Aero Shell" className="rounded-lg w-full h-48 object-cover" />
            <img src="/lhr_car.png" alt="Longhorn Racing Race Car" className="rounded-lg w-full h-48 object-cover" />
          </div>

          <p className="font-medium mt-4">Member at Texas Blockchain</p>
          <p className="text-sm text-neutral-400">Sept. 2025 - Present</p>
          <p className="text-sm text-neutral-400">Collaborating on blockchain development projects and exploring decentralized technologies</p>
          <p className="text-sm text-neutral-400">Participating in hackathons and building Web3 applications</p>

          <p className="font-medium mt-4">Palantir @ UT Hackathon Project</p>
          <p className="text-sm text-neutral-400">Sept. 2025</p>
          <p className="text-sm text-neutral-400">Developed innovative solution at university hackathon sponsored by Palantir</p>
          <div className="mt-2 rounded-lg overflow-hidden max-w-3xl" style={{position: 'relative', paddingBottom: '62.5%', height: 0}}>
            <iframe src="https://www.loom.com/embed/3f7c6a7f54494bf59201831ee79d16d9?sid=6cce3a02-58aa-4258-b719-3951c6ca1e03" frameBorder="0" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} allowFullScreen></iframe>
          </div>

          <p className="font-medium mt-4">Research Analyst at UT Southwestern Medical Center</p>
          <p className="text-sm text-neutral-400">Apr. 2025 - Aug. 2025</p>
          <p className="text-sm text-neutral-400">Deploying Zero-Shot Multimodal OSCE exam scorer with LLMs for audio + video inputs</p>
          <div className="mt-2 rounded-lg overflow-hidden max-w-3xl" style={{position: 'relative', paddingBottom: '54%', height: 0}}>
            <iframe src="https://www.loom.com/embed/11cfee581f824655bce0321c58b7b455?sid=20dd1344-c9f4-41ba-a5f4-e4eea372c5a7" frameBorder="0" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} allowFullScreen></iframe>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div className="space-y-2">
          <p className="font-medium">Research Associate at Texas Christian University</p>
          <p className="text-sm text-neutral-400">Developing ODE models to analyze viral load data</p>
          <p className="text-sm text-neutral-400">Publication: "Analyzing Dynamical Differences Between Vaccinated and Unvaccinated RSV Patients"</p>
          <div className="mt-2 grid grid-cols-2 gap-2 max-w-md">
            <a href="https://www.mdpi.com/2673-3986/6/2/16" target="_blank" rel="noopener noreferrer">
              <img src="/rsv-closeup.png" alt="RSV Research Closeup" className="rounded-lg w-full h-64 object-cover hover:opacity-80 transition-opacity cursor-pointer" />
            </a>
            <a href="https://www.mdpi.com/2673-3986/6/2/16" target="_blank" rel="noopener noreferrer">
              <img src={researchImage} alt="Research Publication" className="rounded-lg w-full h-64 object-cover hover:opacity-80 transition-opacity cursor-pointer" />
            </a>
          </div>
          <p className="font-medium mt-4">Private Equity Intern at Newshore Partners</p>
          <p className="text-sm text-neutral-400">Led 2 closed investments deal, conducting DCF, LBO, and comparables analysis</p>
          <p className="font-medium mt-4">Director of Operations at Fidutam</p>
          <p className="text-sm text-neutral-400">United Nations ECOSOC Youth Forum Invitee</p>
          <p className="text-sm text-neutral-400">MIT Solve Finalist</p>
          <p className="font-medium mt-4">Strategic Solutions Intern at Onix</p>
          <p className="text-sm text-neutral-400">Enhanced AI security protocols by deploying data-driven solutions, improving anomaly detection accuracy by 15%</p>
          <p className="text-sm text-neutral-400">Engineered and delivered scalable software solutions and interactive demos using Python and TensorFlow</p>
          <p className="text-sm text-neutral-400">Led the migration of 50+ Cloudera Jupyter Notebooks to Google Vertex AI, optimizing deployment pipelines</p>
          <p className="font-medium mt-4">Quantitative Analyst Intern at hScore</p>
          <p className="text-sm text-neutral-400">Jan 2024 – May 2024 | Dallas, TX</p>
          <p className="text-sm text-neutral-400">Engineered retail trading software managing $20M+ AUM using Python; feature reached 2% alpha over S&P</p>
          <p className="text-sm text-neutral-400">Achieved 95% accuracy in sentiment analysis of 500+ earnings transcripts using TextBlob, NLTK, and BERT</p>
          <p className="text-sm text-neutral-400">Pitched natural language processing pipeline with trading algorithms for sentiment analysis to CEO, CTO on board meeting</p>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="space-y-2">
          <p className="font-medium">Research Analyst at UT Dallas</p>
          <p className="text-sm text-neutral-400">Led sentiment analysis project on stock news and online forums</p>
          <p className="font-medium mt-4">Investment Analyst Intern at NXG Investment Management</p>
          <p className="text-sm text-neutral-400">Collaborated on investment strategies for clients in the Electric Vehicle industry</p>
          <div className="mt-2">
            <img src="/nxg.png" alt="NXG Investment Management" className="rounded-lg w-1/2" />
          </div>
          <p className="font-medium mt-4">President and Founder of Enrichify</p>
          <p className="text-sm text-neutral-400">Created a financial platform with 1,200+ users and 200,000+ media impressions</p>
          <p className="text-sm text-neutral-400">Secured $7,500 in grants and donations</p>
          <div className="mt-2 grid grid-cols-2 gap-2 max-w-2xl">
            <a href="https://www.southlakestyle.com/community/people/dragons-start-financial-nonprofit/" target="_blank" rel="noopener noreferrer">
              <img src="/enrichify-article.PNG" alt="Enrichify Southlake Style Article" className="rounded-lg w-full h-64 object-cover hover:opacity-80 transition-opacity cursor-pointer" />
            </a>
            <a href="https://canvasrebel.com/meet-anson-omar-arjan-suri-and-ayan-bakshi/" target="_blank" rel="noopener noreferrer">
              <img src="/canvas-rebel-article-enrichify.png" alt="Canvas Rebel Article" className="rounded-lg w-full h-64 object-cover hover:opacity-80 transition-opacity cursor-pointer" />
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "Education",
      content: (
        <div className="space-y-2">
          <p className="font-medium">The University of Texas at Austin</p>
          <p className="text-sm text-neutral-400">B.Sc. in Computer Science & B.Sc. in Applied Math</p>
          <p className="font-medium mt-4">Carroll High School</p>
          <p className="text-sm text-neutral-400">GPA 105.0/100 | Rank 27/721</p>

          <p className="font-medium mt-4">Finance Club - President</p>
          <p className="text-sm text-neutral-400">Led financial literacy initiatives and investment education programs</p>
          <div className="mt-2 grid grid-cols-2 gap-2 max-w-md">
            <img src="/finance-club-1.jpeg" alt="Finance Club Event 1" className="rounded-lg w-full h-64 object-cover" />
            <img src="/finance-club-2.jpeg" alt="Finance Club Event 2" className="rounded-lg w-full h-64 object-cover" />
          </div>

          <p className="font-medium mt-4">DECA - VP of Finance Ops</p>
          <p className="text-sm text-neutral-400">Competed in business and marketing competitions, developing entrepreneurial skills</p>
          <div className="mt-2 grid grid-cols-2 gap-2 max-w-md">
            <img src="/deca.png" alt="DECA Competition 1" className="rounded-lg w-full h-64 object-cover" />
            <img src="/deca-2.jpg" alt="DECA Competition 2" className="rounded-lg w-full h-64 object-cover" />
          </div>
        </div>
      ),
    },
  ];

  const testimonials = [
    {
      quote: "Arjan's analytical skills and deep understanding of mathematical models were instrumental in our research on RSV patients. His ability to implement complex ODE models is exceptional.",
      name: "Dr. Hana Dobrovolny",
      title: "Professor, Texas Christian University"
    },
    {
      quote: "I was impressed with Arjan's quantitative analysis capabilities and his ability to quickly learn complex financial models. He made significant contributions to our investment strategies.",
      name: "Saket Kumar (CIO & Director of Investments)",
      title: "NXG Investment Management"
    },
    {
      quote: "As a founder, Arjan demonstrated exceptional leadership and technical skills, building a platform that has genuinely helped hundreds of people with their finances.",
      name: "Mark Guilbert (Chamber of Commerce President)",
      title: "Southlake, TX"
    },
    {
      quote: "Arjan's contributions to our AI legislation advocacy have been invaluable. His technical knowledge combined with his understanding of policy implications is rare.",
      name: "Sam Conway (Director of Tech)",
      title: "Fidutam"
    },
    {
      quote: "The sentiment analysis algorithm Arjan developed significantly improved our ability to analyze market trends. His code was clean, efficient, and well-documented.",
      name: "Hari Kusumakar (Co-Founder)",
      title: "hScore"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      
      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Showpilot */}
            <WobbleCard
              containerClassName="bg-gradient-to-br from-blue-600 to-indigo-800"
              image={showpilotImage}
              link="https://showpilot.xyz"
            >
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-4">Showpilot</h3>
                <p className="text-white/80 max-w-md mx-auto">
                  Acquired by ThirdLayer (YC W25). AI-powered platform for optimizing show and event management with intelligent analytics and automation.
                </p>
              </div>
            </WobbleCard>

            {/* enrichify.org */}
            <WobbleCard
              containerClassName="bg-gradient-to-br from-green-600 to-emerald-800"
              image={enrichifyImage}
              link="https://enrichify.org"
            >
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-4">Enrichify</h3>
                <p className="text-white/80 max-w-md mx-auto">
                  Financial education platform serving 1,200+ users with personalized financial planning tools, resources, and AI-driven advice to improve financial literacy.
                </p>
              </div>
            </WobbleCard>

            {/* nexstep college consulting */}
            <WobbleCard
              containerClassName="bg-gradient-to-br from-teal-600 to-cyan-800"
              image={nexstepImage}
              link="https://www.nexstepcollege.com"
            >
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-4">NexStep College Consulting</h3>
                <p className="text-white/80 max-w-md mx-auto">
                  Modern college consulting website built with React and Tailwind CSS, featuring responsive design and intuitive user experience for college applicants.
                </p>
              </div>
            </WobbleCard>

            {/* abdhols.com */}
            <WobbleCard
              containerClassName="bg-gradient-to-br from-purple-600 to-pink-800"
              image="/abdhols.png"
              link="https://abdhols.com"
            >
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-4">Abdhols</h3>
                <p className="text-white/80 max-w-md mx-auto">
                  Innovative fitness and wellness platform designed to help users achieve their health goals through personalized training plans and nutrition guidance.
                </p>
              </div>
            </WobbleCard>

            {/* paygratis.xyz */}
            <WobbleCard
              containerClassName="bg-gradient-to-br from-rose-600 to-red-800"
              image="/gratis.png"
              link="https://paygratis.xyz"
            >
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-4">Pay Gratis</h3>
                <p className="text-white/80 max-w-md mx-auto">
                  Revolutionary payment processing platform offering seamless transactions with zero fees, empowering businesses and consumers alike.
                </p>
              </div>
            </WobbleCard>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Publications</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* fidutam creda impact report */}
            <WobbleCard
              containerClassName="bg-gradient-to-br from-violet-600 to-fuchsia-800"
              image={credaImage}
              link="https://www.canva.com/design/DAF06RydS8Q/441YEHegqQlUk0Fp9XtIWQ/edit"
            >
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-4">Fidutam Creda Impact Report</h3>
                <p className="text-white/80 max-w-md mx-auto">
                  Distributed $150,000+ with 100% repayment rate across six countries, yielding $400,000 profit for the unbanked. Established partnerships with 13,000+ people through grassroots organizations.
                </p>
              </div>
            </WobbleCard>

            {/* Publication */}
            <WobbleCard
              containerClassName="bg-gradient-to-br from-amber-500 to-orange-700"
              image={researchImage}
              link="https://www.mdpi.com/2673-3986/6/2/16"
            >
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-4">Research Publication</h3>
                <p className="text-white/80 max-w-md mx-auto">
                  "Analyzing Dynamical Differences Between Vaccinated and Unvaccinated RSV Patients" - Published in Epidemiologia (2025), showing vaccinated individuals have higher response variance.
                </p>
              </div>
            </WobbleCard>
          </div>
        </div>
      </section>
      
      {/* Awards Section */}
      <section id="awards" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-blue-950/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Achievements</h2>
          <Awards />
        </div>
      </section>
      
      {/* Timeline Section */}
      <section id="timeline" className="py-10">
        <Timeline data={timelineData} />
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10">What People Say</h2>
          <InfiniteMovingCards items={testimonials} speed="fast" />
        </div>
      </section>
      
      {/* Footer Section - anchor for contact links */}
      <section id="connect" className="py-12 bg-black border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-zinc-500 text-sm">© {new Date().getFullYear()} Arjan Suri. All rights reserved.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
