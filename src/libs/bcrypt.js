import bcrypt from 'bcrypt'

export const convertPasswordToHash = async (password) => {

    return await bcrypt.hash(password, 2)
}