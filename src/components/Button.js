function Button(props) {
    let style = 'bg-slate-700 border border-slate-600 flex text-3xl items-center justify-center h-full w-full';
    return (
        <div className={ props.style + ' ' + style}>
            { props.label }
        </div>
    );
}

export default Button;