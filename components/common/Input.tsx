interface InputProps {
    type: 'text' | 'file' | 'number',
    value?: string,
    id?: string,
    placeHolder?: string,
    width?: string,
    padding?: string,
}

const Input = ({
    type,
    value,
    id,
    placeHolder,
    width,
    padding,
}: InputProps) => {
    return (
        <input
            type={type}
            value={value}
            className={`${padding} ${width} text-slate-700 border border-slate-200 outline-indigo-400 rounded-md`}
            id={id}
            placeholder={placeHolder}
        />
    )
}

export default Input;