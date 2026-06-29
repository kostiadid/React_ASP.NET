import {
    Card,
    CardHeader,
    Heading,
    Separator,
    CardBody,
    Text,
    CardFooter,
} from '@chakra-ui/react'

export default function Note({ title, description, createAt }) {
    return (
        <div className="rounded-lg border p-4 bg-white shadow-sm">
            <h3 className="text-lg font-semibold">{title}</h3>
            <hr className="my-3" />
            <p>{description}</p>
            <div className="mt-3 text-sm text-gray-500">{createAt}</div>
        </div>
    )
}