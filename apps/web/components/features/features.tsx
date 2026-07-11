import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Zap, Shield, Globe, Layers, Bell, Settings, type LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Built on edge infrastructure for sub-second response times anywhere in the world.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "End-to-end encryption, SOC 2 compliance, and granular permission controls.",
  },
  {
    icon: Globe,
    title: "Global Collaboration",
    description: "Real-time sync across teams, time zones, and devices with offline support.",
  },
  {
    icon: Layers,
    title: "Flexible Workspaces",
    description: "Organize projects your way with customizable views, templates, and automation.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Context-aware alerts that adapt to your workflow and never distract you.",
  },
  {
    icon: Settings,
    title: "Deep Integrations",
    description: "Connect with 100+ tools via API, webhooks, and native integrations.",
  },
];

export function Features() {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-pixel text-3xl md:text-4xl tracking-tight">Features</h2>
          <p className="font-normal text-muted-foreground text-base md:text-lg mt-3 max-w-2xl mx-auto">
            Everything you need to build better, faster — and nothing you don&apos;t.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} size="sm" className="p-6">
                <CardHeader className="p-0">
                  <div className="size-10 rounded-lg bg-primary/5 flex items-center justify-center mb-3">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <CardTitle className="text-base">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                  <p className="font-normal text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
