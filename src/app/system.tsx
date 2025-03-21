import { FaHandSparkles, FaMoneyBillWheat } from "react-icons/fa6";
import { FaHeadset, FaUserFriends } from "react-icons/fa";
import { IoPaperPlane } from "react-icons/io5";
import { TiDownload } from "react-icons/ti";
import { PiUserListFill } from "react-icons/pi";
import { RiFileCheckFill } from "react-icons/ri";
import { FaStarOfLife } from "react-icons/fa6";
import { IoLogoPolymer } from "react-icons/io";
import { IoLogoTableau } from "react-icons/io5";
import { PiCodaLogoFill } from "react-icons/pi";
import { BiLogoPatreon } from "react-icons/bi";
import { BiLogoOpera } from "react-icons/bi";

export const NavbarItems = [
    {
        label: "Home",
        path: "/"
    },
    {
        label: "Find Contractors",
        path: "/"
    },
    {
        label: "Post a Job",
        path: "/post-job"
    },
    {
        label: "How It Works",
        path: "/"
    },
    {
        label: "About Us",
        path: "/"
    },
    {
        label: "Contact",
        path: "/"
    },
];


export const whyUs = [
    {
        title: "Verified Professionals",
        description: "All contractors & designers are vetted for quality and reliability.",
        icon: <FaHandSparkles />
    },
    {
        title: "Competitive Pricing",
        description: "Receive multiple offers and choose the best value for your budget.",
        icon: <FaMoneyBillWheat />
    },
    {
        title: "User-Friendly Process",
        description: "Post a job in minutes and track progress effortlessly.",
        icon: <FaUserFriends />
    },
    {
        title: "Customer Support",
        description: "Our team is ready to assist you at every step.",
        icon: <FaHeadset />
    }
];

export const howItWorks = [
    {
        id: "01",
        icon: <IoPaperPlane />,
        step: "Post Your Job",
        description: "Describe your project needs."
    },
    {
        id: "02",
        icon: <TiDownload />,
        step: "Get Offers",
        description: "Contractors bid on your job."
    },
    {
        id: "03",
        icon: <PiUserListFill />,
        step: "Compare & Hire",
        description: "Choose the best one based on reviews & price."
    },
    {
        id: "04",
        icon: <RiFileCheckFill />,
        step: "Get It Done",
        description: "Track progress & make secure payments."
    }
];


export const contractorServices = [
    {

        bgImg: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Interior Contractors",
        services: [
            "Air Conditioning",
            "Bathroom Renovation",
            "Carpentry",
            "Ceiling & Partition",
            "Electrical Works",
            "Flooring Installation & Repair",
            "Furniture Assembly & Custom Furniture",
            "Interior Design",
            "Kitchen Renovation",
            "Lighting Installation",
            "Painting & Wallpapering",
            "Plumbing Works",
            "Smart Home Installation"
        ]
    },
    {
        bgImg: "https://images.unsplash.com/photo-1596481768453-8befafc2d7ae?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Exterior Contractors",
        services: [
            "Balcony & Terrace Waterproofing",
            "Carpentry & Decking",
            "Driveway & Paving",
            "Exterior Painting",
            "Fence & Gate Installation",
            "Glass & Window Installation",
            "Landscaping & Gardening",
            "Outdoor Lighting",
            "Pergola & Gazebo Construction",
            "Pool Construction & Maintenance",
            "Roofing & Waterproofing",
            "Solar Panel Installation"
        ]
    },
    {
        bgImg: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "General Contractors",
        services: [
            "Building & Structural Works",
            "Demolition Services",
            "Door & Window Replacement",
            "Handyman Services",
            "Masonry & Concrete Works",
            "Metal Works & Welding",
            "Partition & Drywall Installation",
            "Tiling & Marble Works",
            "Waterproofing & Sealing"
        ]
    }
];

