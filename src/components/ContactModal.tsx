import { motion, AnimatePresence } from "framer-motion";
import { X, Send, User, Mail, MessageSquare, Code, Terminal } from "lucide-react";
import { useState } from "react";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        projectType: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission
        setTimeout(() => {
            onClose();
            // Reset form could go here
        }, 1000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100]"
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="w-full max-w-4xl pointer-events-auto"
                        >
                            <div className="relative bg-card border border-primary/20 rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
                                {/* Decorative Elements */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0" />
                                <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

                                {/* Header */}
                                <div className="relative p-6 border-b border-border/50 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                                            <Terminal className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-foreground">Initialize Project</h3>
                                            <p className="text-xs text-text-muted font-mono">ESTABLISH_CONNECTION_UPLINK</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={onClose}
                                        className="p-2 rounded-lg hover:bg-white/5 text-text-muted hover:text-foreground transition-colors group"
                                    >
                                        <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                                    </button>
                                </div>

                                {/* Form */}
                                <form onSubmit={handleSubmit} className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
                                    {/* Left Column: Config Inputs */}
                                    <div className="md:col-span-5 space-y-4">
                                        <div className="space-y-2">
                                            <label className="text-xs font-mono text-primary/80 uppercase tracking-wider ml-1">
                                                Name
                                            </label>
                                            <div className="relative group">
                                                <User className="absolute left-3 top-3 w-5 h-5 text-text-muted group-focus-within:text-primary transition-colors" />
                                                <input
                                                    type="text"
                                                    placeholder="Enter your name"
                                                    className="w-full bg-background-secondary/50 border border-white/5 rounded-lg py-3 pl-10 pr-4 text-foreground placeholder-text-muted focus:outline-none focus:border-primary/50 focus:bg-background-secondary transition-all text-sm"
                                                    required
                                                    value={formState.name}
                                                    onChange={e => setFormState({ ...formState, name: e.target.value })}
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-mono text-primary/80 uppercase tracking-wider ml-1">
                                                Email
                                            </label>
                                            <div className="relative group">
                                                <Mail className="absolute left-3 top-3 w-5 h-5 text-text-muted group-focus-within:text-primary transition-colors" />
                                                <input
                                                    type="email"
                                                    placeholder="Enter your email"
                                                    className="w-full bg-background-secondary/50 border border-white/5 rounded-lg py-3 pl-10 pr-4 text-foreground placeholder-text-muted focus:outline-none focus:border-primary/50 focus:bg-background-secondary transition-all text-sm"
                                                    required
                                                    value={formState.email}
                                                    onChange={e => setFormState({ ...formState, email: e.target.value })}
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-mono text-primary/80 uppercase tracking-wider ml-1">
                                                Project Type
                                            </label>
                                            <div className="relative group">
                                                <Code className="absolute left-3 top-3 w-5 h-5 text-text-muted group-focus-within:text-primary transition-colors" />
                                                <select
                                                    className="w-full bg-background-secondary/50 border border-white/5 rounded-lg py-3 pl-10 pr-4 text-foreground focus:outline-none focus:border-primary/50 focus:bg-background-secondary transition-all appearance-none cursor-pointer text-sm"
                                                    value={formState.projectType}
                                                    onChange={e => setFormState({ ...formState, projectType: e.target.value })}
                                                >
                                                    <option value="" disabled selected>Select project type</option>
                                                    <option value="saas">SaaS Platform</option>
                                                    <option value="automation">Automation System</option>
                                                    <option value="web">Web Application</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="pt-2">
                                            <button
                                                type="submit"
                                                className="w-full group relative overflow-hidden rounded-lg bg-gradient-primary p-[1px]"
                                            >
                                                <div className="relative bg-background/0 group-hover:bg-background/0 transition-colors rounded-lg px-6 py-3 flex items-center justify-center gap-2">
                                                    <span className="font-bold text-foreground group-hover:text-white transition-colors">Send Message</span>
                                                    <Send className="w-5 h-5 text-foreground group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Right Column: Payload Data */}
                                    <div className="md:col-span-7 flex flex-col">
                                        <div className="space-y-2 h-full flex flex-col">
                                            <label className="text-xs font-mono text-primary/80 uppercase tracking-wider ml-1">
                                                Message
                                            </label>
                                            <div className="relative group flex-grow">
                                                <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-text-muted group-focus-within:text-primary transition-colors" />
                                                <textarea
                                                    placeholder="Tell us about your project..."
                                                    className="w-full h-full min-h-[200px] bg-background-secondary/50 border border-white/5 rounded-lg py-3 pl-10 pr-4 text-foreground placeholder-text-muted focus:outline-none focus:border-primary/50 focus:bg-background-secondary transition-all resize-none text-sm"
                                                    required
                                                    value={formState.message}
                                                    onChange={e => setFormState({ ...formState, message: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;
