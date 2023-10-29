//using KANAK_Labour_Management.DAL;
using KANAK_Labour_Management_.DAL;
using KANAK_Labour_Management_;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

[Route("api/[controller]")]
[ApiController]
public class SearchController : ControllerBase
{
    private readonly LabourManagementContext _context;

    public SearchController(LabourManagementContext context)
    {
        _context = context;
    }

    // Search for Labour records by location
    [HttpGet("labourSearch")]
    public async Task<ActionResult<IEnumerable<Labour>>> SearchLabourByLocation(string location)
    {
        if (string.IsNullOrWhiteSpace(location))
        {
            return BadRequest("Location is required.");
        }

        var results = await _context.Labours
            .Where(l => l.Location == location)
            .ToListAsync();

        return results;
    }

    // Search for Employer records by location
    [HttpGet("employerSearch")]
    public async Task<ActionResult<IEnumerable<Employer>>> SearchEmployerByLocation(string location)
    {
        if (string.IsNullOrWhiteSpace(location))
        {
            return BadRequest("Location is required.");
        }

        var results = await _context.Employers
            .Where(e => e.Location == location)
            .ToListAsync();

        return results;
    }
}

