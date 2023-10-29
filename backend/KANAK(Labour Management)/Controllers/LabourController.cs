namespace KANAK_Labour_Management_.Controllers
{
    using KANAK_Labour_Management_.DAL;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;
    using System.Collections.Generic;
    using System.Linq;
    using System.Reflection.Emit;
    using System.Threading.Tasks;

    [Route("api/[controller]")]
    [ApiController]
    public class LabourController : ControllerBase
    {
        private readonly LabourManagementContext _context;

        public LabourController(LabourManagementContext context)
        {
            _context = context;
        }

        // GET: api/Labour
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Labour>>> GetLabours()
        {
            return await _context.Labours.ToListAsync();
        }

        // GET: api/Labour/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Labour>> GetLabour(int id)
        {
            var Labour = await _context.Labours.FindAsync(id);

            if (Labour == null)
            {
                return NotFound();
            }

            return Labour;
        }

        // POST: api/Labour
        [HttpPost]
        public async Task<ActionResult<Labour>> PostLabour(Labour Labour)
        {
            if (ModelState.IsValid)
            {
                _context.Labours.Add(Labour);
                await _context.SaveChangesAsync();

                return CreatedAtAction(nameof(GetLabour), new { id = Labour.LabourID }, Labour);
            }

            return BadRequest(ModelState);
        }

        // PUT: api/Labour/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLabour(int id, Labour Labour)
        {
            if (id != Labour.LabourID)
            {
                return BadRequest();
            }

            _context.Entry(Labour).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LabourExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE: api/Labour/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLabour(int id)
        {
            var Labour = await _context.Labours.FindAsync(id);
            if (Labour == null)
            {
                return NotFound();
            }

            _context.Labours.Remove(Labour);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool LabourExists(int id)
        {
            return _context.Labours.Any(e => e.LabourID == id);
        }
    }

}
