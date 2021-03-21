import Marca from "./marca/NavMarca";
import NavItem from "./NavItems";
function NavBar({children}){
    return (
        <nav className="font-sans fixed flex flex-col overflow-hidden  flex-wrap text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-black text-white shadow w-full">
            <Marca titulo="V O L A R"></Marca>
            <div className="flex flex-row text-center content-center overflow-hidden flex-wrap">
                <NavItem link="/" text="Inicio">
                    <svg class="h-6 w-6 m-0 sm:mr-2 my-auto"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="5 12 3 12 12 3 21 12 19 12" />  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />  <rect x="10" y="12" width="4" height="4" /></svg>
                </NavItem>
                <NavItem link="/list" text="Mi lista de viaje">
                    <svg class="h-6 w-6 m-0 sm:mr-2 my-auto"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M3.5 5.5l1.5 1.5l2.5 -2.5" />  <path d="M3.5 11.5l1.5 1.5l2.5 -2.5" />  <path d="M3.5 17.5l1.5 1.5l2.5 -2.5" />  <line x1="11" y1="6" x2="20" y2="6" />  <line x1="11" y1="12" x2="20" y2="12" />  <line x1="11" y1="18" x2="20" y2="18" /></svg>
                </NavItem>
                <NavItem link="/covid" text="COVID 19">
                    <svg class="h-6 w-6 m-0 sm:mr-2 my-auto"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="1" />  <circle cx="12" cy="12" r="5" />  <circle cx="12" cy="12" r="9" stroke-dasharray=".001 4.03" /></svg>
                </NavItem>
            </div>
        </nav>
    );
}
export default NavBar;
