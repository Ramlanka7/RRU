using System;
using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;

namespace RRU.Api.Controllers
{
    public class RegisterRenterViewModel
    {
        public bool Active { get; set; }

        // Should consider doing this as an autocomplete on the ui
        [StringLength(80, ErrorMessage = "The City max length is 80")]
        public string City { get; set; }

        [DataType(DataType.Password)]
        [Display(Name = "Confirm password")]
        [System.ComponentModel.DataAnnotations.Compare("Password",
            ErrorMessage = "The password and confirmation password do not match.")]
        public string ConfirmPassword { get; set; }

        public DateTime DateCreated { get; set; }

        public DateTime? DateLogin { get; set; }

        public DateTime? DateModified { get; set; }

        [Required]
        [Display(Name = "First name")]
        [StringLength(40, ErrorMessage = "The First Name max length is 40")]
        public string FirstName { get; set; }

        public SelectList HowHeardList { get; set; }

        [Required]
        [Display(Name = "Last name")]
        [StringLength(40, ErrorMessage = "The Last Name max length is 40")]
        public string LastName { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy}")]
        [Display(Name = "Expected Move-in Date")]
        public DateTime MoveinDate { get; set; }

        [Required]
        [StringLength(100, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = 6)]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }

        [Required]
        [Phone(ErrorMessage = "Please enter a valid Phone Number.")]
        [Display(Name = "Phone", Description = "The phone number where you want to be contacted.")]
        public string PhoneNumber { get; set; }

        [Phone(ErrorMessage = "Please enter a valid Phone Number.")]
        [Display(Name = "Other Phone")]
        public string PhoneNumber2 { get; set; }

        [Display(Name = "Answer"), StringLength(512)]
        public string RegisterHowHeardFreeform { get; set; }

        [Display(Name = "How did you hear about us?")]
        public int RegisterHowHeardString { get; set; }

        //[Display(Name = "State")]
        //public StateProvince StateProvince { get; set; }

        [Display(Name = "State")]
        public string StateProvinceCd { get; set; }

        [Display(Name = "State")]
        public SelectList StatesList { get; set; }

        [StringLength(80, ErrorMessage = "The Address Line 1 max length is 80")]
        [Display(Name = "Address Line 1")]
        public string StreetAddress { get; set; }

        [StringLength(80, ErrorMessage = "The Address Line 2 max length is 80")]
        [Display(Name = "Address Line 2")]
        public string StreetAddress2 { get; set; }

        [Required]
        [StringLength(100, ErrorMessage = "The email address max length is 100")]
        [EmailAddress(ErrorMessage = "Please enter a valid E-Mail address.")]
        [Display(Name = "Email Address", Description = "Your user name is the email address where you are contacted.")]
        public string UserName { get; set; }

        [Display(Name = "Zip")]
        [DataType(DataType.PostalCode)]
        [StringLength(10, ErrorMessage = "The email address max length is 10")]
        public string ZipCode { get; set; }
    }
}