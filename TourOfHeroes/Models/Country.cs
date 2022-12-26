using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;
using System;
using TourOfHeroes.Db;

namespace TourOfHeroes.Models
{
    public class Country
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

}