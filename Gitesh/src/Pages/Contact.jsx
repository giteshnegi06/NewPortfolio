import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, MapPin, Mail, Phone, MessageSquare } from 'lucide-react';
import { Input } from '../Components/ui/input.jsx';
import { Textarea } from '../Components/ui/textarea.jsx';
import { toast } from 'sonner';
import TiltCard from '../Components/TiltCard';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'negigitesh@email.com', color: 'text-[#f68b43]', bg: 'bg-[#f68b43]/10', link:"mailto:negigitesh@gmail.com" },
  { icon: Phone, label: 'Phone', value: '+91 82195 69378', color: 'text-[#935eed]', bg: 'bg-[#935eed]/10', link:"tel:+91 82195 69378" },
  { icon: MapPin, label: 'Location', value: 'Karnal, 🇮🇳', color: 'text-orange-400', bg: 'bg-orange-400/10' },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success('Message sent! I\'ll get back to you soon.');
      e.target.reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative font-Outfit" ref={ref}>
      <div className="section-divider" />
      {/* bg orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-#f68b43/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#f68b43] font-syne text-sm tracking-[0.2em] uppercase mb-3 font-semibold">Contact</p>
          <h2 className="font-syne font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Let's <span className="gradient-text">work together</span>
          </h2>
          <p className="text-[#75758a] mt-4 max-w-md mx-auto">
            Have a project in mind? Let's build something great together.
            Reach out and I'll respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((item, i) => (
              <a href={item.link} className='p-5'>
                <TiltCard key={i} className="p-5 grad-border bg-[#0f0f15]" glowColor="hsla(27,100%,55%,0.1)">
                <div className="flex items-center gap-4">
                  <div className={`w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}>
                    <item.icon className={item.color} size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-[#75758a] font-medium mb-0.5">{item.label}</p>
                    <p className="text-sm font-semibold text-foreground">{item.value}</p>
                  </div>
                </div>
              </TiltCard>
              </a>
            ))}

            <TiltCard className="p-5 grad-border mt-4 bg-[#0f0f15]" glowColor="hsla(262,80%,65%,0.1)">
              <div className="flex items-start gap-3">
                <MessageSquare className="text-[#935eed] mt-1 shrink-0" size={18} />
                <p className="text-sm text-[#75758a] leading-relaxed">
                  I'm currently <span className="text-[#f68b43] font-semibold">available</span> for freelance projects,
                  full-time roles, or consulting. Let's create something amazing!
                </p>
              </div>
            </TiltCard>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <TiltCard className="p-7 lg:p-9 grad-border bg-[#0f0f15]" glowColor="hsla(27,100%,55%,0.08)">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs text-[#75758a] font-medium mb-2 block uppercase tracking-wider">Name</label>
                    <Input required name="name" placeholder="Name" className="bg-[#17171c] border-[#1b1b21] focus:border-[#f68b43]/50 h-11 rounded-xl" />
                  </div>
                  <div>
                    <label className="text-xs text-[#75758a] font-medium mb-2 block uppercase tracking-wider">Email</label>
                    <Input required name="email" type="email" placeholder="hello@email.com" className="bg-[#17171c] border-[#1b1b21] focus:border-[#f68b43]/50 h-11 rounded-xl" />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-[#75758a] font-medium mb-2 block uppercase tracking-wider">Subject</label>
                  <Input required name="subject" placeholder="Project Inquiry" className="bg-[#17171c] border-[#1b1b21] focus:border-[#f68b43]/50 h-11 rounded-xl" />
                </div>
                <div>
                  <label className="text-xs text-[#75758a] font-medium mb-2 block uppercase tracking-wider">Message</label>
                  <Textarea required name="message" placeholder="Tell me about your project..." rows={5} className="bg-[#17171c] border-[#1b1b21] focus:border-[#f68b43]/50 resize-none rounded-xl" />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full h-12 rounded-xl bg-[#f68b43] text-black font-syne font-semibold text-sm hover:shadow-[0_0_35px_hsla(27,100%,55%,0.45)] transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {sending ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}