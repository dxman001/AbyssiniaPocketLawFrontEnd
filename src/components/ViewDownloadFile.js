import Button from 'react-bootstrap/Button';
import FileHandler from '../services/FileHandler';
export default function ViewDownloadFile({downloadUrl})
{
    const filePaths=downloadUrl.split('/');
    const fileName = filePaths[2];  
    const fileHandler = new FileHandler(fileName);

    return(
        <div class="section2__flex1 layout">
            <Button onClick={()=>fileHandler.DownLoadFile()} className='btn-custom'  variant="outline-primary" id="download">
                Download
                <div className='spacer-custom'>
                    <li className='fa fa-download'> </li>
                </div>
            </Button>
            <div class="spacer section2__flex__spacer1"></div>
            <Button onClick={()=>fileHandler.ViewFile()} className='btn-custom'  variant="outline-primary" id="view">
                View
                <div className='spacer-custom'>
                    <li className='fa fa-eye'> </li>
                </div>
            </Button>
        </div>
    )
}