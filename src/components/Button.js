function Button(props) {
    let style = 'bg-slate-700 border border-slate-600 flex text-2xl items-center justify-center h-full w-full';
    return (
        <div className={ style + ' ' + props.style}>
            { props.label }
        </div>
    );
}

export default Button;