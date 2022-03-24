using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace testeApi001.Models
{
    public class Receita
    {

        public int Id { get; set; }

        [Column("Nome")]
        public string NomeReceita { get; set; }

        [Column("UrlImg")]
        public string UrlImg { get; set; }

        [Column("DescricaoTopo")]
        public string DescricaoTopo { get; set; }

        [Column("Descricao")]
        public string Descricao { get; set; }

        [Column("Ingredientes")]
        public string Ingredientes { get; set; }

        [Column("ModoPreparo")]
        public string ModoPreparo { get; set; }

        [Column("NumPorcoes")]
        public int NumPorcoes { get; set; }

        [Column("Calorias")]
        public int Calorias { get; set; }

        [Column("TempoPreparo")]
        public string TempoPreparo { get; set; }

        [Column("Autor")]
        public string Autor { get; set; }
    }
}
