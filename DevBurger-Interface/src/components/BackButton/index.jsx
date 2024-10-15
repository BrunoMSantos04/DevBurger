import { ContainerButton } from './styles';

export function BackButton({children, ...props}) {

    return (
        <ContainerButton {...props}>{children}</ContainerButton>
    );
}