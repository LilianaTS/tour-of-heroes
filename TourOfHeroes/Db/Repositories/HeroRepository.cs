using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TourOfHeroes.Models;

namespace TourOfHeroes.Db.Repositories
{
    public class HeroRepository : IHeroRepository
    {
        private readonly DataContext context;

        public HeroRepository(DataContext dataContext) {
            context = dataContext;
        }
        public async Task<Hero> Get(int id)
        {
            return await context.Heroes.FirstOrDefaultAsync(hero => hero.Id == id);
        }

        public async Task<Hero> GetByName(string name)
        {
            return await context.Heroes.FirstOrDefaultAsync(hero => hero.Name == name);

        }

        public async Task<Hero[]> GetHeroes()
        {
            return await context.Heroes.ToArrayAsync();
        }

        public async Task<Hero> UpdateHero(int id, Hero hero)
        {
            var dbHero = await Get(id);

            if (dbHero == null) { throw new Exception("Hero doesn't exist.");}

            dbHero.Name = hero.Name;
            dbHero.CountryId = hero.CountryId;
            dbHero.Date = hero.Date;
            dbHero.PeopleSaved = hero.PeopleSaved;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw new Exception("The hero you are trying to access has been previously modified.");
            }
            catch (Exception e)
            {
                throw new Exception("Unknown exception ocurred: " + e.Message);
            }
            return hero;
        }

         public async Task<Hero> DeleteHero(int id)
        {
                var hero = await context.Heroes.FindAsync(id);
                context.Heroes.Remove(hero);

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw new Exception("The hero you are trying to access has been previously modified.");
            }
            catch (Exception e)
            {
                throw new Exception("Unknown exception ocurred: " + e.Message);
            }
            return hero;

        }

        public async Task<Hero> AddHero(Hero hero)
        {
            context.Entry(hero).State = EntityState.Modified;
            context.Heroes.Add(hero);

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw new Exception("The hero you are trying to access has been previously modified.");
            }
            catch (Exception e)
            {
                throw new Exception("Unknown exception ocurred: " + e.Message);
            }
            return hero;
        }

        public async Task<Hero[]> SearchHeroes(string term, int countryId, DateTime? date)
        {
            IQueryable<Hero> searchedHeroes = context.Heroes;
            if (!string.IsNullOrEmpty(term?.Trim()))
            {
                searchedHeroes = searchedHeroes.Where(hero => hero.Name.Contains(term));
            }
            if (countryId > 0)
            {
                searchedHeroes = searchedHeroes.Where(hero => hero.CountryId == countryId);
            }
            if (date != null)
            {
                searchedHeroes = searchedHeroes.Where(hero => hero.Date == date);
            }

            return await searchedHeroes.ToArrayAsync();
        }
    }
}
