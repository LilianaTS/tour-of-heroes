using System;
using System.Threading.Tasks;
using TourOfHeroes.Models;

namespace TourOfHeroes.Services
{
    public interface IHeroService
    {
        Task<Hero> GetHero(int id);
        Task<Hero[]> GetHeroes();
        Task<Hero> GetHeroByName(string name);
        Task<Hero> UpdateHero(int id, Hero hero);
        Task<Hero> DeleteHero(int id);
        Task<Hero> AddHero(Hero hero);
        Task<Hero[]> SearchHeroes(string term, int country, DateTime? startDate, DateTime? endDate);
    }
}
