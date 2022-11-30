
import { Request, Response } from 'express';
import * as ftp from "basic-ftp"
const client = new ftp.Client()
client.ftp.verbose = true


export class FTPController {
    public static connect = async () => {
        await client.access({
            host: "185.154.53.230",
            user: "ftpuser",
            password: "123"
        })
    }


    public static upload = async (req: any, res: Response) => {
        console.log(req.files);
        res.send('UPLOADED!!!');
    }
}

