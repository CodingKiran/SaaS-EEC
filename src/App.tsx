import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CoursePreview from "./components/CoursePreview";

// Course content
const lessons = [
  {
    title: "Day 1 - Your Startup Is Too Product-Centric",
    content:
      "You built a great tool, but no one's using it the way you imagined. Deep down, you focused on the features you *could* build, not the ones people *begged* for. Most SaaS founders unconsciously treat product development like art — but unless it's solving a felt, urgent pain, it's not worth building. Today's insight: Flip your thinking. Solve before you build.",
  },
  {
    title: "Day 2 - You're Talking to Peers, Not Customers",
    content:
      "Your homepage sounds impressive to other founders, but your ICP doesn't get it. You're unknowingly writing for Twitter followers, not the buyer struggling with a workflow. Today's insight: Validate language with real users, not your co-founder circle.",
  },
  {
    title: "Day 3 - You're Outsourcing Trust",
    content:
      "You hired a great agency, but your prospects still don't trust you. Why? Because you've never shown *your* thinking. Founders underestimate how powerful founder-led content is. Today's insight: People buy clarity and conviction. Write. Record. Share. Regularly.",
  },
  {
    title: "Day 4 - You're Measuring the Wrong Metrics",
    content:
      "You're obsessed with activation rates and MRR, but you've ignored the key metric: **time-to-value**. Your users struggle for days before finding any benefit. That's not a feature problem — it's a communication one. Today's insight: Reduce friction to first success.",
  },
  {
    title: "Day 5 - You're Scaling Before You Stick",
    content:
      "You're spending on ads, SEO, and content. But your churn is still high. Deep down, the problem isn't reach — it's retention. Most SaaS products don't have a stickiness issue. They have a forgettability issue. Today's insight: Make your product unforgettable — in value, not just in UI.",
  },
];

function App() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (email: string) => {
    console.log("Submitting email:", email);
    setSubmitted(true);
    // In a real app, this would connect to an email service API
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main>
        <Hero onSubmit={handleSubmit} isSubmitted={submitted} />
        <CoursePreview lessons={lessons} />
      </main>
    </div>
  );
}

export default App;
