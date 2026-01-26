import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Show Management',
    imgSrc: '/img/show_management.png',
    imgLink: '/docs/shows/creating-shows',
    description: (
      <>
        Create detailed cue sheets with timing, technical notes, and media files.
        Build your show schedule and keep your entire team on the same page.
      </>
    ),
  },
  {
    title: 'Real-Time Collaboration',
    imgSrc: '/img/live.png',
    imgLink: '/docs/running-a-show/live-view',
    description: (
      <>
        Track show progress live with your entire crew. Everyone sees the same
        current cue, chat in real-time, and stay synchronized throughout the show.
      </>
    ),
  },
  {
    title: 'Act Submissions',
    imgSrc: '/img/submissions.png',
    imgLink: '/docs/acts/submitting-acts',
    description: (
      <>
        Let performers submit their acts with all technical requirements. Review
        submissions, organize your lineup, and export to PDF or QLab.
      </>
    ),
  },
];

function Feature({imgSrc, imgLink, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={imgLink}>
          <img src={imgSrc} className={styles.featureImage} alt={title} />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
