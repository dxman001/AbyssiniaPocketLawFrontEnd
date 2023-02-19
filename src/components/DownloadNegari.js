import '../css/download-negari.css'; 
export default function DownloadNegari()
{
    const platformOS = window.navigator.platform;
    const isMobile= (platformOS) =>
    {
        if(platformOS.includes("iphone") 
        || platformOS.includes("ipod") 
        || platformOS.includes("ipad") 
        || platformOS.includes("android") 
        || platformOS.includes("blackberry")
        || platformOS.includes("armv"))
        {
            return true;
        }
       else{
        return true;
       }
    }
   
   return(
    isMobile(platformOS)?
    <div className='negari-main'>
      <a href='https://play.google.com/store/apps/details?id=com.abyssinialaw.negari&hl=en&gl=US&pli=1' 
       target='_blank' className='negari-main layout'>  
        Negari        
        <span className='icon'><i className='fa fa-download'> </i>  </span>    
      </a>               
    </div>
    : <></>
   );
}