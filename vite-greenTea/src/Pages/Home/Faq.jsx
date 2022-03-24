import React from 'react'
import { useEffect } from 'react'
import './Faq.css'

const Faq = () => {
	useEffect(() => {
		const script = document.createElement('script')
		script.src = 'assets/js/Faq-by-pomdre.js'
		script.async = true
		document.body.appendChild(script)
		return () => {
			document.body.removeChild(script)
		}
	}, [])
	return (
		<div>
			<div className="position-relative">
				<img
					style={{ filter: 'opacity(50%)' }}
					src="assets/media/puzzles.jpeg"
				/>
			</div>
			<main className="page landing-page ">
				<section id="faq" style={{ padding: '2', margin: '11' }} className="">
					<hr className="star-dark mb-5" />
					<h2
						className="text-uppercase text-center text-info"
						style={{ fontSize: '48' }}
					>
						FAQ
					</h2>
					<p className="text-center">
						Abaixo reunimos algumas das perguntas mais frequentes sobre o
						transtorno do espectro autista.
					</p>
					<br />
					<div className="container bg-white p-4 col-lg-10">
						<div className="faqelement mb-2">
							<button
								className="btn btn-light faq on"
								type="button"
								style={{ background: '#b0b0b0' }}
							>
								1. O que é autismo?
							</button>
							<div className="panel">
								<div className="p-3">
									<h5 className="text-info">1. O que é autismo?</h5>
									<p>
										É um distúrbio neurológico que, atualmente, se encaixa no
										Transtorno do Espectro Autista (TEA). As pessoas com autismo
										possuem dificuldades na reciprocidade socioemocional, em
										comportamentos comunicativos não verbais e na interação
										social. Então, o modo de interagir com o mundo é diferente
										para essas pessoas. Por exemplo: elas possuem dificuldade de
										iniciar e em manter uma conversa e de manter contato visual.
										Além disso, há a presença de características de
										comportamentos restritos ou repetitivos. Isso pode ser por
										repetição de palavras ou frases, uso de objetos de maneira
										diferente da habitual, interesses por assuntos específicos,
										forte adesão a rotinas, sensibilidade a texturas (como tocar
										ou cheirar objetos de forma excessiva), entre outros. No
										caso de um diagnóstico de TEA positivo, estes elementos
										estão presentes desde o início da infância, inclusive alguns
										sinais são visíveis antes dos 2 anos de idade, e causam
										prejuízo para o desenvolvimento e adaptação desta pessoa.
										Veja mais na página O que é o Autismo?.
									</p>
								</div>
							</div>
						</div>
						<div className="faqelement mb-2">
							<button
								className="btn btn-light faq on"
								type="button"
								style={{ background: '#b0b0b0' }}
							>
								2. Por que atualmente o autismo é chamado de TEA?
							</button>
							<div className="panel">
								<div className="p-3">
									<h5 className="text-info">
										2. Por que atualmente o autismo é chamado de TEA?
									</h5>
									<p>
										A partir da 5ª edição do Manual de Diagnóstico e Estatístico
										de Transtornos Mentais (DSM-5), versão atual da referência
										mundial para diagnósticos de transtornos mentais, o autismo
										foi englobado no chamado Transtorno do Espectro Autista
										(TEA). O TEA tornou-se um diagnóstico único que inclui
										alguns transtornos do desenvolvimento infantil que envolvem
										prejuízos sociais. Ou seja, o TEA atualmente inclui o
										autismo e outros distúrbios como a Síndrome de Asperger, o
										Transtorno Desintegrativo da Infância e o Transtorno Global
										do Desenvolvimento sem outra especificação.
									</p>
								</div>
							</div>
						</div>
						<div className="faqelement mb-2">
							<button
								className="btn btn-light faq on"
								type="button"
								style={{ background: '#b0b0b0' }}
							>
								3. Qual é a causa do autismo?
							</button>
							<div className="panel">
								<div className="p-3">
									<h5 className="text-info">3. Qual é a causa do autismo?</h5>
									<p>
										As causas do TEA não são totalmente conhecidas, e a pesquisa
										científica sempre concentrou esforços no estudo da
										predisposição genética, analisando mutações espontâneas que
										podem ocorrer no desenvolvimento do feto e a herança
										genética passada de pais para filhos. No entanto, já há
										evidências de que as causas hereditárias explicariam apenas
										metade do risco de desenvolver TEA. Fatores ambientais que
										impactam o feto, como estresse, infecções, exposição a
										substâncias tóxicas, complicações durante a gravidez e
										desequilíbrios metabólicos teriam o mesmo peso na
										possibilidade de aparecimento do distúrbio.
									</p>
								</div>
							</div>
						</div>
						<div className="faqelement mb-2">
							<button
								className="btn btn-light faq on"
								type="button"
								style={{ background: '#b0b0b0' }}
							>
								4. Quais os sintomas de autismo?
							</button>
							<div className="panel">
								<div className="p-3">
									<h5 className="text-info">
										4. Quais os sintomas de autismo?
									</h5>
									<p>
										Os sintomas se baseiam na ocorrência de um desenvolvimento
										diferente do que seria esperado para a faixa etária, e podem
										variar na maneira e intensidade com que se manifestam em
										cada pessoa. Alguns dos sintomas podem ser: demora para
										começar a falar, evitar olhar nos olhos, não atender ao
										chamado do nome, não apontar, não brincar com crianças da
										mesma idade, não brincar de faz de conta, não entender
										linguagem figurada, brincar com brinquedos de maneira
										incomum (ex: ficar girando a roda de um carrinho),
										demonstrar maior interesse por objetos do que por pessoas,
										realizar movimentos repetitivos, choros inapropriados,
										sensibilidade a sons, não gostar de toque, entre outros.
									</p>
								</div>
							</div>
						</div>
						<div className="faqelement mb-2">
							<button
								className="btn btn-light faq on"
								type="button"
								style={{ background: '#b0b0b0' }}
							>
								5. O que é a Síndrome de Asperger?
							</button>
							<div className="panel">
								<div className="p-3">
									<h5 className="text-info">
										5. O que é a Síndrome de Asperger?
									</h5>
									<p>
										A Síndrome ou Transtorno de Asperger é um dos transtornos
										que se enquadra atualmente no TEA segundo o DSM-5. Isto
										ocorre porque o transtorno de Asperger compartilha sintomas
										e critérios diagnósticos com o autismo leve, também
										conhecido como autismo de alta funcionalidade. Desta forma,
										as pessoas com Asperger fazem parte do espectro autista, e o
										seu tratamento segue a linha dos outros distúrbios do TEA,
										sempre com adaptações para as particularidades de cada caso.
									</p>
								</div>
							</div>
						</div>
						<div className="faqelement mb-2">
							<button
								className="btn btn-light faq on"
								type="button"
								style={{ background: '#b0b0b0' }}
							>
								6. Existem diferentes graus de autismo?
							</button>
							<div className="panel">
								<div className="p-3">
									<h5 className="text-info">
										6. Existem diferentes graus de autismo?
									</h5>
									<p>
										Sim, existem diferentes graus. O DSM-5 rotula os distúrbios
										que fazem parte do TEA como um espectro justamente por eles
										se manifestarem em diferentes níveis de intensidade. Uma
										pessoa diagnosticada como de alta funcionalidade apresenta
										prejuízos leves, que podem não a impedir de estudar,
										trabalhar e se relacionar. Um paciente de média
										funcionalidade tem um menor grau de independência e
										necessita de algum auxílio para desempenhar funções
										cotidianas, como tomar banho ou preparar a sua refeição. Já
										alguém com baixa funcionalidade vai manifestar dificuldades
										graves e costuma precisar de apoio especializado ao longo da
										vida.
									</p>
								</div>
							</div>
						</div>
						<div className="faqelement mb-2">
							<button
								className="btn btn-light faq on"
								type="button"
								style={{ background: '#b0b0b0' }}
							>
								7. Como é confirmado o diagnóstico de autismo?
							</button>
							<div className="panel">
								<div className="p-3">
									<h5 className="text-info">
										7. Como é confirmado o diagnóstico de autismo?
									</h5>
									<p>
										O diagnóstico de autismo é clínico, ou seja, não existe um
										exame laboratorial ou de imagem que possa comprovar a
										presença do transtorno. Ele deve ser realizado por um
										profissional de saúde especializado, como um neuropediatra
										ou psiquiatra infantil. O diagnóstico do TEA deve seguir
										critérios definidos internacionalmente, com avaliação
										completa da criança, entrevista com os pais e cuidadores e
										uso de escalas validadas, como o M-CHAT.
									</p>
								</div>
							</div>
						</div>
						<div className="faqelement mb-2">
							<button
								className="btn btn-light faq on"
								type="button"
								style={{ background: '#b0b0b0' }}
							>
								8. Com que idade o diagnóstico pode ser feito?
							</button>
							<div className="panel">
								<div className="p-3">
									<h5 className="text-info">
										8. Com que idade o diagnóstico pode ser feito?
									</h5>
									<p>
										A Sociedade Brasileira de Pediatria orienta que toda criança
										seja avaliada para TEA entre 18 e 24 meses de idade, mesmo
										que não tenha sinais clínicos claros e evidentes deste
										diagnóstico ou de outros atrasos do desenvolvimento. Nos
										atendimentos pelo Sistema Único de Saúde (SUS), a avaliação
										pela escala M-CHAT é obrigatória para crianças nesta faixa
										etária em consultas pediátricas de acompanhamento, segundo a
										lei 13.438/17. Caso você suspeite de comportamentos do seu
										filho, peça ao pediatra para aplicar o teste e busque um
										especialista, se necessário.
									</p>
								</div>
							</div>
						</div>
						<div className="faqelement mb-2">
							<button
								className="btn btn-light faq on"
								type="button"
								style={{ background: '#b0b0b0' }}
							>
								9. Desconfio que meu filho tem autismo, o que eu devo fazer?
							</button>
							<div className="panel">
								<div className="p-3">
									<h5 className="text-info">
										9. Desconfio que meu filho tem autismo, o que eu devo fazer?
									</h5>
									<p>
										O melhor é marcar uma consulta com um especialista. No setor
										privado, há diversos profissionais disponíveis e o mais
										indicado é buscar um neuropediatra ou um psiquiatra
										infantil. No SUS, o responsável pode procurar o posto de
										saúde (UBS) mais próximo para ser encaminhado para um setor
										de especialidades ou seguir diretamente para o Centro de
										Atenção Psicossocial (CAPs) da sua região. Se você está
										buscando ajuda especializada, a nossa base de instituições
										de apoio reúne profissionais qualificados em todo o Brasil.
									</p>
								</div>
							</div>
						</div>
						<div className="faqelement mb-2">
							<button
								className="btn btn-light faq on"
								type="button"
								style={{ background: '#b0b0b0' }}
							>
								10. Existe algum exame para que confirma o autismo?
							</button>
							<div className="panel">
								<div className="p-3">
									<h5 className="text-info">
										10. Existe algum exame para que confirma o autismo?
									</h5>
									<p>
										Não há um exame para diagnosticar o TEA. O diagnóstico é
										clínico e deve ser realizado por um profissional de saúde
										especializado, como um neuropediatra ou psiquiatra infantil.
										Se você está buscando ajuda especializada, a nossa base de
										instituições de apoio reúne profissionais qualificados em
										todo o Brasil.
									</p>
								</div>
							</div>
						</div>
						<div className="faqelement mb-2">
							<button
								className="btn btn-light faq on"
								type="button"
								style={{ background: '#b0b0b0' }}
							>
								11. Autismo tem cura?
							</button>
							<div className="panel">
								<div className="p-3">
									<h5 className="text-info">11. Autismo tem cura?</h5>
									<p>
										O TEA é uma condição permanente que acompanha a pessoa por
										todas as etapas da vida. Mas há tratamentos, com diferentes
										abordagens terapêuticas, que ajudam a amenizar os sintomas e
										melhorar a qualidade de vida dos pacientes. Veja mais na
										página O que é o Autismo?.
									</p>
								</div>
							</div>
						</div>
						<div className="faqelement mb-2">
							<button
								className="btn btn-light faq on"
								type="button"
								style={{ background: '#b0b0b0' }}
							>
								12. Existe tratamento para autismo?
							</button>
							<div className="panel">
								<div className="p-3">
									<h5 className="text-info">
										12. Existe tratamento para autismo?
									</h5>
									<p>
										Sim, existe. O tratamento de autismo é multidisciplinar, e
										pode envolver, por exemplo: pediatra, neurologista,
										psiquiatra, enfermeiro, terapeuta ocupacional, psicólogo,
										educador físico, fonoaudiólogo, entre outros. É importante
										ressaltar que existem vários graus de autismo e que as
										pessoas são naturalmente diferentes entre si e, por isso, o
										tratamento difere de pessoa para pessoa. Mas uma coisa é
										unanimidade entre os especialistas: o acompanhamento
										especializado desde o início da infância pode amenizar
										significativamente os sintomas e reduzir em até dois terços
										os custos dos cuidados ao longo da vida. Se você está
										buscando ajuda especializada, a nossa base de instituições
										de apoio reúne profissionais qualificados em todo o Brasil.
									</p>
								</div>
							</div>
						</div>
						<div className="faqelement mb-2">
							<button
								className="btn btn-light faq on"
								type="button"
								style={{ background: '#b0b0b0' }}
							>
								13. Meu filho foi diagnosticado como autista. O que devo fazer?
							</button>
							<div className="panel">
								<div className="p-3">
									<h5 className="text-info">
										13. Meu filho foi diagnosticado como autista. O que devo
										fazer?
									</h5>
									<p>
										A primeira coisa a ser feita é definir o plano de tratamento
										personalizado de acordo com as necessidades do seu filho. O
										tratamento é multidisciplinar, e pode envolver, por exemplo:
										pediatra, neurologista, psiquiatra, enfermeiro, terapeuta
										ocupacional, psicólogo, educador físico, fonoaudiólogo,
										entre outros. A conduta indicada vai depender da intensidade
										do distúrbio e da idade do paciente e deve ser decidido
										junto aos pais. Para saber mais do que fazer logo após a
										confirmação do diagnóstico de TEA, veja o nosso Manual para
										Famílias link da cartilha e consulte a nossa base de
										instituições de apoio, que reúne profissionais qualificados
										em todo o Brasil.
									</p>
								</div>
							</div>
						</div>
						<div className="faqelement mb-2">
							<button
								className="btn btn-light faq on"
								type="button"
								style={{ background: '#b0b0b0' }}
							>
								14. Por que o tratamento precoce é importante?
							</button>
							<div className="panel">
								<div className="p-3">
									<h5 className="text-info">
										14. Por que o tratamento precoce é importante?
									</h5>
									<p>
										O diagnóstico precoce permite antecipar o tratamento
										adequado para o tipo de transtorno e o nível de
										funcionalidade da pessoa com TEA. Quanto antes o tratamento
										se iniciar, melhor será o desenvolvimento e a qualidade de
										vida do autista. Outro ponto positivo relevante é que o
										acompanhamento especializado desde cedo pode reduzir em até
										dois terços os custos dos cuidados ao longo da vida..
									</p>
								</div>
							</div>
						</div>
						<div className="faqelement mb-2">
							<button
								className="btn btn-light faq on"
								type="button"
								style={{ background: '#b0b0b0' }}
							>
								15. A família também deveria fazer terapia?
							</button>
							<div className="panel">
								<div className="p-3">
									<h5 className="text-info">
										15. A família também deveria fazer terapia?
									</h5>
									<p>
										Ao receber uma criança com autismo, geralmente a família
										toda passa por grandes mudanças. Essas mudanças podem trazer
										dificuldades que poderiam ser auxiliadas com a terapia. Essa
										terapia poderia ser com psicólogos individualmente ou mesmo
										em grupos, como em “grupos de pais”. Se você está precisando
										de ajuda especializada, a nossa base de instituições de
										apoio reúne profissionais qualificados em todo o Brasil.
									</p>
								</div>
							</div>
						</div>
						<div className="faqelement mb-2">
							<button
								className="btn btn-light faq on"
								type="button"
								style={{ background: '#b0b0b0' }}
							>
								16. Existe remédio para autismo?
							</button>
							<div className="panel">
								<div className="p-3">
									<h5 className="text-info">
										16. Existe remédio para autismo?
									</h5>
									<p>
										Não existe remédio para o autismo em si, mas os pacientes
										com TEA podem fazer uso de medicamentos para tratar
										condições associadas, como insônia, hiperatividade,
										agressividade, falta de atenção, ansiedade, depressão e
										comportamentos repetitivos.
									</p>
								</div>
							</div>
						</div>
						<div className="faqelement mb-2">
							<button
								className="btn btn-light faq on"
								type="button"
								style={{ background: '#b0b0b0' }}
							>
								17. A pessoa com autismo conseguirá trabalhar quando adulta?
							</button>
							<div className="panel">
								<div className="p-3">
									<h5 className="text-info">
										17. A pessoa com autismo conseguirá trabalhar quando adulta?
									</h5>
									<p>
										É possível sim que um autista trabalhe e tenha uma vida mais
										independente quando adulto. Muitos fatores vão influenciar
										as habilidades sociais e a autonomia da pessoa com TEA, em
										especial a gravidade do distúrbio e o tratamento precoce.
										Vale destacar também que a Política Nacional de Proteção dos
										Direitos da Pessoa com Transtorno do Espectro Autista
										determina o direito dos autistas ao trabalho, entre outras
										coisas.
									</p>
								</div>
							</div>
						</div>
						<div className="faqelement mb-2">
							<button
								className="btn btn-light faq on"
								type="button"
								style={{ background: '#b0b0b0' }}
							>
								18. O autismo é uma doença rara?
							</button>
							<div className="panel">
								<div className="p-3">
									<h5 className="text-info">
										18. O autismo é uma doença rara?
									</h5>
									<p>
										Segundo a Sociedade Brasileira de Pediatria, a prevalência
										de autismo vem aumentando com o passar dos anos,
										principalmente, pelo aumento de diagnósticos adequados. Nos
										Estados Unidos, por exemplo, do TEA aumentou de 1 para cada
										150 crianças de 8 anos em 2000, para 1 para cada 68 crianças
										em 2010, chegando à prevalência de 1 para cada 58 em 2014,
										mais que duplicando o número de casos durante esse período.
									</p>
								</div>
							</div>
						</div>
						<div className="faqelement mb-2">
							<button
								className="btn btn-light faq on"
								type="button"
								style={{ background: '#b0b0b0' }}
							>
								19. Homens e mulheres possuem as mesmas chances de desenvolver
								autismo?
							</button>
							<div className="panel">
								<div className="p-3">
									<h5 className="text-info">
										19. Homens e mulheres possuem as mesmas chances de
										desenvolver autismo?
									</h5>
									<p>
										Segundo a Sociedade Brasileira de Pediatria, o TEA
										manifesta-se em indivíduos de diversas etnias ou raças e em
										todos os grupos socioeconômicos. Mas a sua prevalência é 4
										vezes maior em meninos do que em meninas. Inclusive, por
										isso, a cor associada ao autismo é o azul.
									</p>
								</div>
							</div>
						</div>
						<div className="faqelement mb-2">
							<button
								className="btn btn-light faq on"
								type="button"
								style={{ background: '#b0b0b0' }}
							>
								20. Quais são os direitos e benefícios sociais dos autistas?
							</button>
							<div className="panel">
								<div className="p-3">
									<h5 className="text-info">
										20. Quais são os direitos e benefícios sociais dos autistas?
									</h5>
									<p>
										A Lei Berenice Piana (12.764/12) estipula que a pessoa com
										transtorno do espectro autista é considerada pessoa com
										deficiência para todos os efeitos legais, garantindo aos
										autistas as mesmas proteções do Estatuto da Pessoa com
										Deficiência. Para saber mais sobre a legislação que protege
										as pessoas com TEA, veja a nossa página Leis e Direitos.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="container">
						<hr className="star-dark mb-5" />
					</div>
				</section>
			</main>
		</div>
	)
}

export default Faq
