using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using testeApi001.Data;
using testeApi001.Models;

namespace testeApi001.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CardTablesController : ControllerBase
    {
        private readonly Contexto _context;

        public CardTablesController(Contexto context)
        {
            _context = context;
        }

        // GET: api/CardTables
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CardTable>>> GetCardTables()
        {
            var cards = _context.CardTables.Include(c => c.Categoria);
            return (await cards.ToListAsync());
        }

        // GET: api/CardTables/5
        [HttpGet("{id:int}")]
        public async Task<ActionResult<CardTable>> GetCardTable(int id)
        {      

            if (id <= 0)
            {
                return NotFound();
            }

            var cardTable = await _context.CardTables
                .Include(c => c.Categoria)
                .AsNoTracking()
                .FirstOrDefaultAsync(m => m.Id == id);
            if (cardTable == null)
            {
                return NotFound();
            }

            return (cardTable);
        }

        // GET: api/CardTables
        [HttpGet("categoria/{id:int}")]
        public async Task<ActionResult<IEnumerable<CardTable>>> GetCardsByCategoria(int id)
        {
            if (id <= 0)
            {
                return NotFound();
            }

            var cardTable = await _context.CardTables
                .Include(c => c.Categoria)
                .AsNoTracking()
                .Where(x => x.CategoriaID == id)
                .ToListAsync();

            if (cardTable == null)
            {
                return NotFound();
            }

            return (cardTable);
        }

        // PUT: api/CardTables/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id:int}")]
        public async Task<IActionResult> PutCardTable(int id, CardTable cardTable)
        {
            if (id != cardTable.Id)
            {
                return BadRequest();
            }

            _context.Entry(cardTable).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CardTableExists(id))
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

        // POST: api/CardTables
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        
        public async Task<ActionResult<CardTable>> PostCardTable(CardTable cardTable)
        {
            if (ModelState.IsValid)
            {
                _context.Add(cardTable);
                await _context.SaveChangesAsync();
                return cardTable;
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        // DELETE: api/CardTables/5
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteCardTable(int id)
        {
            var cardTable = await _context.CardTables.FindAsync(id);
            if (cardTable == null)
            {
                return NotFound();
            }

            _context.CardTables.Remove(cardTable);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CardTableExists(int id)
        {
            return _context.CardTables.Any(e => e.Id == id);
        }
    }
}
