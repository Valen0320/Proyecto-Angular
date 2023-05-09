export interface GenericResponse {
    code: number,
    data?: any, // ? es que puede ser null
    errors?: string[]
}