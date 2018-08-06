export class trips {
    id:string;
    userId:string;
    uriBit:string;  
    trackType:number;
    tripStart:Date;
    actualTripEnd:Date;
    eta:Date;
    etaTolerance:number;    
    destinationLocationId:string;
    addressDisplay: string;
    addressPlace:string;   
    autocomplete: boolean;
    notifyAtStart: boolean;  
}