import Heading from "@theme/Heading";
import clsx from "clsx";
import type { ReactNode } from "react";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Scalable Architecture",
    description: (
      <>
        FolderZen provides a scalable folder structure that grows with your
        project, keeping your codebase organized as it expands.
      </>
    ),
  },
  {
    title: "Clear Separation of Concerns",
    description: (
      <>
        Each layer has a specific responsibility, making it easier to understand
        where code should be placed and how different parts of the application
        interact.
      </>
    ),
  },
  {
    title: "Optimized for Next.js & React",
    description: (
      <>
        Designed specifically for modern React and Next.js applications, with
        best practices for component organization and state management.
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
