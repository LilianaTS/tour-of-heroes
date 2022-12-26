using System.Threading.Tasks;
using TourOfHeroes.Models;

namespace TourOfHeroes.Db.Repositories
{
    public interface ICountryRepository
    {
        public Task<Country[]> Get();

    }
}