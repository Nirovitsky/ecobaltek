interface Testimonial {
  quote: string;
  author: string;
  company: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Our hiring process improved by at least 2x with baltek business. The AI matching is incredible and saves us countless hours screening candidates.",
    author: "Ben Bernard",
    company: "Instacart",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "The job recommendations on Asman are occasionally so accurate it's like magic - about 90% of the time it's exactly what I'm looking for.",
    author: "Sarah Chen", 
    company: "OpenAI",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b105?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "Asman is hands down my biggest career move improvement in years. Found my dream job in just 2 weeks.",
    author: "David Park",
    company: "Figma", 
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "I love the candidate management features and baltek business is steps ahead of traditional recruiting tools. The analytics dashboard is incredible.",
    author: "Maria Rodriguez",
    company: "Notion",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "Both platforms are so good, and literally get better every couple of weeks. The integration between business and job sides is seamless.",
    author: "Alex Thompson",
    company: "Weights & Biases",
    avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "This is exactly what recruiting needed! Someone finally integrated AI into job matching in a seamless way. It's so elegant and easy. No more manual screening.",
    author: "Jennifer Kim",
    company: "Varda",
    avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "The dual platform approach is the best innovation in recruitment right now. Avoid traditional job boards at your own peril.",
    author: "Michael Chang",
    company: "Google",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "Started using Asman yesterday & i'm blown away. It's how job searching should feel. I'm completely off other job boards now.",
    author: "Lisa Wang",
    company: "New Computer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "These platforms are the best recruitment tools I've used in a while. The candidate analysis feature worked perfectly on first try.",
    author: "Robert Silva",
    company: "Reflect",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "Both platforms have changed the game. I really can't imagine recruiting without them at this point. The switch from traditional methods is easy.",
    author: "Amanda Foster",
    company: "Replicate",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "Gonna apply to jobs and list Asman as my secret weapon. The platform's job matching is insane - it predicts what opportunities I want based on my profile.",
    author: "Emma Davis",
    company: "Notion",
    avatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "The candidate auto-matching feature is insane. You no longer need to manually search. It predicts what profiles you want based on your hiring patterns.",
    author: "Carlos Mendez",
    company: "WIP",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "baltek business transformed our hiring pipeline completely. The quality of candidates has improved dramatically since we started using it.",
    author: "Rachel Green",
    company: "Stripe",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "Asman's job recommendations are spot-on. It's like having a personal career advisor that actually understands what I'm looking for.",
    author: "James Wilson",
    company: "Spotify",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "The integration between both platforms is seamless. Our HR team loves baltek business and candidates rave about Asman.",
    author: "Priya Patel",
    company: "Airbnb",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b105?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "Found my current role through Asman in just 3 days. The platform's AI really understands what kind of opportunities match my skills.",
    author: "Marcus Johnson",
    company: "Tesla",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "baltek business has cut our time-to-hire by 60%. The candidate quality and fit have been exceptional across all our departments.",
    author: "Sophie Chen",
    company: "Discord",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "The user experience on Asman is incredibly smooth. It feels like the platform was designed by people who actually understand job searching.",
    author: "Daniel Kumar",
    company: "Shopify",
    avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "Our startup was struggling to find quality developers. baltek business completely solved that problem - we hired 5 amazing engineers in 2 months.",
    author: "Isabella Rodriguez",
    company: "Y Combinator",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "Asman's career insights feature helped me negotiate a 40% salary increase. The market data is incredibly accurate and up-to-date.",
    author: "Ryan Taylor",
    company: "Netflix",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "The analytics dashboard on baltek business gives us insights we never had before. We can now predict hiring trends and plan better.",
    author: "Olivia Martinez",
    company: "Uber",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "Switched from LinkedIn to Asman and immediately started getting better job opportunities. The platform really understands my career goals.",
    author: "Kevin Brooks",
    company: "Adobe",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "baltek business has become our primary recruiting tool. The quality of matches and the speed of the process is unmatched.",
    author: "Maya Singh",
    company: "Salesforce",
    avatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "The direct messaging feature on Asman allowed me to connect with hiring managers directly. No more going through countless recruiters.",
    author: "Alex Thompson",
    company: "GitHub",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "Our company has been using baltek business for 2 years now. It's consistently delivered high-quality candidates across all our engineering teams.",
    author: "Samantha Lee",
    company: "Zoom",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "Asman's profile optimization suggestions helped me land interviews at 3 top-tier companies. The platform really knows what employers want to see.",
    author: "Jordan Williams",
    company: "Slack",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "The integration capabilities of baltek business with our existing HR systems made adoption incredibly smooth for our team.",
    author: "Emily Davis",
    company: "Dropbox",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b105?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  }
];

export function TestimonialsSection() {
  // Create exactly 5 columns with evenly distributed testimonials
  const columnsCount = 5;
  const columns = Array.from({ length: columnsCount }, (_, columnIndex) => {
    // Distribute testimonials evenly across columns in round-robin fashion
    return testimonials.filter((_, testimonialIndex) => testimonialIndex % columnsCount === columnIndex);
  });

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-testimonials-title">
            Loved by <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">world-class devs</span>
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="text-testimonials-subtitle">
            Engineers all around the world reach for our platforms by choice.
          </p>
        </div>
      </div>

      <div className="testimonial-columns-container">
        <div className="testimonial-columns">
          {columns.map((columnTestimonials, columnIndex) => (
            <div 
              key={columnIndex}
              className={`testimonial-column ${columnIndex % 2 === 0 ? 'scroll-down' : 'scroll-up'}`}
            >
              <div className="testimonial-column-content">
                {/* Quadruple the content for seamless infinite scroll */}
                {[...columnTestimonials, ...columnTestimonials, ...columnTestimonials, ...columnTestimonials].map((testimonial, index) => (
                  <div 
                    key={`${columnIndex}-${index}`}
                    className="cursor-testimonial-card bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:opacity-100 opacity-80 hover:shadow-lg hover:border-primary/20 mb-6" 
                    data-testid={`testimonial-card-${columnIndex}-${index}`}
                  >
                    <p className="text-foreground mb-6 leading-relaxed text-sm" data-testid={`text-testimonial-quote-${columnIndex}-${index}`}>
                      {testimonial.quote}
                    </p>
                    <div className="flex items-center">
                      <img 
                        src={testimonial.avatar}
                        alt={testimonial.author} 
                        className="w-10 h-10 rounded-full mr-3 object-cover"
                        data-testid={`img-testimonial-avatar-${columnIndex}-${index}`}
                      />
                      <div>
                        <div className="font-semibold text-foreground text-sm" data-testid={`text-testimonial-author-${columnIndex}-${index}`}>
                          {testimonial.author}
                        </div>
                        <div className="text-muted-foreground text-xs" data-testid={`text-testimonial-company-${columnIndex}-${index}`}>
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
