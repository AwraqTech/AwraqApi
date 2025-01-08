import { Request, Response } from "express";

export default async function sendingNewOtp(req: Request, res: Response) {
    try {
        res.status(200).send({message: 'This is endpoint api for sending new OTP'});
    } catch (error: any) {
        res.status(500).send({message: `There was unexpected error ouccers, error message: ${error.message}`});
    }
};