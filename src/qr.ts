import QR from 'qrcode'

class Qr{
    url: string
    outputName: string
    options: QR.QRCodeToFileOptions
    constructor(outputName: string, qrurl: string){
        this.outputName = outputName
        this.url = qrurl;
        this.options = {
            type:"png"
        };
    }
    qrMake(){
        QR.toFile(this.outputName , this.url, this.options)
    }
}

export default Qr