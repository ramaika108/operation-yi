import {FunctionComponent, useState} from 'react';
import editImg from '../images/dist/Edit.svg';
import saveImg from '../images/dist/Save.svg';
import {CompanyInterface} from '../types';

type Props = {
    company:CompanyInterface
}

const GeneralInfo:FunctionComponent<Props> = ({company}) => {
    
    const [editMode, setEditMode] = useState(false)

    const toggleEditMode = () => {
        if (editMode){
            setEditMode(false)
            updateData()
        }
        else {
            setEditMode(true)
        }
    }

    const updateData = () => {
        return 1
    }

    const padTo2Digits = (num:number) => {
        return num.toString().padStart(2, '0');
    }

    const tmpDate = new Date(Date.parse(company.contract.issue_date));
    const contractDate = tmpDate.toLocaleDateString("ru-RU");
    const dateValue =   [
      tmpDate.getFullYear(),
      padTo2Digits(tmpDate.getMonth() + 1),
      padTo2Digits(tmpDate.getDate()),
    ].join('-')

    return(

                <div className="main-block__info">
                    <div className="info__title">
                        <h3>ОБЩАЯ ИНФОРМАЦИЯ</h3>
                        <img src={editMode ? saveImg : editImg} alt="Редактировать" onClick={toggleEditMode}/>
                    </div>

                    <div className="info__data">
                        <div className="data-item">
                            <div className="data-item__label">Полное название:</div>
                            {editMode ?
                            <input type="text" defaultValue={company.name}/>
                            :
                            <p className="data-item__text">{company.name}</p>
                            }
                        </div>
                        <div className="data-item">
                            <div className="data-item__label">Договор:</div>
                            {editMode ?
                                <div>
                                    <input type="number" defaultValue={company.contract.no}/>
                                    <input type="date" defaultValue={dateValue}/>
                                </div>
                            :
                            <p className="data-item__text">{company.contract.no} от {contractDate}</p>
                            }
                        </div>
                        <div className="data-item">
                            <div className="data-item__label">Форма:</div>
                            {editMode ?
                            <input type="text" defaultValue={company.businessEntity}/>
                            :
                            <p className="data-item__text">{company.businessEntity}</p>
                            }
                        </div>
                        <div className="data-item">
                            <div className="data-item__label">Тип:</div>
                            {editMode ?
                            <div>
                                <label>Агент
                                    <input type="checkbox" defaultChecked={company.type[0]==='agent'}/>
                                </label>
                                <label>Подрядчик
                                    <input type="checkbox" defaultChecked={company.type[1]==='contractor'}/>
                                </label>
                            </div>
                            :
                            <p className="data-item__text">{company.type.map((cType:string, i:number) => {
                                let formatedType:string;
                                if (cType === 'agent')  formatedType = 'Агент'
                                else if (cType === 'contractor') formatedType = ' Подрядчик'
                                if (i + 1 !== company.type.length) formatedType! += ', '
                                return formatedType!
                            })}</p>
                            }
                        </div>
                    </div>

                </div>
          )
}

export default GeneralInfo;
