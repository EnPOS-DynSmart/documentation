import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Kolay Kurulum ve Kullanım', 
    Svg: require('@site/static/img/anasayfa/bilgisayar.svg').default,
    description: (
      <>
        DynSmart donanım yatırımı gerektirmez. Sadece bir internet bağlantısı ve bir bilgisayar yeterlidir.
      </>
    ),
  },
  {
    title: 'Güvenli ve Stabil',
    Svg: require('@site/static/img/anasayfa/guvenli-ve-stabil.svg').default,
    description: (
      <>
        DynSmart verilerinizi güvenli bir şekilde saklar ve stabil bir şekilde çalışır.
      </>
    ),
  },
  {
    title: 'Bulut Tabanlı',
    Svg: require('@site/static/img/anasayfa/bulut.svg').default,
    description: (
      <>
        DynSmart bulut tabanlıdır, bu sayede verilerinize her yerden erişebilirsiniz.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
