using MyNotes.DataAccess;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSwaggerGen();
builder.Services.AddControllers();
builder.Services.AddScoped<NotesDbContext>();

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins(
                "http://127.0.0.1:5173",
                "http://localhost:5173",
                "https://127.0.0.1:5173",
                "https://localhost:5173")
                  .AllowAnyHeader()
                  .AllowAnyMethod();
    });
});

var app = builder.Build();

using var scope = app.Services.CreateScope();
await using var dbContext = scope.ServiceProvider.GetRequiredService<NotesDbContext>();
await dbContext.Database.EnsureCreatedAsync();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors();
app.MapControllers();
app.MapGet("/", () => Results.Redirect("/swagger"));

app.Run();
