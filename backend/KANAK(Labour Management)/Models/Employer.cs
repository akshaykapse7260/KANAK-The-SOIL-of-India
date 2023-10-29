namespace KANAK_Labour_Management_
{
    // Models/Employer.cs

    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    public class Employer
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int EmployerID { get; set; }
        [Required(ErrorMessage = "The Username field is required.")]
        public string Username { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Contact { get; set; }

        [Required]
        public string Location { get; set; }

        [Required]
        public string TypeOfWork { get; set; }

        [Required(ErrorMessage = "The PayScale field is required.")]
        [DataType(DataType.Currency)]
        [Column(TypeName = "decimal(10,2)")]
        public decimal PayScale { get; set; }

    }

}
