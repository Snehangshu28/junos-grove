import React, { useEffect, useRef } from 'react';
import './TreasureMapJourney.css';
import jungleBgLeft from '../assets/Left.png';
import jungleBgRight from '../assets/Right.png';
import { gsap } from 'gsap';

const data = [
  { year: 2019, text: 'Sunt nostrud amet sint do', position: 'bottom' },
  { year: 2020, text: 'Exercitation veniam consequat', position: 'top' },
  { year: 2021, text: 'Velit officia consequat duis', position: 'bottom' },
  { year: 2022, text: 'Ullamco est sit aliqua dolor', position: 'top' },
  { year: 2023, text: 'Amet minim mollit non deserunt', position: 'bottom' },
];

export default function TreasureMapJourney() {
  const containerRef = useRef();
  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: 'power2.out' } });

      // Animate the line fill
      timeline.to('.line-fill', {
        scaleX: 1,
        duration: 2,
        transformOrigin: 'left center',
      });

      // Animate checkpoints one by one
      data.forEach((_, index) => {
        timeline.to(
          `.checkpoint-${index}`,
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: 'back.out(1.7)',
          },
          `-=${index === 0 ? 1 : 0.7}`
        );

        timeline.to(
          `.text-${index}`,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
          },
          '-=0.4'
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="timeline-section" ref={containerRef}>
      <img src={jungleBgLeft} className="jungle-bg left" alt="" />
      <img src={jungleBgRight} className="jungle-bg right" alt="" />

      <div className="timeline-header">
        <h2>Treasure Map Journey</h2>
      </div>

      <div className="timeline-wrapper">
        <div className="line-base"></div>
        <div className="line-fill"></div>

        <div className="checkpoints">
          {data.map((item, index) => (
            <div
              className="checkpoint-container"
              key={item.year}
              style={{ left: `${(index / (data.length - 1)) * 100}%` }}
            >
              <div className={`checkpoint checkpoint-${index}`}>
                <span className="year">{item.year}</span>
              </div>
              <div className={`checkpoint-text text-${index} ${item.position}`}>
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
