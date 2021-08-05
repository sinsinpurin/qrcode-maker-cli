import Qr from "./qr";

if(process.argv.length == 4){
    const qr = new Qr(process.argv[2], process.argv[3]);
    qr.qrMake()
    console.log("QR Make!!")
}else{
    console.log("")
}
