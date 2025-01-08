import { Request, Response } from "express";
import { genUniqueMachineId } from "../../../utils/genMachineIdentifier";

export default async function posLoginUser(req: Request, res: Response) {
    try {
        // this is only for testing purpose, i will remove it later.
        // This function will be used to idintifie the user trying to login to validate the machine used is it maching with machine registered or not
        // if user didn't login yet, this function will be executed to generate a unique idintifer for new POS users
        const machineId = genUniqueMachineId();
        res.status(200).send({message: `Machine ID is: ${machineId}`});

    } catch (error: any) {
        res.status(500).send({message: `There was unexpected error ouccers, error message: ${error.message}`});
    }
}