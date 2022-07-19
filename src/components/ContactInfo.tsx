import {FunctionComponent, useContext, useEffect, useState} from 'react';
import {AuthContext} from '../context/AuthContext';
import editImg from '../images/dist/Edit.svg';
import saveImg from '../images/dist/Save.svg';
import {ContactInterface} from '../types';

type Props = {
    contactId:number
}

const ContactInfo:FunctionComponent<Props> = ({contactId}) => {
    const authToken = useContext(AuthContext)

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
        if (authToken) {
            getContact()
        }
    }, [authToken])

    let fio;
    let formatedPhone;
    if (contact){
        let cp = contact.phone

        fio = `${contact.lastname} ${contact.firstname} ${contact.patronymic}`
        formatedPhone = `+${cp.slice(0, 1)} (${cp.slice(1,4)}) ${cp.slice(4, 7)}-${cp.slice(7, 9)}-${cp.slice(9, 11)}`
    }

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

    return(

        <div className="main-block__info">
            <div className="info__title">
                <h3>КОНТАКТНЫЕ ДАННЫЕ</h3>
                <img src={editMode ? saveImg : editImg} alt="Редактировать" onClick={toggleEditMode}/>
            </div>

            <div className="info__data">
                <div className="data-item">
                    <div className="data-item__label">ФИО:</div>
                        {editMode ?
                        <input type="text" defaultValue={fio}/>
                        :
                        <p className="data-item__text">{fio}</p>
                        }
                </div>
                <div className="data-item">
                    <div className="data-item__label">Телефон:</div>
                        {editMode ?
                        <input type="text" defaultValue={contact?.phone}/>
                        :
                        <p className="data-item__text">{formatedPhone}</p>
                        }
                </div>
                <div className="data-item">
                    <div className="data-item__label">Эл. почта:</div>
                        {editMode ?
                        <input type="text" defaultValue={contact?.email}/>
                        :
                        <p className="data-item__text data-item__text_type_mail"><a href={'mailto:' + contact?.email}>{contact?.email}</a></p>
                        }
                </div>
            </div>
        </div>
          )
}

export default ContactInfo;
