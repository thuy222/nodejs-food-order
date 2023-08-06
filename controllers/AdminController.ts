import express, {Request, Response, NextFunction} from "express"
import { CreateVandorInput } from "../dto"
import { Vandor } from "../models"

export const CreateVandor = async(req: Request, res: Response, next: NextFunction) => {
     const {name, address, pinCode, foodType, email, password,  ownerName, phone} = <CreateVandorInput>req.body

     const createdVandor = await Vandor.create({
        name: name,
        address: address,
        pinCode:pinCode, 
        foodType: foodType,
        email: email,
        password: password,
        ownerName: ownerName,
        phone: phone

     })

    return res.json({name, address, pinCode, foodType, email, password,  ownerName, phone} )
    }

export const GetVandors = async(req: Request, res: Response, next: NextFunction) => {
     
}

export const GetVandorByID = async(req: Request, res: Response, next: NextFunction) => {
     
}