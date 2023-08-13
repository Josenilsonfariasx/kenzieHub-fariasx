import { forwardRef } from "react";


export const Input = forwardRef(({label, ...rest }, ref) => {
    return (
        <>
            {label ? <label htmlFor={label} className="title headline white">{label}</label> : null}
            <input className="input" {...rest} ref={ref}/>
        </>
    );
});
