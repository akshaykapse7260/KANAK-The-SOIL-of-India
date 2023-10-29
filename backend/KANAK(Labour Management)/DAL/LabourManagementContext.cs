using Microsoft.EntityFrameworkCore;

namespace KANAK_Labour_Management_.DAL
{
    public class LabourManagementContext : DbContext
    {
        public LabourManagementContext(DbContextOptions<LabourManagementContext> options) : base(options) { }

        public DbSet<Labour> Labours { get; set; }
        public DbSet<Employer> Employers { get; set; }
        public DbSet<Registration> Registrations { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Labour>()
                .HasKey(l => l.LabourID); // Specify LabourID as the primary key

            modelBuilder.Entity<Employer>()
                .HasKey(e => e.EmployerID); // Specify EmployerID as the primary key

            modelBuilder.Entity<Registration>()
               .HasKey(r => r.RegistrationID); // Specify RegistrationID as the primary key for the Registration entity


            base.OnModelCreating(modelBuilder);
        }
    }
}
