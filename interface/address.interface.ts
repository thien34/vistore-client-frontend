import { PagingResponse } from './paging.interface'

export interface AddressesResponse {
    id?: number
    firstName: string
    lastName: string
    email: string
    company: string
    addressDetail: string
    phoneNumber: string
    note?: string
}

export type AddressPagingResponse = PagingResponse<AddressesResponse>

export interface AddressRequest {
    id?: number
    firstName: string
    lastName: string
    email: string
    company?: string
    districtId: string
    provinceId: string
    wardId: string
    addressName: string
    phoneNumber: string
    customerId?: number
}

export interface Address {
    provinceId: string
    districtId: string
    wardId: string
    province: string
    district: string
    address: string
}

export interface Province {
    code: string
    fullName: string
}

export interface District {
    code: string
    fullName: string
    provinceCode: string
}

export interface Ward {
    code: string
    fullName: string
    districtCode: string
}
