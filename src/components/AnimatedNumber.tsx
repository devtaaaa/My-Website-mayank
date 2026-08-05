'use client';

import React, { useState, useEffect, useRef } from 'react';

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  format?: (val: number) => string;
  className?: string;
  prefix?: string;
  suffix?: string;
}

export default function AnimatedNumber({
  value,
  duration = 2000,
  format = (val) => Math.floor(val).toString(),
  className = '',
  prefix = '',
  suffix = '',
}: AnimatedNumberProps) {
  const [currentValue, setCurrentValue] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const startValue = 0;
    
    // Intersection Observer to trigger on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            setCurrentValue(startValue + (value - startValue) * easeProgress);

            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect(); // Run once
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, duration]);

  // Handle immediate updates if value changes after initial animation
  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  return (
    <span ref={elementRef} className={className}>
      {prefix}{format(currentValue)}{suffix}
    </span>
  );
}
