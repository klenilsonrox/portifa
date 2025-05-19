'use server'

import { cookies } from "next/headers"

export async function  saveToken(token) {
    cookies().set('token', token)
}