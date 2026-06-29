namespace MyNotes.Models
{
    public class Note
    {
        public Note(string title,string description)
        {
            Description = description;
            Title = title;
            CreatedAt = DateTime.UtcNow;
        }
        public Guid Id { get; init; }
        public string Title { get; init; }
        public string Description { get; init; }
        public DateTime CreatedAt { get; init; }
    }
}
