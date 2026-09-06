import FooterMinimal from '@/components/sections/footer/FooterMinimal';
import NavbarInline from '@/components/ui/NavbarInline';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Linkedin, Twitter } from "lucide-react";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Home",
    "href": "#hero"
  },
  {
    "name": "Platform",
    "href": "#features"
  },
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Contact",
    "href": "#contact"
  },
  {
    "name": "Product",
    "href": "#product"
  },
  {
    "name": "Metrics",
    "href": "#metrics"
  },
  {
    "name": "Social",
    "href": "#social"
  }
];

  return (
    <StyleProvider buttonVariant="magnetic" siteBackground="aurora" heroBackground="radialGradient">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarInline
      logo="MacroCapital"
      ctaButton={{
        text: "Get Started",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterMinimal
      brand="MacroCapital"
      copyright="© 2024 MacroCapital AI. All rights reserved."
      socialLinks={[
        {
          icon: Twitter,
          href: "#",
        },
        {
          icon: Linkedin,
          href: "#",
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
