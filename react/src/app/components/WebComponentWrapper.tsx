'use client';

import dynamic from 'next/dynamic';

const LoadWebComponents = dynamic(
  () => import('ui-library').then(mod => {
    // This ensures registration code runs but doesn't pass a class to React
    return () => null;
  }),
  { ssr: false }
);

export default function WebComponentWrapper() {
  return (
    <LoadWebComponents />
  );
}
