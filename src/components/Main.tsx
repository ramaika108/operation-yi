import backImg from '../images/dist/Long.svg';
import linkImg from '../images/dist/Linked.svg';
import reloadImg from '../images/dist/Rotation.svg';
import deleteImg from '../images/dist/Delete.svg';
import editImg from '../images/dist/Edit.svg';
import saveImg from '../images/dist/Save.svg';

import React, {FunctionComponent, useContext, useEffect, useState} from 'react';
import {CompanyInterface} from '../types';
import GeneralInfo from './GeneralInfo';
import ContactInfo from './ContactInfo';
import AttachedPohotos from './Photos';
import {AuthContext} from '../context/AuthContext';


const Main:FunctionComponent = () => {

    const [company, SetCompany] = useState<CompanyInterface>()
    const authToken = useContext(AuthContext)
    const shortName = React.createRef<HTMLInputElement>()
    
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
        if (authToken){
            getCompany()
        }
    }, [authToken])

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

    const updateData = async () => {
        let req = await fetch('/companies/12/', {
            headers: {
                "Authorization": authToken,
                "Content-Type": "application/json"
            },
            method: 'PATCH',
            body: JSON.stringify({
                shortName: shortName.current?.value
            })
        })
        let res = await req.json()
        SetCompany(res)
        console.log('update happened, ', res)
    }


    return (
        <main>
            <header>
                <div className="header__content-wrapper">
                    <div className="back-button">
                        <img src={backImg} alt="Назад" />
                        <p>К СПИСКУ ЮРИДИЧЕСКИХ ЛИЦ</p>
                    </div>
                    <div className="actions">
                        <img src={linkImg} alt="Ссылка" />
                        <img src={reloadImg} alt="Перезагрузить" />
                        <img src={deleteImg} alt="Удалить" />
                    </div>
                </div>
            </header>

            <div className="main-block">
                <div className="main-block__title">
                            {editMode ?
                            <div className="label__container">
                                <label className="label_floating" htmlFor="shortName">Короткое название</label>
                                <input type="text" defaultValue={company?.shortName} id="shortName" className="input_short-name" ref={shortName} autoComplete="off" />
                            </div>
                            :
                            <h2>{company && company.shortName}</h2>
                            }
                    <img src={editMode ? saveImg : editImg} alt="Редактировать" onClick={toggleEditMode}/>
                </div>

                {company && <GeneralInfo company={company} />}

                {company && <ContactInfo contactId={company.contactId} />}

                {company && <AttachedPohotos photos={company.photos} />}

            </div>
        </main>

    )}
export default Main;
