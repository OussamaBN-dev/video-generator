import { UploadIcon, VideoIcon, ZapIcon } from 'lucide-react';

export const featuresData = [
    {
        icon: <UploadIcon className="w-6 h-6" />,
        title: 'Smart Upload',
        desc: 'Drag & drop your assets. We auto-optimize formats and sizes.'
    },
    {
        icon: <ZapIcon className="w-6 h-6" />,
        title: 'Instant Generation',
        desc: 'optimize models deliver output in seconds with great fidelity.'
    },
    {
        icon: <VideoIcon className="w-6 h-6" />,
        title: 'Video Synthesis',
        desc: 'Bring product shots to life with short-form,social-ready videos.'
    }
];

export const plansData = [
    {
        id: 'free',
        name: 'Free',
        price: '$0',
        desc: 'Always free',
        credits: '',
        features: [
            'Project discovery & planning',
            'UI/UX design',
            'Basic website development',
            '1 revision round',
            'Email support'
        ]
    },
    {
        id: 'pro',
        name: 'Pro',
        price: '$9',
        desc: 'Only billed monthly.',
        credits: 'month',
        features: [
            'Everything in Starter',
            'Advanced UI/UX design',
            'Custom development',
            'Performance optimization',
            'Priority support'
        ],
        popular: true
    },
    {
        id: 'premium',
        name: 'Premium',
        price: '$29',
        desc: 'Only billed monthly.',
        credits: 'month',
        features: [
            'Everything in Growth',
            'Dedicated project manager',
            'Ongoing optimization',
            'Marketing & growth support',
            'Chat + Email support'
        ]
    }
];

export const faqData = [
    {
        question: 'How does th AI generation work?',
        answer: 'We offer end-to-end digital services including brand strategy, UI/UX design, web and app development and growth-focused marketing solutions.'
    },
    {
        question: 'Do I own the generated images?',
        answer: 'We work with startups, growing businesses and established brands. Our process is flexible and tailored to match your goals and scale.'
    },
    {
        question: 'Can i cancel anytime?',
        answer: 'Project timelines vary by scope, but most projects take between 2–6 weeks. We provide a clear timeline after the discovery phase.'
    },
    {
        question: 'What input formats do you support?',
        answer: 'Yes. We offer maintenance, optimization and growth support packages to ensure your product continues to perform and evolve.'
    }
];

export const footerLinks = [
    {
        title: "Quick Links",
        links: [
            { name: "Home", url: "#" },
            { name: "Features", url: "#" },
            { name: "Pricing", url: "#" },
            { name: "FAQ", url: "#" }
        ]
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", url: "#" },
            { name: "Terms of Service", url: "#" }
        ]
    },
    {
        title: "Connect",
        links: [
            { name: "Twitter", url: "#" },
            { name: "LinkedIn", url: "#" },
            { name: "GitHub", url: "#" }
        ]
    }
];