import React from "react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import type { SubscriptionPlan } from "@/types";
import Link from "next/link";

const plans: SubscriptionPlan[] = [
  {
    id: "netflix",
    name: "Netflix",
    price: "₹649/month",
    description: "Unlimited movies, TV shows, and more. Watch anywhere.",
    features: [
      "HD streaming",
      "Multiple profiles",
      "Download for offline",
      "Ad-free experience",
    ],
    cta: "Subscribe Netflix",
    href: "/login?plan=netflix",
    highlighted: true,
  },
  {
    id: "amazonprime",
    name: "Amazon Prime Video",
    price: "₹299/month",
    description: "Watch popular movies and TV, plus get free Amazon delivery.",
    features: [
      "Prime Originals",
      "4K Ultra HD available",
      "Watch on multiple devices",
      "Includes Amazon Prime benefits",
    ],
    cta: "Subscribe Prime",
    href: "/login?plan=amazonprime",
  },
  {
    id: "spotify",
    name: "Spotify Premium",
    price: "₹119/month",
    description: "Enjoy ad-free music, offline listening, and more.",
    features: [
      "Ad-free music",
      "Download songs",
      "High-quality audio",
      "Unlimited skips",
    ],
    cta: "Subscribe Spotify",
    href: "/login?plan=spotify",
  },
  {
    id: "jiohotstar",
    name: "Jio Hotstar",
    price: "₹299/month",
    description: "Live sports, movies, shows, and Hotstar Specials.",
    features: [
      "Live cricket & sports",
      "Indian & international shows",
      "Multiple language options",
      "Watch on TV & mobile",
    ],
    cta: "Subscribe Hotstar",
    href: "/login?plan=jiohotstar",
  },
];


export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <section className="text-center mb-12 md:mb-20">
        <h1 className="font-headline text-4xl md:text-6xl font-bold text-primary mb-6">
          Find the Perfect Plan for You
        </h1>
        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Choose a subscription that fits your needs and unlock exclusive access to our platform.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <Card key={plan.id} className={`flex flex-col rounded-xl shadow-lg transition-all hover:shadow-2xl ${plan.highlighted ? 'border-2 border-primary ring-2 ring-primary shadow-primary/20' : 'border-border'}`}>
            <CardHeader className="p-6">
              <CardTitle className={`font-headline text-2xl font-semibold ${plan.highlighted ? 'text-primary' : 'text-foreground'}`}>{plan.name}</CardTitle>
              <CardDescription className="font-body text-muted-foreground pt-1">{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow p-6">
              <p className="font-headline text-4xl font-bold text-foreground mb-6">{plan.price}</p>
              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center font-body text-foreground">
                    <CheckCircle2 className={`h-5 w-5 mr-3 shrink-0 ${plan.highlighted ? 'text-primary' : 'text-accent'}`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="p-6 bg-card rounded-b-xl">
              <Button asChild size="lg" className={`w-full font-semibold ${plan.highlighted ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : 'bg-accent hover:bg-accent/90 text-accent-foreground'}`}>
                <Link href={plan.href}>{plan.cta}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>
    </div>
  );
}
