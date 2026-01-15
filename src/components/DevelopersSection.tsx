import { motion } from "framer-motion";
import { Linkedin, Mail, Laptop } from "lucide-react";
import clementProfile from "@/assets/clement-profile.png";
import karthikeyanProfile from "@/assets/karthikeyan-profile.jpg";

const developers = [
    {
        name: "CLEMENTSIJO L",
        role: "Full Stack Developer",
        image: clementProfile,
        socials: {
            linkedin: "https://linkedin.com/in/clementsijo",
            mail: "mailto:clementsijo@gmail.com",
            portfolio: "https://clementsijo.vercel.app/"
        }
    },
    {
        name: "KARTHIKEYAN K M",
        role: "Full Stack Developer",
        image: karthikeyanProfile,
        socials: {
            linkedin: "https://linkedin.com/in/karthikeyan-k-m-",
            mail: "mailto:karthikeyankm.karthi@gmail.com",
            portfolio: "https://karthikeyan-133.github.io/KN-Resume/"
        }
    }
];

const DevelopersSection = () => {
    return (
        <section id="team" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
                        The Minds Behind Code
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                        Meet the <span className="text-gradient-secondary">Architects</span>
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center gap-20 max-w-6xl mx-auto">
                    {developers.map((dev, index) => (
                        <motion.div
                            key={dev.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative w-full max-w-sm"
                        >
                            <div className="relative flex flex-col items-center p-4">

                                {/* Circular Profile Image - Larger & Glowing */}
                                <div className="relative mb-8">
                                    <div className="absolute inset-0 rounded-full bg-gradient-secondary blur-2xl opacity-20 group-hover:opacity-50 transition-opacity duration-500" />
                                    <motion.div
                                        className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/5 group-hover:border-secondary transition-colors duration-500 relative z-10 mx-auto"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <img
                                            src={dev.image}
                                            alt={dev.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.div>
                                </div>

                                {/* Content - Larger Text */}
                                <h3 className="text-3xl font-bold text-foreground mb-2 text-center group-hover:text-white transition-colors">{dev.name}</h3>
                                <p className="text-primary text-sm font-mono uppercase tracking-widest mb-8 text-center">{dev.role}</p>

                                {/* Social Icons - Larger & Spaced */}
                                <div className="flex gap-6 justify-center w-full">
                                    {dev.socials.linkedin && dev.socials.linkedin !== "#" && (
                                        <a href={dev.socials.linkedin} className="text-text-muted hover:text-[#0077b5] transition-colors p-3 bg-white/5 rounded-full hover:bg-white/10 hover:scale-110 transform transition-all duration-200">
                                            <Linkedin className="w-6 h-6" />
                                        </a>
                                    )}
                                    {dev.socials.mail && (
                                        <a href={dev.socials.mail} className="text-text-muted hover:text-white transition-colors p-3 bg-white/5 rounded-full hover:bg-white/10 hover:scale-110 transform transition-all duration-200">
                                            <Mail className="w-6 h-6" />
                                        </a>
                                    )}
                                    {dev.socials.portfolio && (
                                        <a href={dev.socials.portfolio} className="text-text-muted hover:text-[#25D366] transition-colors p-3 bg-white/5 rounded-full hover:bg-white/10 hover:scale-110 transform transition-all duration-200">
                                            <Laptop className="w-6 h-6" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DevelopersSection;
