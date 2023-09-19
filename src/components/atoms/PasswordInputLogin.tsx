

interface Props {
    name: string
}

export const Input = ({
    name,
    ...args
}: Props) => {
    return <input name={name} type="password" {...args} />
}