function NavItem({link, text, children}){
    return (
        <a class="flex m-2 px-5 py-2 rounded-md hover:bg-white hover:text-black" href={link}>
            {children}
            <span class="hidden sm:contents">{text}</span>
        </a>
    );
}
export default NavItem;
