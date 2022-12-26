using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TourOfHeroes.Db;
using TourOfHeroes.Models;

namespace TourOfHeroes.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CountriesController : ControllerBase
    {
        private readonly DataContext context;

        public CountriesController(DataContext context)
        {
            this.context = context;
        }

        // GET: api/Countries
        [HttpGet]
        public async Task<IEnumerable<Country>> GetCountries()
        {
            return await context.Countries.ToListAsync();
        }

        private bool CountryExists(int id)
        {
            return context.Countries.Any(e => e.Id == id);
        }
    }
}
