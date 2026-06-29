namespace MyNotes.Contracts
{
    public record GetNotesRequest(string? Search, string? Sortitem, string? SortOrder);
}
