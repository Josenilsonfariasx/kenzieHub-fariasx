import { forwardRef } from "react";
export const Input = forwardRef(({label, error, ...rest }, ref) => {
    return (
        <>
            {label ? <label htmlFor={label} className="title headline white">{label}</label> : null}
            <input className="input" {...rest} ref={ref}/>
            {error ? <span className="title headline rose">{error.message}</span> : null}
        </>
    );
});
