import React from 'react'

const Create = () => {
	return (
		<div className="container">
			<div className="text-center">
				<h1>Criando novo pictograma</h1>
			</div>
			<h4>...</h4>
			<hr />
			<div className="d-flex p-2 justify-content-center">
				<div className="col-md-4">
					<form action="Create">
						<div validation="ModelOnly" className="text-danger"></div>
						<div className="form-group">
							<label for="Img" className="control-label"></label>
							<input for="Img" className="form-control" />
							<span validation="Img" className="text-danger"></span>
						</div>
						<div className="form-group">
							<label for="Nome" className="control-label"></label>
							<input for="Nome" className="form-control" />
							<span for="Nome" className="text-danger"></span>
						</div>
						<div className="form-group">
							<label for="CategoriaID" className="control-label"></label>
							<select
								for="CategoriaID"
								className="form-control"
								items="ViewBag.CategoriaID" /* resgatar ID_CATEGORIA */
							></select>
						</div>
						<div className="form-group">
							<input
								type="submit"
								value="Criar"
								className="btn btn-success mr-4"
							/>{' '}
							|
							<Link
								to="/index2"
								className="btn btn-primary ml-4">
								Voltar
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Create