export const contractorRatings = [
    {
        id: 1,
        contractor: "John Builders",
        rating: 4.8,
        review: "Great service and very professional!",
        profileImg: "https://placehold.co/100x100/" + Math.floor(Math.random()*16777215).toString(16) + "/fff?text=John%20Builders&font=Lora",
        services: ["Residential Construction", "Renovation", "Roofing"]
    },
    {
        id: 2,
        contractor: "Elite Renovators",
        rating: 4.7,
        review: "Completed the project ahead of schedule!",
        profileImg: "https://placehold.co/100x100/" + Math.floor(Math.random()*16777215).toString(16) + "/fff?text=Elite%20Renovators&font=Lora",
        services: ["Kitchen Remodeling", "Bathroom Renovation", "Flooring"]
    },
    {
        id: 3,
        contractor: "HomeFix Experts",
        rating: 4.9,
        review: "High-quality work, highly recommended!",
        profileImg: "https://placehold.co/100x100/" + Math.floor(Math.random()*16777215).toString(16) + "/fff?text=HomeFix%20Experts&font=Lora",
        services: ["General Repairs", "Painting", "Landscaping"]
    },
    {
        id: 4,
        contractor: "DreamHouse Contractors",
        rating: 4.5,
        review: "Very detail-oriented and reliable.",
        profileImg: "https://placehold.co/100x100/" + Math.floor(Math.random()*16777215).toString(16) + "/fff?text=DreamHouse%20Contractors&font=Lora",
        services: ["Custom Home Building", "Interior Design", "Smart Home Installation"]
    },
    {
        id: 5,
        contractor: "Precision Builders",
        rating: 4.6,
        review: "Excellent communication and craftsmanship!",
        profileImg: "https://placehold.co/100x100/" + Math.floor(Math.random()*16777215).toString(16) + "/fff?text=Precision%20Builders&font=Lora",
        services: ["Structural Engineering", "Foundation Repair", "Concrete Work"]
    },
    {
        id: 6,
        contractor: "FastTrack Constructions",
        rating: 4.8,
        review: "Fast and efficient work, amazing!",
        profileImg: "https://placehold.co/100x100/" + Math.floor(Math.random()*16777215).toString(16) + "/fff?text=FastTrack%20Constructions&font=Lora",
        services: ["Commercial Construction", "Warehouse Building", "Steel Fabrication"]
    },
    {
        id: 7,
        contractor: "Urban Space Builders",
        rating: 4.7,
        review: "Modern design and well-executed work.",
        profileImg: "https://placehold.co/100x100/" + Math.floor(Math.random()*16777215).toString(16) + "/fff?text=Urban%20Space%20Builders&font=Lora",
        services: ["Apartment Renovation", "Office Fit-Outs", "Retail Space Remodeling"]
    },
    {
        id: 8,
        contractor: "Superior Contractors",
        rating: 4.9,
        review: "Very accommodating and expert team.",
        profileImg: "https://placehold.co/100x100/" + Math.floor(Math.random()*16777215).toString(16) + "/fff?text=Superior%20Contractors&font=Lora",
        services: ["Luxury Home Construction", "Architectural Design", "Eco-Friendly Building"]
    },
    {
        id: 9,
        contractor: "Golden Touch Interiors",
        rating: 4.6,
        review: "Elegant designs and top-quality work!",
        profileImg: "https://placehold.co/100x100/" + Math.floor(Math.random()*16777215).toString(16) + "/fff?text=Golden%20Touch%20Interiors&font=Lora",
        services: ["Interior Decoration", "Furniture Installation", "Lighting Design"]
    },
    {
        id: 10,
        contractor: "ProFix Renovations",
        rating: 4.5,
        review: "On-time delivery with great finishing!",
        profileImg: "https://placehold.co/100x100/" + Math.floor(Math.random()*16777215).toString(16) + "/fff?text=ProFix%20Renovations&font=Lora",
        services: ["Home Renovation", "Basement Finishing", "Garage Construction"]
    }
];


export const clientReviews = [
    {
        id: 1,
        client: "Michael D.",
        review: "The contractor was very professional and completed the project on time. Highly recommended!",
        rating: 4.8
    },
    {
        id: 2,
        client: "Sarah L.",
        review: "Excellent service! The team was very responsive and handled everything smoothly.",
        rating: 4.7
    },
    {
        id: 3,
        client: "James K.",
        review: "Great attention to detail and very accommodating to my requests.",
        rating: 4.9
    },
    {
        id: 4,
        client: "Emily R.",
        review: "I love the final results! The quality of work is top-notch.",
        rating: 4.5
    },
    {
        id: 5,
        client: "Daniel B.",
        review: "The contractor was easy to work with and finished ahead of schedule.",
        rating: 4.6
    },
    {
        id: 6,
        client: "Jessica T.",
        review: "Very professional and transparent. Kept me updated throughout the process.",
        rating: 4.8
    },
    {
        id: 7,
        client: "Robert C.",
        review: "Superb craftsmanship! My home looks amazing now.",
        rating: 4.7
    },
    {
        id: 8,
        client: "Laura M.",
        review: "The workers were polite and dedicated. Happy with the results!",
        rating: 4.9
    },
    {
        id: 9,
        client: "William O.",
        review: "Fantastic work and well within my budget.",
        rating: 4.6
    },
    {
        id: 10,
        client: "Sophia W.",
        review: "I had a great experience! The project was completed flawlessly.",
        rating: 4.5
    },
    {
        id: 11,
        client: "Anthony P.",
        review: "Fast, reliable, and very well-managed team.",
        rating: 4.8
    },
    {
        id: 12,
        client: "Olivia G.",
        review: "Professional and efficient. The best contractor I’ve worked with.",
        rating: 4.7
    },
    {
        id: 13,
        client: "David N.",
        review: "Everything went as planned. No complaints at all!",
        rating: 4.9
    },
    {
        id: 14,
        client: "Emma S.",
        review: "Great quality work. The team paid attention to every little detail.",
        rating: 4.6
    },
    {
        id: 15,
        client: "Benjamin T.",
        review: "They were very organized and finished everything on schedule.",
        rating: 4.5
    },
    {
        id: 16,
        client: "Charlotte R.",
        review: "Exceeded my expectations! I’m very happy with the work.",
        rating: 4.9
    },
    {
        id: 17,
        client: "Alexander V.",
        review: "Responsive and professional. Kept everything clean and tidy.",
        rating: 4.7
    },
    {
        id: 18,
        client: "Amelia D.",
        review: "The pricing was fair and the quality was outstanding!",
        rating: 4.8
    },
    {
        id: 19,
        client: "Henry J.",
        review: "They listened to my ideas and delivered exactly what I wanted.",
        rating: 4.6
    },
    {
        id: 20,
        client: "Mia P.",
        review: "The best experience I've had with a contractor. Will hire again!",
        rating: 4.9
    }
];


