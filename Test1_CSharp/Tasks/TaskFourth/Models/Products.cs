using System.ComponentModel.DataAnnotations;

namespace TaskFourth.Models
{
    public class Products
    {
                
        public int id_product { get; set; }
        [Required]
        public string reference { get; set; }
        [Required]
        public string description { get; set; }
        [Required]
        public int unit { get; set; }
        [Required]
        public int salePrice { get; set; }
        [Required]
        public string Status{ get; set; }
      
    }
}