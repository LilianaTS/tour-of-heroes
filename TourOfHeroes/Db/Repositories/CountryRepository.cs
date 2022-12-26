using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;
using TourOfHeroes.Models;

namespace TourOfHeroes.Db.Repositories
{
    public class CountryRepository : ICountryRepository
    {
        private readonly DataContext context;

        public CountryRepository(DataContext dataContext)
        {
            context = dataContext;
        }
        public async Task<Country[]> Get()
        {
            return await context.Countries.ToArrayAsync();
        }

    }
}