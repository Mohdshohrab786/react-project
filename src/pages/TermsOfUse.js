import React from "react";
import ImgHero from "../imgs/heroImgs/ExpertiseHero.jpeg";
import HeroImg from "../Materials/Hero/HeroImg";
import SectionContainer from "../Materials/Section/Section";

const TermsOfUse = () => {
    const containerStyle = {
        padding: "60px 20px",
        maxWidth: "1100px",
        margin: "0 auto",
        lineHeight: "1.9",
        color: "#333",
    };

    const heading2Style = {
        fontSize: "32px",
        fontWeight: "600",
        marginBottom: "25px",
        textAlign: "center",
    };

    const heading3Style = {
        fontSize: "20px",
        fontWeight: "600",
        marginTop: "35px",
        marginBottom: "12px",
        color: "#111",
        borderLeft: "4px solid #c5a47e",
        paddingLeft: "10px",
    };

    const paragraphStyle = {
        marginBottom: "15px",
        fontSize: "15.5px",
    };

    const listStyle = {
        paddingLeft: "20px",
        marginBottom: "15px",
    };

    const listItemStyle = {
        marginBottom: "8px",
    };

    return ( <
        >
        <
        HeroImg image = { ImgHero } > Terms of Use < /HeroImg>

        <
        SectionContainer >
        <
        div style = { containerStyle } >
        <
        h2 style = { heading2Style } > Terms of Use < /h2>

        <
        p style = { paragraphStyle } >
        These Terms of Use govern your access to and use of our website.By accessing or using this website, you agree to comply with these terms.If you do not agree, please refrain from using this site. <
            /p>

        <
        h3 style = { heading3Style } > About Our Firm < /h3> <
        p style = { paragraphStyle } >
        We are a contemporary full - service law firm with lawyers bringing over three decades of experience.We deliver practical,
        business - focused legal solutions with integrity, professionalism,
        and global best practices. <
        /p>

        <
        h3 style = { heading3Style } > Use of Website < /h3> <
        ul style = { listStyle } >
        <
        li style = { listItemStyle } >
        The content on this website is
        for general informational purposes only. <
        /li> <
        li style = { listItemStyle } >
        Use of this website does not create a lawyer - client relationship. <
        /li> <
        li style = { listItemStyle } >
        You agree not to misuse the website or engage in unlawful activity. <
        /li> <
        /ul>

        <
        h3 style = { heading3Style } > Intellectual Property < /h3> <
        p style = { paragraphStyle } >
        All content, including text, graphics, logos, and materials,
        belongs to our Firm unless otherwise stated.Unauthorized reproduction or distribution is prohibited. <
        /p>

        <
        h3 style = { heading3Style } > No Legal Advice < /h3> <
        p style = { paragraphStyle } >
        The information provided on this website does not constitute legal advice and should not be relied upon as such.You should seek professional legal counsel
        for advice specific to your situation. <
        /p>

        <
        h3 style = { heading3Style } > Limitation of Liability < /h3> <
        p style = { paragraphStyle } >
        We are not liable
        for any direct, indirect, or consequential loss arising from your use of this website or reliance on its content. <
        /p>

        <
        h3 style = { heading3Style } > External Links < /h3> <
        p style = { paragraphStyle } >
        This website may contain links to third - party websites.We are not responsible
        for the content or privacy practices of such external sites. <
        /p>

        <
        h3 style = { heading3Style } > Changes to Terms < /h3> <
        p style = { paragraphStyle } >
        We reserve the right to update or modify these Terms of Use at any time without prior notice.Continued use of the website signifies acceptance of any changes. <
        /p>

        <
        h3 style = { heading3Style } > Governing Law < /h3> <
        p style = { paragraphStyle } >
        These Terms shall be governed by and interpreted in accordance with applicable laws and regulatory standards. <
        /p>

        <
        h3 style = { heading3Style } > Contact Us < /h3> <
        p style = { paragraphStyle } >
        If you have any questions regarding these Terms of Use, please contact us through the details provided on our website. <
        /p> <
        /div> <
        /SectionContainer> <
        />
    );
};

export default TermsOfUse;