import React, {useEffect, useState} from 'react';
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import {Link, useHistory} from "react-router-dom";
import Header from "../../components/Header"
import {fetchCategory, createPost} from "../../FetchAPI";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {useAuthState} from "react-firebase-hooks/auth";
import firebase from "firebase";

const ButtonConfirm = styled.button`
background-color: #002337;
color: white;
border-radius: 2px;

font-weight: 600;
  `
const ButtonCancel = styled.button`
border: 2px solid #002337;
border-radius: 2px;

color: #002337;
font-weight: 500;

  `
const Title = styled.h4`

font-size: 28px;
font-weight: 800;
color: #002337;
  `

export default () => {

    const [user, loading, error] = useAuthState(firebase.auth());
   // console.log({user})


    let history = useHistory();
    const goToPreviousPath = () => {
        history.goBack()
    }

    const [cat, setCat] = useState([]);
    const [catselected, Setcatselected] = useState('');
    const [hasAccess, setHasAccess] = useState(false);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [Subcat, setSubcat] = useState('');
    const [feedback, setFeedback] = useState('');
    const [likes, setlikes] = useState([]);
    const [date, setDate] = useState('');


    useEffect(() => {
        fetchCategory()
            .then(cat => {
                    setCat(cat);
            });

        let today = new Date();
        let dd = today.getDate();
        let m = today.getMonth();
        let yyyy = today.getFullYear()

        setDate(dd +'-'+ m+'-'+ yyyy)
    }, []);


    const handlePublish = () => {
        if (catselected !== ''&& Subcat !== '' && title !== '' && text !== ''){
            console.log(catselected, Subcat, title, text);


            createPost(catselected, Subcat, title, text, likes, date, user.uid)
                .then(setFeedback("Your post was created!"))

        }

    }


    return (
        <div>
            <Header />


            {
                feedback !== '' ? (
                    <div style={{textAlign:"center", marginTop: 270}}>
                        <Typography >{feedback}</Typography>
                        <Button  onClick={goToPreviousPath}> Continuar</Button>
                    </div>
                ) : (

                    <div>
                        <Title className="mt-2">CREATE POST</Title>


                        <Form.Control as="select" value={catselected} onChange={e => {
                            Setcatselected(e.target.value);
                            setHasAccess(true)
                        }} className="my-1 mr-sm-2" id="inlineFormCustomSelectPref" custom>
                            <option value="0">Choose the category</option>
                            {cat.map(
                                (Cat) => {
                                    if (Cat.parentcategoryid === null) {
                                        return (
                                            <option value={Cat.id}>{Cat.name}</option>
                                        )
                                    }
                                })}
                        </Form.Control>

                        {!hasAccess ? (
                            <Form.Control as="select" className="my-1 mr-sm-2" id="inlineFormCustomSelectPref" custom
                                          disabled>
                                <option value="0">Choose the subcategory</option>
                                {cat.map(
                                    (Cat) => {
                                        if (Cat.parentcategoryid !== null && Cat.parentcategoryid === catselected) {
                                            return (
                                                <option value={Cat.id}>{Cat.name}</option>
                                            )
                                        }
                                    })}

                            </Form.Control>
                        ) : (
                            <Form.Control as="select" className="my-1 mr-sm-2" id="inlineFormCustomSelectPref"
                                          value={setSubcat} onChange={e => {
                                setSubcat(e.target.value)
                            }} custom>
                                <option value="0">Choose the subcategory</option>
                                {cat.map(
                                    (SubCat) => {
                                        if (SubCat.parentcategoryid !== null && SubCat.parentcategoryid === catselected) {
                                            return (
                                                <option value={SubCat.id} name={SubCat.id}>{SubCat.name}</option>
                                            )
                                        }
                                    })}
                            </Form.Control>
                        )}


                        <Form.Group controlId="formBasicTitle" className="mt-5">
                            <Form.Control type="text"
                                          value={title}
                                          name="title"
                                          onChange={(e) => setTitle(e.target.value)}
                                          placeholder="Post Title"/>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea"
                                          value={text}
                                          name="text"
                                          onChange={(e) => setText(e.target.value)}
                                          rows={3} placeholder="Write your post here"/>
                        </Form.Group>

                        <div className="d-flex justify-content-center">
                            <ButtonCancel className="mt-5 mr-4 p-2" onClick={goToPreviousPath}>
                                Cancel
                            </ButtonCancel>

                            <ButtonConfirm className="mt-5 ml-4 p-2" onClick={handlePublish}>
                                Publish
                            </ButtonConfirm>
                        </div>
                    </div>

                )
            }

        </div>
    )

}