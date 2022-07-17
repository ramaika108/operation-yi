import {FunctionComponent} from 'react';
import editImg from '../images/dist/Edit.svg';
import {CompanyInterface} from '../types';

type Props = {
    company:CompanyInterface
}

const GeneralInfo:FunctionComponent<Props> = ({company}) => {
    return(

                <div className="main-block__info">
                    <div className="info__title">
                        <h3>ОБЩАЯ ИНФОРМАЦИЯ</h3>
                        <img src={editImg} alt="Редактировать" />
                    </div>

                    <div className="info__data">
                        <div className="data-item">
                            <div className="data-item__label">Полное название:</div>
                            <p className="data-item__text">{company.name}</p>
                        </div>
                        <div className="data-item">
                            <div className="data-item__label">Договор:</div>
                            <p className="data-item__text">{company.contract.no} от {company.contract.issue_date.split('T')[0]}</p>
                        </div>
                        <div className="data-item">
                            <div className="data-item__label">Форма:</div>
                            <p className="data-item__text">{company.businessEntity}</p>
                        </div>
                        <div className="data-item">
                            <div className="data-item__label">Тип:</div>
                            <p className="data-item__text">Агент, Подрядчик {company.type}</p>
                        </div>
                    </div>

                </div>
          )
}

export default GeneralInfo;
