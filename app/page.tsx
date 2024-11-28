import '@/public/css/not-found.css';
import Header from '@/components/stable_header';


export const metadata = {
  title: "Ovita Lab: Pioneering Robotics & AI Innovations for a Smarter Future",
  description: "Ovita Lab is a robotics, artificial intelligence, and software company delivering innovative solutions to drive industry transformation and community empowerment.",
  openGraph: {
    images: ['/opengraph/image.jpg'],
  }
};

export default function Custom404() {
  return (
    <>
      <Header />
      <div className="notfound-container">
      </div>
    </>
  )
}