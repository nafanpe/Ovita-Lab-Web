import '@/public/css/index.css';
import Header from '@/components/stable_header';
import ImageSlider from '@/components/imageSlider';

export const metadata = {
    title: "Innovating AI, Robotics, and Software Solutions for a Smarter Tomorrow",
    description: "Ovita Lab is a startup dedicated to developing artificial intelligence, robotics, and software solutions to address real-world challenges.",
    openGraph: {
        images: ['/img/opengraph/image.png'],
    }
};

export default function Custom404() {
    const images = [
        <div className="container">
                <div className="bento-box">

                    {<div className="bento-child one">
                        <div className="img-container">
                            <img src="/img/multiple-idp-support.png" alt="" />
                        </div>
                        <h3>Multi-provider Support</h3>
                        <p>Enable seamless authentication for all users by configuring multiple Identity Providers (IDPs).</p>
                    </div>}

                    {<div className="bento-child two">
                        {/* <div className="icon-container">
                            <img src="https://i.ibb.co/XLnVYd0/redirection-rules-icon.png" alt=""/>
                        </div> */}
                        <h3>Redirection Rules</h3>
                        <p>Redirect users to their specific IDPs based on their email domains, groups, and directories.</p>
                    </div>}

                    {<div className="bento-child three">
                        <div className="img-container">
                            <img src="https://i.ibb.co/LkLWvGZ/jit-and-scim-provisioning.png" alt="" />
                        </div>
                        <div>
                            <h3>JIT and SCIM Provisioning</h3>
                            <p>Automate provisioning, group assignments, and attribute mapping for user ease and administrator efficiency.</p>
                        </div>
                    </div>}

                    {<div className="bento-child four">
                        {/* <div className="icon-container">
                            <img src="https://i.ibb.co/zbZHyTR/customize-login-page-icon.png" alt=""/>
                        </div> */}
                        <h3>Customize Login Page</h3>
                        <p>Customize the login interface to reflect your brand identity, ensuring a professional experience.</p>
                    </div>}

                    {<div className="bento-child five">
                        {/* <div className="icon-container">
                            <img src="https://i.ibb.co/GpvhrMj/signed-encryption-support.png" alt=""/>
                        </div> */}
                        <div className="img-container">
                            <img src="https://i.ibb.co/LkLWvGZ/jit-and-scim-provisioning.png" alt="" />
                        </div>
                        <h3>Signed Encryption Support</h3>
                        <p>Ensure data integrity and prevent unauthorized access during transit through the use of signed and encrypted
                            SAML assertions.</p>
                    </div>}

                </div>
        </div>
    ] 

    return (
        <>
            <Header />
            {/* <div className="bento">
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
            </div> */}

            <ImageSlider images={images}/>
        </>
    )
}