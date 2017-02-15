using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ModernForum.DbLevel.Entities
{
    public class Comment
    {
        [Key]
        public long Id { get; set; }

        public string UserId { get; set; }
        public User User { get; set; }

        [Required,MaxLength(10000)]
        public string RawText { get; set; }
    }
}
