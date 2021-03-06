// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using testeApi001.Data;

namespace testeApi001.Migrations
{
    [DbContext(typeof(Contexto))]
    [Migration("20220324033942_Migration001")]
    partial class Migration001
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.14")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("testeApi001.Models.CardTable", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CategoriaID")
                        .HasColumnType("int")
                        .HasColumnName("CategoriaID");

                    b.Property<string>("Img")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("Img");

                    b.Property<string>("Nome")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("Nome");

                    b.HasKey("Id");

                    b.HasIndex("CategoriaID");

                    b.ToTable("Tabela");
                });

            modelBuilder.Entity("testeApi001.Models.Categoria", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Cor")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Nome")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Categorias");
                });

            modelBuilder.Entity("testeApi001.Models.Receita", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Autor")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("Autor");

                    b.Property<int>("Calorias")
                        .HasColumnType("int")
                        .HasColumnName("Calorias");

                    b.Property<string>("Descricao")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("Descricao");

                    b.Property<string>("DescricaoTopo")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("DescricaoTopo");

                    b.Property<string>("Ingredientes")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("Ingredientes");

                    b.Property<string>("ModoPreparo")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("ModoPreparo");

                    b.Property<string>("NomeReceita")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("Nome");

                    b.Property<int>("NumPorcoes")
                        .HasColumnType("int")
                        .HasColumnName("NumPorcoes");

                    b.Property<string>("TempoPreparo")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("TempoPreparo");

                    b.Property<string>("UrlImg")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("UrlImg");

                    b.HasKey("Id");

                    b.ToTable("Receitas");
                });

            modelBuilder.Entity("testeApi001.Models.CardTable", b =>
                {
                    b.HasOne("testeApi001.Models.Categoria", "Categoria")
                        .WithMany()
                        .HasForeignKey("CategoriaID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Categoria");
                });
#pragma warning restore 612, 618
        }
    }
}
