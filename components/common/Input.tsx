interface InputProps {
    type: 'text' | 'file' | 'number',
    value?: string | number,
    id?: string,
    placeHolder?: string,
    width?: string,
    padding?: string,
    min?: number,
    max?: number,
    onChange?(e: { target: { id: any; value: any } }): void
}

const Input = ({
    type,
    value,
    id,
    onChange,
    min,
    max,
    placeHolder,
    width,
    padding,
}: InputProps) => {
    return (
        <input
            type={type}
            value={value}
            min={min}
            max={max}
            onChange={onChange}
            className={`${padding} ${width} text-slate-700 border border-slate-200 outline-indigo-400 rounded-md`}
            id={id}
            placeholder={placeHolder}
        />
    )
}

export default Input;