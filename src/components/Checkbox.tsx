interface CheckboxProps {
    checked: boolean;
    onChange: () => void;
}

export function Checkbox({ checked, onChange }: CheckboxProps) {
    return (
        <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className="form-checkbox"
        />
    );
}
