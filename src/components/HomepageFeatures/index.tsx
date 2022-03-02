import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { IoDesktopOutline, IoLogoGithub, IoRocketOutline } from 'react-icons/all';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Getting Started',
    Svg: IoRocketOutline,
    description: (
      <>
          With the Component SDK, you can extend the Incorta visual framework with new custom components,
          including new visual elements, controls, and data visualizations.
          <br/>
          <a href="/docs/intro">Learn more</a>
      </>
    ),
  },
  {
    title: 'Tutorials',
    Svg: IoDesktopOutline,
    description: (
      <>
        Coming Soon...
      </>
    ),
  },
  {
    title: 'Code Samples',
    Svg: IoLogoGithub,
    description: (
      <>
          Try it yourself and play with our code samples.
          <br />
          <a href="https://github.com/Incorta/visualizations/">Learn more</a>
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
