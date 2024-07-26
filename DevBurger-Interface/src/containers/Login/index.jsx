import { Container } from "./styles"
import { LeftContainer } from "./styles"
import { RightContainer } from "./styles"
import { Title } from "./styles"
import { Form } from "./styles"
import { InputContainer } from "./styles"
import {Button} from '../../components/Button/index'

import Logo from '../../assets/logoDEV.svg'

export function Login(){

    return(
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
                <Form>
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" />
                    </InputContainer>
                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" />
                    </InputContainer>
                    <Button>
                        Entrar
                    </Button>
                </Form>
                <p>
                    Não possui conta? <a>Clique Aqui.</a>
                </p>
            </RightContainer>
        </Container>
    )
}
