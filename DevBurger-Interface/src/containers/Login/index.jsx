import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { api } from '../../services/api'
import { Container } from "./styles"
import { LeftContainer } from "./styles"
import { RightContainer } from "./styles"
import { Title } from "./styles"
import { Form } from "./styles"
import { InputContainer } from "./styles"
import { Button } from '../../components/Button/index'
import { toast } from "react-toastify"
import Logo from '../../assets/logoDEV.svg'
import { Link } from "./styles"





export function Login() {

    const navigate = useNavigate();


    const schema = yup
        .object({
            email: yup.string().email('Digite um email válido').required('O email é obrigatório'),
            password: yup.string().min(6, 'A senha deve conter pelo menos 6 (seis) caracteres').required('Digite uma senha'),
        })
        .required()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = async (data) => {
        const { data: {token} } = await toast.promise(
            api.post('/session', {
                email: data.email,
                password: data.password
            }),
            {
                pending: 'Verificando seus dados',
                success: {
                    render() {
                        setTimeout(() => {
                            navigate('/');
                        }, 3500)
                        return `Seja bem vindo!`
                    },
                },
                error: 'Dados incorretos'
            },

        )

        localStorage.setItem('token', token)
    }

    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="Logo-devburger" />
            </LeftContainer>
            <RightContainer>
                <Title>
                    Olá, seja bem vindo ao <span>Dev Burger!</span>
                    <br />
                    Acesse com seu <span>Login e senha</span>.
                </Title>
                <Form onSubmit={handleSubmit(onSubmit)} >
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" {...register('email')} />
                        <p>{errors?.email?.message}</p>
                    </InputContainer>
                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" {...register('password')} />
                        <p>{errors?.password?.message}</p>
                    </InputContainer>
                    <Button type='submit'>Entrar</Button>
                </Form>
                <p>
                    Não possui conta? <Link to="/cadastro">Clique Aqui.</Link>
                </p>
            </RightContainer>
        </Container>
    )
}
