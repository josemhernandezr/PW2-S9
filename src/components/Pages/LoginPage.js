import Contenido from '../Contenido/Contenido';
import Login from '../Login/Login';
import LoginTitulo from "../Login/LoginTitulo";
import LoginForm from "../Login/LoginForm";
import LoginSocial from "../Login/LoginSocial";

function LoginPage({}){
    return (
        <Contenido>
            <Login id="">
                <LoginTitulo id="" titulo="Iniciar Sesión" subtitulo="Inicie sesión para acceder a su cuenta."></LoginTitulo>
                <LoginForm></LoginForm>
                <LoginSocial></LoginSocial>
            </Login>
            <Login id="info">
              <LoginTitulo id="titulo" titulo="V O L A R" subtitulo="‎Realice un seguimiento de los precios, organice planes de viaje y acceda a ofertas solo para miembros con su cuenta VOLAR‎."></LoginTitulo>
            </Login>
        </Contenido>
    );
}
export default LoginPage;
