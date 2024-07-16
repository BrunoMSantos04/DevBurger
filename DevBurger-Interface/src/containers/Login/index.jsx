import { Container } from "./styles"
import { LeftContainer } from "./styles"
import { RightContainer } from "./styles"
import { Title } from "./styles"
import { Form } from "./styles"
import { InputContainer } from "./styles"
import { Link } from "./styles"
import { Button } from "./styles"

import Logo from '../../assets/Logo.png'

export function Login(){

    return(
        <Container>
            <LeftContainer>
                <img src={Logo} alt="Logo-devburger" />
            </LeftContainer>
            <RightContainer>
                <Title>
                Olá, seja bem vindo ao <span>Dev Burguer!</span>
                Acesse com seu <span>Login e senha</span>.
                </Title>
                <Form>
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" />
                    </InputContainer>
                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" />
                    </InputContainer>
                    <Link>
                        Esqueci Minha Senha
                    </Link>
                    <Button>
                        Entrar
                    </Button>
                </Form>
                <Link>
                    Não possui conta? Clique Aqui.
                </Link>
            </RightContainer>
        </Container>
    )
}
