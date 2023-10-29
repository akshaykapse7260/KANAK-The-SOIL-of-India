using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace KANAK_Labour_Management_
{
    public class Labour
    {
        [Key] // Indicates that LabourID is the primary key
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int LabourID { get; set; }
        [Required(ErrorMessage = "The Username field is required.")]
        public string Username { get; set; }

        [Required(ErrorMessage = "The Name field is required.")]
        public string Name { get; set; }

        [Required(ErrorMessage = "The Contact field is required.")]
        [DataType(DataType.EmailAddress)]
        public string Contact { get; set; }

        [Required(ErrorMessage = "The Location field is required.")]
        public string Location { get; set; }

        [Required(ErrorMessage = "The Skills field is required.")]
        public string Skills { get; set; }

        [Required(ErrorMessage = "The PayScale field is required.")]
        [DataType(DataType.Currency)]
        [Column(TypeName ="decimal(10,2)")]
        public decimal PayScale { get; set; }

        
    }
}
