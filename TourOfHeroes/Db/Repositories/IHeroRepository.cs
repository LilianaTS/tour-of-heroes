using System;
using System.Threading.Tasks;
using TourOfHeroes.Models;

namespace TourOfHeroes.Db.Repositories
{
    public interface IHeroRepository
    {
        public Task<Hero> Get(int id);
        public Task<Hero> GetByName(string name);
        public Task<Hero[]> GetHeroes();
        public Task<Hero> UpdateHero(int id, Hero hero);
        public Task<Hero> AddHero(Hero hero);
        public Task<Hero> DeleteHero(int id);
        public Task<Hero[]> SearchHeroes(string term, int countryId, DateTime? startDate, DateTime? endDate);

    }

}
