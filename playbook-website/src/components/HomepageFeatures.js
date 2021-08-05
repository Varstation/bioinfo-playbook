import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Pipelines prontos para diversas ômicas',
    Svg: require('../../static/img/dna-omics.svg').default,
    description: (
      <>
      Os pipelines do Varstation processam uma variedade de dados nas áreas de genômica, metagenômica,
        genotipagem, transcriptoma e epigênomica.
      </>
    ),
  },
  {
    title: 'Pipelines seguindo as boas práticas de desenvolvimento',
    Svg: require('../../static/img/bioinformatics-pipeline.svg').default,
    description: (
      <>
        Os pipelines utilizados em produção pelo Varstation; já são validados e preparados para escala em volume de processamento de dados e otimizados para processamento em nuvem considerando aspectos de custo e eficiência.
      </>
    ),
  },
  {
    title: 'Boas Práticas para todos',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Pipelines são versionados e testados por ciclos de testes automatizados para garantir rastreabilidade e compartilhamento.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
