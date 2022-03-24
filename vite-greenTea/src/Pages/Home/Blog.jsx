import React from 'react';

import {Link} from 'react-router-dom';

const Blog = () => {
    return (
			<div>
				<br />
				<br />
				<div className="post-image">
					<img
						style={{ maxHeight: '420' }}
						className="img-fluid rounded-lg  mb-3"
						src="https://i.ibb.co/kVTMZM9/bloguinho.jpg"
					/>
				</div>
				<div className="container">
					<main className="page blog-post-list bg-white">
						<section className="clean-block clean-blog-list dark">
							<div className="container">
								<div className="block-heading text-center pb-4">
									<h1 className="text-info">Bloguinho</h1>
									<p>Conheça as ultimas novidades criadas pelo greenTea</p>
								</div>
								<div className="block-content">
									<div className="clean-blog-post m-2 p-2">
										<div className="row">
											<div className="col-lg-5">
												<img
													className="rounded img-thumbnail"
													src="https://i.ibb.co/GP1kFd0/dieta-sgsc-capa.jpg"
												/>
											</div>
											<div className="col-lg-7">
												<h3>A dieta na vida de quem tem TEA</h3>
												<div className="info">
													<span className="text-muted">11 Jan, 2022</span>
												</div>
												<p>
													É importante que as crianças tenham uma familiaridade
													com o alimento para se sentirem atraídas por ele,
													chamar o seu pequeno para ajudar na hora do preparo da
													refeição pode ajudar nisso. O simples fato de pegar o
													ingrediente e sentir seu cheiro já faz parte de uma
													aproximação significativa, mesmo que naquele momento
													ele não queira consumi-lo.
												</p>
												<Link to={'/blog-dieta'}>Leia Mais</Link>
											</div>
										</div>
									</div>
									<div className="clean-blog-post m-2 p-2">
										<div className="row">
											<div className="col-lg-5">
												<img
													className="rounded img-thumbnail"
													src="https://i.ibb.co/mCCtqhJ/ruido.jpg"
												/>
											</div>
											<div className="col-lg-7">
												<h3>Ruído Branco pode ajudar pacientes com TEA</h3>
												<div className="info">
													<span className="text-muted">11 Jan, 2022</span>
												</div>
												<p>
													Apesar de ser presente em várias situações, o ruído
													branco é usado para mascarar sons. Vamos ver um
													exemplo de como isso funciona: quando estamos dormindo
													nosso cérebro ainda capta os sons do ambiente,
													interpretando-os, mesmo que não de forma tão ativa,
													como quando estamos acordados. Em contrapartida, o
													nosso cérebro consegue se acostumar à frequência do
													som que estamos ouvindo, de maneira que nos habituamos
													ao som ambiente; essa é uma maneira de não
													sobrecarregarmos nosso sistema nervoso com muitas
													informações.
												</p>
												<Link to={'/blog-white-noise'}>Leia Mais</Link>
											</div>
										</div>
									</div>
									<div className="clean-blog-post m-2 p-2">
										<div className="row">
											<div className="col-lg-5">
												<img
													className="rounded img-thumbnail"
													src="https://i.ibb.co/1T28NXn/picto.png"
												/>
											</div>
											<div className="col-lg-7">
												<h3>Comunicação Alternativa. Pictogramas </h3>
												<div className="info">
													<span className="text-muted">13 Jan, 2022</span>
												</div>
												<p>
													A comunicação humana é uma das práticas culturais mais
													significantes e fundamentais dos seres humanos. Esse
													processo não é inato ou maturacional, mas sim
													sociohistórico e se desenvolve ao longo da vida. As
													formas mais comuns de comunicação são a oral e a
													escrita, mas o processo comunicacional inclui também
													gestos e expressões corporais e também envolve
													aspectos relativos à intersubjetividade, como a
													reciprocidade e as crenças dos sujeitos em interação
													(TOMASELLO, 2003)
												</p>
												<Link to={'/blog-pictograma'}>Leia Mais</Link>
											</div>
										</div>
									</div>
									<div className="clean-blog-post m-2 p-2">
										<div className="row">
											<div className="col-lg-5">
												<img
													className="rounded img-thumbnail"
													src="https://i.ibb.co/kMqZcjt/faq.jpg"
												/>
											</div>
											<div className="col-lg-7">
												<h3>Perguntas Frequentes.</h3>
												<div className="info">
													<span className="text-muted">14 Jan, 2022</span>
												</div>
												<p>
													Neste compilado, separamaos algumas das perguntas mais
													frequentes sobre o assunto.
												</p>
												<p>
													Descubra alguns dos mitos e verdades sobre oque é TEA.
												</p>
												<Link to={'/faq'}>Leia Mais</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
					</main>
				</div>
			</div>
		)
}
 
export default Blog;







