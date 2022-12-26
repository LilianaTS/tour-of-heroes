using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TourOfHeroes.Db;
using TourOfHeroes.Models;
using TourOfHeroes.Services;

namespace TourOfHeroes.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HeroesController : ControllerBase
    {
        private readonly IHeroService heroService;

        private readonly ILogger<HeroesController> _logger;

        public HeroesController(ILogger<HeroesController> logger, IHeroService heroService)
        {
            _logger = logger;
            this.heroService = heroService;
        }

        [HttpGet("{id}")]
        public async Task<Hero> Get(int id)
        {
            return await heroService.GetHero(id);
        }

        [HttpGet]
        [Route("search")]
        public async Task<Hero[]> SearchHeroes(string term, int countryId, DateTime? date)
        {
            return await heroService.SearchHeroes(term, countryId, date);
        }

        [HttpGet]
        public async Task<Hero[]> Get()
        {
            return await heroService.GetHeroes();
        }

        [HttpPut("{id}")]
        public async Task<Hero> Update(int id, [FromBody]Hero hero)
        {
            return await heroService.UpdateHero(id, hero);
        }

        [HttpDelete("{id}")]
        public async Task<Hero> DeleteHero(int id)
        {
            return await heroService.DeleteHero(id);
        }

        [HttpPost]
        public async Task<Hero> AddHero(Hero hero)
        {
            return await heroService.AddHero(hero);
        }



    }
}
