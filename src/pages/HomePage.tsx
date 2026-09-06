import AboutTextSplit from '@/components/sections/about/AboutTextSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTabbedAccordion from '@/components/sections/faq/FaqTabbedAccordion';
import FeaturesBentoGrid from '@/components/sections/features/FeaturesBentoGrid';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import HeroCenteredLogos from '@/components/sections/hero/HeroCenteredLogos';
import MetricsFeatureCards from '@/components/sections/metrics/MetricsFeatureCards';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroCenteredLogos
      avatarsSrc={[
        "http://img.b2bpic.net/free-photo/big-screen-financial-department-office-shows-stock-exchange-indices_482257-91771.jpg",
      ]}
      avatarText="Join top global investors"
      title="The Future Of Investing"
      description="MacroCapital is a global investment platform focused on macro strategies, digital assets, and cross-border capital markets."
      primaryButton={{
        text: "Get Started",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Learn More",
        href: "#about",
      }}
      names={[
        "Alpha",
        "Beta",
        "Gamma",
        "Delta",
        "Epsilon",
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/technology-hologram-indoors_23-2151833338.jpg"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTextSplit
      title="Full-Service Investment Banking"
      descriptions={[
        "We prioritize structural shifts over short-term noise. Our platform focuses on aligning conviction with disciplined risk control.",
        "Deploying capital where asymmetry is met with structural value across global macro and digital assets.",
      ]}
      primaryButton={{
        text: "Contact Us",
        href: "#contact",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesBentoGrid
      tag="Platform"
      title="Core Strategic Pillars"
      description="Our comprehensive suite of investment solutions designed for the modern macro economy."
      features={[
        {
          title: "Macro Strategies",
          description: "Global macro analysis and capital deployment.",
          imageSrc: "http://img.b2bpic.net/free-photo/blockchain-technology-cartoon-illustration_23-2151572129.jpg",
        },
        {
          title: "Digital Assets",
          description: "Future-forward digital investment management.",
          imageSrc: "http://img.b2bpic.net/free-photo/enterprise-colleagues-reviewing-project-updates-details_482257-94014.jpg",
        },
        {
          title: "Corporate Finance",
          description: "Strategic advisory and capital raising services.",
          imageSrc: "http://img.b2bpic.net/free-photo/diverse-team-analyzing-goods-quality-control-report-tablet_482257-84290.jpg",
        },
        {
          title: "RWA Ecosystem",
          description: "Real-world asset integration platform.",
          imageSrc: "http://img.b2bpic.net/free-photo/representations-user-experience-interface-design_23-2150038912.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="product" data-section="product">
    <SectionErrorBoundary name="product">
          <FeaturesImageBento
      tag="Capabilities"
      title="Our Financial Expertise"
      items={[
        {
          title: "Cross-Border",
          description: "International capital markets expertise.",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-render-network-technology-background-with-connecting-lines-dots_1048-14613.jpg",
        },
        {
          title: "Tokenization",
          description: "Seamless TaaS architecture.",
          imageSrc: "http://img.b2bpic.net/free-photo/blue-wave-with-words-data-it_188544-18634.jpg",
        },
        {
          title: "Risk Control",
          description: "Disciplined institutional frameworks.",
          imageSrc: "http://img.b2bpic.net/free-photo/low-angle-view-skyscrapers_1359-1104.jpg",
        },
        {
          title: "Structural Shifts",
          description: "Identifying market alpha opportunities.",
          imageSrc: "http://img.b2bpic.net/free-photo/ui-ux-representations-with-smartphone_23-2150201865.jpg",
        },
        {
          title: "Macro Analysis",
          description: "Deep data-driven research.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-cryptocurrency-hologram-design_23-2149250214.jpg",
        },
        {
          title: "Corporate Financing",
          description: "Tailored balance sheet solutions.",
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-futuristic-digital-technology-background_53876-104787.jpg",
        },
        {
          title: "Asset Tokenization",
          description: "Secure RWA transformation.",
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-using-digital-tablet-while-sitting-airport-terminal_107420-85113.jpg",
        },
      ]}
      textAnimation="fade-blur"
      description="Description"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsFeatureCards
      tag="Performance"
      title="Institutional Scale"
      description="Delivering disciplined investment performance."
      metrics={[
        {
          value: "$50B+",
          title: "Managed Assets",
          features: [
            "Diversified portfolios",
            "Institutional grade",
          ],
        },
        {
          value: "150+",
          title: "Global Partners",
          features: [
            "Strategic alliances",
            "Macro reach",
          ],
        },
        {
          value: "12%",
          title: "Avg Return",
          features: [
            "Disciplined risk",
            "Alpha capture",
          ],
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="social" data-section="social">
    <SectionErrorBoundary name="social">
          <SocialProofMarquee
      tag="Partners"
      title="Industry Leaders"
      description="Collaborating with global financial pioneers."
      names={[
        "Partner Alpha",
        "Tech Ventures",
        "Global Assets",
        "Finance Group",
        "Future Capital",
        "Macro Systems",
        "Strategic Holdings",
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTabbedAccordion
      tag="Support"
      title="Investor Questions"
      categories={[
        {
          name: "General",
          items: [
            {
              question: "What is the primary focus?",
              answer: "Macro strategies and digital assets.",
            },
            {
              question: "How to get started?",
              answer: "Contact our institutional desk.",
            },
          ],
        },
      ]}
      textAnimation="slide-up"
      description="Description"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Connect"
      text="Start your journey with MacroCapital today."
      primaryButton={{
        text: "Contact Institutional Desk",
        href: "mailto:info@mccapital.ai",
      }}
      secondaryButton={{
        text: "View Platform",
        href: "#",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
