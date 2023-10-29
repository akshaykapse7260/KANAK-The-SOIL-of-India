using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Pomelo.EntityFrameworkCore.MySql.Infrastructure;
using System;
using KANAK_Labour_Management_.DAL;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Configure the database context
string connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<LabourManagementContext>(options =>
    options.UseMySql(connectionString, new MySqlServerVersion(new Version(8, 0, 22))));


// Add CORS configuration
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", builder =>
    {
        builder.WithOrigins("http://localhost:3000") 
               .AllowAnyHeader()
               .AllowAnyMethod();
    });
});


// Add Swagger for API documentation
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Your API Name");
    });
}

app.UseHttpsRedirection();

// Enable CORS (must be placed before UseAuthorization and UseRouting)
app.UseCors("AllowReactApp");

app.UseAuthorization();

app.MapControllers();

// Apply pending migrations(its creating/updating database automatically as similiar in hibernate)
using (var scope = app.Services.CreateScope())
{
    var serviceProvider = scope.ServiceProvider;
    var context = serviceProvider.GetRequiredService<LabourManagementContext>();
    context.Database.Migrate(); // Apply pending migrations
}

// Add a default route to handle requests that don't match any other routes.
app.MapGet("/", (Func<string>)(() => "Hello, World!"));

app.Run();
