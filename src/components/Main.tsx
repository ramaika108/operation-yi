import backImg from '../images/dist/Long.svg';
import linkImg from '../images/dist/Linked.svg';
import reloadImg from '../images/dist/Rotation.svg';
import deleteImg from '../images/dist/Delete.svg';
import editImg from '../images/dist/Edit.svg';
import {FunctionComponent, useEffect, useState} from 'react';
import {CompanyInterface} from '../types';
import GeneralInfo from './GeneralInfo';
import ContactInfo from './ContactInfo';
import AttachedPohotos from './Photos';


type AuthTokenType = {
    authToken:string
}

const Main:FunctionComponent<AuthTokenType> = ({authToken}) => {

    const [company, SetCompany] = useState<CompanyInterface>()
    
    const getCompany = async () => {
        let res = await fetch('/companies/12', {
            headers: {
                "Authorization": authToken,
                "Content-Type": "application/json"
            }
        });
        let data = await res.json()
        SetCompany(data)
        console.log(data)
    }

    useEffect(() => {
        getCompany()
    }, [])


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
                    <h2>{company && company.shortName}</h2>
                    <img src={editImg} alt="Редактировать" />
                </div>

                {company && <GeneralInfo company={company} />}

                {company && <ContactInfo contactId={company.contactId} authToken={authToken} />}

                {company && <AttachedPohotos photos={company.photos} authToken={authToken} />}

            </div>
        </main>

    )}
export default Main;
