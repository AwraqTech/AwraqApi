import { Request, Response } from "express";

export default async function resetPassword(req: Request, res: Response) {
    try {
        res.status(200).send({message: 'This is endpoint api for reset password'});
    } catch (error: any) {
        res.status(500).send({message: `There was unexpected error ouccers, error message: ${error.message}`});
    }
};