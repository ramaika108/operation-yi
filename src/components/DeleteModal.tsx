type Props = {
    id:string
}

const DeleteModal = ({id}:Props) => {
    console.log('got the id for deletion: ', id)
    return(
        //<div id="modal-delete-company" aria-hidden="true">

        //<div tabIndex={-1} data-micromodal-close>

            //<div role="dialog" aria-modal="true" aria-labelledby="modal-delete-company" >


            //<header>
                //<h2 id="modal-1-title">
                //Modal Title
                //</h2>

                //<button aria-label="Close modal" data-micromodal-close></button>
            //</header>

            //<div id="modal-1-content">
                //Modal Content
            //</div>

            //</div>
        //</div>
        //</div>
        //
        		<div className="modal micromodal-slide" id="modal-delete-company" aria-hidden="true">
			<div className="modal__overlay" tabIndex={-1} data-micromodal-close>
				<div className="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
					<header className="modal__header">
						<button className="modal__close" aria-label="Close modal" data-micromodal-close></button>
						<h2 className="modal__title">
							Тайное общество
						</h2>
					</header>
					<div className="t-society__content">
						<p>Чтобы вступить в наше тайное общество, нужно пройти испытания. Но на данный момент наше тайное общество на столько тайное, что набор в него пока закрыт(Проходит побелка помещений, окучивание новичков и прочие сель хоз работы).</p>
				</div>
			</div>
		</div>
    </div>

        
    )
}

export default DeleteModal;
