// This is a dynamic route page in Next.js App Router

import data from '@/app/data'; // Assuming your data.js has the list of destinations

export default function DestinationPage({ params }) {
  const { slug } = params;


  return (
    <div>
     
       {slug}
    </div>
  );
}
