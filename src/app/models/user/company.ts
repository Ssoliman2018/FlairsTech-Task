import { CompanyAddress } from "./company-address"

export interface Company {
    address: CompanyAddress
    department: string
    name: string
    title: string
}
