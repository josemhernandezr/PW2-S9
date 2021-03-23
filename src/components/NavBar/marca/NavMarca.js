import Logo from "./NavLogo";
import Titulo from "./NavTitulo";
function Marca({ titulo }){
  return (
    <div className="mb-2 sm:mb-0 flex flex-row w-full overflow-hidden md:w-1/2 mx-auto mt-3 sm:mt-0">
      <div className="flex mx-auto md:mx-0">
        <div className="h-10 w-10 self-center mr-2">
          <Logo alt="Logo" src="https://csscomps.com/images/csscomps.png"></Logo>
        </div>
        <div className="self-center">
          <Titulo texto={titulo}></Titulo>
        </div>
      </div>
    </div>
  );
}
export default Marca;
  