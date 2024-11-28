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
      <div className="notfound-container">
      <img src="/img/icons/graphics/error.png" alt="Not Found Image" className="notfound-image" />
        <h1 className="notfound-title">We Are Undergoing Maintenance</h1>
        <p className="notfound-message">Our website is currently being updated. Please check back soon!</p>
      </div>
    </>
  )
}