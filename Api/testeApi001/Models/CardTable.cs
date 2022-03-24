using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace testeApi001.Models
{
    [Table("Tabela")]
    public class CardTable
    {
        public int Id { get; set; }

        [Column("Img")]
        public string Img { get; set; }

        [Column("Nome")]
        public string Nome { get; set; }

        [Column("CategoriaID")]
        public int CategoriaID { get; set; }
        [ForeignKey("CategoriaID")]
        public virtual Categoria Categoria { get; set; }
    }
}
