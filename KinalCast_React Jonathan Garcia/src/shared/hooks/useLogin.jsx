import { useState } from "react"
import toast from 'react-hot-toast'
import { loginRequest } from "../../services/api.js"

export const useLogin = () => {
    const [isRegister, setIsRegister] = useState(false)

    const login = async (email, password) => {
        setIsRegister(true)
        const userLogin = {
            email,
            password
        }
        const response = await loginRequest(userLogin)
        setIsRegister(false)

        if (response.error) {
            return toast.error(
                response?.e?.response?.data ||
                'Algunos de los parametros es incorrecto revisalos.'
            )
        } else {
            toast.success('Has iniciado sesion bienvenido :)')
        }
        console.log(response)
    }

    return {
        login,
        isLoading: isRegister
    }
}