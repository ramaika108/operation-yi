import {FunctionComponent, useEffect, useState} from 'react';
import editImg from '../images/dist/Edit.svg';
import {CompanyInterface, ContactInterface} from '../types';

type Props = {
    contactId:number
    authToken:string
}

const ContactInfo:FunctionComponent<Props> = ({contactId, authToken}) => {

    const [contact, SetContact] = useState<ContactInterface>()

    const getContact = async () => {
        let res = await fetch(`/contacts/${contactId}`, {
            headers: {
                "Authorization": authToken,
                "Content-Type": "application/json"
            }
        });
        let data = await res.json()
        SetContact(data)
        console.log(data)
    }

    useEffect(() => {
        getContact()
    }, [])
    let fio;
    if (contact){
        fio = `${contact.lastname} ${contact.firstname} ${contact.patronymic}`
    }

    return(

        <div className="main-block__info">
            <div className="info__title">
                <h3>КОНТАКТНЫЕ ДАННЫЕ</h3>
                <img src={editImg} alt="Редактировать" />
            </div>

            <div className="info__data">
                <div className="data-item">
                    <div className="data-item__label">ФИО:</div>
                    <p className="data-item__text">{fio}</p>
                </div>
                <div className="data-item">
                    <div className="data-item__label">Телефон:</div>
                    <p className="data-item__text">{contact?.phone}</p>
                </div>
                <div className="data-item">
                    <div className="data-item__label">Эл. почта:</div>
                    <p className="data-item__text data-item__text_type_mail"><a href={'mailto:' + contact?.email}>{contact?.email}</a></p>
                </div>
            </div>
        </div>
          )
}

export default ContactInfo;
