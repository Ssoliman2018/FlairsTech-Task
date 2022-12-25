import { CompanyCoordinates } from "./company-coordinates"

export interface CompanyAddress {
    address: string
    city: string
    coordinates: CompanyCoordinates
    postalCode: string
    state: string
}
