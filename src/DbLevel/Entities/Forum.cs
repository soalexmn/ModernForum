using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ModernForum.DbLevel.Entities
{
    public class Forum
    {
        public Forum()
        {
            SubForums = new List<Forum>();
            Themes = new List<Theme>();
        }

        [Key]
        public long Id { get; set; }
        [Required,MaxLength(100)]
        public string Description { get; set; }

        public long? ParentForumId { get; set; }
        public Forum ParentForum { get; set; }
        public ICollection<Forum> SubForums { get; set; }
        public ICollection<Theme> Themes { get; set; }

    }
}
