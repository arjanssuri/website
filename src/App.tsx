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
          <p className="font-medium">Research Analyst at UT Southwestern Medical Center</p>
          <p className="text-sm text-neutral-400">Deploying Zero-Shot Multimodal OSCE exam scorer with LLMs for audio + video inputs</p>
          <p className="font-medium mt-4">Research Analyst at University of Texas at Austin</p>
          <p className="text-sm text-neutral-400">Apr 2025 - Present</p>
          <p className="text-sm text-neutral-400">Worked with Dr. Justin Hart in Autonomous Robots Lab, focusing on reinforcement learning and computer vision algorithms</p>
          <p className="text-sm text-neutral-400">Developing AI/ML models to improve human-robot interaction, scene understanding, and decision-making</p>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div className="space-y-2">
          <p className="font-medium">Equity Research Intern at Almondz</p>
          <p className="text-sm text-neutral-400">Allocated 1 Billion INR of revenue to equities and other assets via financial analysis, DCF & EV/EBITDA methods</p>
          <p className="text-sm text-neutral-400">Assisted in giving recommendations on companies across sectors by attending conference calls & assessing quarterly results</p>
          <p className="font-medium mt-4">Research Associate at Texas Christian University</p>
          <p className="text-sm text-neutral-400">Developing ODE models to analyze viral load data</p>
          <p className="text-sm text-neutral-400">Publication: "Analyzing Dynamical Differences Between Vaccinated and Unvaccinated RSV Patients"</p>
          <p className="font-medium mt-4">Private Equity Intern at Newshore Partners</p>
          <p className="text-sm text-neutral-400">Led 2 closed investments deal, conducting DCF, LBO, and comparables analysis</p>
          <p className="font-medium mt-4">Director of Operations at Fidutam</p>
          <p className="text-sm text-neutral-400">United Nations ECOSOC Youth Forum Invitee</p>
          <p className="text-sm text-neutral-400">United Nations AI for Good Ambassador</p>
          <p className="text-sm text-neutral-400">MIT Solve Finalist</p>
          <p className="font-medium mt-4">Strategic Solutions Intern at Onix</p>
          <p className="text-sm text-neutral-400">Enhanced AI security protocols by deploying data-driven solutions, improving anomaly detection accuracy by 15%</p>
          <p className="text-sm text-neutral-400">Engineered and delivered scalable software solutions and interactive demos using Python and TensorFlow</p>
          <p className="text-sm text-neutral-400">Led the migration of 50+ Cloudera Jupyter Notebooks to Google Vertex AI, optimizing deployment pipelines</p>
          <p className="font-medium mt-4">Jr. Quantitative Analyst at hScore</p>
          <p className="text-sm text-neutral-400">$20,000,000+ pledged AUM to team-built High-Frequency Trading (HFT) software, with 35% Alpha opposed to S&P's 10%</p>
          <p className="text-sm text-neutral-400">Achieved 95% accuracy in sentiment analysis of 500+ earnings transcripts with TextBlob, NLTK, and bidirectional encoding</p>
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
          <p className="font-medium mt-4">President and Founder of Enrichify</p>
          <p className="text-sm text-neutral-400">Created a financial platform with 1,200+ users and 200,000+ media impressions</p>
          <p className="text-sm text-neutral-400">Secured $7,500 in grants and donations</p>
          <p className="font-medium mt-4">Quantitative Analyst Intern at hScore</p>
          <p className="text-sm text-neutral-400">Reduced sentiment analysis processing time by hours through code refactoring and algorithm optimization</p>
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
          <h2 className="text-3xl font-bold text-center mb-12">Projects & Publications</h2>
          
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
