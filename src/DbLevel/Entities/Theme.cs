using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ModernForum.DbLevel.Entities
{
    public class Theme
    {
        [Key]
        public long Id { get; set; }
        [Required,MaxLength(100)]
        public string Name { get; set; }
        [MaxLength(300)]
        public string Description { get; set; }

        public long ForumId { get; set; }
        public Forum Forum { get; set; }

        public ICollection<Comment> Comments { get; set; }
    }
}
