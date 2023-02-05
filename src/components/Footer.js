export default function Footer()
{
    return( 
    <div className="block5 layout">
        <div className="flex layout_footer">
            <div className="paragraph_body layout">
                ©2023 Abyssinialaw.com | Maintained by Liku Worku Law Office |
                <div className="paragraph_body socialmedia">
                    <a href="https://www.facebook.com/ethiopianlaws" target="_blank">
                        <img  src={require("../assets/facebook_icon.png")} width="22px" height="22px" alt="fb" />
                    </a>
                </div>
                <div className="paragraph_body socialmedia">
                    <a href="https://www.linkedin.com/company/abyssinia-law" target="_blank">
                        <img  src={require("../assets/linkedin_icon.png")} width="23px" height="23px" alt="fb" />
                    </a>
                    </div>
                <div className="paragraph_body socialmedia">
                    <a href="https://t.me/abyssinialaw" target="_blank">
                        <img  src={require("../assets/telegram_icon.png")} width="22px" height="22px" alt="tg" />
                    </a>
                </div>
            </div>
          </div>
    </div>
    );
}