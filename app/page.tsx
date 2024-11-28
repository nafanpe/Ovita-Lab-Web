import '@/public/css/not-found.css';
import Header from '@/components/stable_header';


export const metadata = {
  title: "Innovating AI, Robotics, and Software Solutions for a Smarter Tomorrow",
  description: "Ovita Lab is a startup dedicated to developing artificial intelligence, robotics, and software solutions to address real-world challenges.",
  openGraph: {
    images: ['/img/opengraph/image.png'],
  }
};

export default function Custom404() {
  return (
    <>
      <Header />
      <div className="maintenance-container">
        <img src="/img/icons/graphics/maintenance.png" alt="Maintenance Image" className="maintenance-image" />
        <h1 className="maintenance-title">We Are Undergoing Maintenance</h1>
        <p className="maintenance-message">Our website is currently being updated. Please check back soon!</p>
      </div>
    </>
  )
}