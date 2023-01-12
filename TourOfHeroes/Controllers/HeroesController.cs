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
        public async Task<ActionResult<Hero>> Get(int id)
        {
            return Ok(await heroService.GetHero(id));
        }

        [HttpGet]
        [Route("search")]
        public async Task<ActionResult<Hero[]>> SearchHeroes(string term, int countryId, DateTime? startDate, DateTime? endDate)
        {
            return Ok(await heroService.SearchHeroes(term, countryId, startDate, endDate));
        }

        [HttpGet]
        public async Task<ActionResult<Hero[]>> Get()
        {
            return Ok(await heroService.GetHeroes());
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Hero>> Update(int id, [FromBody]Hero hero)
        {
            return Ok(await heroService.UpdateHero(id, hero));
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Hero>> DeleteHero(int id)
        {
            return Ok(await heroService.DeleteHero(id));
        }

        [HttpPost]
        public async Task<ActionResult<Hero>> AddHero(Hero hero)
        {
            return Ok(await heroService.AddHero(hero));
        }



    }
}
