import '@/public/css/not-found.css';
import Header from '@/components/stable_header';


export const metadata = {
  title: "Innovating AI, Robotics, and Software Solutions for a Smarter Tomorrow",
  description: "Ovita Lab is a startup dedicated to developing artificial intelligence, robotics, and software solutions to address real-world challenges.",
  openGraph: {
    images: ['/opengraph/image.png'],
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