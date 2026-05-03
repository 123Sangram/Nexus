import React from 'react';
import Link from 'next/link';

// Placeholder images for team
const teamImages = [
  '/public/covers/team1.png',
  '/public/covers/team2.png',
  '/public/covers/team3.png',
  '/public/covers/team4.png',
];

const techStack = [
  {
    name: 'VAPI Voice AI',
    desc: 'Real-time voice interviews, handles speech-to-speech pipeline',
  },
  {
    name: 'Claude / GPT-4',
    desc: 'Powers question generation, follow-ups, and feedback engine',
  },
  {
    name: 'Resume Parser',
    desc: 'Custom-built, extracts skills and experience to personalise questions',
  },
  {
    name: 'Scoring Engine',
    desc: 'Evaluates answers on clarity, technical depth, confidence, and relevance',
  },
];

const team = [
  {
    name: 'Shreyansh Yadav',
    role: 'Founder & Full-stack',
    desc: 'Built the core VAPI integration and interview engine',
    img: teamImages[0],
  },
  {
    name: 'Sangram Singh',
    role: 'AI & Backend',
    desc: 'Handles scoring engine, resume parser, and prompt architecture',
    img: teamImages[1],
  },
  {
    name: 'Singh Anand',
    role: 'Frontend & Design',
    desc: 'Built the dashboard and progress tracking UI',
    img: teamImages[2],
  },
  {
    name: 'Sanskar Singh',
    role: 'Product & Growth',
    desc: 'Talks to users, shapes what gets built next',
    img: teamImages[3],
  },
];

const principles = [
  {
    title: 'Practice beats preparation',
    desc: 'Reading questions is not the same as answering out loud',
  },
  {
    title: 'Honest feedback only',
    desc: "We don't sugarcoat; if your answer was weak, we say so and explain why",
  },
  {
    title: 'Speed matters',
    desc: 'You should be in a mock interview within 2 minutes of signing up',
  },
  {
    title: 'Accessible to everyone',
    desc: 'Interview coaching shouldn\'t cost thousands; free tier is genuinely useful',
  },
];

const roadmap = [
  { status: 'SHIPPED', label: 'VAPI voice interviews' },
  { status: 'SHIPPED', label: 'Resume-based personalisation' },
  { status: 'SHIPPED', label: 'AI scoring and feedback reports' },
  { status: 'IN PROGRESS', label: 'Behavioural interview module (STAR method coaching)' },
  { status: 'COMING SOON', label: 'Multilingual support (Hindi and regional languages)' },
  { status: 'COMING SOON', label: 'Company-specific prep (Infosys, Flipkart, startups)' },
];

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      {/* NAVIGATION */}
      <nav className="flex items-center justify-between px-6 py-4 border-b bg-white/80 backdrop-blur sticky top-0 z-30">
        <div className="flex items-center gap-2 font-bold text-xl">
          <span className="text-blue-600">Nexus</span> SmartAI
        </div>
        <div className="flex gap-6 items-center">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="/features" className="hover:text-blue-600 transition">Features</Link>
          <span className="text-blue-600 font-semibold">About</span>
          <Link href="/price" className="hover:text-blue-600 transition">Pricing</Link>
        </div>
        <Link href="/auth/sign-up">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold shadow hover:bg-blue-700 transition">Start Free</button>
        </Link>
      </nav>

      {/* HERO */}
      <section className="max-w-3xl mx-auto text-center py-16 px-4">
        <div className="text-blue-600 font-semibold mb-2">About Nexus SmartAI</div>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Built by developers, for people who deserve the job</h1>
        <p className="text-lg text-gray-700">We're a small team of developers who got tired of watching talented people fail interviews — not because they lacked skills, but because they lacked practice. So we built the interviewer we wished existed.</p>
      </section>

      {/* THE STORY */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Why we built this</h2>
          <p className="mb-6 text-gray-700">A team member with 2 years of experience kept failing interviews not because he couldn't code, but because he never practiced speaking answers out loud under pressure. Existing tools only gave question lists or text input — none felt like a real interview. So the team built Nexus SmartAI using VAPI to create actual spoken interviews with follow-ups and real feedback.</p>
          <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-800 bg-white py-2">“I knew the answers. I just couldn't say them. I needed something that would push back, ask follow-ups, and tell me where I was going wrong.”</blockquote>
        </div>
      </section>

      {/* THE TECHNOLOGY */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">How we built it</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tech) => (
              <div key={tech.name} className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  {/* Icon placeholder */}
                  <span className="text-2xl font-bold text-blue-600">{tech.name[0]}</span>
                </div>
                <div className="font-semibold mb-2">{tech.name}</div>
                <div className="text-gray-600 text-sm text-center">{tech.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE TEAM */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">The people behind it</h2>
          <p className="text-center text-gray-700 mb-10">Small team of developers based in India. No VC funding, just people who thought this needed to exist.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-gray-200 mb-4 overflow-hidden flex items-center justify-center">
                  {/* Image placeholder */}
                  <span className="text-3xl text-gray-400">👤</span>
                </div>
                <div className="font-semibold text-lg mb-1">{member.name}</div>
                <div className="text-blue-600 text-sm mb-1">{member.role}</div>
                <div className="text-gray-600 text-sm text-center">{member.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PRINCIPLES */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">What we believe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p) => (
              <div key={p.title} className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <span className="text-xl font-bold text-blue-600">{p.title[0]}</span>
                </div>
                <div className="font-semibold mb-2 text-center">{p.title}</div>
                <div className="text-gray-600 text-sm text-center">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Where we're headed</h2>
          <div className="border-l-2 border-blue-200 pl-6 relative">
            {roadmap.map((item, idx) => (
              <div key={item.label} className="mb-8 flex items-start relative">
                <div className={`w-4 h-4 rounded-full mt-1 mr-4 flex-shrink-0 border-2 ${item.status === 'SHIPPED' ? 'bg-blue-600 border-blue-600' : item.status === 'IN PROGRESS' ? 'bg-yellow-400 border-yellow-400' : 'bg-gray-300 border-gray-300'}`}></div>
                <div>
                  <div className="font-semibold">
                    <span className={
                      item.status === 'SHIPPED' ? 'text-blue-600' : item.status === 'IN PROGRESS' ? 'text-yellow-600' : 'text-gray-500'
                    }>{item.status}:</span> {item.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to practice smarter?</h2>
        <p className="text-lg text-gray-700 mb-8">Join thousands of job seekers preparing with Nexus SmartAI — for free.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="/auth/sign-up">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold shadow hover:bg-blue-700 transition">Start your free interview</button>
          </Link>
          <Link href="mailto:hello@nexussmartai.com">
            <button className="bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-md font-semibold shadow hover:bg-blue-50 transition">Talk to the team</button>
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-200 py-6 mt-auto">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <div className="font-semibold text-lg flex items-center gap-2">
            <span className="text-blue-400">Nexus</span> SmartAI
          </div>
          <div className="text-sm text-gray-400">Built with love in India</div>
        </div>
      </footer>
    </div>
  );
}
