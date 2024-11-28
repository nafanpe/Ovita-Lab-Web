import '@/public/css/index.css';
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
            <div className="bento">
                <div className="grid">
                    <div className="item">
                        <img src="https://cdn.pixabay.com/photo/2024/07/15/17/21/ai-generated-8897456_1280.jpg" alt="Placeholder 5" />
                    </div>
                    <div className="item">
                        <img src="https://cdn.pixabay.com/photo/2024/01/10/16/13/drone-8499903_1280.jpg" alt="Placeholder 2" />
                    </div>
                    <div className="item">
                        <img src="https://cdn.pixabay.com/photo/2024/01/10/16/22/woman-8499959_1280.jpg" alt="Placeholder 1" />
                    </div>
                    <div className="item">
                        <img src="https://cdn.pixabay.com/photo/2020/03/17/17/46/engineer-4941342_1280.jpg" alt="Placeholder 3" />
                    </div>
                    <div className="item">
                        <img src="https://cdn.pixabay.com/photo/2023/08/09/18/02/man-8180076_1280.jpg" alt="Placeholder 4" />
                    </div>
                </div>
            </div>
        </>
    )
}