using Microsoft.EntityFrameworkCore;

public class BlogDbContext : DbContext
{
    public BlogDbContext(DbContextOptions<BlogDbContext> options) : base(options) { }

    public DbSet<BlogPost> BlogPosts => Set<BlogPost>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<BlogPost>( entity =>
        {
           entity.HasKey(e => e.Id);
           entity.Property(e => e.Content).IsRequired().HasColumnType("text");
           entity.Property(e => e.CreatedAt).HasDefaultValueSql("NOW()");
        });
    }
}