using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace KANAK_Labour_Management_.Migrations
{
    /// <inheritdoc />
    public partial class EmployerID : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<decimal>(
                name: "PayScale",
                table: "Employers",
                type: "decimal(10,2)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<string>(
                name: "Username",
                table: "Employers",
                type: "longtext",
                nullable: false)
                .Annotation("MySql:CharSet", "utf8mb4");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PayScale",
                table: "Employers");

            migrationBuilder.DropColumn(
                name: "Username",
                table: "Employers");
        }
    }
}
