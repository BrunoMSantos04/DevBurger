import { useForm } from "react-hook-form"
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
import { useNavigate } from "react-router-dom"

export function Register() {

    const navigate = useNavigate();


    const schema = yup
        .object({
            name: yup.string().required('O nome é obrigatório'),
            email: yup.string().email('Digite um email válido').required('O email é obrigatório'),
            password: yup.string().min(6, 'A senha deve conter pelo menos 6 (seis) caracteres').required('Digite uma senha'),
            confirmPassword: yup.string().oneOf([yup.ref('password')], 'As senhas devem ser iguais').required('Confirme sua senha'),
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

        try {
            const { status } = await
                api.post('/users', {
                    name: data.name,
                    email: data.email,
                    password: data.password
                },
                    {
                        validateStatus: () => true,
                    },

                )
            if (status === 200 || status === 201) {

                setTimeout(() => {
                    navigate('/login')
                }, 3500);

                toast.success('Usuário criado com sucesso. Redirecionando para login')
            } else if (status === 400) {
                toast.error('E-mail já cadastrado')
            } else {
                throw new Error();
            }

        } catch (error) {
            toast.error('Não foi possível criar usuário, tente novamente')
        }


    }


    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="Logo-devburger" />
            </LeftContainer>
            <RightContainer>
                <Title>
                    Criar Conta
                </Title>
                <Form onSubmit={handleSubmit(onSubmit)} >
                    <InputContainer>
                        <label>Nome</label>
                        <input type="name" {...register('name')} />
                        <p>{errors?.name?.message}</p>
                    </InputContainer>

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

                    <InputContainer>
                        <label>Confirme a senha</label>
                        <input type="password" {...register('confirmPassword')} />
                        <p>{errors?.confirmPassword?.message}</p>
                    </InputContainer>
                    <Button type='submit'>Criar Conta</Button>
                </Form>
                <p>
                    Já possui conta? <Link to="/login">Clique Aqui.</Link>
                </p>
            </RightContainer>
        </Container>
    )
}
