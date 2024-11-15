export interface Country{
    name : string,
    photo : string,
    iso : string,
    indicatif : number
}

export interface MAg {
    id : number
}

export type PartnerForm ={
    firstName : string,
    lastName : string,
    email : string,
    phone : number,
    active :boolean,
    type : PartnerType,
    name : string,
    address : string,
    indicatif:string
    country : string,
    currency : Currency,
    apis:string[],
    balance:number


}

export enum PartnerType {
    MERCHAND = 'MARCHAND',
    BENEFICIARY = 'BENEFICIAIRE'
}
export type OnValidationChange = (isValid: boolean) => void;

export enum Currency {
    XOF = 'XOF',
    XAF = 'XAF'
}
