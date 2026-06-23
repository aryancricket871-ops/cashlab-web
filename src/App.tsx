import { motion } from 'framer-motion';
import { 
  SquarePlay, 
  Gamepad2, 
  ClipboardList, 
  Youtube, 
  Download, 
  Smartphone, 
  ChevronRight,
  UserPlus,
  ListTodo,
  Target,
  WalletCards,
  Users,
  MessageSquareText
} from 'lucide-react';

export default function App() {
  const steps = [
    {
      step: "01",
      title: "Secure Login/Register",
      description: "Create your free CashLab account securely using your unique username.",
      icon: <UserPlus className="w-6 h-6 text-purple-400" />,
      color: "from-purple-500/20 to-[#3B1D70]/40",
      border: "border-purple-500/30",
      iconBox: "bg-purple-500/10"
    },
    {
      step: "02",
      title: "Complete Daily Tasks",
      description: "Browse through multiple high-paying offers, watch videos, or play games.",
      icon: <ListTodo className="w-6 h-6 text-pink-400" />,
      color: "from-pink-500/20 to-purple-500/20",
      border: "border-pink-500/30",
      iconBox: "bg-pink-500/10"
    },
    {
      step: "03",
      title: "Maintain Your Daily Streak",
      description: "Log in 7 days in a row to hit the ultimate streak bonus and multiply your daily earnings.",
      icon: <Target className="w-6 h-6 text-orange-400" />,
      color: "from-orange-500/20 to-pink-500/20",
      border: "border-orange-500/30",
      iconBox: "bg-orange-500/10"
    },
    {
      step: "04",
      title: "Instant Withdrawal",
      description: "Enter your UPI, Paytm, or Bank Details and withdraw directly once you reach the minimum balance of ₹100.",
      icon: <WalletCards className="w-6 h-6 text-green-400" />,
      color: "from-green-500/20 to-teal-500/20",
      border: "border-green-500/30",
      iconBox: "bg-green-500/10"
    }
  ];

  const features = [
    {
      title: "Watch Videos",
      description: "Stream short videos and earn instant coins.",
      reward: "+₹10",
      icon: <SquarePlay className="w-6 h-6 text-pink-400" />,
      gradient: "from-pink-500/20 to-purple-500/20",
      border: "border-pink-500/30",
      glow: "group-hover:shadow-[0_0_25px_rgba(236,72,153,0.3)]"
    },
    {
      title: "Play Games",
      description: "Download and play trending games like Coin Master or Ludo King to unlock massive rewards.",
      reward: "+₹60",
      icon: <Gamepad2 className="w-6 h-6 text-purple-400" />,
      gradient: "from-purple-500/20 to-indigo-500/20",
      border: "border-purple-500/30",
      glow: "group-hover:shadow-[0_0_25px_rgba(168,85,247,0.3)]"
    },
    {
      title: "Complete Surveys",
      description: "Give your feedback on high-paying premium survey walls.",
      reward: "+₹40",
      icon: <ClipboardList className="w-6 h-6 text-blue-400" />,
      gradient: "from-blue-500/20 to-cyan-500/20",
      border: "border-blue-500/30",
      glow: "group-hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]"
    },
    {
      title: "Refer & Earn",
      description: "Share your unique link with your friends and brothers. Get lifetime bonus points.",
      reward: "Lifetime",
      icon: <Users className="w-6 h-6 text-orange-400" />,
      gradient: "from-orange-500/20 to-red-500/20",
      border: "border-orange-500/30",
      glow: "group-hover:shadow-[0_0_25px_rgba(249,115,22,0.3)]"
    },
    {
      title: "Live Chat Support",
      description: "Direct access to our 'Chat Support' team right inside the app to solve issues instantly.",
      reward: "24/7",
      icon: <MessageSquareText className="w-6 h-6 text-teal-400" />,
      gradient: "from-teal-500/20 to-emerald-500/20",
      border: "border-teal-500/30",
      glow: "group-hover:shadow-[0_0_25px_rgba(20,184,166,0.3)]"
    }
  ];

  return (
    <div className="min-h-screen bg-[#06020D] text-slate-100 font-sans selection:bg-purple-500/30 relative overflow-hidden flex flex-col">
      {/* Background Neon Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-[#3B1D70] rounded-full blur-[140px] opacity-40 mix-blend-screen animate-pulse duration-1000"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-purple-900 rounded-full blur-[140px] opacity-20 mix-blend-screen"></div>
        <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[90vw] h-[50vw] max-w-[1000px] bg-indigo-900/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-6 flex justify-between items-center max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3"
        >
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-[#3B1D70] flex items-center justify-center border border-purple-400/30 shadow-[0_0_25px_rgba(168,85,247,0.5)]">
             <Smartphone className="w-7 h-7 text-white" />
          </div>
          <span className="text-3xl font-display font-bold tracking-tight text-white drop-shadow-md">
            Cash<span className="text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.9)]">Lab</span>
          </span>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-grow flex flex-col items-center px-6 pt-12 pb-24 max-w-7xl mx-auto w-full">
        
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm font-bold mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.2)]"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
            </span>
            COMING SOON
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[1.1] mb-8 tracking-tight"
          >
            Task & Earn <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 drop-shadow-[0_0_25px_rgba(192,132,252,0.4)] bg-[length:200%_auto] animate-gradient">
              Rewards
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-slate-400 text-lg md:text-2xl mb-12 max-w-3xl font-sans"
          >
            The ultimate platform to monetize your free time. Complete high-paying offers, play games, and withdraw real cash instantly.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <a 
              href="https://youtube.com/@aryan420vip-8.7?si=XRL1tO0JkmREJC6T"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-[#3B1D70] via-purple-600 to-[#3B1D70] bg-[length:200%_auto] rounded-full font-bold text-white text-xl overflow-hidden transition-all hover:scale-105 hover:bg-right hover:shadow-[0_0_40px_rgba(168,85,247,0.8)] focus:outline-none ring-2 ring-purple-400/50 ring-offset-4 ring-offset-[#06020D]"
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Download className="w-6 h-6 animate-bounce" />
              <span className="tracking-wide">DOWNLOAD APK</span>
            </a>
          </motion.div>
        </div>

        {/* How It Works Section */}
        <div className="w-full mb-28">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              How CashLab Works
            </h2>
            <p className="text-slate-400 text-lg">Your step-by-step guide to daily earnings.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-purple-500/0 via-purple-500/30 to-purple-500/0 z-0"></div>

            {steps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative z-10 p-8 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 hover:border-purple-500/50 transition-colors group"
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${step.color} opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500 pointer-events-none`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${step.iconBox} border ${step.border} flex items-center justify-center p-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {step.icon}
                    </div>
                    <span className="text-4xl font-display font-black text-slate-800/50 group-hover:text-white/10 transition-colors">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Detailed Features Grid */}
        <div className="w-full mb-28">
           <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              Premium Features
            </h2>
            <p className="text-slate-400 text-lg">More ways to earn. Higher payouts.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative overflow-hidden rounded-3xl bg-slate-900/80 backdrop-blur-sm border border-slate-800 p-8 hover:-translate-y-2 transition-all duration-300 group hover:border-opacity-100 ${feature.glow}`}
              >
                {/* Glowing border effect on hover */}
                <div className={`absolute inset-0 border-2 rounded-3xl ${feature.border} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
                
                {/* Card gradient bg */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-slate-950/80 border border-slate-700 flex items-center justify-center p-4 shadow-xl">
                      {feature.icon}
                    </div>
                    <div className="inline-flex py-1.5 px-4 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 font-bold text-sm shadow-[0_0_15px_rgba(34,197,94,0.15)]">
                      {feature.reward}
                    </div>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">{feature.title}</h3>
                  <p className="text-slate-400 text-base leading-relaxed mb-4 flex-grow group-hover:text-slate-200 transition-colors">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action - YouTube */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-5xl rounded-[2.5rem] bg-gradient-to-br from-[#120B22] to-slate-950 border border-purple-500/30 p-10 md:p-16 relative overflow-hidden flex flex-col items-center text-center shadow-[0_0_50px_rgba(59,29,112,0.5)]"
        >
          {/* Subtle YouTube Red Glow from bottom */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-1/2 bg-red-600/10 blur-[120px] pointer-events-none"></div>
          {/* Purple Glow from top */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-1/2 bg-purple-600/20 blur-[120px] pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-display font-black text-white mb-6 tracking-tight drop-shadow-md">
              Subscribe to Our Official Channel
            </h2>
            <p className="text-slate-300 text-lg md:text-xl font-sans mb-12 leading-relaxed">
              Join the <span className="font-bold text-white">Cash Lab Task Earning App Official</span> community for daily updates, payment proofs, and early APK access links!
            </p>
            
            <a 
              href="https://youtube.com/@aryan420vip-8.7?si=XRL1tO0JkmREJC6T"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 group inline-flex items-center gap-4 px-8 py-5 md:px-12 md:py-6 rounded-full bg-slate-900 border border-slate-700 hover:border-red-500/50 hover:bg-[#181818] transition-all duration-300 shadow-2xl hover:shadow-[0_0_40px_rgba(239,68,68,0.3)] ring-2 ring-transparent hover:ring-red-500/20"
            >
              <Youtube className="w-8 h-8 md:w-10 md:h-10 text-red-500 group-hover:scale-110 transition-transform duration-300" />
              <div className="flex flex-col items-start translate-y-0 text-left">
                <span className="text-sm text-slate-400 font-bold uppercase tracking-widest mb-0.5">Subscribe Now</span>
                <span className="text-lg md:text-xl font-bold text-white whitespace-nowrap">Cash Lab Official</span>
              </div>
              <ChevronRight className="w-6 h-6 text-slate-500 group-hover:text-white transition-colors ml-4 md:ml-8" />
            </a>
          </div>
        </motion.div>

      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-slate-800/50 bg-[#06020D]/80 backdrop-blur-md text-center">
        <p className="text-slate-500 text-sm font-medium">
          © {new Date().getFullYear()} CashLab. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
