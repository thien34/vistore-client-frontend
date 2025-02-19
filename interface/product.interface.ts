export interface Product {
    id: number
    slug: string
    name: string
    unitPrice: number
    discountPrice: number
    image: string
    categoryName: string
    sold: number
}

export interface ProductAttribute {
    productAttribute: {
        name: string
    }
    id: number
    name: string
    value: string
}

export interface ProductDetail {
    id: number
    slug: string
    name: string
    weight: number
    fullDescription: string
    unitPrice: number
    discountPrice: number
    images: string[]
    quantitySum: number
    categoryName: string
    productVariants: ProductVariantResponse[]
}

interface ProductVariantResponse {
    id: number
    attributes: AttributeValue[]
    quantity: number
    unitPrice: number
    discountPrice: number
}

interface AttributeValue {
    attributeName: string
    value: string
}
