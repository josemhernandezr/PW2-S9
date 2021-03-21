import './style.css';
function LoginTitulo({id, titulo, subtitulo}){
    return (
        <div id={id} class="text-center">
            <h1 class="my-3 pt-10 text-3xl font-semibold">{titulo}</h1>
            <p class="text-md">{subtitulo}</p>
        </div>
    );
}
export default LoginTitulo;