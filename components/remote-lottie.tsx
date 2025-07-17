'use client';

import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';

export default function RemoteLottie() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('https://cdn.lottielab.com/l/4cnWL2oHCH587E.json')
      .then(res => res.json())
      .then(setAnimationData);
  }, []);

  if (!animationData) return <p>Loading animation...</p>;

  return <Lottie animationData={animationData} loop={true} className=' rounded-3xl'/>;
}