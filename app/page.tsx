import '@/public/css/not-found.css';
import Header from '@/components/stable_header';


export const metadata = {
  title: "Grovix lab: Pioneering Robotics & AI Innovations for a Smarter Future",
  description: "Grovix lab is a robotics, artificial intelligence, and software company delivering innovative solutions to drive industry transformation and community empowerment.",
  openGraph: {
    images: ['/opengraph/image.jpg'],
  }
};

export default function Custom404() {
  return (
    <>
      <Header />
      <div className="notfound-container">
        <img src="/img/icons/graphics/error.png" alt="Not Found Image" className="notfound-image" />
        <h1 className="notfound-title">404 - Not Found</h1>
        <p className="notfound-message">The page you are looking for doesn't exist or an error occurred.</p>
      </div>
    </>
  )
}