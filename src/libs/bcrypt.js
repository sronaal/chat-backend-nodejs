import bcrypt from 'bcrypt'

export const convertPasswordToHash = async (password) => {

    return await bcrypt.hash(password, 2)
}

export const validarPassword = (hashPassword, password) => {

    return bcrypt.compare(password, hashPassword)
}