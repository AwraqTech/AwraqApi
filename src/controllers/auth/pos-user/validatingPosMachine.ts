import { Request, Response } from "express";

export default async function validatingPosMachine(req: Request, res: Response) {
    try {
        // Here i will make function to compare id stored on DB with current id user trying to login to validate and secure login
        res.status(200).send({message: 'This is endpoint api for validating POS user trying to login with onSpec machine'});
    } catch (error: any) {
        res.status(500).send({message: `There was unexpected error ouccers, error message: ${error.message}`});
    }
}