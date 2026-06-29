import { Input } from '@chakra-ui/react'

export default function Filters({ filter, setFilter }) {
    return (
        <div className="flex flex-col gap-5">
            <Input
                placeholder="Search notes..."
                value={filter.search}
                onChange={(e) =>
                    setFilter({ ...filter, search: e.target.value })
                }
            />

            <select
                className="border rounded px-3 py-2"
                value={filter.sortOrder}
                onChange={(e) =>
                    setFilter({ ...filter, sortOrder: e.target.value })
                }
            >
                <option value="desc">Fresh first</option>
                <option value="asc">Old first</option>
            </select>
        </div>
    )
}