import { TimelineItem, Track } from './types';

export const WHATSAPP_LINK = "https://chat.whatsapp.com/L49FBIpzIyr86o1QltTtKe?mode=wwt";
export const DISCORD_LINK = "https://discord.gg/vEcWUzZzmu";
export const RUNANYWHERE_REPO = "https://github.com/RunanywhereAI/runanywhere-sdks";
export const FORM_LINK = "https://hackathon-landing-three.vercel.app/";
export const HACKSS_REPO = "https://github.com/RunanywhereAI/Hackss";
export const BRAND_KIT_LINK = "#"; // Placeholder if needed
export const LINKEDIN_LINK = "https://www.linkedin.com/company/nerds-room";

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: 1,
    date: "Nov 9",
    title: "Kickoff + Orientation",
    description: "Event starts. Join the WhatsApp group for instructions.",
  },
  {
    id: 2,
    date: "Nov 9 - 11",
    title: "Sprint 1 Submission",
    description: "Build & ship your first mini-project MVP.",
  },
  {
    id: 3,
    date: "Nov 11 - 13",
    title: "Sprint 2 Submission",
    description: "Second 48-hour sprint cycle.",
  },
  {
    id: 4,
    date: "Nov 13 - 15",
    title: "Sprint 3 Submission",
    description: "Third 48-hour sprint cycle.",
  },
  {
    id: 5,
    date: "Nov 15 - 17",
    title: "Sprint 4 Submission",
    description: "Fourth 48-hour sprint cycle.",
  },
  {
    id: 6,
    date: "Nov 17 - 19",
    title: "Sprint 5 Submission",
    description: "Final mini-project sprint. Best of Sprints 1-5 will be judged.",
  },
  {
    id: 7,
    date: "Nov 19 - 23",
    title: "Sprint 6: Website Build",
    description: "4-Day Special Sprint. Build the official Nerds Room Website.",
    highlight: true,
  },
  {
    id: 8,
    date: "Nov 24 - 26",
    title: "Jury + Shortlist",
    description: "Evaluation phase.",
  },
  {
    id: 9,
    date: "Post-Event",
    title: "Results",
    description: "Winners announced within a week.",
  }
];

export const TRACKS_DATA: Track[] = [
  {
    id: 'web',
    title: "Web Application Track",
    description: "Build a web app + companion mobile app using RunAnywhere SDK.",
    tech: ["RunAnywhere SDK", "Web App", "Companion Mobile App"],
    icon: 'globe'
  },
  {
    id: 'mobile',
    title: "Mobile App Track",
    description: "Build a mobile app for private on-device AI using Firebender.",
    tech: ["RunAnywhere SDK", "Firebender Plugin", "On-Device AI"],
    icon: 'smartphone'
  }
];

export const VIBEATHON_CONTEXT = `
You are the AI Assistant for NERDS VIBEATHON '25.
Your name is NERDS AI.
You are helpful, high-energy, and focused on "shipping" and "vibing".

Here is the official knowledge base for the event:

*** EVENT OVERVIEW ***
Name: NERDS VIBEATHON '25
Tagline: 14-day AI Build Festival.
Philosophy: No old syllabus coding. Next-generation creative building using AI tools. Prompt -> Build -> Ship.
Dates: Nov 9 to Nov 23, 2025.
Eligibility: College Students ONLY (Tech + Non-Tech). Team size: 1-4 members.

*** HOW IT WORKS ***
Structure: 6 Build Sprints over 14 Days.
Sprints 1-5 (Nov 9 - Nov 19): Every 48 hours = 1 Sprint. Build and ship 1 mini-project per sprint. You can submit up to 5 mini-projects.
Sprint 6 (Nov 19 - Nov 23): A special 4-Day Sprint to build the official Nerds Room Website.
Certificates: Each shipped sprint earns a Sprint Certificate.

*** TIMELINE & DATES ***
Nov 9: Kickoff + Orientation
Nov 9 - 11: Sprint 1 Submission
Nov 11 - 13: Sprint 2 Submission
Nov 13 - 15: Sprint 3 Submission
Nov 15 - 17: Sprint 4 Submission
Nov 17 - 19: Sprint 5 Submission
Nov 19 - 23: Sprint 6 (Nerds Room Website Build)
Nov 24 - 26: Jury + Shortlist
Post-Event: Results announced within a week.

*** EVALUATION ***
1. Your BEST project from Sprints 1-5 is judged.
2. Sprint 6 (Website) is judged separately.

*** TRACKS ***
1. Web Application Track: Build a web app + companion mobile app using RunAnywhere SDK.
2. Mobile App Track: Build a mobile app for private on-device AI using RunAnywhere SDK and Firebender.
Tools Allowed: Any AI tools.

*** SETUP & RESOURCES ***
Step 1: Star the "RunAnywhereAI/runanywhere-sdks" repo on GitHub and fill the registration form.
Step 2: Install Android Studio and the Firebender Plugin (JetBrains). Clone the "RunAnywhereAI/Hackss" repo.
Support: Mentors available on Discord for doubt solving, prompt strategies, and workflows.

*** REWARDS & RECOGNITION ***
- Cash Prizes: To be announced.
- Social Media Star: Follow Nerds Room on LinkedIn, post project/demo, tag Nerds Room + RunAnywhere + Firebender. Earn bonus points.
- Winner Perks: Winner Badge, Certificate, Featured on Nerds Room socials.
- Firebender Perk: Winners get 1 month Firebender Enterprise access.
- Internships: Top teams get fast-track internship interviews.

*** COMMUNICATION ***
Official WhatsApp Group is MANDATORY. All updates, tasks, and submissions happen there.
Link: https://chat.whatsapp.com/L49FBIpzIyr86o1QltTtKe?mode=wwt

If a user asks a question not covered here, be creative but realistic, or suggest they check the WhatsApp group.
`;