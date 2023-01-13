import axios from 'axios'
import fileDownload from 'js-file-download'
export default class FileHandler 
{
    
    constructor(fileName) 
     { 
        this.fileName=fileName;
        this.url= `https://abyssinialaw.com/lawandcassationDB/Admin/uploads/${this.fileName}`;       
     }

    ViewFile= () => window.open(this.url);

    DownLoadFile = () => 
    {
        axios.get(this.url, {
            headers: {
                'Access-Control-Allow-Headers':'*',
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
              },
            responseType: 'blob',
          })
          .then((res) => {
            fileDownload(res.data, this.fileName)
          })
    }
    
     downloadFile2 = () => {
        fetch(this.url).then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = this.fileName;
                alink.click();
            })
        })
    }
}

