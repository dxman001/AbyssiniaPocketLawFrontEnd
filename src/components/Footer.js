export default function Footer()
{
    return( 
    <div className="block5 layout">
        <div className="flex layout_footer">
            <div className="paragraph_body layout">© 2022 Abyssinialaw.com.<br />Maintained by Liku Worku Law Office.</div>
            <img src={require("../assets/social_media_icons.png")} alt="footer social media" className="image2 layout" />
        </div>
    </div>
    );
}