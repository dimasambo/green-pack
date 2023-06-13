import React, {useEffect} from 'react';
import {ProfileInfo} from "../../components/ProfileInfo/ProfileInfo";
import {ProgressBar} from "../../components/ProgressBar/ProgressBar";
import {RoundDiagram} from "../../components/Diagram/Diagram";
import {Posts} from "../../components/Posts/Posts";
import {useDispatch, useSelector} from "react-redux";
import {State} from "../../Redux/redux-store";
import { Navigate } from 'react-router-dom';
import {requestPostsByUserId} from "../../Redux/posts/posts-slice";
import {CreatePost} from "../../components/CreatePost/CreatePost";
import {setPayAttention} from "../../Redux/pay-attentions/pay-attentions-slice";
import {updateUserPhoto} from "../../Redux/auth/auth-slice";
import {Card, CardContent} from '@mui/material';

export const Profile: React.FC = () => {
    const {currentUser, isAuthorized} = useSelector((state: State) => state.auth)
    const {posts} = useSelector((state: State) => state.post)

    const dispatch = useDispatch()

    useEffect(() => {
        // @ts-ignore
        dispatch(requestPostsByUserId(currentUser.id))
    }, [])

    if(!isAuthorized) return <Navigate replace to="/login" />
    return (
        <div>
            <ProfileInfo />
            <div style={{marginBottom: '30px'}}>
                <ProgressBar value={75} />
            </div>
            <RoundDiagram sections={[{value: 4, label: '1'}, {value: 10, label: '2'}, {value: 32, label: '3'}]} />
            <Card>
                <CardContent>
                    <div>1 - posts</div>
                    <div>2 - pay attentions</div>
                    <div>3 - user info</div>
                </CardContent>
            </Card>
            <div style={{marginTop: '70px', fontSize: '27px'}}>Posts</div>
            {currentUser && <CreatePost userId={currentUser.id} />}
            <Posts posts={posts} />
        </div>
    );
};