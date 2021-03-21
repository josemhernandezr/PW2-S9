import Logo from "./NavLogo";
import Titulo from "./NavTitulo";
function Marca({ titulo }){
  return (
    <div className="mb-2 sm:mb-0 flex flex-row">
      <div className="h-10 w-10 self-center mr-2">
        <Logo alt="Logo" src="https://csscomps.com/images/csscomps.png"></Logo>
      </div>
      <div className="self-center">
        <Titulo texto={titulo}></Titulo>
      </div>
    </div>
  );
}
export default Marca;
  