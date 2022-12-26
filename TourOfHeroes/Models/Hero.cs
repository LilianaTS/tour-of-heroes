using System;
using System.ComponentModel.DataAnnotations;

namespace TourOfHeroes.Models
{
    public class Hero
    {
        [Key]
        public int Id { get; set; }
        
        [Required]
        public string Name { get; set; }
        
        public DateTime? Date { get; set; }
        
        public int? PeopleSaved { get; set; }
        
        public int? CountryId { get; set; }
        
        public Country Country { get; set; }
    }
}
