function FormLabel({text,url,textlink}){
    return (
        <p class="text-sm text-center text-gray-400">{text}
            <a href={url} class="text-blue-400 focus:outline-none focus:underline focus:text-blue-500">
                {textlink}
            </a>.
        </p>
    );
}
export default FormLabel;