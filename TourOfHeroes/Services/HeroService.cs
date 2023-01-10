using Microsoft.IdentityModel.Tokens;
using System;
using System.Threading.Tasks;
using TourOfHeroes.Db.Repositories;
using TourOfHeroes.Models;

namespace TourOfHeroes.Services
{
    public class HeroService : IHeroService
    {
        private readonly IHeroRepository heroRepository;

        public HeroService(IHeroRepository heroRepository)
        {
            this.heroRepository = heroRepository;
        }

   
        public async Task<Hero> GetHero(int id)
        {
            return await heroRepository.Get(id);
        }

        public async Task<Hero> GetHeroByName(string name)
        {
            return await heroRepository.GetByName(name);
        }

        public async Task<Hero[]> GetHeroes()
        {
            return await heroRepository.GetHeroes();
        }

        public async Task<Hero> UpdateHero(int id, Hero hero)
        {
            return await heroRepository.UpdateHero(id, hero);
        }
        public async Task<Hero> DeleteHero(int id)
        {
            return await heroRepository.DeleteHero(id);
        }

        public async Task<Hero> AddHero(Hero hero)
        {
            return await heroRepository.AddHero(hero);
        }

        public async Task<Hero[]> SearchHeroes(string term, int countryId, DateTime? startDate, DateTime? endDate)
        {
            return await heroRepository.SearchHeroes(term, countryId, startDate, endDate);
        }
    }
}
