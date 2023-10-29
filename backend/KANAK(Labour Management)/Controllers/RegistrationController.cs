using System;
using System.Linq;
using System.Threading.Tasks;
using KANAK_Labour_Management_.DAL;
using KANAK_Labour_Management_;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using KANAK_Labour_Management_.Models;
using KANAK_Labour_Management_.Migrations;

[Route("api/[controller]")]
[ApiController]
public class UserController : ControllerBase
{
    private readonly LabourManagementContext _context;

    public UserController(LabourManagementContext context)
    {
        _context = context;
    }

    // Register a new user
    [HttpPost("register")]
    public async Task<IActionResult> RegisterUser(Register user)
    {
        if (ModelState.IsValid)
        {
            // Check if the username is already taken
            if (_context.Registrations.Any(u => u.Username == user.Username))
            {
                return BadRequest("Username is already taken.");
            }

            // In a real-world scenario, you should hash the password securely
            // before storing it in the database.
            // For simplicity, this example does not include password hashing.
            Registration r = new Registration();
            r.Username = user.Username;
            r.Password = user.Password;
            r.Role = user.Role;
            _context.Registrations.Add(r);

            // Determine the role and add to the appropriate table
            if (user.Role == "labour")
            {
                // Create a Labour record
                var labour = new Labour
                {
                    Name = user.Name,
                    Contact = user.Contact,
                    Location= user.Location,
                    PayScale= user.PayScale,
                    Username = user.Name,
                    Skills = user.Skills,


                };
                _context.Labours.Add(labour);
            }
            else if (user.Role == "employer")
            {
                // Create an Employer record
                var employer = new Employer
                {
                    Name = user.Username,
                    Contact = user.Contact,
                    Location = user.Location,
                    PayScale = user.PayScale,
                    Username = user.Name,
                    TypeOfWork = user.Skills
            };
                _context.Employers.Add(employer);
            }
            else
            {
                return BadRequest("Invalid role.");
            }

            await _context.SaveChangesAsync();

            return Ok("Registration successful.");
        }

        return BadRequest(ModelState);
    }

    // Authenticate a user
    [HttpPost("login")]
    public async Task<IActionResult> AuthenticateUser(Registration user)
    {
        // In a real-world scenario, you would validate the user's credentials
        // against the stored hashed password.
        // For simplicity, this example does not include password hashing or validation.

        var existingUser = await _context.Registrations
            .FirstOrDefaultAsync(u => u.Username == user.Username && u.Password == user.Password&&u.Role==user.Role);

        if (existingUser == null)
        {
            return Unauthorized("Invalid username or password.");
        }

        // Return some user information or an access token if needed.
        return Ok("Authentication successful.");
    }
}
