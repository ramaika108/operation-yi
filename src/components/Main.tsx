import backImg from '../images/dist/Long.svg';
import linkImg from '../images/dist/Linked.svg';
import reloadImg from '../images/dist/Rotation.svg';
import deleteImg from '../images/dist/Delete.svg';
import editImg from '../images/dist/Edit.svg';
import closeImg from '../images/dist/Close-menu.svg';


const Main = () => {
    return (
        <main>
            <header>
                <div className="back-button">
                    <img src={backImg} alt="Назад" />
                    <p>К СПИСКУ ЮРИДИЧЕСКИХ ЛИЦ</p>
                </div>
                <div className="actions">
                    <img src={linkImg} alt="Ссылка" />
                    <img src={reloadImg} alt="Перезагрузить" />
                    <img src={deleteImg} alt="Удалить" />
                </div>
            </header>

            <div className="main-block">
                <div className="main-block__title">
                    <h2>Перспективные захоронения</h2>
                    <img src={editImg} alt="Редактировать" />
                </div>

                <div className="main-block__info">
                    <div className="info__title">
                        <h3>ОБЩАЯ ИНФОРМАЦИЯ</h3>
                        <img src={editImg} alt="Редактировать" />
                    </div>

                    <div className="info__data">
                        <div className="data-item">
                            <div className="data-item__label">Полное название:</div>
                            <p className="data-item__text">ООО Фирма “Перспективные захоронения”</p>
                        </div>
                        <div className="data-item">
                            <div className="data-item__label">Договор:</div>
                            <p className="data-item__text">12345 от 12.03.2015</p>
                        </div>
                        <div className="data-item">
                            <div className="data-item__label">Форма:</div>
                            <p className="data-item__text">ООО</p>
                        </div>
                        <div className="data-item">
                            <div className="data-item__label">Тип:</div>
                            <p className="data-item__text">Агент, Подрядчик</p>
                        </div>
                    </div>

                </div>

                <div className="main-block__info">
                    <div className="info__title">
                        <h3>КОНТАКТНЫЕ ДАННЫЕ</h3>
                        <img src={editImg} alt="Редактировать" />
                    </div>

                    <div className="info__data">
                        <div className="data-item">
                            <div className="data-item__label">ФИО:</div>
                            <p className="data-item__text">Григорьев Сергей Петрович</p>
                        </div>
                        <div className="data-item">
                            <div className="data-item__label">Телефон:</div>
                            <p className="data-item__text">+7 (916) 216-55-88</p>
                        </div>
                        <div className="data-item">
                            <div className="data-item__label">Эл. почта:</div>
                            <p className="data-item__text data-item__text_type_mail">grigoriev@funeral.com</p>
                        </div>
                    </div>

                </div>

                <div className="main-block__info">
                    <div className="info__title">
                        <h3>ПРИЛОЖЕННЫЕ ФОТО</h3>
                    </div>

                        <div className="photo">
                            <img src="images/dist/Attachment1.png" alt="Фотография" className="photo__img" />
                            <p className="photo__name">Надгробный камень.jpg</p>
                            <p className="photo__date">11 июня 2018</p>
                            <img className="photo__delete" src={closeImg} alt="Удалить" />
                        </div>
                        <div className="photo">
                            <img src="images/dist/Attachment2.png" alt="Фотография" className="photo__img" />
                            <p className="photo__name">Надгробный камень.jpg</p>
                            <p className="photo__date">11 июня 2018</p>
                            <img className="photo__delete" src={closeImg} alt="Удалить" />
                        </div>
                        <div className="photo">
                            <img src="images/dist/Attachment3.png" alt="Фотография" className="photo__img" />
                            <p className="photo__name">Надгробный камень.jpg</p>
                            <p className="photo__date">11 июня 2018</p>
                            <img className="photo__delete" src={closeImg} alt="Удалить" />
                        </div>

                        <div className="button">
                            <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1.9 8a.6.6 0 01.6-.6h11a.6.6 0 110 1.2h-11a.6.6 0 01-.6-.6z" fill="#82B284"/><path fillRule="evenodd" clipRule="evenodd" d="M8 1.9a.6.6 0 01.6.6v11a.6.6 0 11-1.2 0v-11a.6.6 0 01.6-.6z" fill="#82B284"/></svg>
                            <p>ДОБАВИТЬ ИЗОБРАЖЕНИЕ</p>
                        </div>
                </div>

            </div>
        </main>

    )}
export default Main;
