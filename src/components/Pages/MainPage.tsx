import React from "react";
import {
  ArrowRight,
  ExternalLink,
  Code2,
  Newspaper,
  Wallet,
  GraduationCap,
  ShieldCheck,
  QrCode,
  Globe,
  Users,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import Nav from "../HeadFoot/Nav";
import Footer from "../HeadFoot/Footer";

const TechinikaLanding = () => {
  const products = [
    {
      title: "Techinika News",
      tag: "For Techies",
      description: `Rwanda's #1 tech news, and insights platform. We tell the stories of companies and people solving the biggest problems with technology.`,
      icon: <Newspaper className="w-6 h-6 text-blue-500" />,
      link: "https://techinika.com",
      type: "MediaTech",
    },
    {
      title: "Agaseke",
      tag: "For Creators",
      description: `Creator Monetization Platform. We empower Rwandan creators to monetize their craft by collecting tips, gifts and donations from their fans. A 'Buy Me a Coffee' for Rwanda.`,
      icon: <Wallet className="w-6 h-6 text-green-500" />,
      link: "https://agaseke.me",
      type: "FinTech",
    },
    {
      title: "Apprena",
      tag: "For Learners",
      description: `AI-Powered customized career roadmaps and learning plans. Test your readiness and get a personalized curriculum to reach your goals.`,
      icon: <GraduationCap className="w-6 h-6 text-purple-500" />,
      link: "https://apprena.techinika.com",
      type: "EdTech",
    },
    {
      title: "Ubunifu Labs",
      tag: "For Businesses",
      description: `Our engine room. We build custom software solutions, research solutions for new problems, and automate customer's operations to enhance their productivity.`,
      icon: <Code2 className="w-6 h-6 text-orange-500" />,
      link: "https://ubunifu.techinika.co.rw",
      type: "Development",
    },
  ];

  const utilities = [
    {
      name: "SecureDot",
      desc: `SSL & Security`,
      icon: <ShieldCheck className="w-4 h-4" />,
      link: "https://securedot.techinika.com",
    },
    {
      name: "QR Studio",
      desc: `Dynamic QR Codes`,
      icon: <QrCode className="w-4 h-4" />,
      link: "https://qr-studio.techinika.com",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-700">
      <Nav />

      <header className="relative px-6 pt-16 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
          <Globe size={600} />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Building for Rwanda & Africa
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-8 text-slate-900 tracking-tight">
               Solving problems using{" "}
               <span className="text-blue-600">technology.</span>
             </h1>
            <p className="text-lg lg:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
              {`Based in Rwanda, Techinika is a venture studio and media house. We
              build tools that empower creators, educate learners, and tell the
              stories of innovation across the continent.`}
            </p>
            <div className="flex flex-col sm:row gap-4">
              <Link
                href="#products"
                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 hover:shadow-xl transition-all active:scale-95"
              >
                View Our Ecosystem <ArrowRight size={20} />
              </Link>
              <Link
                href="#education"
                className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-bold hover:border-slate-400 transition-all"
              >
                Learn with us
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section id="products" className="py-24 px-6 bg-slate-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h3 className="text-4xl font-bold mb-4 tracking-tight">
              Core Ecosystem
            </h3>
            <p className="text-slate-500 text-lg">
              Strategic product areas of focus for our growth and development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((p, i) => (
              <div
                key={i}
                className="group bg-white p-8 lg:p-10 rounded-[2.5rem] border border-slate-200 hover:border-blue-200 transition-all hover:shadow-2xl hover:shadow-blue-500/5 flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-blue-50 group-hover:text-blue-600 transition text-slate-600">
                      {p.icon}
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 tracking-tight">
                      {p.title}
                    </h4>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 border border-slate-100 px-3 py-1.5 rounded-lg bg-slate-50">
                    {p.tag}
                  </span>
                </div>

                <p className="text-slate-600 mb-8 leading-relaxed grow">
                  {p.description}
                </p>
                <div className="pt-6 border-t border-slate-50">
                  <Link
                    href={p.link}
                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:gap-4 transition-all uppercase tracking-wider"
                    target="_blank"
                  >
                    Learn More <ExternalLink size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4 md:gap-8 p-6 bg-white rounded-3xl border border-dashed border-slate-300">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
              Utility Suite:
            </span>
            {utilities.map((u, i) => (
              <Link
                key={i}
                href={u.link}
                target="_blank"
                className="flex items-center gap-3 text-sm font-semibold text-slate-700"
              >
                <div className="p-1.5 bg-slate-100 rounded-md">{u.icon}</div>
                <div>
                  <p className="leading-none">{u.name}</p>
                  <p className="text-[10px] text-slate-400 font-normal">
                    {u.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h3 className="text-4xl font-bold mb-4 tracking-tight">
                Online Learning & Partnerships
              </h3>
              <p className="text-slate-500 text-lg">
                {`Expanding tech education access and partnering with communities
                across Rwanda.`}
              </p>
            </div>
            <div className="bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-100 flex items-center gap-2 self-start md:self-auto">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-tighter">
                New Content Available
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 relative overflow-hidden bg-slate-900 rounded-[2.5rem] p-10 lg:p-14 text-white shadow-2xl">
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-8 flex-wrap">
                    <div className="bg-red-600 w-fit p-3 rounded-2xl">
                      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </div>
                    <h4 className="text-4xl font-bold tracking-tight">
                      Online Learning Content
                    </h4>
                  </div>
                  <p className="text-slate-400 text-lg mb-10 max-w-md leading-relaxed">
                    {`Access free technology courses in Kinyarwanda on our YouTube
                    channel. Learn at your own pace from local experts sharing
                    practical tech skills.`}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                    {[
                      "Kinyarwanda Language",
                      "Practical Tech Skills",
                      "Self-Paced Learning",
                      "Local Expert Instructors",
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 text-sm text-slate-300"
                      >
                        <CheckCircle2 size={18} className="text-red-500" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <Link href={"https://youtube.com/@techinika"} target="_blank">
                  <button className="w-fit bg-red-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-red-500 transition-all shadow-lg shadow-red-900/20 active:scale-95">
                    Watch on YouTube
                  </button>
                </Link>
              </div>
              <div className="absolute -bottom-20 -right-20 opacity-10 pointer-events-none">
                <svg width="400" height="400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-[2.5rem] p-10 flex flex-col justify-between">
              <div>
                <div className="bg-white shadow-sm w-fit p-4 rounded-2xl mb-8 border border-slate-100">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-slate-900 tracking-tight">
                  Tech Partnerships
                </h4>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {`We partner with tech communities and initiatives to expand
                  our impact in Rwanda's tech ecosystem. Let's collaborate
                  to empower more people through technology.`}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100">
                  <div className="bg-blue-50 p-2 rounded-xl text-blue-600">
                    <Users size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      Partnership Type
                    </p>
                    <p className="text-sm font-bold text-slate-800">
                      Communities & Initiatives
                    </p>
                  </div>
                </div>
                <Link
                  href={"https://calendar.app.google/cMLAUa8cSNZpcpt8A"}
                  target="_blank"
                >
                  <button className="w-full bg-slate-900 text-white px-6 py-4 rounded-2xl font-bold hover:bg-blue-600 transition shadow-lg shadow-slate-200">
                    Book a Meeting
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="philosophy"
        className="py-32 px-6 bg-slate-900 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h3 className="text-3xl lg:text-5xl font-bold mb-16 text-white leading-tight">
            {"We exist to solve problems using "}
            <span className="text-blue-400">technology</span>
            {`, help others solve
            problems, and help tell their stories.`}
          </h3>
          <div className="grid md:grid-cols-3 gap-12 text-left">
            <div>
              <div className="text-blue-400 font-black text-4xl mb-4">01</div>
              <h5 className="text-white font-bold text-lg mb-2">Build</h5>
              <p className="text-slate-400 text-sm leading-relaxed">
                {`We ship production-ready code that solves real-world challenges
                facing Rwanda today.`}
              </p>
            </div>
            <div>
              <div className="text-blue-400 font-black text-4xl mb-4">02</div>
              <h5 className="text-white font-bold text-lg mb-2">Educate</h5>
              <p className="text-slate-400 text-sm leading-relaxed">
                {`Knowledge is the ultimate multiplier. We empower the workforce
                with modern digital skills.`}
              </p>
            </div>
            <div>
              <div className="text-blue-400 font-black text-4xl mb-4">03</div>
              <h5 className="text-white font-bold text-lg mb-2">Narrate</h5>
              <p className="text-slate-400 text-sm leading-relaxed">
                {`African innovation deserves a global stage. We provide the
                platform for those stories to be told.`}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TechinikaLanding;