export const trustedBy = [
    { name: "Star Inc", logo: <FaStarOfLife /> },
    { name: "Polymer", logo: <IoLogoPolymer /> },
    { name: "Tabiz", logo: <IoLogoTableau /> },
    { name: "Coda", logo: <PiCodaLogoFill /> },
    { name: "Patrom", logo: <BiLogoPatreon /> },
    { name: "Ortsz", logo: <BiLogoOpera /> },
];

export const ctaData = {
    title: "Post Your Job & Hire Top Contractors",
    description: "Easily connect with skilled contractors for your project. Post your job now and get bids from trusted professionals.",
    buttonText: "Post a Job",
    buttonLink: "/post-job",
    image: "https://images.unsplash.com/photo-1602774895672-b553538bceb9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
};

export const footerData = {
    companyName: "Buildify",
    tagline: "Connecting You with Trusted Contractors",
    about: "Buildify is your go-to platform for finding skilled contractors for any project. Post your job and get the best professionals for the task.",
    links: [
        { name: "Home", url: "/" },
        { name: "Find Contractors", url: "/contractors" },
        { name: "Post a Job", url: "/post-job" },
        { name: "How It Works", url: "/how-it-works" },
        { name: "Contact Us", url: "/contact" }
    ],
    socialMedia: [
        { name: "Facebook", url: "https://facebook.com/ContractorHub" },
        { name: "Twitter", url: "https://twitter.com/ContractorHub" },
        { name: "Instagram", url: "https://instagram.com/ContractorHub" },
        { name: "LinkedIn", url: "https://linkedin.com/company/ContractorHub" }
    ],
    contact: {
        email: "support@buildify.com",
        phone: "+1 (800) 123-4567",
        address: "123 Builder St, Construction City, USA"
    },
    copyright: "© 2025 Buildify. All rights reserved."
};

export const postJobPageData = {
    title: "Post a Job - Find the Right Contractor",
    description: "Need a contractor for your project? Post your job and get matched with trusted professionals in no time!",
    steps: [
        {
            step: 1,
            title: "Describe Your Project",
            description: "Provide details about your project, including scope, timeline, and budget."
        },
        {
            step: 2,
            title: "Receive Contractor Bids",
            description: "Qualified contractors will review your job and submit their proposals."
        },
        {
            step: 3,
            title: "Compare & Hire",
            description: "Review bids, compare ratings, and choose the best contractor for your needs."
        }
    ],
    formFields: {
        jobTitle: { label: "Job Title", placeholder: "e.g. Kitchen Renovation" },
        category: { label: "Category", placeholder: "Select a category" },
        location: { label: "Location", placeholder: "Enter job location" },
        budget: { label: "Estimated Budget", placeholder: "e.g. $5000 - $10,000" },
        deadline: { label: "Project Deadline", placeholder: "Select a deadline" },
        description: { label: "Job Description", placeholder: "Describe the job details..." }
    },
    formSender: {
        name: { label: "Full Name", placeholder: "Enter your name" },
        email: { label: "Email", placeholder: "Enter your email" },
        phone: { label: "Phone Number", placeholder: "Enter your phone number" }
    },
    faq: [
        { question: "How long does it take to find a contractor?", answer: "Most jobs receive contractor bids within 24-48 hours." },
        { question: "Is posting a job free?", answer: "Yes! Posting a job is completely free. You only pay when you hire a contractor." },
        { question: "How do I choose the right contractor?", answer: "Compare bids, read reviews, and check contractor ratings before hiring." },
        { question: "Can I edit my job posting after submission?", answer: "Yes, you can edit your job details anytime before hiring a contractor." }
    ],
    cta: {
        text: "Find the Right Contractor Now!",
        buttonLabel: "Post Your Job"
    }
};
