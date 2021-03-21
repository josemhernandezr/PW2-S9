import FormLabel from "./Form/FormLabel";
import FormInput from "./Form/FormInput";
import FormSend from "./Form/FormSend";
import FormCrear from "./Form/FormCrear";
import FormLblPass from "./Form/FormLblPass";

function LoginForm({titulo, subtitulo}){
    return (
        <form action="" class="m-7">
            <FormLabel lblfor="email" text="Correo electrónico:"></FormLabel>
            <FormInput type="email" name="email" id="email" placeholder="correo@dominio.com"></FormInput>
            <FormLabel lblfor="password" text="Contraseña:"></FormLabel>
            <FormInput type="password" name="password" id="password" placeholder="contraseña"></FormInput>
            <FormLblPass></FormLblPass>
            <FormSend text="Aceptar"></FormSend>
            <FormCrear text="¿No tienes cuenta? " url="#" textlink=" Crear una"></FormCrear>
        </form>
    );
}
export default LoginForm;