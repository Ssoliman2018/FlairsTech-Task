import { Coordinates } from "./coordinates"

export interface Address {
    address: string
    city: string
    coordinates: Coordinates
    postalCode: string
    state: string
}
