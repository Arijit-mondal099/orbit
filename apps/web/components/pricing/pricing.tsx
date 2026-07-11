import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Check, Code2 } from "lucide-react";

interface Plan {
  name: string;
  description: string;
  features: string[];
  cta: string;
  icon: typeof Code2;
  popular?: boolean;
}

const plans: Plan[] = [
  {
    name: "Free & Open Source",
    description: "ORBIT is free forever. MIT-licensed, self-hostable, and fully transparent.",
    icon: Code2,
    features: [
      "MIT license — use it anywhere",
      "Self-host with one Docker command",
      "All core features included",
      "Community support via GitHub",
      "No hidden costs or limits",
    ],
    cta: "Star on GitHub",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For teams that need dedicated support, SSO, audit logs, and custom SLAs.",
    icon: Check,
    features: [
      "Priority support with SLA",
      "Single sign-on (SSO / SAML)",
      "Audit logs & compliance reports",
      "Custom integrations & onboarding",
      "Dedicated account manager",
    ],
    cta: "Contact us",
  },
];

export function Pricing() {
  return (
    <section className="py-16 md:py-24 px-6 bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-pixel text-3xl md:text-4xl tracking-tight">Pricing</h2>
          <p className="font-normal text-muted-foreground text-base md:text-lg mt-3 max-w-2xl mx-auto">
            No gimmicks, no hidden fees — just a platform that puts you in control.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div key={plan.name} className="relative">
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    Most popular
                  </Badge>
                )}

                <Card
                  size="sm"
                  className={`flex flex-col ${plan.popular ? "ring-2 ring-primary" : ""}`}
                >
                  <CardHeader>
                    <div className="size-10 rounded-lg bg-primary/5 flex items-center justify-center mb-3">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{plan.name}</CardTitle>
                    <CardDescription className="font-normal text-sm mt-1">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm">
                          <Check className="size-4 text-primary mt-0.5 shrink-0" />
                          <span className="font-normal">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter>
                    <Button variant={plan.popular ? "default" : "outline"} className="w-full">
                      {plan.cta}
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
