export interface auctionPaid{
    item_id: number,
    item_reciept: Reciept
}

export interface Name {
    firstName: string,
    lastName: string
}
export interface Address {
    firstAddressLine: string,
    secondAddressLine?: string,
    city: string,
    postalCode: string,
    province: string
}
export interface Reciept{
    username: string,
    address: Address,
    name: Name,
    cost: number
}