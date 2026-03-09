"use client";

import { useScreenInfo } from "@/hooks/useScreenInfo";
import { Container } from "@/components/ui/Container";
import { HeroDetector } from "@/components/home/HeroDetector";
import { MetricsGrid } from "@/components/home/MetricsGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL, SITE_DESCRIPTION } from "@/lib/constants";

export default function HomePage() {
  const info = useScreenInfo();

  return (
    <>
      <JsonLd
        type="WebApplication"
        name="Screen Resolution Checker"
        description={SITE_DESCRIPTION}
        url={SITE_URL}
      />
      <Container>
        <HeroDetector info={info} />
        <MetricsGrid info={info} />

        <section className="mx-auto mt-24 max-w-3xl pb-20">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            What Is Screen Resolution?
          </h2>
          <div className="mt-6 space-y-4 text-[var(--muted-foreground)] leading-relaxed">
            <p>
              Screen resolution refers to the number of pixels displayed on your
              screen, expressed as width &times; height (e.g., 1920 &times;
              1080). Each pixel is a tiny point of light that, combined with
              millions of others, forms the images, text, and graphics you see
              on your display. A higher resolution means more pixels are packed
              into the same physical space, resulting in sharper and more
              detailed visuals.
            </p>
            <p>
              Your <strong>device pixel ratio (DPR)</strong> indicates how many
              physical pixels correspond to a single CSS pixel. Modern
              high-resolution displays like Apple Retina screens typically have a
              DPR of 2x or 3x, meaning they use 4 or 9 physical pixels to
              render what would be a single pixel on a standard display. This
              makes text and images appear crisp and smooth.
            </p>
            <p>
              The <strong>viewport size</strong> is the visible area of your
              browser window, which is usually smaller than your screen
              resolution. It represents the actual space available for web
              content, excluding browser chrome like the address bar, tabs, and
              bookmarks toolbar. Responsive web design relies on viewport
              dimensions to adapt layouts for different screen sizes.
            </p>
            <p>
              <strong>Color depth</strong> measures how many bits are used to
              represent the color of a single pixel. Most modern displays use
              24-bit color depth (8 bits per channel for red, green, and blue),
              which supports approximately 16.7 million colors. Some
              professional displays support 30-bit or even 48-bit color for more
              precise color reproduction in photography and video editing.
            </p>
            <p>
              Understanding your screen resolution is important for web
              developers, designers, gamers, and anyone who wants to optimize
              their display settings. Whether you&apos;re troubleshooting display
              issues, choosing a new monitor, or ensuring your website looks
              great on all devices, knowing your exact resolution and related
              metrics is the first step.
            </p>
          </div>
        </section>
      </Container>
    </>
  );
}
