import { Calendar, Clock } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ParallaxBackground } from "./ParallaxBackground";

const events = [
  {
    time: "Day 1 - 9:00 AM",
    title: "Registration & Check-in",
    description: "Get your badges, swag, and settle in. Meet your fellow hackers!",
  },
  {
    time: "Day 1 - 10:00 AM",
    title: "Opening Ceremony",
    description: "Kick-off with inspiring talks and event overview.",
  },
  {
    time: "Day 1 - 11:00 AM",
    title: "Hacking Begins",
    description: "Form teams and start building your amazing projects!",
  },
  {
    time: "Day 1 - 2:00 PM",
    title: "Tech Workshops",
    description: "Learn from industry experts on various technologies and tools.",
  },
  {
    time: "Day 1 - 8:00 PM",
    title: "Midnight Snacks",
    description: "Refuel with food and connect with other participants.",
  },
  {
    time: "Day 2 - 11:00 AM",
    title: "Project Submissions",
    description: "Final deadline to submit your projects for judging.",
  },
  {
    time: "Day 2 - 1:00 PM",
    title: "Judging & Demo",
    description: "Present your projects to our panel of expert judges.",
  },
  {
    time: "Day 2 - 4:00 PM",
    title: "Closing Ceremony",
    description: "Award ceremony and celebration of all the amazing work!",
  },
];

export const Timeline = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="timeline" className="py-12 sm:py-16 md:py-24 px-4 bg-muted/30 relative" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-semibold">
              Event Schedule
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold sketch-text">
            Timeline
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />

          {/* Events */}
          <div className="space-y-12">
            {events.map((event, index) => (
              <ParallaxBackground speed={0.05 * (index + 1)} key={index}>
                <div
                  className={`relative flex items-center gap-8 transition-all duration-700 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${index % 2 === 0 ? '-translate-x-10' : 'translate-x-10'}`}`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 border-4 border-background z-10" />

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                  <div className="bg-card border-2 border-border p-4 sm:p-6 hover-lift hover:border-primary transition-all group hover:shadow-lg hover:shadow-primary/20 hover:scale-105">
                    <div className="flex items-center gap-2 mb-2 text-primary justify-start md:justify-end">
                      <Clock className="w-4 h-4" />
                      <span className="font-semibold text-sm measurement-text">
                        {event.time}
                      </span>
                    </div>
                    <h3 className="font-bold text-xl mb-2">{event.title}</h3>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                </div>

                {/* Mobile timeline indicator */}
                <div className="md:hidden absolute left-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2" />
                </div>
              </ParallaxBackground>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
