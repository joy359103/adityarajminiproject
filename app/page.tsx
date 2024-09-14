import clsx from "clsx";
import { redirect } from "next/navigation";
import { ComponentProps, ReactNode } from "react";
import { auth, signIn } from "@/auth";
import { DASHBOARD_URL } from "@/constants";
import { SignInIcon } from "@/icons";
import { MarketingLayout } from "@/layouts/Marketing";
import { Button, LinkButton } from "@/primitives/Button";
import { Container } from "@/primitives/Container";
import styles from "./page.module.css";

interface FeatureProps extends Omit<ComponentProps<"div">, "title"> {
  description: ReactNode;
  title: ReactNode;
}

function Feature({ title, description, className, ...props }: FeatureProps) {
  return (
    <div className={clsx(className, styles.featuresFeature)} {...props}>
      <h4 className={styles.featuresFeatureTitle}>{title}</h4>
      <p className={styles.featuresFeatureDescription}>{description}</p>
    </div>
  );
}

export default async function Index() {
  const session = await auth();

  // If logged in, go to dashboard
  if (session) {
    redirect(DASHBOARD_URL);
  }

  return (
    <MarketingLayout>
      <Container className={styles.section}>
        <div className={styles.heroInfo}>
          <h1 className={styles.heroTitle}>
            Launch Your College Project with Ease
          </h1>
          <p className={styles.heroLead}>
            Use our College Project Starter Kit to kick off your academic projects in no time.
          </p>
        </div>
        <div className={styles.heroActions}>
          <form
            action={async () => {
              "use server";
              await signIn();
            }}
          >
            <Button icon={<SignInIcon />}>Sign in</Button>
          </form>
          <LinkButton
            href="https://example.com/college-project-starter-kit"
            target="_blank"
            variant="secondary"
          >
            Explore Resources
          </LinkButton>
        </div>
      </Container>
      <Container className={styles.section}>
        <h2 className={styles.sectionTitle}>Key Features</h2>
        <div className={styles.featuresGrid}>
          <Feature
            description={
              <>
                A collaborative platform with features like project sharing, task management, user roles, and more.
              </>
            }
            title="Collaboration Tools"
          />
          <Feature
            description={
              <>
                Implements best practices with SSR and custom endpoints. Edit and manage project tasks from both client and server.
              </>
            }
            title="Modern Web Technologies"
          />
          <Feature
            description={
              <>
                Customize our reusable interface and design system to match your project requirements.
              </>
            }
            title="Customizable Interface"
          />
          <Feature
            description={
              <>
                All client and server functions are fully typed, making it easy to maintain and update.
              </>
            }
            title="TypeScript Integration"
          />
          <Feature
            description={
              <>
                Complete authentication system that supports various providers, including GitHub, Google, and more.
              </>
            }
            title="Flexible Authentication"
          />
          <Feature
            description={
              <>
                Real-time data updates with the SWR (stale-while-revalidate) library for a dynamic user experience.
              </>
            }
            title="Real-Time Data"
          />
        </div>
      </Container>
    </MarketingLayout>
  );
}

