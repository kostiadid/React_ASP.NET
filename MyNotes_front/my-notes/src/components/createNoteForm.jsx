import { Button, Input, Textarea } from '@chakra-ui/react'
import { useState } from 'react'
export default function CreateNoteForm({onCreate }) {

    const [note, setNote] = useState(null);
    const onSubmit = (e) => {
        e.preventDefault();
        setNote(null);
        onCreate(note);
    };
    return (

        <form onSubmit={onSubmit}>
            <h3 className="text-lg font-bold">My Notes</h3>
            <Input placeholder="notes name" value={note?.title ?? ""} onChange={(e) => setNote({ ...note, title: e.target.value })}></Input>
            <Textarea placeholder=" description" value={note?.description ?? ""} onChange={(e) => setNote({ ...note, description: e.target.value })}></Textarea>
            <Button type="submit" colorScheme="teal" placeholder="Add Note">Add Note</Button>
        </form>
    )
}